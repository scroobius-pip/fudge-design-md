# How lovable.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lovable.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with vibrant blue-to-pink-to-orange gradient background, centered headline, and dark rounded prompt input field](https://pin.fontofweb.com/7240?format=jpg)](https://design.withfudge.com/share/pin-7240)

[Hero section with vibrant blue-to-pink-to-orange gradient background, centered headline, and dark rounded prompt input field](https://design.withfudge.com/share/pin-7240)

[![Footer area with dark card containing multi-column link grid and colorful gradient backdrop behind the card](https://pin.fontofweb.com/7243?format=jpg)](https://design.withfudge.com/share/pin-7243)

[Footer area with dark card containing multi-column link grid and colorful gradient backdrop behind the card](https://design.withfudge.com/share/pin-7243)

[![Template gallery grid showing eight project thumbnails with titles and descriptions on dark background](https://pin.fontofweb.com/7242?format=jpg)](https://design.withfudge.com/share/pin-7242)

[Template gallery grid showing eight project thumbnails with titles and descriptions on dark background](https://design.withfudge.com/share/pin-7242)

[![Feature section with large 3D gradient sphere in dark rounded panel and three-step process list with muted text hierarchy](https://pin.fontofweb.com/7241?format=jpg)](https://design.withfudge.com/share/pin-7241)

[Feature section with large 3D gradient sphere in dark rounded panel and three-step process list with muted text hierarchy](https://design.withfudge.com/share/pin-7241)

## Overview

Lovable presents a dark-mode interface built around a single geometric sans typeface and a dramatic color system. The experience opens with a full-viewport hero where a vibrant blue-to-magenta-to-orange gradient fills the background, setting an energetic, creative tone. Over this gradient, a large rounded input field invites users to prompt the AI. The rest of the page unfolds in near-black space, with content organized into rounded dark panels, template galleries, and multi-column feature sections. The design balances the warmth of its gradient accents against the cool restraint of its dark surfaces, creating a system that feels both technical and approachable. Every interactive element carries rounded corners, from small buttons to large content panels, reinforcing a soft, friendly materiality throughout.

## Colors

The color system operates in dark mode by default, with a near-black canvas and layered dark surfaces. Vibrant gradients provide the primary visual energy, while a warm off-white ink ensures readability.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, template card surrounds |
| surface | #1C1C1C | Prompt input field, feature panels, footer card |
| surface-elevated | #272725 | Subtle elevation within dark containers |
| ink | #FCFBF8 | Primary text, headings, navigation links |
| ink-muted | #C5C1BA | Secondary labels, placeholder text, subdued descriptions |
| action-primary | #FFFFFF | Filled button backgrounds |
| action-primary-text | #1C1C1C | Text on filled buttons |
| action-secondary-border | #FFFFFF | Border on outlined buttons |
| accent-blue | #2483FF | Gradient stop, interactive emphasis |
| accent-blue-light | #82BCFF | Gradient stop, lighter blue accent |
| accent-magenta | #FF66F4 | Gradient stop, vibrant mid-tone |
| accent-red | #FF3029 | Gradient stop, warm accent |
| accent-orange | #FE7B02 | Gradient stop, warmest accent |

The hero gradient transitions through blue, magenta, red, and orange horizontally across the viewport. This same spectrum appears in smaller contexts, such as text gradient effects on certain headings. The dark canvas and surface layers create depth through value contrast rather than shadow, keeping the interface flat and contemporary. Photography and 3D imagery within feature panels introduces additional color through content rather than UI chrome.

## Typography

The interface uses two related type families from the same design source: Lovable Labs Incorporated Camera Plain and Lovable Labs Incorporated Camera Plain Variable. Both are designed by Fabian Harb, Sascha Bente, Johannes Breyer, Robert Janes, and Fabiola Mejía, and available from Dinamo. The variable version provides weight and width flexibility for responsive and animated contexts, while the static regular weight serves standard text rendering. All tokens in this guide reference Lovable Labs Incorporated Camera Plain. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lovable Labs Incorporated Camera Plain | 3.75rem | 600 | 1.1 | -0.025em | Hero headlines |
| section-display | Lovable Labs Incorporated Camera Plain | 3rem | 600 | 1.1 | -0.025em | Section headings like "Discover templates" |
| feature-heading | Lovable Labs Incorporated Camera Plain | 2.25rem | 600 | 1.1 | -0.025em | Feature step titles |
| body | Lovable Labs Incorporated Camera Plain | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions |
| body-small | Lovable Labs Incorporated Camera Plain | 0.875rem | 400 | 1.5 | normal | Button labels, captions, metadata |
| label | Lovable Labs Incorporated Camera Plain | 1.25rem | 400 | 1.5 | normal | Overlines, category labels |
| navigation | Lovable Labs Incorporated Camera Plain | 0.875rem | 400 | 1.5 | normal | Nav links, dropdown items |

Display sizes use tight negative tracking for a compact, confident presence. Body text remains neutral in tracking for comfortable reading. The typeface's geometric construction gives headlines a modern, engineered quality that matches the AI-builder positioning.

## Layout

The page uses a centered content strategy with generous horizontal margins. The navigation bar spans the full width with internal padding, carrying the logo on the left and utility actions on the right. Below the nav, the hero section occupies the full viewport height with centered text and input elements.

Content sections below the hero introduce asymmetric two-column layouts. In the "Meet Lovable" feature section, a large rounded panel containing 3D imagery occupies roughly half the width on the left, while a stacked list of feature steps with headings and descriptions sits on the right. This left-heavy composition creates visual interest while maintaining readable line lengths for the text content.

The template gallery uses a four-column grid with consistent gaps between cards. Each card contains a rectangular thumbnail image above a title and short description. A "View all" action sits in the upper right of the section header, aligned with the section title baseline.

The footer compresses into a single large rounded panel that contains a multi-column link grid. Five columns organize links by category, with the logo and language selector anchored in the bottom left of the panel. The panel itself floats above the same vibrant gradient that appears in the hero, creating bookend visual continuity.

Spacing between major sections is generous, with section margins creating clear rhythmic separation. Internal padding within panels and cards maintains consistent breathing room around content.

## Visual language

The visual language centers on softness and depth. Every container uses rounded corners, from small buttons at 0.375rem to large panels at 1.5rem. The hero input field uses the largest radius, appearing as a pill-shaped surface that invites interaction.

Gradients function as the primary expressive element. The full-spectrum horizontal gradient spans cool blues through warm oranges, appearing in the hero background, behind the footer panel, and as text-fill effects on certain display headings. This creates a signature color moment that distinguishes the brand.

3D imagery appears within feature panels, including a smooth gradient sphere that transitions from magenta to orange. This dimensional element contrasts with the flat UI surfaces, adding tactile richness without clutter.

The dark mode treatment is absolute: pure black canvas, charcoal surfaces, and warm off-white text. No light mode alternative is visible in the provided material. Shadows are minimal and subtle when present, relying instead on value contrast between surface layers to establish hierarchy.

## Components

### Navigation bar

- Anatomy: Logo mark with wordmark on the left, horizontal link list center-left, "Log in" text button and "Get started" filled button on the right
- Surface: Transparent background over page content
- Typography: Navigation token for links, body-small for buttons
- Spacing: Horizontal padding of 1rem, internal gaps of approximately 2rem between nav items
- Composition: Flex row with space-between alignment

### Hero prompt input

- Anatomy: Large rounded rectangle containing placeholder text, attachment button, plan indicator, microphone button, and submit button
- Surface: Background color from surface token, subtle border or shadow definition
- Typography: Body token for placeholder, body-small for action labels
- Shape: Border radius of 1.5rem, creating a pill-like container
- Spacing: Internal padding of approximately 1.5rem, with action buttons clustered at the right edge
- Composition: Centered horizontally, positioned below the headline and subheadline stack

### Primary button

- Anatomy: Text label within a rounded container
- Surface: White background with dark text
- Typography: Body-small token
- Shape: 0.375rem border radius
- Spacing: Padding of 0.5rem vertical, 1rem horizontal
- Variants: Pill-shaped variant at 9999px radius for certain contexts

### Secondary button

- Anatomy: Text label within a bordered container
- Surface: Transparent background, white border
- Typography: Body-small token
- Shape: 0.375rem border radius
- Spacing: Padding of 0.5rem vertical, 1rem horizontal

### Template card

- Anatomy: Thumbnail image, title text, description text
- Surface: Transparent or canvas background, image with its own rounded corners
- Typography: Body token for title, body-small for description in muted color
- Shape: Image corners at approximately 0.75rem radius
- Spacing: Gap of approximately 0.75rem between image and text, 2.5rem between cards
- Composition: Grid layout with four columns

### Feature panel

- Anatomy: Large rounded container holding 3D imagery or media
- Surface: Surface token background
- Shape: 1.5rem border radius
- Spacing: Generous internal padding, approximately 2rem to 4rem
- Composition: Positioned left in two-column layouts, with descriptive text stacked to the right

### Footer panel

- Anatomy: Multi-column link grid with logo, category headers, link lists, and language selector
- Surface: Surface token background
- Shape: 1.5rem border radius
- Typography: Body-small for links, label token for category headers in muted color
- Spacing: Five-column grid with consistent gaps, internal padding of approximately 3rem
- Composition: Full-width container floating above gradient background

## Responsive behavior

The provided images show a desktop viewport. Based on the layout patterns visible, the following responsive adaptations are recommended:

The four-column template grid should collapse to two columns on tablet and single column on mobile, maintaining card aspect ratios. The hero headline should scale down from 3.75rem to approximately 2.25rem on smaller viewports to prevent overflow. The two-column feature section with the 3D sphere should stack vertically on mobile, with the media panel preceding the text description. The footer link grid should collapse from five columns to two or three on tablet, then to a single accordion or stacked list on mobile. Navigation links should hide behind a menu toggle on narrow viewports, preserving only the logo and primary actions in the top bar.

## Practical implementation guidance

### Preserve
- The absolute dark mode treatment with pure black canvas and warm off-white ink
- The single type family throughout all text elements
- The consistent rounding system, especially the large 1.5rem radius on panels and inputs
- The vibrant gradient spectrum as a signature background and accent element
- The warm off-white (#FCFBF8) rather than pure white for text to reduce harsh contrast

### Avoid
- Introducing additional typefaces that would break the unified typographic system
- Using sharp corners on interactive elements or containers
- Replacing the gradient backgrounds with flat color blocks
- Lightening the canvas color, which would diminish the dramatic contrast that defines the interface
- Crowding the generous spacing between major sections

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the type scale with the single font family and weight distinctions
3. Build the hero section with gradient background and rounded prompt input
4. Create the button components with primary and secondary variants
5. Construct the template grid with card components
6. Implement the two-column feature section with rounded media panel
7. Build the multi-column footer panel
8. Add gradient text effects to display headings where specified

### Accessibility
- Ensure the vibrant gradient backgrounds meet contrast requirements when text overlays them directly; the hero uses centered text over the gradient, so verify minimum contrast ratios
- Maintain focus indicators on all interactive elements that are visible against dark surfaces
- Provide alternative text for the 3D imagery and template thumbnails
- Ensure the prompt input has an accessible label and clear submit action
- Consider reducing motion for users who prefer it, particularly for any gradient animations

## Scope note

This guide covers the Lovable homepage including the hero, template gallery, feature section, and footer. Mobile breakpoints, animation specifications, form validation states, and interior pages are not represented in the provided material. The rounded gradient sphere and template thumbnail imagery are content assets rather than UI components.
