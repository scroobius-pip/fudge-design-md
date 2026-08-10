# How cabbin.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cabbin.net-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with digital clock widget, sticky notes, and primary blue action button on white background](https://pin.fontofweb.com/5256?format=jpg)](https://design.withfudge.com/share/pin-5256)

[Hero section with digital clock widget, sticky notes, and primary blue action button on white background](https://design.withfudge.com/share/pin-5256)

[![Feature grid with four colorful pill badges in blue, coral, pink, and orange on light cards](https://pin.fontofweb.com/5257?format=jpg)](https://design.withfudge.com/share/pin-5257)

[Feature grid with four colorful pill badges in blue, coral, pink, and orange on light cards](https://design.withfudge.com/share/pin-5257)

[![FAQ accordion section with rounded gray items and chevron expand icons](https://pin.fontofweb.com/5258?format=jpg)](https://design.withfudge.com/share/pin-5258)

[FAQ accordion section with rounded gray items and chevron expand icons](https://design.withfudge.com/share/pin-5258)

[![Product showcase with 3D floppy disk and vinyl record above gray call-to-action panel](https://pin.fontofweb.com/5259?format=jpg)](https://design.withfudge.com/share/pin-5259)

[Product showcase with 3D floppy disk and vinyl record above gray call-to-action panel](https://design.withfudge.com/share/pin-5259)

## Overview

Cabbin presents itself as a personal productivity canvas designed for people with ADHD, using a visual language that rejects rigid structure in favor of playful flexibility. The design system centers on generous white space, rounded geometric forms, and a restrained but energetic accent palette. The interface communicates through tactile metaphors—floppy disks, vinyl records, sticky notes, and digital clocks—rendered as 3D illustrations that float above clean typographic content. The overall impression is approachable and anti-perfectionist: bold headlines speak in casual internet vernacular, buttons use conversational labels, and the color system reserves its energy for small moments of emphasis rather than overwhelming the viewer. The design succeeds by making organization feel optional and low-stakes, matching the product's positioning as a "dump zone" rather than a rigid task manager.

## Colors

The color system operates on a principle of calm foundations with selective energy. The vast majority of the interface uses pure white and near-white surfaces with black text, creating breathing room that makes the colorful accents feel intentional and fun rather than chaotic.

| token | value | use |
|---|---|---|
| action | #2B7FFF | Primary buttons, links, interactive highlights, and the digital clock widget border |
| action-hover | #1A6FEF | Hover state for primary interactive elements |
| ink | #000000 | Headlines, body text, and primary content |
| muted-ink | #6B7280 | Secondary descriptions, captions, footer text, and placeholder content |
| canvas | #FFFFFF | Page background and elevated card surfaces |
| surface | #F3F4F6 | FAQ items, feature card backgrounds, and secondary action buttons |
| surface-elevated | #FFFFFF | Floating elements with subtle shadow separation |
| accent-coral | #FF6B6B | Feature badge for ADHD-related messaging |
| accent-pink | #FF69B4 | Feature badge for organizational flexibility |
| accent-orange | #FF8C00 | Feature badge for productivity outcomes |
| accent-yellow | #FFD93D | Sticky note illustration and warm highlights |
| border-subtle | #E5E7EB | Dividers and faint structural boundaries |

The interface maintains a light-mode-only presentation with no dark mode visible. The four accent colors—coral, pink, orange, and yellow—appear exclusively within feature badges and illustrative elements, never as large background fields. Blue dominates the interactive layer, creating clear affordance for clickable elements. The near-black ink provides strong contrast without the harshness of pure black in extended reading, though the headlines do use full black for maximum impact.

## Typography

Cabbin uses two font families: Open Runde for all interface text and Digital Numbers for the clock widget display. Open Runde, designed by Laurids Kern, provides the distinctive rounded, friendly character that defines the site's voice. Its medium and semibold weights create clear hierarchy without feeling corporate or rigid.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Runde | 3rem | 600 | 1.1 | -0.02em | Main page headline |
| section-display | Open Runde | 2.5rem | 600 | 1.15 | -0.01em | Section headings like FAQ and features |
| body | Open Runde | 1rem | 500 | 1.6 | 0 | Descriptions and explanatory text |
| body-small | Open Runde | 0.875rem | 500 | 1.5 | 0 | Captions, footer text, and metadata |
| label | Open Runde | 0.875rem | 600 | 1.4 | 0 | Button labels and badge text |
| navigation | Open Runde | 0.875rem | 500 | 1 | 0 | Footer links and secondary navigation |
| digital-display | Digital Numbers | 1.5rem | 400 | 1 | 0.05em | Clock widget time display |

The type scale uses a 4px base grid, with sizes stepping in whole multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 24px (1.5rem), 40px (2.5rem), and 48px (3rem). Headlines use tight negative tracking for a compact, confident presence, while body text maintains neutral spacing for comfortable reading. The semibold weight (600) is reserved for headlines and labels; medium (500) handles all body and navigation text. No italic styles appear in the interface. Verify licensing for these families before production use. Open Runde is designed by Laurids Kern; no designer attribution is available for Digital Numbers.

## Layout

The page follows a single-column centered layout with maximum content width approximately 720px for text-heavy sections and 800px for the feature grid. Sections stack vertically with generous vertical rhythm, typically 6rem between major content blocks. The hero section centers all elements—pre-header, headline, description, button, and illustration cluster—with substantial top padding that pushes content below the fold on typical viewports.

Content containers use consistent horizontal padding of 1.5rem on mobile and expand to centered alignment on wider screens. The feature grid breaks into a 2×2 arrangement at moderate widths, with equal gaps of 1rem between cards. FAQ items stack with 0.5rem vertical spacing, each item filling the available width.

The 3D illustrations—floppy disk, vinyl record, sticky notes, and clock widget—float as independent elements rather than being bound to card containers. They cast soft shadows that suggest elevation without heavy material depth. The digital clock widget appears as a fixed or prominent floating element near the bottom of the viewport in some views, suggesting potential persistent utility.

The footer area uses minimal structure: a single line of text with inline links, left-aligned with the main content column rather than spanning full width. No navigation bar, sidebar, or complex header appears in the visible pages.

## Visual language

The visual identity draws from late-90s computing nostalgia reimagined through contemporary soft-productivity aesthetics. 3D rendered objects—floppy disks with translucent cases, vinyl records emerging from sleeves, yellow sticky notes with tape corners, and digital seven-segment clocks—serve as the primary visual interest against otherwise minimal backgrounds. These objects use realistic materials (translucent plastic, paper texture, metallic clock housing) but with saturated, friendly colors.

The roundedness principle extends beyond typography into every interface element. Buttons are fully pill-shaped, cards use 1rem corner radius, and even the feature badges have pronounced rounding. This creates a hand-friendly, approachable feel that avoids any sharp corners or rigid grid lines.

Shadows are soft and diffuse, suggesting gentle elevation rather than dramatic depth. The sticky note illustration uses a slight rotation and tape corner to enhance the handmade, imperfect quality. The clock widget features a blue border glow that echoes the action color, creating visual connection between illustrative and interactive elements.

The conversational copy style—"Sure, why not," "organizing is optional lol," "stuff gets done. somehow"—reinforces the anti-perfectionist positioning. This voice is matched by visual looseness: no strict alignment grids, illustrations at casual angles, and color accents that feel sprinkled rather than systematized.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface**: Solid action blue (#2B7FFF) background with white text
- **Typography**: label token, semibold weight
- **Shape**: 9999px border radius for complete pill form
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears singly or paired with secondary button; primary button uses filled surface while secondary uses light gray surface with muted text
- **Variants**: Single primary, primary-secondary pair, and small variant for compact contexts

### Feature card

- **Anatomy**: Rounded rectangle containing a colored badge at top, followed by description text
- **Surface**: Light gray surface (#F3F4F6) background, no border
- **Typography**: Badge uses label token in white; description uses body-small token in ink
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding, 1rem gap in grid layout
- **Composition**: Arranged in 2×2 grid at moderate widths, stacking vertically on narrow viewports
- **Variants**: Four color-coded badge variants: blue (action) for workspace, coral for ADHD focus, pink for organization, orange for productivity

### Feature badge

- **Anatomy**: Short text label within a rounded rectangle
- **Surface**: Solid accent color background with white text; colors include action blue, coral, pink, and orange
- **Typography**: label token, semibold weight, white color
- **Shape**: 0.5rem border radius, generous horizontal padding
- **Spacing**: 0.5rem vertical padding, 0.75rem horizontal padding
- **Composition**: Positioned at top of feature card, full width of card interior

### FAQ accordion item

- **Anatomy**: Question text with right-aligned chevron icon, expandable to reveal answer text
- **Surface**: Light gray surface (#F3F4F6) background, no visible border
- **Typography**: Question uses body token in ink; answer uses body-small token in muted-ink
- **Shape**: 1rem border radius
- **Spacing**: 1rem vertical padding, 1.25rem horizontal padding; 0.5rem gap between stacked items
- **Composition**: Full-width items stacked vertically with consistent spacing
- **States**: Collapsed shows question and chevron; expanded reveals answer text below with chevron rotated

### Digital clock widget

- **Anatomy**: Rounded rectangle with blue border, containing seven-segment digital time display
- **Surface**: Dark interior with blue outer border (#2B7FFF), subtle shadow beneath
- **Typography**: digital-display token in light gray/cyan segments
- **Shape**: Approximately 1rem border radius with pronounced border thickness
- **Composition**: Floats as independent element, often near bottom of viewport; includes tooltip-style label below showing "What's up, have a nice day"

### Sticky note illustration

- **Anatomy**: Yellow rectangular note with slight rotation, tape corner, handwritten-style text
- **Surface**: Warm yellow (#FFD93D) with paper texture, purple handwritten text
- **Shape**: Slightly irregular rectangle with soft shadow
- **Composition**: Positioned at casual angle, overlapping with other illustrative elements; suggests informal, personal workspace

### Footer link group

- **Anatomy**: Inline text links separated by spacing
- **Surface**: Transparent, no background
- **Typography**: navigation token in action blue for links, muted-ink for static text
- **Composition**: Left-aligned within content column, minimal vertical padding

## Responsive behavior

The layout appears optimized for a single breakpoint transition around tablet width. Below this width, the feature grid collapses from 2×2 to single column, and section padding reduces proportionally. The hero headline maintains its large size but may reflow to more lines.

The 3D illustrations scale down but maintain their relative positioning and rotation angles. The clock widget remains visible and potentially fixed-position, suggesting it serves as persistent utility rather than decorative element.

Text sizes do not appear to change dramatically across widths; the system prioritizes readability over aggressive mobile scaling. Button touch targets maintain adequate size for interaction.

For implementation, consider: maintaining the centered single-column layout until approximately 640px, then enabling the 2×2 feature grid; reducing section vertical spacing from 6rem to 4rem on narrow viewports; ensuring the clock widget does not obscure content on small screens; and keeping pill buttons at minimum 44px touch target height.

## Practical implementation guidance

### Preserve
- The rounded, friendly character of Open Runde typography—do not substitute with sharper geometric sans-serifs
- The 3D illustrative style with realistic materials and soft shadows
- The conversational, lowercase button labels that reject corporate formality
- The restrained use of color accents, keeping them confined to badges and illustrations
- The generous white space that makes the interface feel breathable and low-pressure

### Avoid
- Adding more accent colors beyond the established four; the current palette achieves variety without chaos
- Sharp corners or minimal border-radius; the roundedness is essential to the approachable personality
- Dark mode implementations without careful consideration; the light, airy quality is central to the brand
- Rigid grid lines or heavy borders that contradict the "no structure police" positioning
- Formal, imperative button copy like "Submit" or "Get Started" instead of the casual current voice

### Recommended build order
1. Establish the typographic foundation with Open Runde at the specified scale
2. Implement the color system with white canvas, gray surfaces, and single blue action
3. Build the pill button component with primary and secondary variants
4. Create the feature card and badge components with four color variants
5. Add the FAQ accordion with expand/collapse behavior
6. Integrate the 3D illustrations with appropriate responsive scaling
7. Implement the digital clock widget as floating or fixed element
8. Polish with shadows, spacing refinement, and micro-interactions

### Accessibility
- Ensure the action blue (#2B7FFF) on white meets WCAG AA contrast ratios for text; test specifically for the button labels
- Provide visible focus states for all interactive elements, using a ring or outline that complements the rounded shapes
- Make FAQ accordion keyboard-navigable with Enter/Space to toggle and arrow keys to move between items
- Add aria-expanded and aria-controls attributes to accordion items
- Consider motion preferences for any 3D illustration animations or clock updates
- Ensure the digital clock display has sufficient contrast and is not the sole time indicator

## Scope note

This guide covers the Cabbin landing page as visible in the supplied images, including the hero section, feature grid, FAQ accordion, and footer. The actual productivity canvas interface, user authentication flows, and any dashboard or room views are not represented. Motion behavior, hover states, and mobile-specific layouts were not captured and should be designed with the established visual principles. Measurements are practical adaptation targets. Verify licensing for Open Runde and Digital Numbers before production use.
