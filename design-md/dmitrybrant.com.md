# How dmitrybrant.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dmitrybrant.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full blog layout with left sidebar navigation, author header, serif body text, and centered tape cartridge photograph in article content area](https://pin.fontofweb.com/1475?format=jpg)](https://design.withfudge.com/share/pin-1475)

[Full blog layout with left sidebar navigation, author header, serif body text, and centered tape cartridge photograph in article content area](https://design.withfudge.com/share/pin-1475)

[![Close-up of article header in typewriter-style font with serif body paragraph and centered QIC-80 tape cartridge image on white background](https://pin.fontofweb.com/1474?format=jpg)](https://design.withfudge.com/share/pin-1474)

[Close-up of article header in typewriter-style font with serif body paragraph and centered QIC-80 tape cartridge image on white background](https://design.withfudge.com/share/pin-1474)

## Overview

Dmitry Brant's personal blog presents a deliberately anachronistic visual system that pairs mechanical-era display typography with classical editorial reading conventions. The design establishes immediate personality through its typewriter-inspired article headlines, rendered in Special Elite, while grounding the extended reading experience in Noto Serif's warm, bookish texture. The layout follows a traditional split-column blog structure: a narrow left sidebar houses navigation and metadata, while a generous right column carries the primary content. This arrangement evokes early personal websites and developer blogs, where utility and readability outweigh decorative flourish. The overall impression is of a craftsman's workshop—functional, uncluttered, and confident in its material choices. The restrained color palette, limited essentially to black text on white ground with subtle gray accents, reinforces the archival, text-first character of the site. Photography appears sparingly and centrally, treated as documentary record rather than atmospheric decoration.

## Colors

The color system is intentionally austere, deriving its character from typographic contrast rather than chromatic range. Every visible interface color serves a functional role in establishing hierarchy or providing subtle structural cues.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, article headlines, body copy, navigation links |
| canvas | #FFFFFF | Page background, content area ground, sidebar background |
| muted-ink | #3A3A3A | Secondary text, sidebar navigation items, date metadata, hover states |
| accent-warm | #8A8A8A | Tertiary text, borders, dividers, disabled or inactive states |
| surface-subtle | #F5F5F5 | Inline code backgrounds, subtle highlight bands, table stripes |

The palette operates in a single light mode with no dark variant visible. The near-absence of color directs attention entirely to typographic texture and content imagery. The warm gray of muted-ink prevents the secondary text from competing with primary content while maintaining sufficient contrast for legibility. The surface-subtle token appears only in contained, small-scale applications such as inline code spans, ensuring it never dominates the white field. Photographic content, such as the tape cartridge documentation images, introduces its own color temperature—cool blues, warm browns, metallic silvers—which provides the only chromatic variety in the reading experience. No accent colors are used for links, buttons, or calls to action; the design relies on underline conventions and typographic weight for interactive signaling.

## Typography

The type system unites four distinct families across three functional zones: mechanical display, editorial body, and technical annotation. This multi-family approach is central to the site's character, creating clear role separation through texture rather than size alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Special Elite | 2.5rem | 400 | 1.2 | -0.01em | Article headlines, major page titles |
| section-display | Noto Sans | 0.875rem | 700 | 1.4 | 0.05em | Sidebar section headings, category labels |
| body | Noto Serif | 1.125rem | 400 | 1.7 | 0 | Primary article paragraphs |
| body-small | Noto Serif | 1rem | 400 | 1.6 | 0 | Secondary paragraphs, captions, metadata |
| label | Noto Sans | 0.875rem | 400 | 1.4 | 0 | Navigation items, dates, tags |
| code | Inconsolata | 0.875rem | 400 | 1.5 | 0 | Inline code, technical terms, file paths |

Special Elite, a distressed typewriter face, serves exclusively for article headlines. Its irregular baseline and ink-spread texture create immediate tactile association with mechanical writing, establishing the blog's retrospective, hands-on thematic territory. The face is used at a substantial size for impact but with tight leading to maintain compact headline blocks.

Noto Serif carries the primary reading load. Its variable-width design and moderate contrast provide comfortable extended reading at the 1.125rem body size. The generous 1.7 line height creates ample breathing room between lines, compensating for the relatively large x-height and ensuring paragraph texture remains open and scannable.

Noto Sans handles all interface and wayfinding text—navigation, labels, section headings. Its neutral, humanist construction provides clean legibility at small sizes without competing with the more characterful display and body faces. The section-display variant uses uppercase transformation and positive tracking to create distinct structural markers in the sidebar.

Inconsolata appears only for technical literals—code snippets, file paths, system names. Its monospace rhythm clearly demarcates these elements from flowing prose, and its slightly condensed width prevents inline code from disrupting line measure.

Noto Sans and Noto Serif are credited to the Monotype Design Team, with Monotype Imaging Inc as vendor. Verify licensing for these families before production use. No designer or vendor attribution is available for Inconsolata or Special Elite.

## Layout

The page structure follows a fixed-proportion two-column arrangement that prioritizes content hierarchy through spatial allocation. The left sidebar occupies approximately one-third of the viewport width, while the main content column takes the remaining two-thirds. This asymmetry immediately establishes reading priority and creates the generous margins necessary for comfortable line lengths.

The sidebar contains three distinct zones stacked vertically: site identity and tagline at top, expandable navigation menu in the middle, and recent posts index at bottom. Each zone is separated by whitespace rather than ruled dividers, maintaining the clean, unbordered aesthetic. The navigation menu presents as a flat list with hierarchical disclosure—parent items reveal children through chevron indicators, suggesting accordion or dropdown behavior without visible chrome.

The main content column centers article text within a constrained measure, leaving substantial external margins. This creates the classical editorial "island" of text surrounded by negative space. Images break into this field at full column width, centered with caption space below. The article title receives prominent top spacing, establishing clear entry point before the body text begins.

Vertical rhythm is maintained through consistent paragraph spacing—approximately one line height between successive paragraphs—with additional space before section breaks or image insertions. The sidebar maintains tighter vertical packing, with navigation items separated by minimal padding to maximize scannable density.

No visible grid system governs the layout; proportions appear derived from traditional typographic measure rather than modular column systems. The overall effect is of a carefully composed manuscript page rather than a templated content feed.

## Visual language

The visual language derives from archival and documentary traditions rather than contemporary interface conventions. The typewriter headline treatment immediately signals personal, hand-crafted authorship—each article title appears as if typed on a mechanical device, with slight irregularities in letterforms that resist digital perfection. This mechanical texture contrasts deliberately with the smooth, refined curves of Noto Serif's body text, creating a dialogue between rough and polished, between making and reading.

Imagery follows a documentary mode. The tape cartridge photograph in the sample article is presented without border, shadow, or decorative frame—simply centered on the white ground with surrounding text. This treatment suggests technical illustration or archival record rather than editorial photography. Images appear to float in the text stream, their natural rectangular boundaries providing all necessary containment.

The absence of color accent, gradient, or dimensional effect throughout the interface reinforces a flat, material-honest aesthetic. There are no cards, no elevated panels, no rounded containers. The white page is the ground; black text is the figure; gray provides subtle hierarchy. This reduction to essentials creates a timeless quality that resists dating through trend association.

Interactive elements are similarly restrained. Links appear as underlined text without color shift, following classical convention. Navigation items show no visible hover states in the still view, suggesting either subtle opacity change or underline addition on interaction. The overall impression is of a system designed for longevity and content focus, where visual pleasure derives from typographic refinement and compositional balance rather than surface effects.

## Components

### Site header

The site header occupies the top of the sidebar column, presenting the author's name in a bold, compact treatment followed by a lighter tagline. The name appears to use a sans-serif face at moderate weight, while the tagline employs the same family at lighter weight or smaller size, creating immediate identity hierarchy. No logo mark or avatar accompanies the text, maintaining the typographic purity of the system.

### Sidebar navigation

The navigation presents as a vertical list of primary sections, each with optional child disclosure. Parent items with children display a downward chevron indicator, suggesting expandable accordion behavior. Items are separated by minimal vertical padding and no visible borders, relying on whitespace alone for separation. The active or current page receives no distinctive background treatment; selection may be indicated through weight change or subtle color shift. The "Software," "How To," "Data recovery," and "Musings" categories suggest a technical-practical focus for the blog's content organization.

### Recent posts list

Below navigation, a compact index of recent articles presents title and date in stacked arrangement. Titles use the body-small or label typography, while dates appear in muted-ink at smaller size. Each entry is separated by modest whitespace, creating scannable chronological feed. The section is headed by a section-display label reading "RECENT POSTS" in uppercase with letterspaced tracking.

### Article title

The article headline dominates the content column entry point, rendered in Special Elite at the hero-display size. The typewriter texture is most visible here, with irregular ink density and slight baseline variation creating distinctive character. Titles may run multiple lines; the sample shows a two-line headline with natural break points. No subtitle, dek, or summary paragraph follows the title—body text begins directly after appropriate spacing.

### Article body

Body paragraphs follow classical editorial convention: first-line indent absent, block paragraphs separated by blank line. The Noto Serif face at 1.125rem creates comfortable reading measure, with line length appearing to fall within optimal 60-75 character range. Inline links receive underline treatment without color change from body text. Inline code spans, such as the "ftape" reference in the sample, receive subtle background shading in surface-subtle and monospace rendering in Inconsolata.

### Content images

Photographic or illustrative content appears centered within the text column, breaking the left-aligned text flow. Images display at natural aspect ratio without cropping frame, surrounded by generous vertical spacing before and after. No border, shadow, or caption treatment is visible. The sample shows a QIC-80 tape cartridge photographed from above, its technical labels and mechanical details clearly legible—treated as documentary record rather than atmospheric decoration.

### Search interface

A "SEARCH..." label appears at the bottom of the sidebar, suggesting either a collapsed input field or link to search functionality. The uppercase treatment and ellipsis imply invocation of a separate interface rather than inline input.

## Responsive behavior

The two-column layout suggests clear breakpoint behavior for narrower viewports. At tablet and mobile widths, the sidebar would likely collapse to a header navigation or hamburger menu, with the main content column expanding to full width. The generous desktop margins would compress to maintain readable measure without excessive whitespace.

The typewriter headline at 2.5rem may require reduction at small viewport widths to prevent excessive line breaks and maintain impact. A reduction to 2rem or 1.75rem would preserve presence while respecting narrow screens.

Body text measure should remain constrained even as container widens; maximum line length should not exceed 75 characters to maintain reading comfort. This may require maintaining internal content margins or max-width constraints on the article container.

Image handling should preserve centered presentation and natural aspect ratio across all breakpoints. Touch targets for navigation disclosure chevrons should meet minimum 44px height for accessibility.

## Practical implementation guidance

### Preserve

- The distinctive typewriter headline treatment using Special Elite; this is the site's most immediately recognizable visual signature
- The generous body line height of 1.7, which creates the open, readable paragraph texture essential to extended reading
- The stark black-on-white palette with minimal gray hierarchy; color restraint is central to the archival character
- The documentary, unframed image treatment that lets technical content speak without decorative interference
- The classical block paragraph separation without first-line indents

### Avoid

- Adding color accents, gradient backgrounds, or shadow effects that would undermine the flat, material-honest aesthetic
- Rounding corners on containers or images; the system maintains sharp, typeset edges throughout
- Replacing the multi-family type system with a single font; the texture contrast between display, body, and interface roles is essential
- Centering body text or using justified alignment; the ragged right edge supports reading rhythm in long paragraphs
- Adding card-based containers or elevated panels that would introduce dimensional hierarchy where none exists

### Recommended build order

1. Establish the two-column grid with sidebar and main content proportions
2. Implement the type system with all four families at their designated roles and sizes
3. Style the article template with headline, body paragraph, and image treatments
4. Build the sidebar navigation with expandable section behavior
5. Add recent posts index and search placeholder
6. Refine spacing rhythm and vertical alignment between columns

### Accessibility

- Ensure sufficient color contrast for muted-ink text against canvas background; the #3A3A3A value should meet WCAG AA for small text
- Provide visible focus indicators for navigation links and interactive elements; the minimal styling requires deliberate focus treatment
- Maintain logical heading hierarchy with article title as h1 and section headings as h2
- Preserve underline convention for inline links to support colorblind users
- Ensure typewriter headline remains legible at all sizes; the distressed texture may reduce clarity for some readers

## Scope note

This guide covers the blog article and sidebar layout visible on the supplied page. Measurements are practical adaptation targets. The search functionality, archive pages, comment system, and any dark mode variant are not represented in the available material. Mobile breakpoint behavior and interactive states such as hover, focus, and active are inferred from the still view and should be verified in implementation.
