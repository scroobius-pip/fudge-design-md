# How borretti.me is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/borretti.me-design)

Last updated: 2026-08-10

## Captured pages

[![Fiction page with centered serif title 'Julia', horizontal rule separators, and multi-paragraph prose with decorative asterism dividers](https://pin.fontofweb.com/6266?format=jpg)](https://design.withfudge.com/share/pin-6266)

[Fiction page with centered serif title 'Julia', horizontal rule separators, and multi-paragraph prose with decorative asterism dividers](https://design.withfudge.com/share/pin-6266)

[![Articles index with minimal navigation, RSS subscription link in red, and chronologically ordered post list with dates and descriptions](https://pin.fontofweb.com/5548?format=jpg)](https://design.withfudge.com/share/pin-5548)

[Articles index with minimal navigation, RSS subscription link in red, and chronologically ordered post list with dates and descriptions](https://design.withfudge.com/share/pin-5548)

## Overview

borretti.me presents a deliberately restrained personal website built around the primacy of text. The visual system strips away nearly all decorative apparatus—no sidebars, no cards, no shadows, no rounded corners—to create an environment where long-form prose and chronological writing occupy center stage. The design philosophy draws from classical print traditions: generous margins, centered display typography, horizontal rules as the sole structural dividers, and a single restrained accent color reserved for actionable links. Every surface decision reinforces readability and temporal flow, whether encountering a single fiction piece or browsing years of articles. The site operates in a single light mode with no theme switching, presenting black text on white grounds with the confidence of ink on paper.

## Colors

The palette is austere by intention: two neutrals carry nearly all responsibility, with one accent reserved for subscription and interaction signals.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, titles, navigation, borders, horizontal rules |
| canvas | #FFFFFF | Page background, all content surfaces |
| muted-ink | #555555 | Secondary text: dates, descriptions, captions |
| accent | #C41E3A | RSS subscription link, actionable highlights |

The interface operates exclusively in light mode. The near-absence of color creates a photographic negative relationship with imagery: when photographs or illustrations appear, they carry full chromatic weight against the neutral field. The accent red appears sparingly—only where explicit user action is invited, preventing it from competing with prose. No dark mode, gradient, or shadow system is present. Borders and rules share the same ink value as body text, maintaining a unified tonal plane.

## Typography

The typographic system relies on a single serif family with weight controlled through size and spacing hierarchies rather than boldness.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | Georgia | 2rem | 400 | 1.2 | 0 | Centered article and page headings |
| section-title | Georgia | 1.25rem | 400 | 1.3 | 0 | Article list titles, subheadings |
| body | Georgia | 1rem | 400 | 1.6 | 0 | Prose paragraphs, primary content |
| caption | Georgia | 0.875rem | 400 | 1.4 | 0 | Dates, descriptions, metadata |
| navigation | Georgia | 0.875rem | 400 | 1.4 | 0 | Site header links, breadcrumbs |

All sizes derive from a 4px relative unit, producing clean rem values at whole-number multiples. The page-title at 2rem (32px) establishes clear dominance without shouting. Body text at 1rem (16px) with 1.6 line height creates comfortable reading measure for long paragraphs. The deliberate absence of bold weights across all roles means hierarchy depends on size contrast and spatial separation alone. Georgia serves as the sole typeface, its transitional serifs lending literary authority without ornament. Verify licensing for this family before production use.

## Layout

The layout follows a centered single-column model with fixed maximum width. Content occupies a narrow central band, leaving substantial margin on either side that scales with viewport but never collapses entirely.

The page header sits at the extreme top with minimal height, containing only navigation breadcrumbs and a single horizontal rule beneath. No logo, search, or utility cluster appears. Below this, page titles center horizontally with generous vertical breathing room, followed by another horizontal rule that formally separates identification from content.

Body paragraphs maintain consistent left alignment with no first-line indent, separated by standard paragraph spacing. Decorative asterisms—three-asterisk clusters centered on their own line—mark section divisions within prose, substituting for subheadings in fiction pieces.

The articles index presents a vertical stack of entries, each comprising a title, date in muted tone, and brief description. No pagination controls, filtering, or categorization sidebar appears; the chronological sequence itself provides organization.

Spacing tokens derive from the 0.25rem base unit: 1.5rem between related elements, 2rem between major sections, and paragraph spacing implicit in the body line height rather than explicit margin tokens.

## Visual language

The visual language communicates editorial restraint and temporal continuity. Every element earns its place through functional necessity rather than decorative impulse.

Horizontal rules function as the primary structural device: one beneath the header, one below page titles, implicitly marking transitions without visual weight. These 1px black lines span the full content width, their severity appropriate to a site treating text as sacred.

The asterism divider—three centered asterisks with internal spacing—appears within long prose to indicate narrative or thematic shifts. This classical convention, rare on contemporary websites, signals the author's print-native sensibility and invites slower reading.

Links in body text appear underlined in the standard browser convention, except the RSS subscription link which carries the accent color without underline, distinguishing it as a meta-action separate from content navigation. No hover state transformation is visible in still image; implementation should consider subtle underline removal or color shift.

The overall density is low. White space operates as active design material, framing each paragraph and list entry as a distinct reading unit. The absence of icons, badges, tags, or thumbnail images in the article index reinforces the primacy of language over visual scanning.

## Components

### Site header

- **Anatomy**: Horizontal breadcrumb trail with "Home" root, diamond separator, and current section label
- **Surface**: Transparent background, no border except the rule below
- **Typography**: `{typography.navigation}`, black text
- **Shape**: Full viewport width, content aligned to left margin of central column, `{rounded.panel}` corners
- **Spacing**: Compact vertical padding, 1px rule immediately below
- **Composition**: Linear left-to-right reading, no stacking or clustering

### Horizontal rule

- **Anatomy**: Single 1px line spanning content width
- **Surface**: `{colors.ink}` at full opacity
- **Spacing**: 2rem above and below where it separates major regions
- **Variants**: Title-separator variant with additional top margin; inline prose variant as asterism cluster

### Page title

- **Anatomy**: Single heading element, centered
- **Typography**: `{typography.page-title}`
- **Surface**: `{colors.ink}` on `{colors.canvas}`
- **Spacing**: Generous top margin below header rule, 2rem bottom margin above subsequent rule

### Article list item

- **Anatomy**: Linked title, date line, optional description
- **Typography**: Title uses `{typography.section-title}`; date and description use `{typography.caption}` in `{colors.muted-ink}`
- **Spacing**: 1.5rem between entries, no internal borders or backgrounds
- **Composition**: Title as primary click target, metadata subordinate and directly beneath

### Body paragraph

- **Anatomy**: Standard text block with no special markers
- **Typography**: `{typography.body}`
- **Spacing**: Implicit separation through line height; no explicit paragraph margin visible
- **Composition**: Left-aligned, full content width, no drop caps or pull quotes

### Accent link

- **Anatomy**: Inline text link with distinct color
- **Surface**: `{colors.accent}` text, no background change
- **Typography**: `{typography.body}` or `{typography.navigation}` depending on context
- **States**: Default appears without underline; consider underline on hover for accessibility

## Responsive behavior

The single-column layout adapts gracefully to narrower viewports by maintaining generous side margins as percentages rather than fixed values. The maximum content width should cap at approximately 680-720px for optimal reading measure, narrower than typical container widths to preserve line-length discipline.

Navigation breadcrumbs may truncate or wrap on very small screens, though the minimal element count makes this unlikely. Article list titles remain single-line where possible; descriptions may wrap naturally.

Font sizes should maintain their rem relationships across breakpoints rather than scaling down, as the base sizes are already conservative. The primary adaptation is margin reduction: side margins compress from substantial desktop values to minimal mobile padding while preserving content width proportions.

No breakpoint-specific component transformations are required; the design's simplicity eliminates hamburger menus, card stacks, or off-canvas patterns.

## Practical implementation guidance

### Preserve
- The centered single-column reading measure; resist widening beyond 720px
- The diamond separator in breadcrumb navigation as a distinctive detail
- The asterism divider as a prose section marker; do not replace with horizontal rules
- The absolute minimalism of the article index—no thumbnails, no excerpts beyond one line
- The single accent color's restricted use; do not expand it to headings or body text

### Avoid
- Adding backgrounds, borders, or cards to article list items
- Introducing bold weights where size hierarchy already suffices
- Multiple accent colors or gradient backgrounds
- Fixed navigation or sticky headers that would contradict the scroll-native experience
- Social sharing buttons, comment counts, or other engagement metrics

### Recommended build order
1. Establish the 4px base unit and maximum content width constraint
2. Implement Georgia-based type scale with page-title, body, and caption roles
3. Build site header with breadcrumb pattern and full-width horizontal rule
4. Create page-title component with centered alignment and surrounding rules
5. Develop body paragraph styles with 1.6 line height
6. Construct article list with title-caption-description stack
7. Add accent color exclusively to RSS/subscription links
8. Implement asterism divider as centered three-asterisk cluster

### Accessibility
- Ensure horizontal rules are implemented with semantic `hr` elements, not merely decorative borders
- Maintain underline on standard body links for colorblind users; the accent link may use additional visual distinction
- Preserve adequate touch targets on article list items despite the compact vertical spacing
- Consider `prefers-reduced-motion` for any future interactive enhancements

## Scope note

This guide covers the visible article index and fiction page surfaces. Footer content, individual article pages beyond the index listing, about pages, and any dark mode alternative are not represented. Measurements are practical adaptation targets.
