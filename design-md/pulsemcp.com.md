# How pulsemcp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pulsemcp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full page view showing the dark hero banner with wireframe globe, navigation bar, and featured client cards in a three-column grid layout](https://pin.fontofweb.com/6605?format=jpg)](https://design.withfudge.com/share/pin-6605)

[Full page view showing the dark hero banner with wireframe globe, navigation bar, and featured client cards in a three-column grid layout](https://design.withfudge.com/share/pin-6605)

[![Close-up of the client card grid showing bordered cards with app icons, titles, descriptions, star counts, and dates in a clean white background](https://pin.fontofweb.com/6606?format=jpg)](https://design.withfudge.com/share/pin-6606)

[Close-up of the client card grid showing bordered cards with app icons, titles, descriptions, star counts, and dates in a clean white background](https://design.withfudge.com/share/pin-6606)

## Overview

PulseMCP presents a developer-focused directory interface that contrasts theatrical branding with utilitarian information density. The design opens with a full-bleed dark hero banner featuring an abstract wireframe globe rendered in white lines against deep indigo, with oversized white typography announcing the page purpose. Below this dramatic entry point, the interface shifts to a clean white canvas where content is organized into bordered cards arranged in a responsive grid. The visual system relies on a stark light-dark dichotomy: the hero commands attention through scale and color saturation, while the content area prioritizes scannability and hierarchy through careful spacing, consistent card containers, and a restrained typographic palette. Navigation sits in a minimal dark bar with text links and a newsletter call-to-action, maintaining the technical, no-nonsense character appropriate for a developer tools directory. The overall impression is of a curated, authoritative resource that balances personality with function.

## Colors

The color system operates on a high-contrast binary with a single accent family. Dark surfaces dominate the hero and navigation; light surfaces carry the content. The muted indigo appears in both dark and light contexts, functioning as brand glue.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary dark background for navigation and page base |
| surface | #FFFFFF | Content card backgrounds and main reading area |
| hero-surface | #101D70 | Hero banner background with wireframe globe imagery |
| ink | #080D11 | Primary text on light surfaces, near-black for maximum contrast |
| muted-ink | #302F7D | Secondary text, card titles, and interactive elements on light backgrounds |
| border | #D7D7D9 | Card borders and structural dividers |
| border-light | #E5E7EB | Subtle borders for buttons and secondary containers |
| accent-cyan | #302F7D | Brand accent appearing in links, titles, and highlighted states |
| action-bg | #F2F2F2 | Button and interactive element backgrounds |
| action-text | #302F7D | Button text and interactive foreground |

The hero banner establishes the emotional tone through its deep indigo (#101D70) paired with pure white typography. This is not a gradient but a flat, saturated field that lets the wireframe illustration create texture. The transition from hero to content is abrupt and intentional: the white canvas immediately signals a shift from brand statement to functional browsing. The muted indigo (#302F7D) serves as the primary interactive color, appearing in card titles, star counts, and link text. It is dark enough to read comfortably on white yet distinctive enough to feel branded. Border colors stay cool and neutral, with #D7D7D9 providing visible card definition without visual weight. The near-black ink (#080D11) is reserved for section headings and primary emphasis, creating a clear hierarchy above the indigo body text.

## Typography

Three font families create a clear functional division: Work Sans carries all interface and body text, Source Serif Pro provides editorial weight for section headings, and Overpass Mono appears sparingly for technical labels. The system is sized for scannability at directory scale, with dramatic contrast between the hero display and body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Work Sans | 7.5rem | 700 | 0.53 | normal | Hero banner page title |
| section-display | Source Serif Pro | 3rem | 700 | 1 | normal | Section headings like "Featured" |
| body | Work Sans | 1rem | 400 | 1.5 | normal | Card descriptions and primary content |
| body-small | Work Sans | 0.875rem | 400 | 1.5 | normal | Secondary descriptions and metadata |
| label | Work Sans | 0.75rem | 400 | 1.5 | normal | Dates, counts, and fine print |
| navigation | Work Sans | 1rem | 400 | 1.5 | normal | Top navigation links |
| mono-label | Overpass Mono | 1.25rem | 400 | 1.5 | normal | Technical badges and code-like labels |

The hero display at 120px (7.5rem) with a tight 64px line height creates an intentionally compressed, monumental presence that fills the banner horizontally. This is the system's most distinctive typographic moment. Source Serif Pro Bold at 48px (3rem) introduces editorial contrast for section headings, breaking the geometric sans-serif rhythm with classical stroke contrast. Work Sans Regular serves as the workhorse at 16px (1rem) for body text, with 14px (0.875rem) and 12px (0.75rem) steps for secondary information. The 20px (1.25rem) Overpass Mono appears in navigation contexts for technical credibility. Verify licensing for these families before production use. Source Serif Pro is designed by Frank Grießhammer and distributed by Adobe Systems Incorporated.

## Layout

The page follows a stacked vertical architecture with three distinct zones: announcement bar, navigation, hero, and content grid. Each zone occupies the full viewport width with internal constraints that create consistent reading margins.

The announcement bar sits at the very top with a dark background and centered text, serving as a persistent promotional surface. Below it, the navigation bar spans full width with a centered content area approximately 960px wide, containing the Pulse logo mark on the left, primary navigation links in the center, and a newsletter button on the right. The navigation uses generous horizontal padding (96px on desktop) to push content toward the center.

The hero banner breaks the centered constraint, extending edge to edge with internal padding that matches the content area's left alignment. The "MCP CLIENTS" title is positioned left-aligned within this full-bleed container, with the wireframe globe illustration rendered as a background or overlay element that spans the entire banner height.

Below the hero, the content area returns to a centered constraint with substantial top padding (96px) and consistent horizontal margins. The "Featured" section heading sits flush left above a three-column grid of client cards. Grid gaps appear consistent at approximately 32px, with cards maintaining equal width within their columns. Each card contains internal vertical stacking: icon and title row, description paragraph, and footer row with date and star count.

The overall spatial rhythm uses multiples of 8px (0.5rem) with key structural values at 16px, 24px, 32px, 48px, and 96px. Section breaks are generous, with 96px vertical padding creating clear zone separation without visible dividers.

## Visual language

The visual character balances technical authority with approachable curation. The wireframe globe in the hero suggests global connectivity and network infrastructure without literal illustration, rendered as white line art that feels both precise and ethereal against the deep indigo field. This is the site's only decorative imagery; everything else is functional.

Client cards rely on app icons as their primary visual anchors. These icons appear as rounded-square images (approximately 48px) with subtle shadows or borders, sitting beside the application name and publisher. The card containers themselves are minimal: white backgrounds, 2px cool-gray borders, and 4px corner radius. There is no shadow system, no hover elevation, no depth beyond the flat border definition. This restraint keeps focus on the content hierarchy.

Star counts appear with a small outline star icon, rendered in the same muted indigo as the count text. Dates sit at the bottom left of each card in the same size and color, creating a consistent footer pattern across all cards. The overall effect is of a well-maintained spreadsheet given just enough design treatment to invite browsing: information-dense but not cluttered, consistent but not monotonous.

The color temperature stays cool throughout. Even the "warm" accents in app icons (the orange of 5ire, the red of Cherry Studio) are contained within their icon boundaries, preventing the overall palette from shifting. The design embraces this neutrality, letting user-submitted content provide whatever chromatic variety appears.

## Components

### Client card

Anatomy: Each card contains a header row with app icon (left), title and publisher (stacked right), a horizontal rule or spacing break, a description paragraph, and a footer row with date (left) and star count with icon (right).

Surface: White background (#FFFFFF) with 2px solid border in #D7D7D9. No shadow, no hover state visible in static view.

Typography: Title uses body-small (0.875rem) in muted indigo (#302F7D) with Regular weight. Publisher name appears below in the same size or slightly smaller, in a lighter weight or muted color. Description uses body (1rem) Work Sans Regular in #302F7D with 1.5 line height. Date and star count use label (0.75rem) in the same muted indigo.

Shape: 4px border radius on the card container. App icons appear as rounded squares, approximately 8px radius or slightly more.

Spacing: 16px internal padding on all sides. The header row icon sits with 12-16px right margin before the title stack. Description paragraph has 16px top margin from the header. Footer sits at the bottom with comfortable bottom padding.

Composition: Vertical stack with clear information hierarchy. The star count and date create a baseline alignment across cards in the same row, though descriptions vary in length.

### Hero banner

Anatomy: Full-bleed container with background illustration, oversized page title, and optional subtitle or description below.

Surface: Flat indigo background (#101D70) with white wireframe globe pattern overlay. Title in pure white (#FFFFFF).

Typography: hero-display token at 7.5rem, Work Sans Bold, compressed line height creating a solid block of text.

Shape: No border radius. Full viewport width with internal padding matching content area alignment.

Spacing: Generous vertical padding, approximately 96px or more, with title positioned toward the vertical center.

### Navigation bar

Anatomy: Logo mark ("pulse" with pulse-line icon), primary links (MCP Servers, MCP Clients, Posts, Work With Us), and newsletter button.

Surface: Near-black background (#000000) or transparent over dark hero. Links in #080D11 or white depending on scroll position.

Typography: navigation token, Work Sans Regular 1rem. Newsletter button uses slightly smaller text with border.

Shape: Newsletter button has 4px radius, 1px border, and 8px 12px padding.

### Submit button

Anatomy: Icon plus text label positioned at the top right of the content area, near the hero/content boundary.

Surface: Light gray background (#F2F2F2) with 1px border in #E5E7EB.

Typography: body-small or navigation size, Work Sans Regular.

Shape: 4px border radius, 8px 16px padding.

### Section heading

Anatomy: Text only, left-aligned, with no decorative elements.

Surface: Transparent over white content background.

Typography: section-display token, Source Serif Pro Bold at 3rem, #080D11 ink color.

Spacing: 48px bottom margin before the card grid begins.

## Responsive behavior

The three-column card grid should collapse to two columns at a medium breakpoint (approximately 768px) and to a single column on narrow viewports. Card internal spacing can remain constant, but horizontal margins should reduce from 96px to 32px or 16px to preserve readable line lengths.

The hero title at 7.5rem will require scaling down on smaller screens. A reduction to 3rem on mobile maintains hierarchy while preventing overflow. The wireframe globe background should remain visible but may reposition to avoid obscuring text.

Navigation links should collapse to a horizontal scroll or hamburger menu on narrow screens, as the full set of four links plus newsletter button will not fit in mobile widths. The announcement bar text may truncate with an ellipsis or wrap to multiple lines.

Card descriptions vary significantly in length; on narrow screens, the vertical rhythm should use consistent spacing between cards rather than attempting to align footers across rows.

## Practical implementation guidance

### Preserve
- The stark hero-to-content transition: the abrupt shift from dark indigo to white canvas is a defining character moment
- Source Serif Pro for section headings; the serif contrast against geometric sans-serif body is essential to the editorial tone
- 2px card borders in cool gray; heavier than typical 1px borders, they create visible structure without shadow
- The wireframe globe illustration style for any hero imagery
- Consistent card footer pattern: date left, star count right, both in small muted text

### Avoid
- Adding shadows to cards; the flat border system is intentional
- Using the hero indigo for body text or backgrounds outside the banner; it is too saturated for reading
- Replacing Work Sans with a more decorative sans-serif; the neutral technical tone depends on its restraint
- Center-aligning the hero title; the left alignment creates asymmetric tension with the globe illustration
- Making cards taller than their content requires; the variable description lengths are acceptable

### Recommended build order
1. Establish the color tokens and typography scale, particularly the hero display and section display sizes
2. Build the hero banner with full-bleed indigo background and white title
3. Implement the card component with border, padding, and internal stack layout
4. Create the three-column grid with consistent gaps
5. Add navigation with logo, links, and newsletter button
6. Refine spacing tokens across all sections for vertical rhythm

### Accessibility
- The hero white-on-indigo combination meets WCAG AA contrast requirements but should be verified at the exact sizes used
- Card borders in #D7D7D9 on white (#FFFFFF) may be difficult for low-vision users to perceive; consider a slightly darker border or ensuring cards have sufficient internal whitespace to be distinguishable without border perception
- The 0.53 line height on hero-display creates potential clipping with diacritics or descenders; increase to 0.9 if content includes non-ASCII characters
- Interactive elements (cards, buttons, links) should have visible focus indicators beyond default browser styles
- Star icons should have text alternatives or aria-labels indicating the count purpose

## Scope note

This guide covers the MCP Clients directory page including the hero banner, navigation, featured section, and client card grid. The announcement bar, newsletter signup flow, individual client detail pages, and any filtering or search interfaces are not represented in the supplied material. Motion, hover states, and mobile adaptations are not documented and should be designed to maintain the established visual restraint.
