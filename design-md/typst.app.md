# How typst.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/typst.app-design)

Last updated: 2026-08-10

## Captured pages

[![Minimal footer section with centered mascot illustration and back-to-top link on stark white background](https://pin.fontofweb.com/4059?format=jpg)](https://design.withfudge.com/share/pin-4059)

[Minimal footer section with centered mascot illustration and back-to-top link on stark white background](https://design.withfudge.com/share/pin-4059)

[![Content-heavy trust section with bold section headings, contributor avatars, and security messaging with iconography](https://pin.fontofweb.com/4058?format=jpg)](https://design.withfudge.com/share/pin-4058)

[Content-heavy trust section with bold section headings, contributor avatars, and security messaging with iconography](https://design.withfudge.com/share/pin-4058)

[![Feature card with coral-red gradient background showing Zotero and Mendeley integration with literature sync](https://pin.fontofweb.com/4057?format=jpg)](https://design.withfudge.com/share/pin-4057)

[Feature card with coral-red gradient background showing Zotero and Mendeley integration with literature sync](https://design.withfudge.com/share/pin-4057)

[![Feature card with blue gradient background demonstrating fullscreen slideshow and speaker mode presentation tools](https://pin.fontofweb.com/4056?format=jpg)](https://design.withfudge.com/share/pin-4056)

[Feature card with blue gradient background demonstrating fullscreen slideshow and speaker mode presentation tools](https://design.withfudge.com/share/pin-4056)

## Overview

Typst presents itself as a modern document platform with a visual system that balances technical credibility against approachable clarity. The interface rests on a foundation of stark white space and confident, tightly-tracked grotesk typography, creating an atmosphere of precision without coldness. The design language speaks to writers, researchers, and technical users who value both aesthetics and function.

The system operates across two distinct modes: a restrained, editorial canvas for marketing and explanatory content, and expressive, gradient-saturated feature cards that showcase product capabilities. This dual rhythm—quiet confidence punctuated by bold color moments—structures the user journey from trust-building to feature discovery. Navigation and structural elements remain deliberately understated, allowing content hierarchy and occasional vivid imagery to carry communicative weight.

## Colors

The palette divides into functional neutrals, interactive accents, and expressive gradients. The neutral layer provides high-contrast readability and a clean document-like atmosphere. The action color handles all interactive states. Feature cards deploy warm coral-red and cool blue gradients as emotional anchors for specific capabilities.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary headings, body text, strong emphasis |
| ink-secondary | #4A4A4A | Secondary descriptions, supporting paragraphs |
| canvas | #FFFFFF | Primary page background, card surfaces |
| canvas-warm | #F5F5F5 | Subtle section alternation, footer areas |
| action | #2396F3 | Text links, interactive elements, primary buttons |
| action-hover | #1A7BC8 | Darkened action state for hover feedback |
| coral-start | #E85D5D | Gradient origin for literature and collaboration features |
| coral-end | #C44B4B | Gradient destination for warm feature cards |
| blue-start | #6B9BD1 | Gradient origin for presentation and slideshow features |
| blue-end | #2E3A59 | Gradient destination for cool feature cards |
| muted | #8A8A8A | Tertiary information, timestamps, disabled hints |
| border | #E0E0E0 | Structural dividers, subtle card outlines |

The coral gradient appears in features related to external tool integration and academic workflows, while the blue gradient anchors presentation and display capabilities. Both gradients run diagonally or vertically across card surfaces with white typography overlaid for maximum contrast. The action blue recurs consistently across all text links, creating a predictable interactive vocabulary against the neutral canvas.

## Typography

Typst employs HK Grotesk as its sole sans-serif family across all marketing and interface text, with Cascadia Mono reserved for code samples and technical annotations. The grotesk carries a contemporary geometric character with open apertures and confident weight transitions, lending authority to headlines without feeling institutional.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | HK Grotesk | 3rem | 700 | 1.1 | -0.02em | Page titles, major value propositions |
| section-display | HK Grotesk | 2rem | 700 | 1.2 | -0.01em | Section headings, feature introductions |
| body | HK Grotesk | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-medium | HK Grotesk | 1rem | 500 | 1.6 | 0em | Emphasized body, button labels |
| label | HK Grotesk | 0.75rem | 600 | 1.4 | 0.02em | Small caps, tags, metadata |
| navigation | HK Grotesk | 0.875rem | 500 | 1.5 | 0em | Menu items, breadcrumbs |
| code | Cascadia Mono | 0.875rem | 400 | 1.5 | 0em | Inline code, technical references |

HK Grotesk is designed by Alfredo Marco Pradil and distributed by Hanken Design Co. Cascadia Mono is designed by Aaron Bell and distributed by Saja Typeworks. Verify licensing for these families before production use.

The type scale builds from a 4px relative unit, with sizes landing at 12px, 14px, 16px, 32px, and 48px equivalents. Headlines employ tight negative tracking for visual density, while body text maintains neutral spacing for extended reading comfort. The weight range from Regular through Bold is fully exploited: section headings at 700, navigation and emphasized text at 500-600, and body copy at 400.

## Layout

The layout follows a centered, max-width container model with generous vertical breathing room. Content sections stack vertically with substantial separation, creating a scrolling narrative that unfolds one claim at a time. The maximum content width constrains line lengths for readability while maintaining visual focus.

The grid system appears to operate on a flexible column basis, with text blocks occupying roughly two-thirds of the available width in explanatory sections, leaving ample margin for visual relief. Feature cards break this pattern, expanding to near-full width with internal padding that creates a contained stage for their gradient backgrounds and illustrative content.

Horizontal rhythm relies on consistent internal padding within cards and buttons, typically 1rem to 1.5rem, while vertical spacing between major sections measures 5rem or more. The footer area compresses this rhythm dramatically, centering minimal content with tight vertical grouping that signals conclusion.

Component alignment favors left-justified text blocks with occasional centered exceptions for calls-to-action and terminal messaging. Iconography and illustrative elements float to the left or right of text in feature descriptions, creating asymmetric compositions that guide eye movement across the page.

## Visual language

The visual personality merges technical precision with warm accessibility. Illustrations and icons adopt a friendly, slightly playful character—rounded mascot figures, simple line icons with generous stroke weights, and hand-drawn annotation marks on screenshots. This human touch prevents the document-platform positioning from feeling sterile.

Photographic and screenshot content within feature cards receives soft rounded corners and subtle shadow treatment, integrating smoothly with the card surfaces. The gradient backgrounds on feature cards represent the most expressive visual moments, shifting from warm coral tones for collaboration features to cool blue depths for presentation tools.

The mascot illustration in the footer—an abstract figure with circular eyes—encapsulates the brand's approachable technical identity. Decorative elements remain sparse; the design trusts typography and whitespace to establish hierarchy rather than relying on ornamental borders or background patterns. Where icons appear, they use simple geometric forms with consistent stroke weights, often paired with text labels in the navigation weight.

## Components

### Feature Card

The feature card is the most visually distinctive component, serving as a showcase for product capabilities. It presents a gradient background—either coral-red or blue depending on the feature category—with white text overlaid.

- **Anatomy**: Gradient background layer, small icon or label at top, large headline, descriptive bullet list, and accompanying screenshot or illustration on the right portion
- **Surface**: Linear gradient from coral-start to coral-end, or blue-start to blue-end; white text at 100% opacity
- **Typography**: Section-display for the headline, body for bullet descriptions, label for the top tag
- **Shape**: 0.75rem border radius on the card container
- **Spacing**: Internal padding of approximately 1.5rem to 2rem; bullet list items separated by 0.5rem vertical gap
- **Composition**: Asymmetric two-zone layout with text content on the left and visual demonstration on the right, occasionally bleeding to the card edge

### Text Link

Inline text links appear throughout explanatory content, using consistent action coloring with underline decoration.

- **Anatomy**: Text span within paragraph context
- **Surface**: Transparent background; action color for text
- **Typography**: Inherits surrounding body text size and weight
- **Shape**: Underline text decoration, likely 1px solid
- **Spacing**: Inline with surrounding text; no additional padding
- **States**: Standard link color; hover state likely shifts to action-hover with possible underline persistence

### Section Heading Block

Content sections open with a bold heading followed by explanatory paragraphs, occasionally accompanied by a simple line icon.

- **Anatomy**: Icon container (optional), heading text, paragraph block
- **Surface**: Transparent on canvas background
- **Typography**: Section-display for heading, body for description
- **Spacing**: Heading separated from preceding content by 5rem; paragraph follows with 1rem top margin
- **Composition**: Icon floats left of heading with approximately 1.5rem margin; text block left-aligned beneath

### Footer Mascot

The terminal page element centers a small illustration with minimal text.

- **Anatomy**: Centered mascot illustration, single line of text with embedded link
- **Surface**: Canvas or canvas-warm background
- **Typography**: Body for message text; action color for the back-to-top link
- **Spacing**: Generous vertical padding above and below, approximately 3rem each direction
- **Composition**: Strictly centered, both horizontally and vertically within the footer zone

### Contributor Avatar Row

A horizontal cluster of circular user images appears in trust-building contexts.

- **Anatomy**: Overlapping circular images, approximately 8-10 visible avatars
- **Surface**: Each avatar as circular crop with subtle border
- **Shape**: 50% border radius for perfect circles
- **Composition**: Horizontal row with negative overlap of approximately 0.5rem between adjacent avatars; right-aligned within section

## Responsive behavior

The design appears optimized for desktop viewing with a centered content column. At narrower viewports, the following adaptations should preserve the visual intent:

- The max-width container should shrink to viewport width minus comfortable margins, likely 1.5rem on each side at minimum
- Feature card two-zone layouts should stack vertically, placing the screenshot or illustration above or below the text content
- Section heading blocks with left-floating icons should maintain their horizontal relationship but reduce icon size proportionally
- Contributor avatar rows should remain horizontally scrollable or wrap to multiple rows rather than compressing overlap
- Typography should scale down by approximately 15-20% at the smallest viewports, with hero-display potentially reaching 2rem and section-display reaching 1.5rem

The generous whitespace that defines the desktop experience should compress proportionally but not disappear; section vertical spacing might reduce from 5rem to 3rem on mobile while maintaining clear separation between content groups.

## Practical implementation guidance

### Preserve
- The stark white canvas as the dominant background; resist adding decorative textures or patterns
- The tight tracking on display headings; this density is central to the brand's confident voice
- The two gradient palettes as feature card backgrounds; do not introduce additional gradient colors for new features
- The friendly mascot illustration style in any custom iconography
- The consistent action blue for all interactive text elements

### Avoid
- Generic sans-serif substitutions for HK Grotesk; the specific weight distribution and aperture shapes matter
- Dark mode implementations without careful reworking; the current palette assumes light backgrounds
- Box shadows on feature cards; the gradient backgrounds provide sufficient depth
- Centered body text in explanatory sections; left alignment maintains the document-like reading experience
- Small tap targets for inline links; ensure adequate touch area on mobile implementations

### Recommended Build Order
1. Establish the type system with HK Grotesk loaded at Regular, Medium, Semibold, and Bold weights
2. Implement the max-width container and section spacing rhythm
3. Build the feature card component with both gradient variants and responsive stacking
4. Create the text link and button components with consistent action coloring
5. Add the section heading block with optional icon placement
6. Implement the footer mascot element as the terminal page component
7. Fine-tune responsive behavior and touch target sizing

### Accessibility
- Ensure gradient feature cards maintain minimum 4.5:1 contrast ratio for white text; the coral gradient may need adjustment at its lightest points
- Provide visible focus indicators for all interactive elements, likely using the action color with an outline offset
- Preserve underline decoration on text links for colorblind users who may not perceive the blue differentiation
- Structure heading hierarchy logically: single hero-display per page, section-display for major divisions, no skipped levels
- Consider adding aria-labels to the mascot illustration if it conveys meaningful brand context

## Scope note

This guide covers the marketing and pricing page surfaces of Typst as visible in the supplied imagery. Interactive states, motion design, the document editor interface, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid. Verify licensing for HK Grotesk and Cascadia Mono before production use.
