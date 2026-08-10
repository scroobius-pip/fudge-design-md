# How hackaday.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hackaday.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hackaday article page with dark theme, yellow accent search button, skull logo, and navigation bar with article hero image of vintage BeOS computer setup](https://pin.fontofweb.com/3820?format=jpg)](https://design.withfudge.com/share/pin-3820)

[Hackaday article page with dark theme, yellow accent search button, skull logo, and navigation bar with article hero image of vintage BeOS computer setup](https://design.withfudge.com/share/pin-3820)

[![Nested comment thread on dark background with yellow author names, reply links, and indented comment boxes with subtle borders](https://pin.fontofweb.com/3346?format=jpg)](https://design.withfudge.com/share/pin-3346)

[Nested comment thread on dark background with yellow author names, reply links, and indented comment boxes with subtle borders](https://design.withfudge.com/share/pin-3346)

[![Privacy settings modal with dark grey surface, yellow Accept All button, toggle switches, and tab navigation with blue active state](https://pin.fontofweb.com/3821?format=jpg)](https://design.withfudge.com/share/pin-3821)

[Privacy settings modal with dark grey surface, yellow Accept All button, toggle switches, and tab navigation with blue active state](https://design.withfudge.com/share/pin-3821)

## Overview

Hackaday presents a dark, high-contrast editorial experience built for technology enthusiasts and maker culture. The visual system centers on a near-black canvas with pure white typography, creating immediate readability and a distinctive nocturnal atmosphere that reflects the site's hacker ethos. A single warm yellow accent color drives all interactive elements, from search buttons to author links and reply actions, providing consistent wayfinding without visual clutter.

The design prioritizes content density and scannability. Article pages lead with bold, tightly-tracked headlines set in a heavy weight of Proxima Nova, followed by prominent hero imagery and clean metadata lines. The layout maintains a clear two-column structure on desktop, with the main editorial stream occupying the left and a sidebar containing search, advertisements, and newsletter signup on the right. Community discussion appears in deeply nested comment threads with subtle border delineation, preserving the conversational hierarchy through indentation and alternating surface tones rather than heavy chrome.

## Colors

The palette is intentionally restrained, relying on value contrast rather than chromatic variety to create visual impact. The dark foundation allows photography and technical imagery to stand out without competition.

| token | value | use |
|---|---|---|
| canvas | #1a1a1a | Primary page background, article canvas, deepest surface |
| surface | #2a2a2a | Comment boxes, cards, modal backgrounds, elevated panels |
| surface-elevated | #333333 | Toggle backgrounds, active control states, hover surfaces |
| ink | #ffffff | Primary text, headlines, navigation, logo, primary content |
| ink-muted | #a0a0a0 | Timestamps, secondary metadata, placeholder text, disabled hints |
| action | #f5c518 | Primary buttons, search submit, author names, reply links, active accents |
| action-hover | #e6b800 | Button hover states, link hover, interactive feedback |
| border | #404040 | Visible dividers, comment box outlines, control borders |
| border-subtle | #333333 | Hairline separators, navigation underlines, inactive tab borders |

The dark mode is not an alternate theme but the sole expression. Light values appear only in text and occasional photographic backgrounds. The yellow accent derives from industrial safety and warning color conventions, reinforcing the site's maker identity. Blue appears sparingly as a secondary interactive indicator, seen in modal tab selection states, but does not compete with the dominant yellow action language.

## Typography

The typographic system relies on Proxima Nova across all roles, exploiting its extensive weight range to create hierarchy without introducing additional families. The supplied font sources include Proxima Nova in Regular and Bold weights, plus Proximanova-800 as an additional heavy weight source. Mark Simonson designed Proxima Nova; it is available through Mark Simonson Studio LLC. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Proxima Nova | 3rem | 800 | 1.1 | -0.02em | Article headlines, page titles, major section headers |
| section-display | Proxima Nova | 2.25rem | 700 | 1.2 | -0.01em | Comment section titles, secondary page headings |
| body | Proxima Nova | 1rem | 400 | 1.6 | 0 | Article paragraphs, comment body text, descriptions |
| body-bold | Proxima Nova | 1rem | 700 | 1.6 | 0 | Emphasis within running text, inline strong statements |
| label | Proxima Nova | 0.875rem | 700 | 1.4 | 0.02em | Buttons, tags, category labels, form labels |
| navigation | Proxima Nova | 0.875rem | 700 | 1 | 0.04em | Primary navigation, uppercase section links |
| legal-copy | Proxima Nova | 0.75rem | 400 | 1.5 | 0 | Footer text, attributions, fine print, modal credits |

Display sizes use tight negative tracking for a compact, authoritative presence appropriate to technical journalism. Body text maintains generous line height for extended reading comfort. The 800 weight serves exclusively for maximum-impact headlines, while 700 handles navigation, labels, and secondary headings. No italic styles are employed in the visible system; emphasis relies on weight change and color shift.

## Layout

The page structure follows a classic editorial pattern with contemporary density. A full-width header contains the logo, primary navigation, and date display, separated from content by a thin horizontal rule. Below, the main content area employs an asymmetric two-column grid: the primary editorial stream occupies approximately two-thirds width, while the sidebar fills the remaining third.

Vertical rhythm is established through consistent section spacing of 4rem between major content blocks. Article pages sequence the headline, author metadata, social sharing row, hero image, and body text in a single flowing column. The sidebar stacks search, advertising, and newsletter modules with 1.5rem gaps between elements.

Comment threads introduce a nested indentation system. Each comment level receives additional left margin, creating visual hierarchy through spatial relationship rather than typography change. Top-level comments sit flush to the content edge; replies indent progressively. Comment boxes themselves use internal padding of 1rem, with subtle border delineation separating individual contributions.

The header maintains fixed positioning considerations with generous vertical padding of 1rem, ensuring the skull-and-crossbones logo and navigation remain prominent without overwhelming the content. Navigation links distribute horizontally with even spacing, set in uppercase with expanded tracking for a technical, utilitarian character.

## Visual language

The aesthetic communicates technical authority and maker-culture authenticity through deliberate restraint. The dark canvas evokes terminal interfaces and late-night workshop sessions, while the warm yellow accent recalls safety markings and measurement tools. No gradients, shadows, or glassmorphism effects appear; surfaces are flat and honest.

Imagery plays a central role in article presentation. Hero photographs receive full-width treatment within the content column, surrounded by generous white space equivalent to the content gap. The visual system does not apply rounded corners to photographs, maintaining rectilinear precision that echoes technical documentation.

Iconography appears minimal and functional. Social sharing uses simple glyph representations. The search button abandons iconography entirely in favor of explicit "SEARCH" text, reinforcing the utilitarian directness. The skull logo in the header provides the sole expressive graphic element, rendered in white against the dark canvas with clean vector precision.

Interactive states rely on color shift rather than dimensional change. Buttons and links transition to darker yellow values on hover. Focus states would benefit from visible outlines in the accent color, though these are not visible in static view.

## Components

### Primary button

- Anatomy: Text label centered within a rectangular container
- Surface and text color: Background uses action yellow (#f5c518); text uses canvas dark (#1a1a1a)
- Typography: label token, uppercase, bold
- Shape: Slight rounding at 0.25rem border radius
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Full-width in modal contexts; inline in sidebar
- Variants: The search submit button demonstrates this treatment; modal "Accept All" uses identical styling

### Secondary button

- Anatomy: Text label within a subdued container
- Surface and text color: Background uses surface-elevated (#333333); text uses ink white (#ffffff)
- Typography: label token, bold
- Shape: Matching 0.25rem border radius
- Spacing: Identical padding to primary button
- Variants: The "Save Settings" modal button demonstrates this treatment

### Comment thread

- Anatomy: Nested containers with author header, timestamp, body text, and action footer
- Surface and text color: Background uses surface (#2a2a2a); author names use action yellow; body uses ink white; timestamps use ink-muted
- Typography: Author names in body-bold; timestamps in legal-copy; body text in body; reply links in label with action color
- Shape: Rectangular with 0.25rem radius and 1px border in border color
- Spacing: 1rem internal padding; nested replies receive additional left indentation
- Composition: Sequential vertical stack with progressive indentation per reply depth
- Hierarchy: Top-level comments span full width; each reply level indents further, creating visual conversation threading

### Search module

- Anatomy: Text input field with adjacent submit button
- Surface and text color: Input background uses surface (#2a2a2a); placeholder text uses ink-muted; button uses action yellow with canvas text
- Typography: Input uses body; button uses label uppercase
- Shape: Input has 0.25rem radius; button matches with sharp left edge where joined
- Spacing: Tight coupling between input and button with no visible gap
- Composition: Stacked below section header with underline accent

### Navigation bar

- Anatomy: Logo mark, text logo, horizontal link list, and date display
- Surface and text color: Transparent or canvas background; all text in ink white
- Typography: Navigation token for links; section-display for logo wordmark
- Shape: Full-width with bottom border in border-subtle
- Spacing: 1rem vertical padding; horizontal distribution with space-between for logo and date
- Composition: Logo left-aligned; navigation centered; date right-aligned

### Modal dialog

- Anatomy: Header with title and close control; tab navigation; content sections with toggle controls; footer action bar
- Surface and text color: Surface background; ink white text; action yellow for active tab indicator and primary button
- Typography: Section-display for title; label for section headers; body for descriptions; legal-copy for footer attribution
- Shape: Rounded panel corners at 0.25rem; internal cards with borders
- Spacing: Generous internal padding; 1.5rem between sections
- Composition: Centered overlay with scrim; tab bar with equal-width segments; toggle controls right-aligned within each section

## Responsive behavior

The two-column editorial layout should collapse to single column on viewports below approximately 768px, with the sidebar modules stacking below the main content. Navigation should condense to a hamburger menu or priority-plus pattern, preserving the skull logo and search access.

Comment thread indentation should reduce by half on narrow viewports to preserve readable line lengths. Nested replies beyond three levels may flatten to sequential display with visual connectors replacing spatial indentation.

Hero images should maintain aspect ratio while scaling to full viewport width on mobile, eliminating side margins. Typography should scale down proportionally: hero-display to 2rem, section-display to 1.75rem, with body remaining at 1rem for readability.

Touch targets for buttons and toggles should expand to minimum 44px height on mobile devices. The modal dialog should become full-screen or near-full-screen on narrow viewports, with stacked action buttons replacing the side-by-side desktop arrangement.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and only theme; light mode would fundamentally alter the site's character
- The single yellow accent for all interactive elements; do not introduce additional accent colors
- The heavy weight contrast between display and body text; this creates immediate scannability
- The skull logo mark as the distinctive brand identifier
- The nested comment indentation system; this is core to community readability

### Avoid
- Adding shadows or dimensional effects; the flat aesthetic is intentional
- Rounding corners on photographs or hero images; keep imagery rectilinear
- Using the 800 weight for anything below headline scale; it becomes illegible at small sizes
- Introducing serif typefaces; the Proxima Nova system is complete
- Multiple accent colors; the yellow monopoly on interactivity is a strength

### Recommended build order
1. Establish the dark canvas and typography scale with Proxima Nova loaded at 400, 700, and 800 weights
2. Build the navigation bar with logo, links, and date display
3. Implement the article layout with headline, metadata, hero image, and body text flow
4. Add the sidebar with search module and newsletter signup
5. Create comment thread components with nested indentation
6. Implement modal system for settings and consent management
7. Add interactive states: hover, focus, active, with color transitions

### Accessibility
- Ensure yellow action elements maintain minimum 4.5:1 contrast against dark backgrounds; the #f5c518 on #1a1a1a combination should be verified
- Provide visible focus indicators for keyboard navigation, using the action color with sufficient outline width
- Respect reduced-motion preferences for any implemented transitions
- Ensure comment nesting does not create excessive horizontal scrolling at high zoom levels
- Use semantic heading hierarchy: h1 for article titles, h2 for section headings, h3 for comment author names

## Scope note

This guide covers the article page, comment thread, and modal dialog surfaces visible in the supplied images. Header navigation, search functionality, and advertising modules are described as they appear. Footer content, homepage layout, archive listings, and mobile-specific adaptations are not represented. Measurements are practical adaptation targets based on visible proportions. Motion, animation, form validation states, and dark-mode toggle behavior are not addressed.
