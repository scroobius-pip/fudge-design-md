# How criticker.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/criticker.com-design)

Last updated: 2026-08-10

## Captured pages

[![New Releases page showing movie list with PSI score badges, tab navigation, and search header with purple Criticker logo](https://pin.fontofweb.com/3550?format=jpg)](https://design.withfudge.com/share/pin-3550)

[New Releases page showing movie list with PSI score badges, tab navigation, and search header with purple Criticker logo](https://design.withfudge.com/share/pin-3550)

[![Film detail page for Sinners with cast info, streaming links, user reviews with percentile rankings, and rating sidebar](https://pin.fontofweb.com/3549?format=jpg)](https://design.withfudge.com/share/pin-3549)

[Film detail page for Sinners with cast info, streaming links, user reviews with percentile rankings, and rating sidebar](https://design.withfudge.com/share/pin-3549)

[![Site footer with expanded navigation columns, Criticker logo, tagline, and copyright bar on light gray background](https://pin.fontofweb.com/3548?format=jpg)](https://design.withfudge.com/share/pin-3548)

[Site footer with expanded navigation columns, Criticker logo, tagline, and copyright bar on light gray background](https://design.withfudge.com/share/pin-3548)

[![Profile landing page with sign-up CTA, feature list, sidebar links, and mini-review card with star action](https://pin.fontofweb.com/3547?format=jpg)](https://design.withfudge.com/share/pin-3547)

[Profile landing page with sign-up CTA, feature list, sidebar links, and mini-review card with star action](https://design.withfudge.com/share/pin-3547)

## Overview

Criticker is a film and television recommendation platform built around a community scoring system called PSI (Probable Score Indicator). The interface prioritizes content density and readability over decorative flourish, presenting movie information, user reviews, and personalized recommendations in a straightforward, utilitarian layout. The visual system relies on strong typographic contrast between a bold condensed display face for headlines and a neutral sans-serif for body text, paired with a restrained grayscale foundation punctuated by vivid green score badges. The design communicates authority and clarity—appropriate for a site whose value proposition is algorithmic accuracy in taste matching. Navigation is persistent and unobtrusive, while content surfaces use subtle borders and background shifts to create hierarchy without heavy shadows or dramatic color blocking.

## Colors

The color system is intentionally minimal, built on a near-black and white foundation with functional accents. The palette supports high-contrast readability for dense film information while allowing score data to pop through green accents.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, logo wordmark, active navigation |
| canvas | #ffffff | Primary backgrounds, content cards, input fields |
| surface | #f3f4f6 | Page background, footer area, subtle section alternation |
| border | #d1d5db | Card borders, dividers, input borders, tab underlines |
| action | #000000 | Primary button fills, strong CTAs |
| action-text | #ffffff | Text on primary buttons |
| accent-green | #22c55e | PSI scores, positive percentile rankings, success indicators |
| accent-green-muted | #86efac | Light score badge backgrounds, subtle positive highlights |
| accent-red | #ef4444 | Negative percentile rankings, low scores, warning states |
| link | #4f46e5 | Hyperlinks, signup prompts, interactive text |
| muted-ink | #6b7280 | Secondary text, timestamps, metadata, footer links |

The interface operates in a light mode throughout. Green serves as the singular emotional accent, reserved exclusively for the scoring system that defines the platform's identity. Red appears sparingly for contrast in percentile displays. The near-absence of color in the base UI ensures that movie poster imagery and user avatars remain visually dominant. Borders are light gray optical hairlines that separate content without creating visual weight.

## Typography

The type system pairs a distinctive condensed display family with a highly legible body family, creating clear hierarchy between editorial headlines and functional interface text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Greed Condensed | 3rem | 600 | 1 | -0.02em | Page titles, film names in detail views |
| section-display | Greed Condensed | 2rem | 600 | 1.1 | -0.01em | Section headings, card titles |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions, reviews |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Metadata, cast lists, secondary descriptions |
| label | Inter | 0.75rem | 500 | 1.25 | 0.02em | Buttons, tags, timestamps, navigation labels |
| navigation | Inter | 0.875rem | 500 | 1.25 | 0 | Top nav, dropdown items, footer links |

Greed Condensed appears in Medium and Semi Bold weights, used for all display typography. Its narrow proportions allow long film titles to occupy horizontal space efficiently without overwhelming the layout. Inter handles all body and interface text at Regular weight, with Medium reserved for navigation and interactive labels. Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout follows a centered content model with a maximum width container, flanked by sidebars on wider views. The header is fixed-height and contains the logo, search input, and primary navigation. Content areas use a two-column or three-column grid depending on page type.

The main content column occupies approximately two-thirds of the available width on listing pages, with a narrower sidebar containing user actions, score summaries, and promotional modules. Film detail pages reverse this emphasis slightly, giving more prominence to the poster and metadata while maintaining the review stream as the primary scrollable content.

Vertical rhythm is established through consistent section spacing of 4rem between major content blocks. Internal component spacing uses 1.5rem gaps for related elements and 0.5rem for tightly coupled items like label-value pairs. Cards and panels receive 1.5rem internal padding, creating breathable containers without excessive whitespace.

The footer spans full width with a light gray background, organized into multiple link columns with clear category headers. A secondary copyright bar sits below with centered legal links.

## Visual language

The visual character is editorial and data-driven, resembling a well-organized publication more than a streaming service. Movie posters appear at fixed aspect ratios with subtle rounded corners, never bleeding to edge. Score badges function as the primary decorative element—large numerals in green within light bordered squares, creating a rhythm of positive indicators down the page.

Iconography is minimal and functional: a search magnifying glass, dropdown chevrons, star ratings, and simple action icons for sharing and bookmarking. The Criticker logo combines a circular purple icon with horizontal lines (suggesting a film reel or list) with the bold black wordmark.

Shadows are absent from the core interface; depth is created solely through background color shifts from white to light gray and 1px border delineation. This flat treatment keeps attention on content imagery and the green score accents. Rounded corners are modest and consistent at 0.5rem for cards and buttons, 0.25rem for smaller badges.

## Components

### Header
- **Anatomy**: Logo mark with wordmark left-aligned, centered search input with category dropdown, right-aligned navigation cluster (Recommendations, Explore)
- **Surface**: White background, 1px bottom border in border color
- **Typography**: Navigation token for menu items, label token for search placeholder
- **Shape**: Full-width bar, fixed position
- **Spacing**: 1rem vertical padding, 1.5rem horizontal page margins

### Search Input
- **Anatomy**: Text field with magnifying glass submit button, category selector dropdown
- **Surface**: Light gray background, subtle border
- **Typography**: body-small for input text
- **Shape**: 0.5rem border radius, rounded pill-like appearance
- **Composition**: Inline flex with dropdown and button

### Film List Item
- **Anatomy**: Poster thumbnail left, title and synopsis center, score badge and rate button right
- **Surface**: White background, 1px bottom border separating items
- **Typography**: section-display for title, body-small for synopsis, hero-display for score
- **Shape**: Poster at fixed width with slight rounding
- **Spacing**: 1.5rem vertical padding, 1rem gap between poster and text

### Score Badge
- **Anatomy**: Large numeric score with "PSI" label above, optional percentile ranking
- **Surface**: White fill, 1px border, green text for positive scores, red for negative
- **Typography**: hero-display for the number, label for "PSI" prefix
- **Shape**: 0.25rem border radius, square or slightly rectangular proportions
- **Variants**: Large variant for detail page sidebar, compact variant for list items

### Review Card
- **Anatomy**: User avatar, username, review text, date stamp, action buttons (share, star, more)
- **Surface**: White background, 1px border, subtle shadow absent
- **Typography**: label for username, body for review text, body-small for date
- **Shape**: 0.5rem border radius
- **Composition**: Avatar left-aligned, content flows right with full width

### Tab Navigation
- **Anatomy**: Horizontal text tabs with active underline
- **Surface**: Transparent background, active tab with ink underline
- **Typography**: label token, weight 500
- **Shape**: No visible container, underline at 2px
- **States**: Active shows underline, inactive shows muted-ink text

### Primary Button
- **Anatomy**: Text label centered
- **Surface**: Black fill, white text
- **Typography**: label token, weight 500
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding
- **Variants**: Full-width for prominent CTAs like "Sign Up Now!"

### Sidebar Card
- **Anatomy**: Title header, list of links or content items
- **Surface**: White background, 1px border
- **Typography**: section-display for title, navigation for links
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem internal padding

### Footer
- **Anatomy**: Logo and tagline left, multiple link columns right, copyright bar below
- **Surface**: surface color background, full width
- **Typography**: label for column headers, navigation for links, body-small for copyright
- **Shape**: No rounding, sharp edges
- **Composition**: Asymmetric grid with logo area spanning left third

## Responsive behavior

The layout assumes a desktop-first presentation based on available imagery. At narrower viewports, the multi-column layout should collapse to a single column with the sidebar content reordering below primary content. The header search input should compress or collapse to an icon trigger on smaller screens. Score badges may scale down slightly but should remain prominent as they carry core site functionality. Footer columns should stack vertically on narrow viewports, with category headers becoming expandable accordion items if space is constrained.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with green score accent; this is the site's recognizable identity
- Greed Condensed for all display headlines; the narrow proportions are essential for long film titles
- The PSI badge system with large numerals and subtle borders
- The flat, shadowless card treatment with 1px borders
- The editorial density of film information without decorative imagery

### Avoid
- Adding background colors to cards beyond white and light gray
- Using rounded corners larger than 0.5rem; the aesthetic is restrained, not playful
- Introducing additional accent colors beyond the established green and functional red
- Heavy drop shadows or elevation effects
- Generic placeholder imagery where posters are expected

### Recommended Build Order
1. Establish the type scale with Greed Condensed and Inter loaded
2. Build the header with search input and navigation
3. Create the score badge component with green and red variants
4. Implement the film list item with poster, text, and badge layout
5. Construct the review card with user metadata and actions
6. Add the sidebar card pattern for secondary content
7. Implement the footer with multi-column link structure
8. Apply responsive collapse behaviors

### Accessibility
- Ensure the green score text meets contrast ratios against white backgrounds; the large numeral size helps but verify 3:1 for UI components
- Provide visible focus states for all interactive elements, particularly the flat buttons and tab navigation
- Use semantic heading hierarchy with Greed Condensed reserved for h1-h2 levels
- Include alt text for all film posters and user avatars
- Ensure the search input has an accessible label and the category dropdown is keyboard operable

## Scope note

This guide covers the public-facing desktop interface for film listings, detail pages, and profile landing surfaces. Mobile breakpoints, dark mode, loading states, and user-specific dashboard views are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection. Verify licensing for Greed Condensed before production use; no designer or vendor attribution is available for this family.
