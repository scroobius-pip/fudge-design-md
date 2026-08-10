# How photon.codes is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/photon.codes-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with split layout showing orange italic headline on black background and illustrated Golden Gate Bridge scene](https://pin.fontofweb.com/6515?format=jpg)](https://design.withfudge.com/share/pin-6515)

[Hero section with split layout showing orange italic headline on black background and illustrated Golden Gate Bridge scene](https://design.withfudge.com/share/pin-6515)

[![FAQ section with centered typography and Apply Now call-to-action with orange underline accent](https://pin.fontofweb.com/6514?format=jpg)](https://design.withfudge.com/share/pin-6514)

[FAQ section with centered typography and Apply Now call-to-action with orange underline accent](https://design.withfudge.com/share/pin-6514)

[![White section with 3D isometric illustrations of travel items and centered gray body text](https://pin.fontofweb.com/6513?format=jpg)](https://design.withfudge.com/share/pin-6513)

[White section with 3D isometric illustrations of travel items and centered gray body text](https://design.withfudge.com/share/pin-6513)

[![Three-column role cards with vintage computer illustrations on warm gray rounded panels](https://pin.fontofweb.com/6512?format=jpg)](https://design.withfudge.com/share/pin-6512)

[Three-column role cards with vintage computer illustrations on warm gray rounded panels](https://design.withfudge.com/share/pin-6512)

## Overview

Photon Codes presents a distinctive dual-surface visual system that alternates between immersive black canvases and pristine white spaces. The design language draws from editorial traditions—serif typography dominates every text layer, creating a refined, literary atmosphere that contrasts with the technical subject matter of AI and agent development. The system employs warm orange accents as its primary emotional signal, appearing in headlines, underlines, and brand marks against both dark and light backgrounds. This creates a recognizable signature: elegant italic serifs, generous whitespace, and a restrained palette that lets photography and 3D illustration carry visual interest. The overall impression is of a curated residency program—exclusive, thoughtful, and visually confident without being loud.

## Colors

The color system operates in two distinct modes: a dark mode built on pure black with warm accents, and a light mode on white with gray typography. Both modes share the same accent family.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary dark backgrounds, hero sections |
| canvas-inverse | #FFFFFF | Primary light backgrounds, content sections |
| surface-warm | #F6F6F6 | Card backgrounds, subtle panel fills |
| ink | #000000 | Primary text on light backgrounds |
| ink-inverse | #FFFFFF | Primary text on dark backgrounds |
| muted-ink | #666666 | Secondary body text, captions, FAQ items |
| accent-orange | #E88C2A | Hero headlines, brand marks, underlines |
| accent-coral | #E78016 | Warm orange variant, hover states |
| accent-blue | #00BBFF | Interactive links, Apply call-to-action |
| accent-sky | #12A4FF | Lighter blue variant for emphasis |

The dark mode dominates the upper viewport—hero sections use pure black canvas with orange italic headlines and white supporting text. The light mode inverts this relationship: white canvas with black or gray ink. The accent-orange serves as the emotional bridge between modes, ensuring brand recognition regardless of background. Muted-ink appears for secondary information and FAQ content where hierarchy needs softening without full disappearance. The accent-blue is reserved exclusively for interactive elements, creating a clear affordance separate from the decorative orange.

## Typography

The typographic system is built on three families: an italic serif for display and body, a regular serif for alternate display treatments, and a monospaced family for labels and technical annotations. The supplied font set also includes Aspekta-600, Sf Pro, and System-Sansserif, which appear on other Photon pages outside this guide's scope.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Petrona | 4rem | 400 | 1.2 | -0.04em | Large hero headlines, residency titles |
| section-display | Instrument Serif | 3rem | 400 | 1.2 | normal | Section headings, FAQ titles |
| body-large | Instrument Serif | 1.25rem | 400 | 1.6 | normal | Primary body paragraphs |
| body | Instrument Serif | 1.25rem | 400 | 1.6 | normal | Standard body text |
| label | IBM Plex Mono | 0.9375rem | 500 | 1.2 | normal | Technical labels, metadata |
| navigation | Instrument Serif | 1.25rem | 400 | 1.2 | normal | Navigation links, Apply text |
| legal-copy | Instrument Serif | 1rem | 400 | 1.2 | normal | Footer text, copyright |

Instrument Serif Italic appears as the primary voice—used for headlines, body text, and navigation across both dark and light surfaces. Petrona serves as the hero display family at 64px for maximum impact moments. IBM Plex Mono at 15px/500 provides technical contrast, appearing in labels and metadata where a neutral, precise voice is needed. The system avoids bold weights in serifs; hierarchy is achieved through size, color, and spacing rather than weight contrast. Line heights are generous, particularly for body text at 1.6, creating an open, readable texture. Verify licensing for these families before production use.

## Layout

The layout system favors centered, single-column compositions with generous vertical breathing room. Sections are separated by substantial padding—96px top and bottom is standard for major transitions. Content max-widths appear to cluster around readable measures, with text blocks centered rather than left-aligned.

The hero section employs a split-screen treatment: typographic content occupies the left portion while photographic or illustrative content fills the right. This creates an editorial spread aesthetic. Below the fold, the system transitions to full-width centered compositions where text blocks sit above or between visual elements.

Spacing follows a 2px base unit, with semantic tokens at 2rem for component gaps and 6rem for section separation. Padding values of 32px horizontal and 48px vertical appear frequently for contained content blocks. The FAQ section demonstrates extreme vertical generosity—items are spaced far apart, each question sitting in isolation like a gallery piece.

Card layouts use a three-column grid with equal-width panels separated by consistent gutters. Each card carries internal padding of approximately 32px, with rounded corners at 16px creating soft containers against the white background.

## Visual language

The visual language balances editorial restraint with playful illustration. Photography and 3D renders carry the visual energy while typography maintains calm authority. The hero image shows silhouetted figures against a stylized Golden Gate Bridge—high contrast, limited palette, with orange light spilling across the scene. This establishes a mood: nocturnal, aspirational, West Coast.

Isometric 3D illustrations appear throughout: vintage computers, ramen bowls, beds, boarding passes, typewriters. These objects are rendered with soft shadows and warm materials, creating tactile appeal without clutter. The illustration style is consistent—slightly retro, carefully lit, isolated on white or warm gray surfaces.

The brand mark consists of an orange geometric slash pattern paired with wordmark text. This appears in the upper left consistently, anchoring navigation. The slash motif echoes throughout as a subtle signature element.

Color photography is treated with restraint: the hero image uses a limited palette of blues, oranges, and blacks. No full-color chaos appears; every image feels art-directed to match the system's temperature.

## Components

### Hero Section

- **Anatomy**: Split layout with left text column and right visual column. Brand mark positioned top-left. Headline stack with supporting paragraph and call-to-action link below.
- **Surface and text color**: Black canvas background. Orange italic headline. White body text. Blue interactive link.
- **Typography**: Petrona at 4rem for main headline, Instrument Serif Italic at 1.25rem for body, Instrument Serif Italic at 1.25rem for Apply link.
- **Shape and border**: No border. Full-bleed right image.
- **Spacing**: 32px padding on text column. Generous vertical centering.
- **Composition**: Asymmetric split approximately 50/50. Text left-aligned within its column.

### Role Card

- **Anatomy**: Rounded rectangle containing centered 3D illustration, role title in italic serif, and descriptive paragraph below.
- **Surface and text color**: Warm gray surface (#F6F6F6). Black ink for title. Muted gray for description.
- **Typography**: Instrument Serif Italic at 1.5rem for title. Instrument Serif Italic at 1.25rem for body.
- **Shape and border**: 16px border radius. No visible border.
- **Spacing**: 32px internal padding. Equal gutters between cards in row.
- **Composition**: Three-column grid. Vertically stacked content centered within each card.

### FAQ Item

- **Anatomy**: Centered text question with no visible container. Stacked vertically with generous separation.
- **Surface and text color**: White or transparent background. Muted gray text.
- **Typography**: Instrument Serif Italic at 1.5rem to 2rem.
- **Shape and border**: No shape. Text only.
- **Spacing**: Large vertical gaps between items—approximately 48px or more.
- **Composition**: Single column, center-aligned.

### Apply Link

- **Anatomy**: Text link with decorative underline. May include arrow or external indicator.
- **Surface and text color**: Blue text on dark or light background. Orange underline accent.
- **Typography**: Instrument Serif Italic at 1.25rem.
- **Shape and border**: Underline as 2px solid orange bar beneath text.
- **Spacing**: Inline with text or as standalone block element.
- **Variants**: Blue variant for primary action. Orange variant for emphasis.

### Brand Mark

- **Anatomy**: Orange geometric slash icon paired with "PHOTON" wordmark and sub-brand text.
- **Surface and text color**: Orange slashes. Black or white text depending on background.
- **Typography**: Sans-serif system text at small size for wordmark.
- **Shape and border**: No border. Icon sits left of text with tight spacing.
- **Composition**: Horizontal lockup, left-aligned in navigation position.

## Responsive behavior

The split-screen hero should stack vertically on narrow viewports, with the image appearing above or below the text block rather than beside it. Text sizes should reduce proportionally—hero display may drop from 4rem to 2.5rem on mobile while maintaining the same line-height ratio.

The three-column role card grid should collapse to a single column on mobile, with cards stacking vertically and maintaining full width. Internal card spacing should remain at 32px to preserve the generous, breathable feel.

FAQ items should remain centered but may reduce in size to 1.25rem on mobile. Vertical spacing between items should compress slightly but remain noticeably generous—never cramped.

Navigation should remain visible and accessible, potentially collapsing to a simplified mark or hamburger menu if horizontal space is constrained. The Apply link should remain prominent and tappable at a minimum 44px height.

## Practical implementation guidance

### Preserve
- The editorial serif voice throughout—no sans-serif substitution for body or display text.
- Generous vertical spacing between sections and within components.
- The warm orange accent as the primary brand color, used consistently for headlines and marks.
- Centered text alignment for FAQ and descriptive sections.
- The split-screen hero composition on desktop viewports.

### Avoid
- Tight line heights or cramped letter spacing—the system breathes.
- Additional accent colors beyond the orange-blue pairing.
- Left-aligned text in centered sections; maintain compositional consistency.
- Borders or heavy shadows on cards; the warm gray surface provides sufficient separation.
- Bold weights in serif text; use size and color for hierarchy instead.

### Recommended Build Order
1. Establish the typographic foundation with Instrument Serif Italic and Petrona loaded.
2. Implement the dark hero section with split layout and orange headline.
3. Build the light content sections with centered compositions.
4. Create the role card component with warm gray surface and 3D illustration slots.
5. Add the FAQ pattern with generous vertical spacing.
6. Implement the brand mark and navigation with consistent positioning.

### Accessibility
- Ensure orange headlines on black backgrounds meet minimum contrast ratios; the #E88C2A orange may need adjustment for WCAG AA compliance at large text sizes.
- Blue links should maintain 4.5:1 contrast against both black and white backgrounds.
- Provide focus indicators for all interactive elements that match the orange or blue accent system.
- Consider reduced-motion preferences for any scroll-triggered animations.
- Maintain semantic heading hierarchy despite the visual uniformity of italic serif text.

## Scope note

This guide covers the Residency landing page and its visible components: hero, role cards, FAQ, and footer. The Spectrum product page uses a separate dark-mode system with different typography (Aspekta-600, Inter, Geist Mono, Sf Pro, System-Sansserif) and is not documented here. Motion, hover states, form interactions, and mobile-specific layouts are not represented in the supplied material.
