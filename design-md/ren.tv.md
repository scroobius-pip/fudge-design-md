# How ren.tv is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ren.tv-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with park photograph showing breadcrumb navigation, date, view count, serif headline, and bold lead paragraph on white background](https://pin.fontofweb.com/9069?format=jpg)](https://design.withfudge.com/share/pin-9069)

[Article page with park photograph showing breadcrumb navigation, date, view count, serif headline, and bold lead paragraph on white background](https://design.withfudge.com/share/pin-9069)

[![Article page with snowy Moscow traffic video player featuring orange play button, duration overlay, and photo credit line](https://pin.fontofweb.com/9068?format=jpg)](https://design.withfudge.com/share/pin-9068)

[Article page with snowy Moscow traffic video player featuring orange play button, duration overlay, and photo credit line](https://design.withfudge.com/share/pin-9068)

[![Article page with seismograph image showing breadcrumb, view count, and clean typography hierarchy](https://pin.fontofweb.com/9067?format=jpg)](https://design.withfudge.com/share/pin-9067)

[Article page with seismograph image showing breadcrumb, view count, and clean typography hierarchy](https://design.withfudge.com/share/pin-9067)

[![Article page with tanker ship photograph showing video player controls and share button in upper right corner](https://pin.fontofweb.com/9066?format=jpg)](https://design.withfudge.com/share/pin-9066)

[Article page with tanker ship photograph showing video player controls and share button in upper right corner](https://design.withfudge.com/share/pin-9066)

## Overview

REN TV's digital news presence is built on a stark, high-contrast editorial system that prioritizes readability and visual authority. The design centers on a pure white canvas with near-black typography, creating immediate visual clarity for readers consuming breaking news and feature content. The system employs a deliberate typographic tension: slab-serif headlines in Roboto Slab establish editorial weight and gravitas, while Roboto sans-serif handles all functional and body text with neutral efficiency. This pairing creates a clear hierarchy where headlines command attention without decorative excess, and body content remains highly legible at standard reading distances.

The layout philosophy is intentionally restrained. Content flows in a single dominant column with generous but predictable spacing. Media elements—photographs, video embeds, data visualizations—receive prominent placement with minimal framing, allowing the editorial imagery to carry visual interest. The system avoids sidebar clutter, card-based layouts, or competing color fields. Instead, visual rhythm comes from the scale contrast between the large serif headlines and the compact functional text of breadcrumbs, timestamps, and view counts. This is a design system built for speed of comprehension: readers can scan a headline, confirm the source and recency, and engage with media without visual friction.

## Colors

The palette is severely limited, deriving its character from extreme contrast rather than chromatic range. Every interface color serves a specific functional role in the reading experience.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary body text, bold lead paragraphs, media player backgrounds, primary interface elements |
| headline | #2B2B2B | Article headlines in slab serif, providing slightly softened black for extended reading |
| muted | #D8D8D8 | Breadcrumb separators, inactive navigation, timestamp and view count metadata, divider lines |
| canvas | #FFFFFF | Page background, content wells, all primary surfaces |
| media-overlay | #000000 | Video player chrome, control bars, overlay buttons |

The color logic follows a strict subtractive hierarchy. The white canvas dominates, occupying roughly 85% of visible area in typical article views. Black and near-black text occupies the remaining visual weight, with #2B2B2B specifically reserved for headlines to reduce the optical vibration of pure black at large sizes. The muted gray #D8D8D8 appears only in supporting information: breadcrumb chevrons, the eye icon preceding view counts, and thin horizontal rules where present.

No accent colors appear in the interface chrome itself. The only chromatic intrusion comes from media content—photographs, video thumbnails, and the distinctive orange play button (#FF6B00) on video embeds. This orange is treated as a media-element property rather than a system color token, as it appears only within the video player component and does not extend to buttons, links, or navigation states.

The system does not implement a dark mode in the visible surfaces. All imagery is presented against the white canvas without inversion or color shifting.

## Typography

The typographic system relies on two families from the Google Fonts ecosystem, deployed with minimal weight variation and tight size constraints.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| headline | Roboto Slab | 2rem | 400 | 1.25 | 0em | Article titles, major headings |
| body | Roboto | 1rem | 400 | 1 | 0em | Body paragraphs, general content |
| lead | Roboto | 1rem | 700 | 1 | 0em | Bold introductory paragraphs following headlines |
| caption | Roboto | 0.75rem | 400 | 1.5 | -0.005em | Timestamps, view counts, photo credits, metadata |
| breadcrumb | Roboto | 0.75rem | 400 | 1 | 0em | Section navigation paths |
| meta | Roboto | 0.75rem | 400 | 1 | 0em | Date and view count lines |

Roboto Slab appears exclusively at 32px (2rem) for article headlines. Its regular weight (400) provides sufficient mass at this scale without needing bold emphasis. The slab serifs add editorial character that distinguishes headlines from body content while maintaining geometric clarity. Line height is set to 40px (1.25), creating compact but breathable multi-line headlines.

Roboto handles all remaining text duties at two sizes: 16px (1rem) for body and lead paragraphs, and 12px (0.75rem) for all functional and metadata text. The lead variant uses weight 700 to create immediate hierarchy below the headline, while body text remains at 400. The caption size includes a subtle negative letter spacing (-0.005em) that tightens the compact metadata lines without affecting legibility.

Both families are designed by Google. Verify licensing for these families before production use.

## Layout

The layout follows a single-column editorial model with consistent horizontal margins and vertical rhythm. The content area is centered with ample whitespace on either side, creating a reading measure that remains comfortable across the visible viewport widths.

The vertical structure of a typical article page begins with the breadcrumb navigation, followed by the metadata line (date, view count), then the headline, the lead paragraph, and finally the primary media element. This sequence creates a predictable scanning pattern: readers encounter source context first, confirm relevance through timestamp and popularity, absorb the headline, read the summary, and then engage with visual content.

Spacing follows a 6px base unit (0.375rem), with derived values at 12px and 24px. Headlines receive 12px bottom margin, creating tight coupling with the lead paragraph that follows. Lead paragraphs and body content use 24px bottom margins to establish paragraph separation. The breadcrumb and metadata lines sit closer to the headline with 6px gaps, grouping the "header" information as a single visual block.

Horizontal padding on content containers measures 24px, creating consistent inset from viewport edges. Media elements—photographs and video embeds—typically break to full content width without internal padding, allowing imagery to dominate the visual field. Video players include a 2px border radius, the only rounded corner treatment in the system.

No sidebar, sticky navigation, or multi-column grid appears in the visible pages. The design commits fully to linear reading flow, with related content presumably appearing below the fold or through navigation rather than competing for horizontal space.

## Visual language

The visual character of REN TV's digital presence is one of editorial austerity. The system avoids decorative elements, gradient backgrounds, shadow effects, and border treatments beyond the minimal 1px rules in #D8D8D8 that occasionally separate content sections. The interface recedes completely, presenting content as if on blank newsprint.

Photography and video thumbnails carry the full burden of visual interest. Images are presented without frames, shadows, or overlays beyond the functional chrome of video players. The aspect ratio of media embeds varies with content—landscape photographs dominate, but the system accommodates varying heights without forced cropping indicators in the visible views.

The video player component introduces the only saturated color in the interface: a bright orange play button positioned in the lower left corner of video embeds. This button uses a triangular play icon in white against the orange field, with no text label. The player chrome includes duration display, fullscreen toggle, and share functionality in the lower right, rendered in white against the black video control bar. A separate share button appears in the upper right corner of video embeds as a circular icon with an arrow, suggesting external linking functionality.

Typography provides the sole decorative variation. The contrast between Roboto Slab's geometric serifs and Roboto's clean sans-serif creates visual texture without additional elements. Headlines occasionally run to three lines in the visible views, and the slab serif maintains legibility even at these extended lengths.

## Components

### Article headline

- **Anatomy**: Single h1 element containing the article title
- **Surface and text color**: #2B2B2B on #FFFFFF
- **Typography**: Roboto Slab, 2rem, weight 400, line-height 1.25
- **Shape and border**: No border, no background, no border-radius
- **Spacing**: 12px bottom margin, flush left with content inset
- **Composition**: Full content width, left-aligned, no maximum width constraint visible
- **Variants**: No size variants visible; all headlines use consistent 32px treatment

### Lead paragraph

- **Anatomy**: Bold introductory text immediately following headline
- **Surface and text color**: #000000 on #FFFFFF
- **Typography**: Roboto, 1rem, weight 700, line-height 1
- **Shape and border**: No border or background
- **Spacing**: 24px bottom margin, creating separation from body or media content
- **Composition**: Full content width, left-aligned
- **Variants**: No visible variants; appears on all article pages

### Body paragraph

- **Anatomy**: Standard text blocks for article content
- **Surface and text color**: #000000 on #FFFFFF
- **Typography**: Roboto, 1rem, weight 400, line-height 1
- **Shape and border**: No border or background
- **Spacing**: 24px bottom margin between paragraphs
- **Composition**: Full content width, left-aligned
- **Variants**: No visible variants

### Breadcrumb navigation

- **Anatomy**: Horizontal path showing section hierarchy (e.g., "главная / новости / в россии")
- **Surface and text color**: #D8D8D8 text on #FFFFFF, with slash separators
- **Typography**: Roboto, 0.75rem, weight 400, line-height 1, uppercase text
- **Shape and border**: No border or background
- **Spacing**: 6px bottom margin before metadata line
- **Composition**: Left-aligned, inline text with separator characters
- **Variants**: No visible variants; appears consistently across article pages

### Metadata line

- **Anatomy**: Timestamp and view count with eye icon
- **Surface and text color**: #D8D8D8 on #FFFFFF
- **Typography**: Roboto, 0.75rem, weight 400, line-height 1
- **Shape and border**: No border or background
- **Spacing**: 6px bottom margin before headline
- **Composition**: Left-aligned, inline elements with spacing between date and view count
- **Variants**: No visible variants

### Media embed (photograph)

- **Anatomy**: Full-width image with optional caption
- **Surface and text color**: Image content on #FFFFFF canvas
- **Typography**: Caption uses Roboto, 0.75rem, weight 400 if present
- **Shape and border**: No border, no border-radius for still images
- **Spacing**: 24px top and bottom margins, separating from text content
- **Composition**: Full content width, no internal padding
- **Variants**: Images may include photo credit lines below

### Video player

- **Anatomy**: Video thumbnail with overlay controls including play button, duration, fullscreen, and share
- **Surface and text color**: Black control bar with white icons and text; orange (#FF6B00) play button
- **Typography**: Duration in Roboto, 0.75rem, white on black
- **Shape and border**: 2px border-radius on container
- **Spacing**: 24px top and bottom margins
- **Composition**: Full content width, 16:9 approximate aspect ratio
- **Variants**: Play button appears in lower left; share button in upper right as circular icon with arrow; duration and controls in lower right

### Photo/video credit

- **Anatomy**: Attribution line below media element
- **Surface and text color**: #D8D8D8 on #FFFFFF
- **Typography**: Roboto, 0.75rem, weight 400
- **Shape and border**: No border or background
- **Spacing**: 12px top margin below media, 24px bottom margin
- **Composition**: Left-aligned, prefixed with "Фото / Видео:" label
- **Variants**: Includes source agency and photographer names

## Responsive behavior

The visible pages show a consistent desktop layout without visible breakpoint adaptation. All content maintains single-column flow with fixed horizontal margins. The following guidance applies for implementation:

- Maintain single-column layout at all viewport widths to preserve reading focus
- Reduce horizontal padding from 24px to 12px on viewports below 768px to maximize content area
- Headline size may reduce from 2rem to 1.5rem on narrow viewports to prevent excessive line breaks in long titles
- Video player controls should remain accessible at minimum 44px touch targets on mobile devices
- Breadcrumb navigation may truncate with ellipsis on narrow viewports if section names exceed available width
- Media embeds should maintain aspect ratio without cropping; allow vertical scrolling for tall images rather than forcing fit

No mobile-specific navigation patterns, hamburger menus, or bottom bars appear in the visible material. Implementation should preserve the clean header absence and allow content to begin immediately at viewport top.

## Practical implementation guidance

### Preserve
- The stark white canvas as the dominant background; do not introduce gray page backgrounds or card surfaces
- The two-family typographic split: Roboto Slab for headlines only, Roboto for everything else
- The specific headline color #2B2B2B rather than pure black; this slight softening is intentional for extended reading
- The orange play button as the sole saturated interface element, restricted to video player context
- The minimal 2px border-radius on video containers; do not extend rounding to other elements
- The uppercase treatment of breadcrumb text

### Avoid
- Adding shadow effects to media containers or content cards
- Introducing accent colors beyond the video play button into navigation, links, or buttons
- Using bold weight on headlines; the slab serif at regular weight provides sufficient mass
- Creating multi-column layouts that would fragment the reading flow
- Adding background tints or alternating row colors to content areas
- Decorative separators beyond the minimal gray rules where functionally necessary

### Recommended build order
1. Establish the 6px base unit and derive spacing scale
2. Implement the white canvas with #000000 body text and verify contrast ratios
3. Add Roboto Slab at 2rem for headline rendering
4. Build the article header sequence: breadcrumb → metadata → headline → lead
5. Implement media embed containers with full-width behavior
6. Add video player chrome with orange play button and black control bar
7. Fine-tune vertical rhythm with 12px and 24px margin applications

### Accessibility
- Ensure the #2B2B2B headline text on #FFFFFF maintains minimum 7:1 contrast ratio (it exceeds this)
- Verify that #D8D8D8 muted text meets 4.5:1 against white for metadata; if not, darken to #767676 minimum
- Provide visible focus indicators for interactive elements; the current system shows no visible focus states
- Include aria-labels on icon-only controls (play, share, fullscreen) in video player
- Ensure video player controls remain keyboard accessible with logical tab order
- Consider adding skip navigation for screen reader users to bypass breadcrumb and metadata

## Scope note

This guide covers article page surfaces from REN TV's news publishing platform. It does not include homepage layouts, section landing pages, search results, comment systems, or advertising integrations. Navigation beyond breadcrumbs, footer content, and subscription or login flows are not represented in the visible material. Video player behavior beyond the static chrome shown— including loading states, error handling, and playback progress—requires additional specification.
