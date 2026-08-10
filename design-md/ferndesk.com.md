# How ferndesk.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ferndesk.com-design)

Last updated: 2026-08-10

## Captured pages

[![Blog index page with dark theme, lime-green BLOG label, serif headlines, three-column article cards with pixel-art thumbnails, and multi-column footer](https://pin.fontofweb.com/3336?format=jpg)](https://design.withfudge.com/share/pin-3336)

[Blog index page with dark theme, lime-green BLOG label, serif headlines, three-column article cards with pixel-art thumbnails, and multi-column footer](https://design.withfudge.com/share/pin-3336)

[![Floating contact modal with bright lime-green header, circular avatar, white form fields, and rounded green send button over dark background](https://pin.fontofweb.com/3335?format=jpg)](https://design.withfudge.com/share/pin-3335)

[Floating contact modal with bright lime-green header, circular avatar, white form fields, and rounded green send button over dark background](https://design.withfudge.com/share/pin-3335)

[![Footer section with Ferndesk logo, tagline, five-column link grid, copyright bar, and floating lime-green chat bubble button](https://pin.fontofweb.com/3334?format=jpg)](https://design.withfudge.com/share/pin-3334)

[Footer section with Ferndesk logo, tagline, five-column link grid, copyright bar, and floating lime-green chat bubble button](https://design.withfudge.com/share/pin-3334)

[![Hero section with lime-green THE AI DOCS AGENT label, large serif headline with inline logo, green primary button, dark secondary button, and testimonial cards](https://pin.fontofweb.com/3333?format=jpg)](https://design.withfudge.com/share/pin-3333)

[Hero section with lime-green THE AI DOCS AGENT label, large serif headline with inline logo, green primary button, dark secondary button, and testimonial cards](https://design.withfudge.com/share/pin-3333)

## Overview

Ferndesk presents a dark-mode SaaS identity built around a near-black canvas and a vivid lime-green accent. The system pairs an elegant serif display face for headlines with a clean sans-serif for body text and interface labels, creating a refined contrast between editorial personality and functional clarity. The visual hierarchy relies on generous whitespace, rounded corners on interactive elements, and strategic use of the green accent to guide attention toward calls to action. The overall impression is of a modern, trustworthy productivity tool—technical enough for developers but approachable through its warm color choice and human-centered photography. The design maintains consistency across marketing pages and blog content, with the same footer structure, floating action button, and modal patterns appearing throughout.

## Colors

The palette is built on a dark foundation with a single high-saturation accent. The near-black canvas creates immersive depth, while the lime green provides energy and clear affordance for interactive elements.

| token | value | use |
|---|---|---|
| canvas | `#171717` | Primary page background, modal backdrop |
| surface | `#262626` | Card backgrounds, footer sections, elevated panels |
| surface-elevated | `#404040` | Borders, dividers, subtle structural lines |
| action | `#8CD842` | Primary buttons, floating action button, labels, links |
| action-hover | `#A3E55F` | Button hover states, interactive emphasis |
| ink | `#FAFAFA` | Primary text, headlines, body copy on dark |
| muted-ink | `#A3A3A3` | Secondary text, captions, footer links, dates |
| border | `#404040` | Card borders, section dividers, input outlines on dark |
| border-subtle | `#2E2E2E` | Hairline separators, footer top border |

The action green appears most prominently in the "THE AI DOCS AGENT" label, the "Get started for free" button, and the floating chat bubble. White text on dark surfaces dominates the reading experience, with muted gray reserved for metadata and navigation. The modal introduces a light inversion: white form fields with dark text against the green header, creating a clear functional zone.

## Typography

Two families drive the typographic system: Erode Variable for display and editorial moments, Figtree for everything functional.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Erode Variable | 3.5rem | 300 | 1.1 | -0.02em | Page headlines, hero statements |
| section-display | Erode Variable | 2.5rem | 300 | 1.15 | -0.01em | Section titles, blog page header |
| body | Figtree | 1rem | 300 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Figtree | 0.875rem | 300 | 1.5 | 0 | Card text, testimonials, footer body |
| label | Figtree | 0.75rem | 500 | 1.4 | 0.08em | Overlines, dates, category tags |
| navigation | Figtree | 0.875rem | 300 | 1.5 | 0 | Menu items, footer links |

Erode Variable appears exclusively at Light weight (300), leveraging its delicate stroke contrast for editorial impact. The negative letter spacing on display sizes tightens wordmarks and prevents the serif from feeling loose at large scale. Figtree handles all functional text at Light weight, with Medium (500) reserved for uppercase labels. The uppercase, wide-tracking label style creates clear hierarchy above the flowing serif headlines.

Verify licensing for these families before production use. Erode Variable is designed by Nikhil Ranganathan and Jeremie Hornus, available from Indian Type Foundry. Figtree is designed by Erik Kennedy.

## Layout

The system uses a centered content column with generous horizontal padding. Major sections stack vertically with substantial breathing room between them. The blog page shows a three-column grid for article cards, while the homepage hero keeps content left-aligned within the container.

The footer spans full width with a five-column link grid: brand column with logo and tagline, followed by Features, Product, Resources, and Get help columns. A thin horizontal rule separates the link grid from the copyright bar. The floating action button positions fixed to the bottom-right corner, overlapping content without interfering with reading flow.

Content containers appear to max out around 80rem with responsive padding. Cards within grids maintain equal height through flex or grid alignment. The testimonial section shows a horizontal scroll or carousel pattern with cards peeking at the right edge, suggesting overflow behavior for social proof.

Spacing follows a 4px base unit. Section vertical padding is substantial—approximately 6rem—to let the dark background breathe. Card internal padding sits at 1.5rem, with 1.5rem gaps between grid items. Button padding is asymmetrically generous horizontally (1.5rem) compared to vertically (0.875rem), creating pill-like proportions without full rounding.

## Visual language

The aesthetic balances technical credibility with approachable warmth. The dark canvas suggests sophistication and focus, while the lime-green accent prevents the palette from feeling cold or generic. Rounded corners appear throughout interactive elements—buttons, cards, inputs, and the floating button—softening the geometric precision of the layout.

Photography and illustration follow a consistent editorial style: the blog uses pixel-art and stylized digital illustrations with warm, slightly retro color palettes that complement the green accent without competing. The homepage testimonial section incorporates video thumbnails with human subjects, adding social proof through recognizable faces.

The inline logo treatment in headlines—placing the Ferndesk wordmark or icon within flowing serif text—creates a distinctive brand signature that breaks the conventional headline/image separation. This integration suggests the product is the subject of the sentence, not an appendage to it.

Shadows are minimal or absent; depth is created through surface color variation rather than elevation shadows. The flat, clean surfaces reinforce the modern SaaS aesthetic while keeping focus on content and action.

## Components

### Primary action button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Solid action green background (`{colors.action}`) with dark canvas text
- **Typography**: `{typography.body-small}`, Medium weight for the label
- **Shape**: 0.5rem border radius, generous horizontal padding
- **Spacing**: 0.875rem vertical, 1.5rem horizontal
- **Composition**: Often paired with a secondary button to its right
- **Variants**: Hover state lightens to `{colors.action-hover}`

### Secondary action button

- **Anatomy**: Text label within a bordered rectangle
- **Surface**: Transparent or surface-colored background with `{colors.ink}` text and `{colors.border}` outline
- **Typography**: `{typography.body-small}`
- **Shape**: 0.5rem border radius, matching primary button height
- **Composition**: Positioned immediately right of primary button with 0.75rem gap

### Card (testimonial / content)

- **Anatomy**: Rounded container with internal padding, optional header with avatar and name
- **Surface**: `{colors.surface}` background, no visible border or subtle `{colors.border}`
- **Typography**: Name in `{typography.body-small}` with Medium weight, handle in muted ink, body in `{typography.body-small}`
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Horizontal scroll arrangement on homepage, grid arrangement on blog

### Blog article card

- **Anatomy**: Date label, title, and full-bleed thumbnail image
- **Surface**: No visible card background—image sits directly on canvas
- **Typography**: Date in `{typography.label}`, title in `{typography.section-display}` at smaller scale
- **Shape**: 0.75rem border radius on image container
- **Composition**: Three-column grid with equal width, image below text

### Floating action button (chat)

- **Anatomy**: Circular button with chat icon
- **Surface**: `{colors.action}` background, dark icon
- **Shape**: Perfect circle via 50% border radius, 3.5rem diameter
- **Position**: Fixed bottom-right, offset from viewport edges
- **Behavior**: Opens contact modal on click

### Contact modal

- **Anatomy**: Centered overlay with green header, white form body, and circular avatar
- **Surface**: Header in `{colors.action}`, body in white, backdrop in semi-transparent canvas
- **Typography**: Header title in `{typography.body}`, form labels in `{typography.body-small}`
- **Shape**: 0.75rem border radius on modal container
- **Composition**: Stacked form fields with 1rem vertical spacing, full-width submit button matching header color

### Input field

- **Anatomy**: Label above, text entry area below
- **Surface**: White background (`#FAFAFA`), 1px `#D4D4D4` border
- **Typography**: Label in `{typography.body-small}`, entry text in dark canvas color
- **Shape**: 0.375rem border radius
- **Spacing**: 0.75rem vertical internal padding, 1rem horizontal

### Footer

- **Anatomy**: Logo and tagline column, four link columns, copyright bar
- **Surface**: `{colors.canvas}` background, `{colors.border-subtle}` top rule
- **Typography**: Column headers in `{typography.body-small}` Medium weight, links in `{typography.body-small}` muted ink
- **Composition**: Five-column grid on desktop, full-width copyright centered below

## Responsive behavior

The three-column blog grid should collapse to single column on narrow viewports, with cards stacking vertically and images maintaining aspect ratio. The footer five-column grid should reflow to two columns then single column, preserving the brand column first.

The hero headline scales down from 3.5rem to approximately 2.5rem on tablet and 2rem on mobile, maintaining the tight line height to prevent the serif from fragmenting. Button pairs should stack vertically on narrow screens with full-width buttons and maintained 0.75rem gap.

The floating action button remains fixed across breakpoints but may reduce to 3rem diameter on mobile to avoid obscuring content. The contact modal should transition to full-screen or near-full-screen on mobile, with the rounded corners flattening to 0 on the top edge if anchored.

Testimonial cards in horizontal scroll should remain swipeable on touch devices, with peeking cards indicating more content. Consider adding scroll snap points for controlled browsing.

## Practical implementation guidance

### Preserve
- The dark canvas with high-contrast white text; this is the system's defining atmosphere
- Erode Variable at Light weight only for headlines; heavier weights break the delicate editorial quality
- The lime-green accent as a single, disciplined highlight color
- Rounded corners on all interactive elements; the softness is integral to the approachable tone
- Inline logo placement within headlines where brand integration is desired
- Generous section spacing; the dark background needs room to avoid feeling cramped

### Avoid
- Adding additional accent colors; the single green against dark is the core identity
- Using Erode Variable for body text or UI labels; it is strictly display
- Removing the floating action button; it is a persistent conversion path
- Lightening the canvas significantly; even "dark gray" backgrounds lose the immersive quality
- Sharp corners on buttons or cards; they conflict with the rounded system language

### Recommended build order
1. Establish the dark canvas and action green as CSS custom properties
2. Implement Erode Variable at 300 weight for hero and section headlines
3. Build the button pair component with primary and secondary variants
4. Create the card component with consistent surface and radius
5. Implement the footer grid with responsive collapse behavior
6. Add the floating action button with modal trigger
7. Polish with label typography and spacing tokens

### Accessibility
- Ensure the lime-green action text on dark backgrounds meets WCAG AA contrast; the green is bright but verify against the specific canvas value
- Provide focus indicators that are visible against both canvas and surface backgrounds
- The modal should trap focus and provide an explicit close control beyond clicking the backdrop
- Form fields in the modal need associated labels and error state styling
- Consider a reduced-motion preference for the testimonial carousel
- The dark mode should respect `prefers-color-scheme` if a light variant is not offered

## Scope note

This guide covers the Ferndesk marketing site and blog as visible in the supplied homepage and blog index screenshots. Pricing pages, dashboard interfaces, documentation reader, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion, loading states, and form validation feedback are not documented. Verify licensing for Erode Variable and Figtree before production use.
