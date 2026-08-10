# How businesstimes.com.sg is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/businesstimes.com.sg-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section showing The Business Times logo, multi-column navigation links, social media icons, and app store badges on a white background with subtle gray borders](https://pin.fontofweb.com/2640?format=jpg)](https://design.withfudge.com/share/pin-2640)

[Footer section showing The Business Times logo, multi-column navigation links, social media icons, and app store badges on a white background with subtle gray borders](https://design.withfudge.com/share/pin-2640)

[![myBT personalized content panel with document icon, sign-in prompt, and rounded pill button on white card with light gray border](https://pin.fontofweb.com/2639?format=jpg)](https://design.withfudge.com/share/pin-2639)

[myBT personalized content panel with document icon, sign-in prompt, and rounded pill button on white card with light gray border](https://design.withfudge.com/share/pin-2639)

[![Global edition homepage with centered masthead, three-column article layout, orange Subscribe button, and photographic hero image](https://pin.fontofweb.com/2637?format=jpg)](https://design.withfudge.com/share/pin-2637)

[Global edition homepage with centered masthead, three-column article layout, orange Subscribe button, and photographic hero image](https://design.withfudge.com/share/pin-2637)

## Overview

The Business Times Global Edition presents a sophisticated financial news experience that balances editorial authority with contemporary clarity. The design centers on a commanding serif masthead set in Libre Caslon Text, establishing immediate credibility and heritage. This classical foundation is supported by Public Sans for all functional text, creating a deliberate contrast between expressive headlines and utilitarian reading matter. The overall composition employs generous white space, precise horizontal rules, and a restrained warm accent palette to guide readers through dense financial information without visual fatigue. The three-column homepage grid organizes breaking news, featured stories, and secondary articles into a clear hierarchy, while the persistent top navigation and section labels ensure rapid wayfinding across coverage areas from ASEAN business to wealth management and property markets.

## Colors

The color system operates on a principle of maximum contrast for readability with selective warmth for calls to action. The interface relies on near-black text against pure white backgrounds, with gray tones reserved for structural elements and secondary information. The single warm accent, a vivid orange, appears exclusively in the Subscribe button and select interactive moments, making it highly salient when deployed.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, masthead logo, article headlines, navigation links |
| muted-ink | #6B6B6B | Section labels, timestamps, secondary metadata, footer links |
| canvas | #FFFFFF | Page backgrounds, card surfaces, button fills |
| surface | #F5F5F5 | Topic pill backgrounds, subtle hover states, alternate row shading |
| border | #E5E5E5 | Horizontal rules, card outlines, divider lines between sections |
| action | #E85D04 | Primary Subscribe button, key interactive accents |
| action-hover | #D45204 | Darkened action state for hover feedback |

The light mode dominates all visible surfaces. Dark text on white grounds ensures optimal legibility for extended reading sessions typical of financial news consumption. The muted-ink tone separates hierarchical levels without introducing color complexity. The orange action color carries functional urgency appropriate for subscription conversion while maintaining enough saturation to stand apart from the neutral field. No dark mode is visible in the supplied materials. Photographic content appears in full color within article thumbnails and hero images, providing natural chromatic variety that the interface palette deliberately avoids competing with.

## Typography

The type system pairs a classical editorial serif with a modernist sans-serif, assigning each to roles that leverage their inherent characteristics. Libre Caslon Text, credited to no listed designer or vendor in the available materials, delivers weight and presence for the masthead and headlines. Public Sans, with no listed attribution, handles all body copy, labels, and navigation with neutral clarity. Open Sans by Monotype Design Team and Poppins by Jonny Pinhorn for Indian Type Foundry appear in the source files but their visible roles are not confirmed in the captured interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Libre Caslon Text | 3rem | 700 | 1.1 | -0.01em | Major featured headlines, hero article titles |
| section-display | Libre Caslon Text | 2rem | 700 | 1.2 | 0 | Section page headers, category landing titles |
| headline | Libre Caslon Text | 1.5rem | 700 | 1.25 | 0 | Standard article headlines in feed cards |
| masthead | Libre Caslon Text | 2.5rem | 700 | 1 | 0.02em | The Business Times logo wordmark |
| body | Public Sans | 1rem | 400 | 1.6 | 0 | Article summaries, descriptive paragraphs |
| body-small | Public Sans | 0.875rem | 400 | 1.5 | 0 | Timestamps, captions, tertiary descriptions |
| label | Public Sans | 0.75rem | 600 | 1.4 | 0.05em | Category tags, section headers, uppercase labels |
| navigation | Public Sans | 0.875rem | 500 | 1.4 | 0.01em | Top bar links, footer navigation items |

The masthead treatment sets "THE BUSINESS TIMES" in all caps with slightly expanded letter spacing, creating a formal, established presence. Headlines across the homepage maintain consistent weight and color, with size variation alone establishing hierarchy. Section labels such as "ASEAN BUSINESS" and "BANKING & FINANCE" appear in uppercase with muted color and expanded tracking, functioning as organizational signposts. Body text maintains generous line height for comfortable scanning of financial data and analysis. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with a clear three-column grid for the homepage main content area. The maximum content width appears constrained to approximately 1200 pixels, with generous margins on either side that expand on wider viewports. Vertical rhythm is established through consistent section spacing and horizontal rules that demarcate content zones.

The top navigation bar spans full width with a subtle bottom border, containing left-aligned hamburger menu and search icons, section links centered toward the left, and right-aligned utility links for Newsletters, E-paper, Sign in, and the prominent Subscribe button. Below this functional bar, the masthead centers with equal visual weight, followed by a thin horizontal rule that separates branding from content.

The primary content zone employs an asymmetric three-column structure: a narrow left column for article headlines with section labels, a wide central column for the featured hero image and its accompanying headline, and a narrow right column mirroring the left with additional headlines. This creates a natural reading flow where the eye is drawn to the photographic center before scanning lateral options. Below this hero zone, a horizontal carousel or grid presents thumbnail-image cards with headlines beneath.

The footer in the expanded state reveals a multi-column link architecture beneath a prominent horizontal rule, with the masthead repeated for brand reinforcement, followed by categorized navigation columns and social media icons. App store badges occupy a distinct right-aligned zone. Legal copy and corporate information center at the very bottom in reduced size.

Spacing between major sections measures approximately 4rem, while internal content gaps within cards and between headline-image pairs use 1.5rem. Grid gaps between columns appear at 2rem. The relative unit of 0.25rem provides fine-grained control for borders and compact padding, with all measurements building from this foundation.

## Visual language

The visual language communicates established credibility through restraint and precision. Rounded corners are minimal and functional: buttons use full pill shapes for their friendly, approachable quality, while cards and panels maintain slight rounding that softens edges without appearing casual. The overall impression is of a publication that respects its readers' time and intelligence.

Imagery plays a substantive role in the content hierarchy. Hero photographs receive prominent placement with no border radius, allowing documentary-style news photography to present with maximum impact. Thumbnail images in lower sections maintain consistent aspect ratios and appear with tight spacing to their accompanying headlines. No decorative illustration or abstract patterning intrudes on the content-focused presentation.

The horizontal rule serves as the primary structural ornament. A single pixel line in muted gray separates the masthead from content, defines footer boundaries, and subdivides navigation zones. This spare use of decoration reinforces the serious, information-dense character of financial journalism.

Iconography is minimal and functional. Social media icons appear as simple outlined circles containing platform marks. The search and menu triggers use standard geometric forms without stylistic elaboration. The myBT personalized content panel uses a soft document-stack illustration with subtle shadow, the most decorative element visible, yet even this maintains the restrained grayscale palette until user interaction occurs.

## Components

### Primary action button

The Subscribe button represents the most visually prominent interactive element. It uses a full pill shape with the action orange background and white text in the label typography style. The button sits in the top navigation bar's right zone, separated from utility links by clear space. Its saturated color against the neutral interface creates immediate visual priority appropriate for the primary business conversion goal.

### Topic pill

Horizontal rows of topic pills appear below the main navigation, offering filtered content categories. Each pill uses a light gray surface background with dark ink text, full pill rounding, and compact internal padding. The first pill in sequences appears with inverted colors—dark background with light text—indicating active or featured status. These pills stack in wrapping rows with consistent gaps, creating browsable tag clouds without visual heaviness.

### Article headline card

Headline cards throughout the grid present a section label in uppercase muted text, followed by the headline in serif display type. No body summary appears in the compact left and right column cards; the headline alone carries the information. Spacing between label and headline is tight, approximately 0.5rem, while spacing between cards measures 1.5rem to 2rem. A subtle horizontal rule may separate stacked cards in some contexts.

### Hero feature

The central hero component combines a large photograph with overlaid or adjacent headline text. The image receives no border treatment, bleeding to its container edges. Below or beside the image, the headline appears in larger display size with accompanying summary paragraph in body type. A timestamp in muted-ink and small size anchors the composition. The section label positions above the headline with standard uppercase treatment.

### myBT personalized content panel

This engagement component presents as a bordered card with centered content. An illustration of document pages with a plus icon occupies the upper portion, followed by a bold headline in sans-serif type, descriptive text in body-small size, and a full-width pill button with outline styling. The button uses canvas background with ink text and border color, inverting the primary action treatment to suggest secondary priority. The card border uses the standard border color with slight rounding.

### Footer navigation

The expanded footer organizes links into five or six columns beneath category headers in uppercase label style. The masthead repeats at full size above this grid. Social media icons arrange horizontally in outlined circles, followed by app store badge buttons with their standard branded appearances. Legal and corporate links center at the bottom in body-small size with muted-ink color, separated from the main footer content by substantial vertical space.

## Responsive behavior

The three-column homepage grid likely collapses to single column on narrow viewports, with the central hero image stacking above its headline and lateral headline cards reordering below. The top navigation would condense to hamburger-triggered drawer menus, with the Subscribe button potentially persisting as a fixed floating action or moving into the drawer. Topic pills would remain horizontally scrollable or wrap to multiple lines. Typography scales would reduce proportionally, with the masthead maintaining legibility through moderate size reduction rather than dramatic shrinkage. Image aspect ratios should preserve their documentary character across breakpoints. Touch targets for pills and buttons must maintain minimum 44 pixel height for accessibility.

## Practical implementation guidance

### Preserve
- The stark contrast between serif headlines and sans-serif functional text; this pairing defines the editorial character
- The single warm accent color reserved exclusively for primary conversion actions
- Generous white space around the masthead and between content sections
- Full-bleed hero photography without border treatments
- Uppercase section labels with expanded tracking as organizational hierarchy

### Avoid
- Introducing additional accent colors that would dilute the orange action priority
- Rounding corners on hero images or major photographs, which would undermine documentary credibility
- Decorative backgrounds or textures behind article content
- Reducing line height below 1.5 for body text, given the density of financial information
- Using the serif face for body copy or extended reading passages

### Recommended build order
1. Establish the type scale with Libre Caslon Text for display sizes and Public Sans for functional sizes
2. Implement the neutral color foundation with ink, canvas, surface, and border tokens
3. Build the top navigation bar with full-width container, section links, and Subscribe button
4. Create the centered masthead with horizontal rule separation
5. Develop the three-column grid system with asymmetric column widths
6. Implement article cards with section label and headline pattern
7. Add the hero feature with image and text composition
8. Construct footer with multi-column link grid and repeated masthead
9. Apply the action color to interactive states and conversion elements

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against its background; the ink-on-canvas pairing exceeds requirements
- Provide visible focus indicators for keyboard navigation, using the action color or underline treatments
- Maintain logical heading hierarchy with single h1 for masthead or page title
- Add descriptive alt text to all news photography, including visible text in images
- Ensure topic pills and navigation links have sufficient touch target size on mobile devices
- Support reduced motion preferences for any carousel or auto-advancing content

## Scope note

This guide covers the Global Edition homepage, footer navigation, and myBT engagement panel as visible in the supplied materials. Article detail pages, search results, subscription flows, and mobile-specific layouts are not represented. Motion behavior, hover states, and dark mode variants are not documented. Measurements are practical adaptation targets derived from visual inspection.
