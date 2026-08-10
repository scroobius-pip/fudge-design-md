# How myanimelist.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/myanimelist.net-design)

Last updated: 2026-08-10

## Captured pages

[![Anime detail page information sidebar with dark background, white section headers, and blue accent links showing production metadata and statistics for Kaiju No. 8 Season 2](https://pin.fontofweb.com/799?format=jpg)](https://design.withfudge.com/share/pin-799)

[Anime detail page information sidebar with dark background, white section headers, and blue accent links showing production metadata and statistics for Kaiju No. 8 Season 2](https://design.withfudge.com/share/pin-799)

[![Anime detail page hero section with large promotional artwork, blue score badge, tab navigation bar, synopsis text block, and social sharing buttons on dark theme](https://pin.fontofweb.com/798?format=jpg)](https://design.withfudge.com/share/pin-798)

[Anime detail page hero section with large promotional artwork, blue score badge, tab navigation bar, synopsis text block, and social sharing buttons on dark theme](https://design.withfudge.com/share/pin-798)

[![Site footer with dark charcoal background, white signup CTA text, blue primary button, gray secondary button, social media icons, app store badges, and legal links row](https://pin.fontofweb.com/797?format=jpg)](https://design.withfudge.com/share/pin-797)

[Site footer with dark charcoal background, white signup CTA text, blue primary button, gray secondary button, social media icons, app store badges, and legal links row](https://design.withfudge.com/share/pin-797)

[![Latest Anime Recommendations feed with paired anime thumbnails, blue title links, gray add buttons, recommendation text, and attribution timestamps on dark background](https://pin.fontofweb.com/796?format=jpg)](https://design.withfudge.com/share/pin-796)

[Latest Anime Recommendations feed with paired anime thumbnails, blue title links, gray add buttons, recommendation text, and attribution timestamps on dark background](https://design.withfudge.com/share/pin-796)

## Overview

MyAnimeList.net presents a dark-themed interface designed for intensive media browsing and community engagement around anime and manga content. The visual system prioritizes information density and rapid scanning across long pages filled with metadata, ratings, recommendations, and user-generated content. The design employs a near-black canvas with layered surface tones to create subtle depth without visual noise. Blue serves as the singular accent color, appearing in interactive elements, score badges, and title links that guide attention through dense information hierarchies. Typography remains utilitarian and compact, favoring system fonts at small sizes to maximize readable content per viewport. The overall character is functional and authoritative—resembling a specialized database tool rather than a glossy entertainment destination—while promotional artwork and thumbnail imagery inject color and personality into the restrained structural framework.

## Colors

The color system operates on a dark-mode foundation with controlled accent usage. The canvas establishes an immersive viewing environment for artwork, while surface layers organize content into scannable regions. Blue accents appear sparingly and consistently to signal interactivity and importance.

| token | value | use |
|---|---|---|
| canvas | #1a1a1a | Primary page background, deepest layer |
| surface | #2a2a2a | Content panels, cards, sidebar sections |
| surface-elevated | #333333 | Elevated elements, hover states, input backgrounds |
| ink | #ffffff | Primary text, active navigation, important labels |
| ink-muted | #b8b8b8 | Secondary text, metadata, timestamps |
| ink-dim | #888888 | Tertiary information, disabled hints |
| action | #3b7dd8 | Primary buttons, active links, score badges, tab indicators |
| action-hover | #2e6bc0 | Button hover states, link hover |
| border | #444444 | Dividers between sections, card outlines |
| border-subtle | #3a3a3a | Hairline separators within dense lists |
| score-badge | #3b7dd8 | Rating score backgrounds, statistical highlights |
| success | #4a9b4a | Positive indicators, completion states |

The dark canvas (#1a1a1a) dominates the viewport, creating a theater-like environment where colorful anime artwork and thumbnails become the primary visual interest. Surface tones step up in lightness for contained content areas: the main content well uses #2a2a2a, while elevated interactive elements such as buttons and input fields rest on #333333. This three-layer depth system prevents flatness without introducing shadows or borders as primary organizing tools.

Blue (#3b7dd8) functions as the sole accent, applied with discipline to maintain its signaling power. It appears in the score badge backgrounds, primary call-to-action buttons, active tab underlines, and title links within recommendation feeds. The slightly deeper hover state (#2e6bc0) provides feedback without color shift. Text hierarchy operates through lightness rather than color variation: white for primary content, muted gray (#b8b8b8) for supporting metadata, and dim gray (#888888) for least important information such as legal copy and timestamps.

Borders remain subtle and dark, serving as structural dividers rather than visual emphasis. The #444444 tone separates major content regions, while #3a3a3a handles finer internal divisions within lists and tables.

## Typography

The typographic system relies on system fonts for performance and familiarity, sized compactly to accommodate dense information displays. No custom typefaces are used for body or display text. Verify licensing for icon fonts before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | system-ui, sans-serif | 2rem | 700 | 1.2 | -0.01em | Page titles, anime names in hero |
| section-display | system-ui, sans-serif | 1.25rem | 700 | 1.3 | 0 | Sidebar headers, section titles |
| body | system-ui, sans-serif | 0.875rem | 400 | 1.6 | 0 | Synopsis paragraphs, descriptions |
| body-small | system-ui, sans-serif | 0.75rem | 400 | 1.5 | 0 | Metadata, statistics, fine print |
| label | system-ui, sans-serif | 0.75rem | 600 | 1.4 | 0.02em | Button text, badges, category tags |
| navigation | system-ui, sans-serif | 0.8125rem | 600 | 1 | 0.01em | Tab labels, breadcrumb, footer links |
| score-display | system-ui, sans-serif | 2rem | 700 | 1 | -0.02em | Numerical ratings, large statistics |

The type scale centers on 0.75rem (12px) and 0.875rem (14px) for the majority of interface text, with display sizes reserved for page titles and score badges. Weight contrast provides hierarchy: Regular (400) for readable passages, Semibold (600) for labels and navigation, and Bold (700) for headers and numerical displays. Line heights stay tight at 1 to 1.3 for UI elements and loosen to 1.6 for synopsis blocks requiring sustained reading.

Letter spacing receives subtle negative tracking on large display sizes to maintain visual density, while small labels gain slight positive tracking for improved legibility at reduced sizes. The system avoids italic styles and decorative treatments, maintaining a neutral, database-like tone throughout.

Icon fonts supplement the typographic system: Malicons provides custom brand and interface symbols, while Font Awesome 6 Pro Solid and Font Awesome 6 Brands handle utility and social icons. These icon fonts do not serve as typography for readable content.

## Layout

The layout follows a classic two-column structure for detail pages, with a wider content well and a narrower sidebar, while homepage and feed layouts employ single-column streams with internal grid arrangements for paired content.

The page header occupies the full width with minimal height, containing logo, global search, and user account access. Below this, anime detail pages present a hero band spanning the full content width, featuring large promotional artwork on the left and key statistics with actions on the right. This hero section establishes the visual anchor before the information-dense body begins.

The main content area uses a flexible two-column ratio approximately 70/30 on detail pages. The primary column contains tabbed navigation, synopsis, and extended content. The secondary column stacks information modules: Alternative Titles, Information, Statistics, Available At, and Resources. Each module is a self-contained panel with a bold header and structured key-value pairs.

Vertical rhythm relies on consistent 1rem spacing between related elements and 3rem section breaks between major regions. Internal padding within panels measures 1rem on all sides. Lists and metadata blocks compress to 0.5rem between items to maintain density without crowding.

The recommendation feed employs a two-column thumbnail grid within each recommendation card, pairing "If you liked" and "...then you might like" anime with small square artwork (approximately 80-100px) and compact text blocks. Attribution lines sit below each pair with author name and timestamp.

Footer layout spans full width with centered alignment for marketing messaging, left-right distribution for social and app download sections, and a centered legal links row. The footer maintains generous vertical padding (3rem) to separate it from content above.

## Visual language

The visual language balances utilitarian information design with moments of promotional spectacle. Large anime artwork in hero sections provides color and emotional resonance, while the surrounding interface recedes into neutral darkness. This creates a gallery-like effect where user attention naturally flows to imagery before settling into data consumption.

Score badges function as prominent visual anchors, using the blue accent background with white numerals at large scale. These circular or rounded-rectangular elements break the rectangular monotony of the interface and provide immediate status recognition. The badge format repeats across the site for ratings, rankings, and statistical highlights.

Thumbnail imagery maintains consistent small sizes across recommendation feeds, search results, and sidebar modules. Square aspect ratios dominate, with slight rounding absent—thumbnails remain sharp-cornered to maximize perceived image area at small scales. Hover states on thumbnails are implied by cursor change rather than visible overlay.

Interactive elements signal state through color and background shifts rather than dramatic transforms. Links transition from muted to bright white on hover; buttons deepen their blue tone; tabs gain an underline indicator. These micro-interactions maintain the interface's calm, efficient character.

The dark theme creates specific photographic behavior: anime artwork with bright palettes pops dramatically against the near-black background, while darker promotional images may require careful selection to maintain visibility. The interface does not adapt artwork presentation based on image content—thumbnails display as-is, trusting the content's inherent contrast.

## Components

### Score Badge
- **Anatomy**: Numerical score in large bold type, optional label below (users count, ranking position)
- **Surface**: Solid blue (#3b7dd8) background, white text
- **Typography**: score-display token for numerals, label token for supporting text
- **Shape**: Rounded rectangle with 0.25rem radius, generous internal padding (0.75rem 1rem)
- **Spacing**: Positioned prominently in hero section, often paired with adjacent metadata
- **Composition**: Left-aligned within its container, vertically centered with related actions
- **Variants**: Large hero variant with 2rem score; small inline variant for list views

### Tab Navigation
- **Anatomy**: Horizontal row of text labels, active indicator as bottom border
- **Surface**: Transparent background, #444444 bottom border for container
- **Typography**: navigation token, muted color default, white when active
- **Shape**: Full-width bar, individual tabs as inline elements
- **Spacing**: 1rem horizontal padding per tab, 0.75rem vertical padding
- **Composition**: Left-aligned, wrapping permitted on narrow viewports
- **States**: Active state shows #3b7dd8 bottom border (2px) and white text; inactive shows muted text without border

### Content Panel (Sidebar Module)
- **Anatomy**: Bold section header, structured content below (definition lists, links, buttons)
- **Surface**: #2a2a2a background, optional #444444 top border for separation
- **Typography**: section-display for header, body-small for content
- **Shape**: 0.25rem radius corners, 1rem internal padding
- **Spacing**: Stacked vertically with 1rem gap between panels
- **Composition**: Full width of sidebar column, content left-aligned
- **Variants**: Collapsible variant with "More" expander; link list variant with external resource icons

### Recommendation Card
- **Anatomy**: Two thumbnail images side by side, "If you liked / ...then you might like" labels, title links, description text, attribution footer
- **Surface**: Transparent or #2a2a2a background, #444444 bottom border
- **Typography**: label for relationship text, body for titles (blue links), body-small for description and attribution
- **Shape**: Thumbnails square with no radius; "add" buttons small and rectangular
- **Spacing**: 1rem between thumbnail pairs, 0.5rem between text lines, 1.5rem between cards
- **Composition**: Two-column grid for thumbnails, full-width text below
- **Variants**: Expanded variant shows full description; collapsed variant truncates with "read more" link

### Primary Button
- **Anatomy**: Text label with optional icon prefix
- **Surface**: #3b7dd8 background, white text; hover to #2e6bc0
- **Typography**: label token, white
- **Shape**: 0.25rem radius, 0.5rem 1rem padding
- **Spacing**: Used in hero actions, footer CTAs, modal confirmations
- **Composition**: Inline with sibling buttons, separated by 0.75rem gap

### Secondary Button
- **Anatomy**: Text label, often "Login" or dismissive action
- **Surface**: #333333 background, white text; subtle hover darkening
- **Typography**: label token
- **Shape**: 0.25rem radius, matching padding to primary
- **Spacing**: Paired with primary buttons in footer and modals

### Social Share Bar
- **Anatomy**: Row of icon buttons (Facebook, X, Reddit, Tumblr)
- **Surface**: Transparent or #2a2a2a background
- **Typography**: Icon fonts only (Font Awesome Brands)
- **Shape**: Square buttons with 0.25rem radius, consistent 2.5rem touch target
- **Spacing**: 0.5rem gap between icons, positioned below primary content

## Responsive behavior

The two-column detail page layout should collapse to single-column on viewports below approximately 768px, with the sidebar modules stacking below the primary content. Tab navigation should allow horizontal scrolling or wrap to multiple lines rather than truncating labels.

Thumbnail grids in recommendation feeds should maintain two columns at small sizes, as the paired comparison format is essential to the component's meaning. Text descriptions may truncate earlier on narrow viewports.

The hero section artwork should scale proportionally, potentially stacking the score and actions below the image rather than beside it on narrow screens. Score badges should remain prominent and legible at all sizes.

Footer content should reflow from horizontal rows to stacked vertical groups, with legal links potentially collapsing to an accordion or remaining as a wrapped text block.

## Practical implementation guidance

### Preserve
- The dark canvas as the default viewing mode; light theme would fundamentally alter the site's character
- Blue as the sole accent color, resisting temptation to add secondary accent hues
- Compact type sizes and tight line heights that enable information density
- Square thumbnail corners that maximize image area at small sizes
- The specific two-column detail page structure with sidebar information modules

### Avoid
- Adding background images or textures behind content areas
- Using border-radius on thumbnails, which would reduce perceived image size
- Introducing shadow-based elevation; rely on surface color steps instead
- Expanding type sizes for "improved readability"—the density is intentional
- Multiple accent colors that would compete with artwork for attention

### Recommended Build Order
1. Establish dark canvas and surface color tokens
2. Implement compact type scale with system fonts
3. Build two-column layout structure for detail pages
4. Create score badge component as primary visual anchor
5. Develop tab navigation with active state indicator
6. Construct sidebar panel system with collapsible variants
7. Add recommendation card with paired thumbnail grid
8. Implement footer with CTA and legal link patterns
9. Apply responsive collapse behaviors

### Accessibility
- Ensure blue action elements meet minimum contrast against dark backgrounds (3:1 for large text, 4.5:1 for body text)
- Provide visible focus indicators on all interactive elements, using outline or background shift
- Maintain keyboard navigability through tab panels and collapsible sidebar sections
- Add aria-labels to icon-only buttons in social share bars
- Consider reduced-motion preferences for any implemented transitions
- Test thumbnail alt text quality, as image content carries significant meaning

## Scope note

This guide covers the dark-themed anime detail page and homepage feed surfaces visible in the supplied images. Mobile layouts, search results pages, user profile pages, forum interfaces, and light theme variants are not represented. Motion, loading states, and form validation patterns are not documented. Measurements are practical adaptation targets derived from visual inspection.
