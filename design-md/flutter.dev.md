# How flutter.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flutter.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Footer area with Flutter logo, multi-column link groups, social icons, and Creative Commons license text on light gray background](https://pin.fontofweb.com/5409?format=jpg)](https://design.withfudge.com/share/pin-5409)

[Footer area with Flutter logo, multi-column link groups, social icons, and Creative Commons license text on light gray background](https://design.withfudge.com/share/pin-5409)

[![Newsletter signup section with large bold heading, email input field, and dark blue promotional card with geometric accent shapes](https://pin.fontofweb.com/5408?format=jpg)](https://design.withfudge.com/share/pin-5408)

[Newsletter signup section with large bold heading, email input field, and dark blue promotional card with geometric accent shapes](https://design.withfudge.com/share/pin-5408)

[![Latest news carousel with three white cards showing Flutter 3.35, Dart 3.9, and Google I/O 2025 announcements with thumbnail images](https://pin.fontofweb.com/5407?format=jpg)](https://design.withfudge.com/share/pin-5407)

[Latest news carousel with three white cards showing Flutter 3.35, Dart 3.9, and Google I/O 2025 announcements with thumbnail images](https://design.withfudge.com/share/pin-5407)

[![Hero section with centered tagline, pill-shaped tab selector, device mockup with purple UI cards, code snippet overlay, and Fast feature description](https://pin.fontofweb.com/5406?format=jpg)](https://design.withfudge.com/share/pin-5406)

[Hero section with centered tagline, pill-shaped tab selector, device mockup with purple UI cards, code snippet overlay, and Fast feature description](https://design.withfudge.com/share/pin-5406)

## Overview

The Flutter developer site presents a confident, approachable visual system built on Google's design heritage. The interface balances expansive white space with purposeful color moments, using a deep navy blue as the primary dark surface and a vibrant blue for interactive emphasis. The overall impression is one of technical credibility without austerity—rounded corners soften the developer-tool aesthetic, while the typographic hierarchy relies on weight contrast rather than size alone to create clear information structure. Content flows in centered, readable columns with occasional full-width breaks for promotional cards and feature demonstrations. The design prioritizes scannability for developers evaluating the framework, with clear calls to action, tabbed feature exploration, and card-based news presentation that keeps the surface feeling current and active.

## Colors

The color system is built on a neutral foundation with a single strong blue accent and a deep navy for dramatic contrast surfaces. Light mode dominates the experience.

| token | value | use |
|---|---|---|
| action | #1967D2 | Primary buttons, active tab pills, text links, and interactive emphasis |
| action-hover | #174EA6 | Darker blue for hover states on action elements |
| ink | #202124 | Primary headings, body text, and high-contrast content |
| muted-ink | #5F6368 | Secondary text, descriptions, footer links, and placeholder text |
| canvas | #FFFFFF | Page background, card surfaces, and input field backgrounds |
| surface | #F8F9FA | Subtle gray for input fields, newsletter signup area, and inactive tab backgrounds |
| surface-elevated | #FFFFFF | Card surfaces with slight shadow elevation |
| border | #DADCE0 | Dividers, card borders, and subtle structural lines |
| dark-surface | #041E3C | Promotional cards, feature highlight sections, and code snippet backgrounds |
| dark-accent | #1967D2 | Geometric accent shapes on dark surfaces |
| teal-accent | #1AC6C6 | Feature category labels like "Fast" in the hero section |

The light mode palette relies on near-white backgrounds with gray surfaces for form elements and inactive states. The dark-surface token creates dramatic moments for calls to action, particularly the "Get started" promotional card where geometric blue shapes add visual energy without competing with the white text. The teal accent appears sparingly for feature category identification, providing a secondary color voice distinct from the primary blue. No dark mode is visible in the supplied images; the system appears optimized for light-background presentation with strategic dark inversions for emphasis.

## Typography

The type system uses two families: Google Sans 18 Pt for display and interface elements, and Roboto for body content. This pairing creates a clear hierarchy where headings feel distinctly Google-branded while long-form content remains highly readable.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans 18 Pt | 3.5rem | 700 | 1.1 | -0.02em | Page hero headlines like "Join our newsletter" |
| section-display | Google Sans 18 Pt | 2.5rem | 700 | 1.2 | -0.01em | Section headings like "Latest news" |
| body | Roboto | 1rem | 400 | 1.5 | 0em | Paragraph text, descriptions, and general content |
| body-large | Roboto | 1.25rem | 400 | 1.5 | 0em | Hero taglines and introductory statements |
| label | Google Sans 18 Pt | 0.875rem | 500 | 1.25 | 0.01em | Buttons, card titles, navigation items, and labels |
| navigation | Google Sans 18 Pt | 0.875rem | 500 | 1.25 | 0.01em | Footer category headings and primary navigation |
| legal-copy | Roboto | 0.75rem | 400 | 1.5 | 0em | License text, terms links, and fine print |

Google Sans 18 Pt carries the brand voice with its slightly geometric character and confident weight. Tight negative tracking on display sizes creates a cohesive, modern headline presence. Roboto provides neutral, highly legible body copy with open apertures that perform well at smaller sizes. The medium weight (500) of Google Sans 18 Pt for labels and navigation creates clear interactive affordance without requiring bold. Verify licensing for these families before production use. Roboto is designed by Christian Robertson and provided by Google.

## Layout

The layout follows a centered, contained model with generous breathing room. Maximum content width appears to sit around 1200px, with internal padding that keeps text lines readable and elements comfortably separated.

Sections stack vertically with substantial vertical rhythm—approximately 6rem between major content blocks. The hero area centers its tagline and tab selector, creating immediate focus on the framework's value proposition. Below, feature sections use asymmetric two-column layouts: a device mockup or illustration occupies the left portion while descriptive text with a category label and call-to-action button sits right-aligned.

The news section introduces a horizontal carousel pattern with three visible cards, each containing a thumbnail image, title, and "Read more" link. Navigation arrows appear below the carousel for horizontal browsing. Card grids use consistent gap spacing of approximately 1.5rem.

Footer layout spans full width with a multi-column link structure: the Flutter logo and social icons anchor the left, while categorized link groups ("About Flutter", "Learn Flutter", "Multi-Platform") distribute across the remaining space. A horizontal divider separates the main footer from legal text and utility links.

The promotional card breaks the light rhythm with a full-width dark surface containing angled geometric shapes, creating visual momentum toward the "Get started" call to action. This card uses internal padding of approximately 3rem to maintain proportion with its bold content.

## Visual language

The visual language communicates technical capability through clean geometry and confident color restraint. Rounded corners are pervasive—cards, buttons, and input fields all use pill or large-radius treatments that soften the developer-tool aesthetic without becoming playful. The corner radius system creates clear family resemblance: interactive elements use full pills (9999px), while content containers use 1.5rem for cards and 1rem for panels.

Shadow usage is minimal and functional. Cards carry a subtle elevation shadow (approximately 0 1px 2px rgba(0,0,0,0.1)) that separates them from the light background without creating heavy depth. The dark promotional card relies on its strong color contrast rather than shadow for presence.

Imagery and illustration follow a consistent approach: device mockups show the framework's output with purple-tinted UI cards, code snippets appear in dark surfaces with syntax highlighting, and announcement thumbnails use the brand's blue palette. The geometric accent shapes on dark surfaces—angular triangles and polygons in varying blue tones—add dynamic energy without photographic complexity.

The Flutter logo appears as a wordmark with the characteristic blue bird-like icon, consistently positioned in the footer and implied in the header. Social icons use simple filled shapes in muted gray, maintaining the understated interface aesthetic.

## Components

### Primary button
- **Anatomy**: Text label centered within a pill-shaped container
- **Surface and text color**: action background (#1967D2) with canvas (#FFFFFF) text
- **Typography**: label token (Google Sans 18 Pt, 0.875rem, weight 500)
- **Shape**: pill border radius (9999px)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline with other buttons or standalone in card footers
- **Variants**: The "Install" button in the dark card uses the secondary button style with canvas background and action text

### Secondary button
- **Anatomy**: Text label with optional arrow icon, pill-shaped with visible border
- **Surface and text color**: canvas background with action text, or transparent with canvas text on dark surfaces
- **Typography**: label token
- **Shape**: pill border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Paired with primary buttons or used for lower-emphasis actions like "Read the docs →"

### Ghost button
- **Anatomy**: Text label only, no visible container
- **Surface and text color**: transparent with action text
- **Typography**: label token
- **Shape**: pill border radius for hit area
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Used for "Try it in DartPad" style links that need less visual weight

### Card
- **Anatomy**: Rounded rectangle containing thumbnail image, title text, and action link
- **Surface and text color**: surface-elevated (#FFFFFF) background with ink headings and action links
- **Typography**: section-display for card titles (approximately 1.25rem), label for "Read more →" links
- **Shape**: 1.5rem border radius
- **Spacing**: 2rem internal padding, thumbnail fills top portion with rounded top corners
- **Composition**: Horizontal carousel arrangement with 1.5rem gap, three cards visible
- **Variants**: News cards contain thumbnail images; the dark promotional card is a full-width variant with dark-surface background

### Input field
- **Anatomy**: Pill-shaped container with leading icon and placeholder text
- **Surface and text color**: surface (#F8F9FA) background with muted-ink placeholder text
- **Typography**: body token for input text
- **Shape**: pill border radius (9999px)
- **Spacing**: 1rem vertical padding, 1.5rem horizontal padding, icon inset approximately 1.5rem from left edge
- **Composition**: Full-width within its container, used for email capture

### Tab pill selector
- **Anatomy**: Horizontal group of pill buttons, one active
- **Surface and text color**: surface background for inactive, action background for active; corresponding text colors
- **Typography**: label token
- **Shape**: pill border radius for each option
- **Spacing**: Tight grouping with minimal internal gap
- **Composition**: Centered below hero tagline, three options visible ("Fast", "Productive", "Flexible")
- **States**: Active state uses filled action background; inactive uses surface background with muted-ink text

### Footer
- **Anatomy**: Full-width section with logo, social icons, categorized links, horizontal divider, and legal text
- **Surface and text color**: surface or canvas background with ink and muted-ink text
- **Typography**: navigation token for category headings, body token for links, legal-copy for license text
- **Shape**: No border radius; full-width horizontal divider at 1px
- **Spacing**: Generous top padding (approximately 4rem), 2rem gap between link columns, 1.5rem below divider for legal row
- **Composition**: Four-column link grid with uneven distribution; social icons in horizontal row

## Responsive behavior

The layout appears optimized for desktop viewing with a contained maximum width. The centered hero tagline and tab selector would maintain their alignment on narrower viewports, though the two-column feature sections should stack vertically on tablet and mobile, placing the device mockup above the descriptive text. The news card carousel would likely reduce to one or two visible cards on smaller screens with swipe gesture support replacing the arrow navigation.

The promotional card's internal padding should remain generous at all sizes, with text and buttons stacking vertically on narrow viewports rather than maintaining horizontal arrangement. Footer link columns should collapse to a single column or accordion pattern on mobile to prevent excessive horizontal scrolling.

Typography scales should reduce by approximately 15-20% on mobile: hero-display to approximately 2.5rem, section-display to 2rem. Line heights can increase slightly on mobile for touch readability. Touch targets for buttons and tab pills should maintain minimum 44px height regardless of viewport size.

## Practical implementation guidance

### Preserve
- The generous white space and section padding that creates the site's breathable, confident tone
- The pill-shaped interactive elements that unify buttons, inputs, and tabs into a cohesive family
- The two-tone typographic hierarchy with Google Sans 18 Pt for brand voice and Roboto for readability
- The dark promotional card as a dramatic conversion moment with geometric accent shapes
- The subtle card elevation that separates content without heavy shadow

### Avoid
- Adding additional accent colors beyond the blue and teal system; the restrained palette is intentional
- Using sharp corners on interactive elements; the rounded language is consistent across all components
- Making the dark card background lighter; the deep navy (#041E3C) provides necessary contrast for white text
- Crowding the footer link columns; the generous spacing maintains scannability

### Recommended build order
1. Establish the type scale with Google Sans 18 Pt and Roboto loaded and configured
2. Implement the color tokens with light mode as default
3. Build the pill button component with primary, secondary, and ghost variants
4. Create the card component with rounded corners and subtle shadow
5. Implement the tab pill selector with active state management
6. Build the input field with icon support and placeholder styling
7. Assemble the hero section with centered tagline and tab selector
8. Create the feature section layout with asymmetric two-column composition
9. Implement the news carousel with card repetition and navigation arrows
10. Build the dark promotional card with geometric accent shapes
11. Assemble the footer with multi-column link structure and legal row

### Accessibility
- Ensure the action blue (#1967D2) on white meets WCAG AA contrast ratios for text; the dark-surface card with white text exceeds AAA
- Provide visible focus indicators for all pill-shaped interactive elements, using outline or ring that respects the border radius
- Include arrow key navigation for the tab pill selector and news carousel
- Add aria-labels to the "Read more" links that include the article title for screen reader context
- Maintain sufficient touch target sizes (44px minimum) for all interactive elements on touch devices
- Ensure the email input field has associated label text, not relying solely on placeholder

## Scope note

This guide covers the Flutter.dev homepage marketing surface including hero, feature showcase, news carousel, promotional card, and footer. Navigation header, interior documentation pages, code syntax highlighting details, and mobile-specific layouts are not represented in the supplied images. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation.
