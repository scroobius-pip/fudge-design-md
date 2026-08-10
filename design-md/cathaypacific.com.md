# How cathaypacific.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cathaypacific.com-design)

Last updated: 2026-08-10

## Captured pages

[![Notification centre overlay with stacked news cards on light grey background, showing teal link text and close button](https://pin.fontofweb.com/2236?format=jpg)](https://design.withfudge.com/share/pin-2236)

[Notification centre overlay with stacked news cards on light grey background, showing teal link text and close button](https://design.withfudge.com/share/pin-2236)

[![Sign-in page with split layout: form fields and dark green primary button left, mountain sunrise photography with membership CTA right](https://pin.fontofweb.com/2235?format=jpg)](https://design.withfudge.com/share/pin-2235)

[Sign-in page with split layout: form fields and dark green primary button left, mountain sunrise photography with membership CTA right](https://design.withfudge.com/share/pin-2235)

[![Dark green footer with four-column link grid, social icons, copyright bar, and floating action buttons](https://pin.fontofweb.com/2234?format=jpg)](https://design.withfudge.com/share/pin-2234)

[Dark green footer with four-column link grid, social icons, copyright bar, and floating action buttons](https://design.withfudge.com/share/pin-2234)

[![Cookie consent banner with dismissible close button and teal policy link on light background](https://pin.fontofweb.com/2233?format=jpg)](https://design.withfudge.com/share/pin-2233)

[Cookie consent banner with dismissible close button and teal policy link on light background](https://design.withfudge.com/share/pin-2233)

## Overview

The Cathay Pacific digital experience presents a refined, premium airline interface that balances functional clarity with aspirational travel imagery. The system is built around a deep forest green core that anchors the brand identity, paired with warm off-white surfaces that avoid sterile clinical coolness. Teal accents provide interactive energy without competing with the photography-forward homepage experience.

The visual hierarchy relies on generous whitespace and deliberate typographic restraint. Large-format destination photography dominates the homepage, while transactional pages like sign-in adopt a clean split-layout approach that separates task completion from brand storytelling. The notification system, cookie consent, and footer demonstrate consistent component language across functional surfaces—cards float on muted backgrounds, links carry the same teal accent, and the dark green footer creates a definitive page close.

The overall impression is of understated luxury: no gratuitous decoration, no harsh contrasts, but careful attention to surface temperature, readable proportions, and confident use of photography to evoke the travel experience.

## Colors

The palette is intentionally narrow, deriving its richness from value contrast and photographic content rather than chromatic variety. Deep forest green serves as the primary brand anchor, appearing in footer surfaces, primary buttons, and key structural elements. Warm off-white and pure white create layered surface depth, while a muted teal handles all interactive text and secondary button borders.

| token | value | use |
|---|---|---|
| ink | #2C3E33 | Primary text, footer background, primary button fill, dark surfaces |
| canvas | #F5F5F0 | Page background, notification overlay backdrop, cookie banner |
| surface | #FFFFFF | Card backgrounds, input fields, content panels |
| action | #2C3E33 | Primary button background, active states, footer surface |
| action-text | #4A7C6F | Link text, secondary button borders, interactive accents |
| border | #D4D4D0 | Input field borders, dividers, subtle separators |
| muted | #8A8A85 | Secondary text, timestamps, disabled hints |

The dark green footer demonstrates the most saturated application of the ink token, where white text reverses out for maximum legibility. The notification centre and cookie banner show the canvas token in action—warm enough to feel premium, light enough to recede behind white cards. The action-text teal appears consistently across all interactive elements: "View all" links, "Cookies Policy" references, secondary button borders, and the "Having trouble signing in?" helper. This disciplined single-accent approach keeps the interface calm while making interactive elements instantly recognizable.

Photography introduces warm oranges, sky blues, and earth tones that the interface deliberately does not compete with. The palette respects the image content by staying neutral and cool in its non-photographic surfaces.

## Typography

The system uses two font families: Cathay Pacific as the primary brand typeface, and GT Walsheim as a supporting geometric sans. Slick serves as an icon font and is not treated as typography. Cathay Pacific carries all interface text with a clean, open regular weight that feels contemporary and internationally neutral.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cathay Pacific | 3rem | 400 | 1.1 | -0.01em | Page titles, major headlines |
| section-display | Cathay Pacific | 2rem | 400 | 1.2 | 0 | Section headers, card titles |
| body | Cathay Pacific | 1rem | 400 | 1.5 | 0 | Primary body text, buttons, inputs |
| body-small | Cathay Pacific | 0.875rem | 400 | 1.5 | 0 | Card content, timestamps, footer links |
| label | Cathay Pacific | 0.75rem | 400 | 1.3 | 0.02em | Form labels, microcopy |
| navigation | Cathay Pacific | 0.875rem | 400 | 1.4 | 0 | Header links, footer categories |

The type scale is restrained, with only six semantic roles and no weight variation beyond regular. This reflects the brand's confidence in spacing and photography to create hierarchy rather than typographic complexity. Line heights are generous for body text, ensuring readability across the multilingual content the airline serves. Letter spacing is tight only at display sizes, where the slight compression adds sophistication without affecting legibility.

Cathay Pacific was designed by Dalton Maag Ltd. GT Walsheim was designed by Noel Leu and is available from Grilli Type. Verify licensing for these families before production use.

## Layout

The layout system favors asymmetric compositions that pair content with photography. The sign-in page demonstrates this clearly: a narrow left column carries the form while a wider right column presents a full-bleed mountain sunrise image with an overlaid membership card. This split creates visual interest without sacrificing task clarity.

On the homepage, content appears to flow in full-width bands with internal max-width constraints. The footer expands to full width with a four-column link grid that distributes navigation density evenly. Social icons and copyright information sit below the main link grid, separated by a subtle horizontal rule.

Spacing follows a 0.25rem base unit with semantic multiples. Component padding clusters around 1rem to 1.5rem for cards and panels. Section breaks use 5rem to create breathing room between major content areas. The notification centre overlay shows a narrower panel width—roughly one-third of viewport—suggesting a sidebar or drawer pattern for secondary content rather than full-screen takeover.

The cookie banner spans full width with minimal height, fixed to the viewport edge. Its single-line composition with inline close button demonstrates the system's ability to handle persistent utility elements without visual disruption.

Grid alignment is strict: form fields share baselines, button widths match their container in primary variants, and footer columns maintain consistent internal spacing. The floating action buttons in the lower right of the footer suggest a fixed-position utility cluster for page-level actions.

## Visual language

The visual character is defined by restraint and warmth. Surfaces avoid pure white in favor of warm off-whites that complement the skin tones and sunset photography prevalent in the brand imagery. Corners are minimally rounded—just enough to soften edges without feeling friendly or casual. The 0.25rem radius appears on cards and inputs but not on primary buttons, which remain sharp to convey decisiveness.

Photography treatment is central to the experience. Images are full-bleed, uncropped by rounded corners, and allowed to dominate their containers. The mountain sunrise in the sign-in page shows warm gradient skies with silhouetted peaks—typical of the aspirational, destination-focused imagery strategy. No overlays or gradients obscure the photography; text either sits in adjacent panels or on solid card surfaces.

Iconography is minimal and functional. The notification centre uses a simple close X. Footer social icons are monochrome and evenly spaced. External link indicators appear as small squares with arrows, consistent in size with the body-small type scale.

Shadows are absent or extremely subtle. Depth is created through surface color layering—canvas behind surface, ink for dramatic contrast—rather than elevation effects. This flatness contributes to the premium, editorial quality of the interface.

## Components

### Primary button

- Anatomy: Text label centered within a solid rectangular container
- Surface and text color: `{colors.action}` background with `{colors.surface}` text
- Typography: `{typography.body}`
- Shape: Sharp corners, no border radius
- Spacing: 1rem vertical padding, 2rem horizontal padding, full-width in form contexts
- Composition: Stacked below form fields with consistent gap spacing
- Variants: The sign-in page shows a single primary "Continue" button that spans the form column width

### Secondary button

- Anatomy: Text label centered within a bordered rectangular container
- Surface and text color: `{colors.surface}` background with `{colors.action-text}` text and border
- Typography: `{typography.body}`
- Shape: Sharp corners, 1px solid border
- Spacing: 1rem vertical padding, 2rem horizontal padding
- Composition: Stacked with consistent vertical rhythm, separated by "or" divider text
- Variants: "Sign in with email" and "Sign in with membership number" share identical treatment

### Input field

- Anatomy: Label text above, input area below, with dropdown chevron for selects
- Surface and text color: `{colors.surface}` background, `{colors.ink}` text, `{colors.border}` border
- Typography: `{typography.body}` for value, `{typography.label}` for floating label
- Shape: 0.25rem border radius
- Spacing: 0.75rem vertical padding, 1rem horizontal padding
- Composition: Paired fields sit side by side with gap spacing; full-width fields stack vertically

### Notification card

- Anatomy: Title text, timestamp, and optional description in a stacked layout
- Surface and text color: `{colors.surface}` background, `{colors.ink}` for titles, `{colors.muted}` for timestamps
- Typography: `{typography.body-small}`
- Shape: 0.25rem border radius
- Spacing: 1rem internal padding, 1rem gap between stacked cards
- Composition: Vertical stack within a drawer panel, each card separated by canvas background visible between

### Cookie banner

- Anatomy: Full-width bar with inline text, link, and close button
- Surface and text color: `{colors.canvas}` background, `{colors.ink}` text, `{colors.action-text}` for policy link
- Typography: `{typography.body-small}`
- Shape: No radius, sharp edges to viewport
- Spacing: Compact vertical padding, generous horizontal padding
- Composition: Flex row with text left, close button right; link inline with text flow

### Footer

- Anatomy: Four-column link grid, social icon row, copyright bar with locale selector
- Surface and text color: `{colors.ink}` background, `{colors.canvas}` text, white icons
- Typography: `{typography.body-small}` for links, `{typography.label}` for category headers
- Shape: Full-bleed width, no radius
- Spacing: Generous internal padding, 5rem equivalent vertical space above link grid
- Composition: Category headers bold or heavier in visual weight, links stacked vertically beneath; social icons in horizontal row; copyright and locale selector in bottom flex row

### Floating action buttons

- Anatomy: Square icon buttons stacked vertically
- Surface and text color: `{colors.surface}` background, `{colors.action-text}` icons
- Shape: 0.25rem radius on container, individual buttons appear sharp or minimally rounded
- Spacing: Tight internal padding, minimal gap between stacked buttons
- Composition: Fixed position, lower right viewport edge

## Responsive behavior

The split-layout sign-in page suggests a natural breakpoint where the photography column collapses below the form or hides entirely on narrow viewports. The form column itself appears to have a minimum comfortable width; below this, fields would stack vertically rather than sit side by side.

The footer four-column grid would reflow to two columns on tablet and single column on mobile, maintaining category grouping. Social icons and copyright information would likely remain in horizontal arrangements but wrap if necessary.

Notification centre as a sidebar drawer would likely transition to full-screen overlay on mobile, preserving the card stack pattern but maximizing available width for readability.

The cookie banner's single-line composition will require text wrapping on narrow viewports, with the close button maintaining its position at the right edge or moving to a new line.

Typography scales down proportionally: hero-display should reduce to section-display size on mobile, and body text may increase slightly for touch-target comfort. Touch targets for buttons and inputs should maintain minimum 44px height regardless of viewport.

## Practical implementation guidance

### Preserve
- The warm surface temperature of canvas and surface tokens; avoid shifting to cooler greys
- The disciplined single-accent approach using action-text teal exclusively for interactive elements
- Full-bleed photography without overlays or gradient scrims
- Sharp corners on primary buttons to maintain decisive, premium character
- Generous section spacing that lets photography breathe

### Avoid
- Adding weight variations to the type scale; the single regular weight is intentional
- Introducing shadow-based elevation; rely on surface color layering instead
- Using pure white (#FFFFFF) for page backgrounds; the warm canvas is distinctive
- Crowding the footer link grid; maintain the four-column structure on desktop
- Rounding corners aggressively; the minimal 0.25rem radius is a deliberate restraint

### Recommended build order
1. Establish the color tokens and apply to base surfaces (page, cards, footer)
2. Implement the type scale with Cathay Pacific regular across all text roles
3. Build the button system: sharp primary, bordered secondary
4. Create form input patterns with floating labels and consistent border treatment
5. Construct the footer grid with responsive column behavior
6. Add notification card stack and cookie banner as overlay/utility layers
7. Integrate photography containers with proper aspect ratio handling

### Accessibility
- Ensure the ink (#2C3E33) on canvas (#F5F5F0) meets WCAG AA contrast for all text sizes
- Verify white text on ink footer background exceeds AA contrast requirements
- The action-text teal on canvas should be checked for contrast; if insufficient, darken slightly for link text
- Maintain visible focus indicators on all interactive elements; the minimal visual language requires clear state differentiation
- Ensure form labels remain visible or use persistent floating labels rather than placeholder-only patterns
- Provide skip navigation for the footer link density
- Consider reduced-motion preferences for any drawer or overlay transitions

## Scope note

This guide covers the homepage, sign-in page, notification centre, cookie banner, and footer surfaces visible in the supplied images. Header navigation, booking flows, in-flight entertainment interfaces, and mobile-specific layouts are not represented. Motion, loading states, and form validation styling are not documented. Measurements are practical adaptation targets derived from the visible interface at the supplied resolution.
