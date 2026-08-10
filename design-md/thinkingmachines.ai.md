# How thinkingmachines.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thinkingmachines.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Close-up of body text with serif typeface and highlighted passages showing inline citation style](https://pin.fontofweb.com/10153?format=jpg)](https://design.withfudge.com/share/pin-10153)

[Close-up of body text with serif typeface and highlighted passages showing inline citation style](https://design.withfudge.com/share/pin-10153)

[![Wide blog layout with left sidebar navigation, main article column, and right margin notes with citations](https://pin.fontofweb.com/10152?format=jpg)](https://design.withfudge.com/share/pin-10152)

[Wide blog layout with left sidebar navigation, main article column, and right margin notes with citations](https://design.withfudge.com/share/pin-10152)

[![Hero title treatment with large centered display type and article metadata below the fold](https://pin.fontofweb.com/10151?format=jpg)](https://design.withfudge.com/share/pin-10151)

[Hero title treatment with large centered display type and article metadata below the fold](https://design.withfudge.com/share/pin-10151)

[![Technical article section with italic subheading, bullet lists, and margin notes with academic citations](https://pin.fontofweb.com/10150?format=jpg)](https://design.withfudge.com/share/pin-10150)

[Technical article section with italic subheading, bullet lists, and margin notes with academic citations](https://design.withfudge.com/share/pin-10150)

## Overview

Thinking Machines Lab presents itself as a research-forward publication that treats AI discourse with the visual gravity of academic journals. The design system centers on a stark white canvas populated by classical serif typography, creating an immediate impression of intellectual authority and editorial restraint. The interface organizes content through an asymmetric three-column architecture: a narrow left sidebar for document navigation, a generous central column for the main article, and a right margin reserved for citations and tangential notes. This layout evokes printed scholarly traditions while functioning as a native digital reading experience.

The visual hierarchy relies on dramatic scale contrasts between the monumental hero titles and the understated utility of navigation elements. Body text maintains a comfortable reading measure through deliberate line length and leading, while the sidebar and margin notes recede into supporting roles through reduced size and muted color. The overall effect is one of studied minimalism—every element serves the text, and ornamentation is stripped away in favor of typographic refinement. The system successfully bridges the gap between technical research documentation and accessible public communication, using classical design cues to signal credibility without sacrificing readability.

## Colors

The palette is deliberately austere, built on a near-monochrome foundation with strategic accent deployment. The system avoids decorative color in favor of typographic hierarchy and spatial organization to create visual interest.

| token | value | use |
|---|---|---|
| ink | #282828 | Primary body text, headings, and main content |
| muted-ink | #504945 | Sidebar navigation text, inactive states |
| secondary-ink | #676767 | Links, captions, metadata, and margin notes |
| canvas | #FFFFFF | Page background, card surfaces, header |
| surface | #000000 | Dark mode backgrounds, inverse elements |
| accent | #15577A | Interactive emphasis, technical highlights |
| link | #676767 | Default link color in body and navigation |

The dominant relationship pairs near-black ink against pure white canvas, producing high contrast for extended reading. The muted-ink token serves navigation and secondary text, stepping back from the main content without disappearing. Secondary-ink handles the critical role of citations, dates, and metadata—information that must be findable without competing with the primary narrative. The accent color appears sparingly, reserved for technical indicators or interactive states that require distinct signaling. No gradients or shadows are employed; depth and hierarchy emerge entirely from spacing, scale, and weight. The photographic content in articles introduces warmer tones that provide the only color variation in the experience, allowing imagery to breathe against the neutral ground.

## Typography

The system employs a carefully orchestrated pairing of type families: Iowan Old Style BT for all editorial content, GT America for interface and metadata, and Chakra Petch for the distinctive wordmark. The design facts also register Applesystem, Arial, and Times as present in the source, though these appear to serve fallback or system-stack roles rather than primary design functions. This structure creates clear role separation while maintaining visual coherence.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Iowan Old Style Bt | 3.75rem | 600 | 1.4 | normal | Article titles, major page headings |
| section-display | Iowan Old Style Bt | 1.875rem | 600 | 1.4 | normal | Section headings within articles |
| subheading-italic | Iowan Old Style Bt-Italic | 1.375rem | 400 | 1.4 | normal | Subsection headings, emphasized labels |
| body | Iowan Old Style Bt | 1.0625rem | 400 | 1.6 | normal | Paragraphs, lists, main reading |
| body-bold | Iowan Old Style Bt | 1.0625rem | 700 | 1.6 | normal | Strong emphasis, link text in body |
| caption | GT America | 0.9375rem | 400 | 1.133 | normal | Image captions, technical labels |
| label | GT America | 0.8125rem | 400 | 1.4 | normal | Tags, small metadata |
| navigation | GT America | 0.8125rem | 400 | 1.4 | normal | Header links, sidebar items |
| logo | Chakra Petch | 3.6125rem | 400 | 1.3 | 0.05em | Wordmark, brand identifier |

Iowan Old Style BT, designed by Natalia Vasilyeva and distributed by Para Type Ltd, provides the editorial voice with its classical proportions and sturdy construction. The Regular weight handles body text, while Semibold (600) serves display sizes and Bold (700) provides emphasis. The Italic variant appears at a dedicated subheading size, creating a distinct voice for secondary headings without introducing a new family. GT America, designed by Noel Leu and published by Grilli Type, supplies the utilitarian sans-serif voice for all interface elements—its compact proportions and even color suit navigation and metadata roles. Chakra Petch delivers the technical, constructed character appropriate for the brand wordmark. Applesystem, Arial, and Times appear in the source as system or fallback families. Verify licensing for these families before production use.

## Layout

The page architecture follows a three-column asymmetric grid that prioritizes reading flow while accommodating scholarly apparatus. The central content column carries the primary narrative, flanked by functional columns on either side.

The header spans full width with a simple flex arrangement: the wordmark anchored left, primary navigation right. Below this, the main content area introduces the three-column structure. The left sidebar occupies a narrow fixed proportion, containing the document outline with section links. The central article column receives the majority of available width, constrained by maximum margins that create comfortable line lengths for serif body text. The right margin column houses citations, footnotes, and supplementary notes that correspond to markers in the main text.

Vertical rhythm is established through consistent spacing multiples. The main content area receives top padding of 3.375rem, creating breathing room below the header. Article sections are separated by substantial margins—section headings receive 3.1rem top margin and 1.2rem bottom margin, establishing clear document structure. Paragraphs maintain 1.45rem bottom spacing, creating distinct blocks without excessive separation. The sidebar navigation sits with internal padding that aligns to the main content's top edge, creating visual continuity across columns.

The layout adapts through fluid margins on the central column. At wider viewports, the side margins expand to 20.875rem each, centering the reading experience. The sidebar and margin notes remain anchored to their respective edges, maintaining the three-column relationship. This approach prioritizes content legibility over filling available space.

## Visual language

The visual character of Thinking Machines Lab derives from editorial tradition reinterpreted for digital scholarship. The design language avoids contemporary interface conventions—no cards with heavy shadows, no rounded containers beyond subtle corner treatments, no gradient backgrounds. Instead, the system relies on the authority of classical typography and the clarity of grid-based organization.

Imagery and diagrams appear as inline elements within the article flow, typically spanning the full width of the central column. Figures receive modest padding and are separated from text by consistent vertical spacing. Captions sit below images in the smaller GT America size, maintaining the metadata hierarchy. The overall treatment of media is restrained: images speak for themselves without decorative frames or hover effects.

The sidebar navigation employs a bullet indicator for the active section, creating minimal visual noise while providing orientation. Navigation items stack vertically with comfortable spacing, their muted color allowing them to serve as a persistent map without demanding attention. The right margin notes use a smaller type size and lighter color weight, establishing clear subordination to the main text while remaining legible for readers who seek citations or elaboration.

The wordmark treatment deserves particular attention: set in Chakra Petch with wide letterspacing, it presents a constructed, technical character that contrasts with the organic warmth of the serif body. This tension between institutional identity and editorial voice characterizes the entire system—scholarly yet contemporary, rigorous yet accessible.

## Components

### Header

- **Anatomy**: Full-width bar containing wordmark left, horizontal navigation right
- **Surface**: Transparent over canvas, no border or shadow
- **Typography**: Wordmark uses `{typography.logo}`; navigation links use `{typography.navigation}` in muted-ink
- **Spacing**: Internal padding of 0.33rem horizontal on container, navigation items spaced by gap
- **Composition**: Flex row with space-between alignment, vertically centered

### Article Hero

- **Anatomy**: Centered title block with article metadata below
- **Typography**: Title uses `{typography.hero-display}` in ink; author and date use `{typography.caption}` in secondary-ink
- **Spacing**: Title receives 1.5rem top margin; metadata sits 1.5rem below title with additional vertical space before body
- **Composition**: Centered alignment, maximum width constrained to reading measure

### Sidebar Navigation

- **Anatomy**: Vertical list of section links with bullet indicator for active item
- **Typography**: Uses `{typography.navigation}` in muted-ink; active item inherits ink color
- **Spacing**: List items receive 0.7rem bottom margin; left padding of 1.3rem creates indent hierarchy
- **Composition**: Fixed position or sticky behavior at appropriate scroll position

### Body Content

- **Anatomy**: Flowing paragraphs, hierarchical headings, bulleted lists, inline links
- **Typography**: Body uses `{typography.body}`; bold emphasis uses `{typography.body-bold}`; h2 uses `{typography.section-display}`; h3 uses `{typography.subheading-italic}`
- **Spacing**: Paragraphs separated by 1.45rem bottom margin; h2 receives 3.1rem top and 1.2rem bottom; h3 receives 2.8rem top and 1.05rem bottom
- **Composition**: Left-aligned, maximum width for optimal serif reading measure

### Margin Notes

- **Anatomy**: Numbered citations and extended notes aligned to right margin
- **Typography**: Uses `{typography.label}` in secondary-ink
- **Spacing**: Corresponds to markers in main text; vertical position aligned to reference point
- **Composition**: Sits outside main column, accessible without interrupting reading flow

### Figures and Captions

- **Anatomy**: Image or diagram with caption below
- **Surface**: No border or background; image sits directly on canvas
- **Typography**: Caption uses `{typography.caption}` in secondary-ink
- **Spacing**: Figure receives 0.75rem vertical padding; 1.5rem top and 1.8rem bottom margin separates from text
- **Shape**: Subtle 0.75rem radius on container when applicable

### Inline Links

- **Anatomy**: Text links within body paragraphs and navigation
- **Typography**: Body links use `{typography.body-bold}` in secondary-ink; navigation links use `{typography.navigation}`
- **States**: Default color secondary-ink; no visible underline by default in navigation

## Responsive behavior

The three-column layout presents clear adaptation requirements for narrower viewports. At intermediate widths, the right margin notes should collapse into inline footnotes or expandable annotations, preserving the scholarly apparatus without consuming horizontal space. The left sidebar may transition to a collapsible table of contents, perhaps triggered by a persistent control in the header.

The central article column should maintain comfortable reading measure as the primary constraint. As viewport narrows, side margins compress before content width sacrifices legibility. Typography scales down modestly—hero display may reduce to 2.5rem, section display to 1.5rem—while body text preserves its 1.0625rem size for readability.

Touch targets in navigation require expansion on mobile, with adequate vertical padding for finger interaction. The header navigation likely collapses to a menu pattern, though the minimal item count may allow horizontal scrolling or stacked presentation instead.

## Practical implementation guidance

### Preserve
- The stark monochrome palette and high-contrast reading environment
- The three-column scholarly layout with persistent navigation and margin notes
- The classical serif voice for all editorial content; the sans-serif role for interface only
- Generous whitespace around headings and between sections
- The bullet-indicator pattern for active navigation state

### Avoid
- Introducing decorative backgrounds, gradients, or shadows that compromise the editorial flatness
- Using the display serif for interface elements or navigation
- Collapsing the sidebar and margin notes simultaneously on desktop; maintain at least one orienting element
- Excessive border radius or card-like containers that contradict the scholarly tone
- Color-coding sections or adding decorative accent bars

### Recommended Build Order
1. Establish the typographic foundation with Iowan Old Style BT and GT America loaded
2. Implement the three-column grid with central article column and placeholder side columns
3. Build the header with wordmark and primary navigation
4. Style the article hero with centered display title and metadata
5. Implement body content flow with proper heading hierarchy and paragraph spacing
6. Add sidebar navigation with active state indicator
7. Integrate margin notes with reference markers
8. Polish figure handling and caption typography
9. Implement responsive adaptations for intermediate and narrow viewports

### Accessibility
- Maintain the 4.5:1 contrast ratio between ink and canvas for body text
- Ensure navigation links have visible focus indicators despite the minimal default styling
- Provide skip links to main content and sidebar navigation for keyboard users
- Consider print stylesheets that preserve the scholarly layout and citation structure
- Test the three-column layout with screen magnification to ensure margin notes remain discoverable

## Scope note

This guide covers the blog article and homepage surfaces visible in the supplied images. Footer components, mobile navigation patterns, search functionality, and interactive data visualizations are not represented. The design system does not include dark mode specifications beyond the surface token. Measurements are derived from the desktop viewport widths captured; responsive breakpoints and behavior require additional verification.
