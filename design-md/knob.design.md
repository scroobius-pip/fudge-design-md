# How knob.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/knob.design-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with low-profile keyboard on black background, featuring large editorial headline, lime green CTA button, and email signup in top right](https://pin.fontofweb.com/6656?format=jpg)](https://design.withfudge.com/share/pin-6656)

[Hero section with low-profile keyboard on black background, featuring large editorial headline, lime green CTA button, and email signup in top right](https://design.withfudge.com/share/pin-6656)

[![Keyboard detail close-up transitioning to bold orange pill-shaped footer banner with oversized serif typography and email capture form](https://pin.fontofweb.com/6655?format=jpg)](https://design.withfudge.com/share/pin-6655)

[Keyboard detail close-up transitioning to bold orange pill-shaped footer banner with oversized serif typography and email capture form](https://design.withfudge.com/share/pin-6655)

[![Numpad product page with white background, editorial headline, four product module images, and two-column specification tables](https://pin.fontofweb.com/6654?format=jpg)](https://design.withfudge.com/share/pin-6654)

[Numpad product page with white background, editorial headline, four product module images, and two-column specification tables](https://design.withfudge.com/share/pin-6654)

[![Numpad page top section showing status pill navigation and large editorial description text with product photography grid below](https://pin.fontofweb.com/6653?format=jpg)](https://design.withfudge.com/share/pin-6653)

[Numpad page top section showing status pill navigation and large editorial description text with product photography grid below](https://design.withfudge.com/share/pin-6653)

## Overview

KNOB is a premium hardware product site for mechanical keyboards and creative peripherals. The design system alternates between dramatic, photography-driven dark pages and clean, content-forward light pages. The visual identity is built on extreme typographic contrast: delicate, high-contrast editorial serifs set at display scale against utilitarian sans-serif labels and specifications. The color philosophy is intentionally restrained—near-monochrome with two vivid accents: a sharp lime green for primary actions and a bold safety orange for promotional moments. This creates a gallery-like presentation where product photography dominates, typography provides emotional resonance, and color directs attention with surgical precision.

The site structure follows a product-page pattern with distinct thematic zones. Dark hero sections immerse the viewer in rendered product photography against pure black, while light content pages expand into white space for detailed specifications and modular product configurations. The overall impression is of a design-conscious brand that treats hardware with the same editorial seriousness as fashion or automotive—every surface, type weight, and color choice reinforces premium craft.

## Colors

The palette operates in two modes: a dark cinematic mode for hero and landing experiences, and a light editorial mode for content and specification pages. Both modes share the same accent colors and ink values, ensuring continuity across page transitions.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary dark page background; hero sections and immersive product views |
| canvas-light | #FFFFFF | Content page backgrounds; specification tables and editorial text areas |
| canvas-warm | #F0ECE0 | Warm off-white for select content sections; softens pure white without losing clarity |
| ink | #14100B | Primary text on light backgrounds; near-black with subtle warmth |
| ink-light | #45423F | Secondary text; specifications and muted content |
| ink-muted | #B3AEAA | Tertiary text; inactive states, placeholders, and subtle labels |
| surface | #D3D5D3 | Neutral gray for inactive pills and secondary surfaces |
| surface-warm | #DADCE3 | Warm gray for input fields and subtle containers |
| border | #BDBDBB | Hairline dividers and table borders |
| action | #CDEA19 | Primary CTA buttons; lime green for high-visibility actions |
| action-hover | #B3AEAA | Hover state for interactive elements |
| accent-orange | #FF4D00 | Promotional banners and urgency messaging; safety orange |
| accent-blue | #0000EE | Link underlines and interactive text indicators |

The dark mode relies on pure black canvas with warm off-white text, allowing product photography with metallic and orange accents to become the focal point. The light mode inverts this relationship, using white canvas with near-black ink for extended reading. The two accent colors—lime green and safety orange—never compete; green signals transactional action while orange creates emotional promotional impact.

## Typography

The typographic system pairs a refined editorial serif with a neutral functional sans-serif, creating dramatic scale contrast between display and utility text. The supplied font families are Pp Editorial New, Inter, and System-Sansserif. System-Sansserif appears in the source as a fallback family for system-level UI elements and is not assigned to any visible design token.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Editorial New | 7.75rem | 300 | 0.9 | -0.03em | Massive promotional headlines; orange banner statements |
| section-display | Pp Editorial New | 3rem | 300 | 1.2 | -0.02em | Page headlines and section titles |
| body-large | Pp Editorial New | 3rem | 300 | 1.2 | 0em | Editorial descriptions and product narratives |
| body | Inter | 0.875rem | 400 | 1.2 | 0em | Specifications, table content, and functional text |
| body-medium | Inter | 1.375rem | 400 | 1.2 | 0em | Secondary descriptions and expanded body text |
| label | Inter | 0.75rem | 400 | 1.2 | 0em | Navigation, buttons, pills, and metadata |
| navigation | Inter | 0.75rem | 400 | 1.2 | 0em | Top-bar links and system navigation |

Pp Editorial New appears in Ultralight weight for all display settings, creating an ethereal, high-fashion quality at large sizes. The tight line height on hero-display (0.9) allows stacked headlines to feel like single visual blocks. Inter handles all functional communication at small sizes, maintaining clarity at 12px and 14px. The italic variant of Pp Editorial New is used for select display treatments, adding calligraphic variation to the editorial voice.

Verify licensing for these families before production use. Pp Editorial New is designed by Mathieu Desjardins and distributed by Pangram Pangram Foundry. Inter is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout system alternates between immersive full-bleed dark sections and contained light content areas. Page rhythm is established through dramatic scale shifts rather than dense information architecture.

Dark hero sections occupy full viewport width with unconstrained product photography. The navigation bar floats at top with minimal height, using a small logo mark and horizontal link list. Content alignment is asymmetric: large editorial headlines anchor the lower-left quadrant while product imagery dominates the right and center. A small email capture form occupies the upper-right corner, establishing immediate utility without visual weight.

Light content pages use generous horizontal margins, approximately 12-15% of viewport width on each side, creating a magazine-like reading measure. Product photography grids use equal-width columns with consistent gutters. Specification tables employ a two-column layout with category headers above, separated by hairline borders.

Vertical spacing follows a section-based rhythm. Major content blocks receive 4rem top and bottom padding. Between-section transitions are sharp: the dark hero cuts directly to light content without intermediate gradients. The orange promotional banner breaks this pattern with extreme vertical padding and fully rounded corners, creating a pill-shaped interruption that spans nearly full width.

The grid is fundamentally asymmetric. Text blocks favor left alignment with ragged right edges. Product imagery centers or right-aligns depending on narrative priority. This creates visual tension that keeps the eye moving across the page rather than locking into rigid columns.

## Visual language

Photography treatment is central to the visual identity. Product renders use dramatic studio lighting against pure black or neutral gray backgrounds, with selective color accents—orange keycaps, metallic silver enclosures, warm display glow—providing the only chromatic variation. Images are presented full-bleed or in tight grids without borders, letting the product edges define their own containers.

The shape language is deliberately soft despite the technical subject matter. Buttons and pills use fully rounded caps. The promotional banner uses extreme border radius, becoming an elongated oval rather than a rectangle. This organic quality contrasts with the mechanical precision of the hardware photography, creating approachable warmth.

Motion is implied through static composition rather than explicit animation. Product photography is shot from dynamic angles—three-quarter views, macro details, floating arrangements—that suggest weight and materiality. The diagonal placement of keyboards across dark backgrounds creates implied movement without actual motion.

Iconography is minimal and textual. Navigation uses words rather than symbols. Status indicators use filled pills with text labels. The only graphical elements are the small logo mark and product photography itself. This text-first approach reinforces the editorial, magazine-like quality.

## Components

### Navigation bar

- **Anatomy**: Small logo mark left, horizontal link list center-right, email capture form far right
- **Surface**: Transparent over dark backgrounds; no visible background color
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for form elements
- **Spacing**: Compact vertical height with generous horizontal padding
- **Composition**: Flex row with space-between alignment; links use horizontal spacing of approximately 1.5rem

### Hero section

- **Anatomy**: Full-bleed product photography, large editorial headline lower-left, CTA button below headline, small descriptive text lower-right
- **Surface**: `{colors.canvas}` background; photography dominates
- **Typography**: `{typography.section-display}` for headline; `{typography.label}` for CTA; `{typography.body}` for description
- **Shape**: No containing borders; image bleeds to edges
- **Spacing**: Generous internal padding; headline positioned in lower third

### Primary action button

- **Anatomy**: Text label with optional leading icon
- **Surface**: `{colors.action}` background; `{colors.ink}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}`; fully rounded capsule
- **Spacing**: Compact padding of 0.375rem vertical, 0.75rem horizontal
- **Variants**: Default lime green; promotional contexts may use orange

### Promotional banner

- **Anatomy**: Massive headline text, secondary CTA button, email capture form, copyright text
- **Surface**: `{colors.accent-orange}` background; `{colors.ink}` text
- **Typography**: `{typography.hero-display}` for headline; `{typography.label}` for CTAs and legal
- **Shape**: `{rounded.banner}`; extreme pill radius creating oval container
- **Spacing**: Very generous vertical padding; content left-aligned with ample internal breathing room
- **Composition**: Headline stacks in two lines; CTAs and form sit at bottom edge; copyright as footer within banner

### Email capture form

- **Anatomy**: Text input field and submit button
- **Surface**: Input uses `{colors.surface-warm}` background; button uses `{colors.ink}` background with `{colors.canvas-light}` text
- **Typography**: `{typography.label}` for both elements
- **Shape**: Both elements use `{rounded.pill}`
- **Spacing**: Tight coupling between input and button; minimal gap

### Status pills

- **Anatomy**: Text label within rounded container
- **Surface**: Active uses `{colors.ink}` background with `{colors.canvas-light}` text; inactive uses `{colors.surface}` with `{colors.ink-muted}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}`
- **Spacing**: 0.375rem vertical, 0.75rem horizontal padding
- **Composition**: Horizontal row with small gaps between pills

### Specification table

- **Anatomy**: Category header, two-column row layout with property left and value right
- **Surface**: `{colors.canvas-light}` background; hairline `{colors.border}` dividers between rows
- **Typography**: `{typography.body}` for content; category headers use slightly larger weight
- **Shape**: No outer border; internal horizontal rules only
- **Spacing**: Generous row height with comfortable vertical padding

### Product image grid

- **Anatomy**: Equal-width image containers in horizontal row
- **Surface**: No visible background; images sit directly on page canvas
- **Spacing**: Consistent gutters between images; no external border
- **Composition**: Four-column layout for module displays; images centered within cells

## Responsive behavior

The design is documented from desktop viewport widths. At narrower widths, the asymmetric hero layout should stack vertically: product photography above, headline below. The massive hero-display typography should scale down to maintain readability without breaking layout—consider reducing to `{typography.section-display}` size on small screens.

The four-column product grid should collapse to two columns on tablet and single column on mobile. Specification tables should remain two-column but may stack to single column if content becomes unreadable.

Navigation should collapse to a compact menu on small screens, preserving the email capture functionality. The promotional banner's extreme border radius should maintain proportional pill shape even as width reduces; avoid squaring corners.

## Practical implementation guidance

### Preserve
- The stark contrast between dark hero and light content modes; this alternation defines the brand rhythm
- Pp Editorial New at Ultralight weight for all display text; the ethereal quality is irreplaceable
- Fully rounded pill shapes for all interactive elements; the soft geometry is signature
- The two-accent system: lime green for transactions, safety orange for promotions
- Generous negative space around product photography; let hardware breathe

### Avoid
- Adding decorative borders or shadows around product images; the clean edge-to-edge presentation is intentional
- Using Pp Editorial New at small sizes or for body text; it loses legibility below display scale
- Introducing additional accent colors; the restrained palette is core to the premium feel
- Center-aligning editorial headlines; the left-aligned ragged edge creates visual energy
- Generic button shapes; the pill radius is a brand identifier

### Recommended build order
1. Establish dark and light canvas modes with correct background colors
2. Implement typography scale with Pp Editorial New display and Inter functional text
3. Build pill-shaped button system with consistent radius logic
4. Create hero section layout with asymmetric text placement
5. Develop promotional banner component with extreme radius
6. Add specification table and product grid for content pages
7. Implement status pill navigation for multi-page flows

### Accessibility
- Ensure 3:1 contrast minimum for all text; the Ultralight weight of Pp Editorial New may require larger sizes to maintain perceived contrast
- Provide visible focus states on pill buttons; consider outline or background shift
- Add `aria-label` to email capture forms for screen reader context
- Maintain keyboard navigation through horizontal pill lists
- When using dark hero sections, verify that product photography does not create confusing foreground/background relationships for low-vision users

## Scope note

This guide covers the desktop product page experience for KNOB's keyboard and numpad offerings. Mobile breakpoints, checkout flows, animation behavior, and the lightswitch product page are not represented in the supplied material. The keyset and dark-variant pages share the established typographic and component system but may introduce additional color treatments not documented here.
