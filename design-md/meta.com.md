# How meta.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/meta.com-design)

Last updated: 2026-08-10

## Captured pages

[![Four rounded media cards showing Quest 3 use cases with overlaid category labels and plus buttons on dark imagery](https://pin.fontofweb.com/4006?format=jpg)](https://design.withfudge.com/share/pin-4006)

[Four rounded media cards showing Quest 3 use cases with overlaid category labels and plus buttons on dark imagery](https://design.withfudge.com/share/pin-4006)

[![Account orders page with left sidebar navigation, Meta logo, and clean white content area with blue links](https://pin.fontofweb.com/4004?format=jpg)](https://design.withfudge.com/share/pin-4004)

[Account orders page with left sidebar navigation, Meta logo, and clean white content area with blue links](https://design.withfudge.com/share/pin-4004)

[![People section with large display heading, carousel navigation dots, and three article cards with rounded images](https://pin.fontofweb.com/2318?format=jpg)](https://design.withfudge.com/share/pin-2318)

[People section with large display heading, carousel navigation dots, and three article cards with rounded images](https://design.withfudge.com/share/pin-2318)

[![Company history timeline with centered heading, horizontal year axis with app icons, and dated milestone cards](https://pin.fontofweb.com/2317?format=jpg)](https://design.withfudge.com/share/pin-2317)

[Company history timeline with centered heading, horizontal year axis with app icons, and dated milestone cards](https://design.withfudge.com/share/pin-2317)

## Overview

Meta's web presence employs a restrained, product-first visual language that lets hardware photography and brand storytelling take center stage. The system balances corporate clarity with consumer appeal through generous whitespace, rounded media containers, and a disciplined typographic hierarchy. Navigation remains lightweight and unobtrusive, while content sections alternate between expansive editorial layouts and dense, information-rich account interfaces. The overall impression is one of confidence and accessibility: a technology company speaking directly to consumers without visual noise or decorative excess.

The design succeeds through contrast relationships rather than color complexity. Deep black typography against white or near-white grounds provides maximum legibility, while blue action elements appear sparingly and consistently for wayfinding and interaction. Photography receives premium treatment through rounded corners and full-bleed framing, with text overlays reserved for category labels and contextual wayfinding. Component shapes favor soft geometry—rounded rectangles for cards, pills for primary actions, and circular controls for carousel navigation—creating a friendly, approachable character that aligns with consumer hardware positioning.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, body text, and navigation labels |
| canvas | #FFFFFF | Page backgrounds, card surfaces, and content areas |
| muted-ink | #1C1E21 | Secondary text and subtle hierarchy within dense content |
| action | #1877F2 | Links, primary buttons, active states, and timeline highlights |
| surface | #F5F6F7 | Sidebar backgrounds, alternate section grounds, and subtle panel fills |
| border | #DADDE1 | Dividers, hairline rules, and container boundaries |
| overlay | #000000 | Media card gradient overlays for text legibility |

The color system operates in a near-monochrome mode with a single accent. Black and white establish the foundational contrast, with muted-ink providing subtle warmth for secondary text without introducing a second hue family. The action blue derives from Meta's established brand heritage and appears exclusively for interactive elements: text links, primary buttons, timeline nodes, and carousel indicators. This disciplined application creates predictable wayfinding behavior across product marketing pages and account management interfaces alike.

Surface gray appears in structural contexts rather than decorative ones. The sidebar navigation on account pages uses this tone to create spatial separation from the main content without the heaviness of a true border. Border gray functions as an optical hairline for dividers and panel edges, maintaining definition without visual weight. The overlay token describes the dark gradient treatment applied to media cards, ensuring white category labels remain legible across varied photography.

## Typography

Meta's typographic system relies on multiple source files from Dalton Maag Ltd, each serving distinct weights and optical sizes. The supplied families are: By Dalton Maag Ltd-10834773507298662575, By Dalton Maag Ltd-16845335066362530096, By Dalton Maag Ltd-3214425443735172471, By Dalton Maag Ltd-3352509365490898710, By Dalton Maag Ltd-3456354907958133649, By Dalton Maag Ltd-4022347028084106200, By Dalton Maag Ltd-8719398826731980126, and By Dalton Maag Ltd-917333811883414653. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Dalton Maag Ltd-10834773507298662575 | 3rem | 700 | 1.1 | -0.02em | Page titles, section heroes, and major editorial headings |
| section-display | By Dalton Maag Ltd-16845335066362530096 | 2.25rem | 600 | 1.15 | -0.01em | Subsection headings and carousel section titles |
| body-large | By Dalton Maag Ltd-3352509365490898710 | 1.25rem | 400 | 1.4 | 0 | Introductory paragraphs and featured descriptions |
| body | By Dalton Maag Ltd-3214425443735172471 | 1rem | 400 | 1.5 | 0 | Standard paragraphs, descriptions, and account content |
| navigation | By Dalton Maag Ltd-4022347028084106200 | 0.875rem | 500 | 1.25 | 0 | Top-level navigation and sidebar menu items |
| link | By Dalton Maag Ltd-8719398826731980126 | 0.875rem | 500 | 1.5 | 0 | Inline text links and call-to-action phrases |
| label | By Dalton Maag Ltd-3456354907958133649 | 0.75rem | 600 | 1.2 | 0.05em | Category tags, timestamps, and metadata |

The type scale builds from a 4px relative unit, with sizes progressing in whole-number multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 20px (1.25rem), 36px (2.25rem), and 48px (3rem). Display sizes employ negative letter spacing for tighter, more impactful headlines, while body sizes use neutral tracking for extended reading comfort. Weight distinctions are meaningful and limited: Regular (400) for body, Medium (500) for navigation and links, Semibold (600) for section headings, and Bold (700) for hero display.

## Layout

The layout system favors centered, contained content for marketing pages and full-bleed split layouts for account interfaces. Maximum content widths create comfortable reading measure while allowing photography to extend to viewport edges where appropriate.

Marketing pages employ a centered content strategy with generous vertical padding. Section spacing of 5rem creates clear rhythmic separation between editorial blocks, while internal content gaps of 1.5rem maintain relatedness within sections. The "Meet the people at Meta" section demonstrates this pattern: a left-aligned text block with heading and description occupies roughly one-third of the viewport, while a scrolling carousel of media cards fills the remaining two-thirds, extending to the right edge.

Account pages reverse this logic with a persistent left sidebar occupying approximately 30% of the viewport width. The sidebar contains user identity, primary navigation, and secondary account links, separated from the main content by a subtle vertical rule. The main content area remains white with left-aligned text blocks of constrained width, ensuring comfortable reading for transactional content. This split-panel architecture scales predictably across viewport sizes.

Grid behavior for media cards follows a flexible column pattern. The Quest 3 use-case section shows four equal-width cards with consistent internal padding and uniform corner rounding. Cards maintain aspect ratio through background images rather than explicit height constraints, allowing responsive scaling. Gap spacing between cards matches the content-gap token at 1.5rem, creating visual breathing room without fragmenting the group.

## Visual language

The visual language communicates technological sophistication through restraint. Photography dominates the sensory experience, presented in rounded containers that soften the clinical precision of hardware products. The rounded media treatment—approximately 0.75rem corner radius on images, 1rem on containing cards—creates a consistent family of shapes that feels approachable and consumer-friendly.

Iconography appears minimal and functional. The timeline interface uses small app icons as milestone markers, while navigation relies on text labels rather than icon-heavy wayfinding. When icons do appear—as in the account page's external-link indicator or the carousel arrow controls—they are simple, thin-stroke shapes that recede in favor of content.

Motion and interaction are implied through static cues rather than explicit animation documentation. Carousel controls use circular buttons with arrow glyphs, and pagination dots indicate scrollable content. The plus buttons on media cards suggest expandable or favoritable content, positioned consistently in the lower-right corner of each card with a semi-transparent dark fill.

The interplay of light and shadow is subtle. Cards do not carry explicit drop shadows in the supplied imagery, relying instead on border contrast and whitespace to create elevation. The exception is media overlays, where a bottom-weighted dark gradient ensures white text remains legible across varied photography. This gradient treatment is the primary depth cue in an otherwise flat system.

## Components

### Media Card

Media cards are the primary content vehicle across marketing pages. Each card presents a photograph with overlaid category information and an action button.

- **Anatomy**: Background image fills the card container. A white category label sits in the upper-left corner. A circular plus button sits in the lower-right corner. A bottom gradient overlay spans the full card width.
- **Surface**: Image fills with `overlay` gradient for text legibility. Plus button uses a dark semi-transparent fill.
- **Typography**: Category label uses `label` token in white. Card titles below the image use `body` token in `ink`.
- **Shape**: Card container uses `card` border radius (1rem). Image itself uses `media` border radius (0.75rem) when presented as standalone thumbnail.
- **Spacing**: Internal padding of `card-padding` (1.5rem) for overlaid elements. External gap of `content-gap` (1.5rem) between cards.
- **Composition**: Cards arrange in horizontal rows with equal width distribution. Aspect ratio appears approximately 4:5 based on visible proportions.

### Navigation Bar

The top navigation provides global wayfinding across product categories and account functions.

- **Anatomy**: Meta logo lockup on the left, primary category links center-left, utility links and icons on the right.
- **Surface**: Transparent or white background depending on scroll position. No visible border in supplied imagery.
- **Typography**: Category links use `navigation` token in `ink`. Active or emphasized states may use `action` blue.
- **Spacing**: Horizontal distribution with comfortable padding between link groups. Icon buttons for search, cart, and account maintain consistent target sizes.

### Sidebar Navigation

Account pages use a persistent left panel for section wayfinding.

- **Anatomy**: User identity block at top with avatar and account name. Primary navigation list below. Secondary links and account center promotion at bottom.
- **Surface**: `surface` background color with `panel` border radius on the active item.
- **Typography**: Navigation items use `navigation` token. Active item receives `ink` at `600` weight. Descriptive text below account center uses `body` at smaller size in `muted-ink`.
- **Shape**: Active indicator uses `panel` border radius (0.5rem). External link icon appears inline with text.
- **Spacing**: Vertical item spacing of approximately `content-gap`. Section breaks create visual grouping without explicit rules.

### Timeline

The company history timeline presents chronological information in a horizontal scrollable format.

- **Anatomy**: Centered section heading with descriptive paragraph. Horizontal axis with year labels and app icon markers. Below, dated milestone cards with images and text.
- **Surface**: White background throughout. Axis line uses `border` color. Active nodes use `action` blue.
- **Typography**: Section heading uses `section-display`. Description uses `body-large`. Milestone dates use `label` token. Milestone titles use `body`.
- **Shape**: Milestone images use `media` border radius. Navigation arrows use circular buttons with `border` stroke.
- **Composition**: Horizontal scrolling with peeking next items. Cards maintain consistent width with internal image-text layout.

### Text Link

Inline links appear throughout account and marketing content.

- **Surface**: No background. Underline may appear on hover or persist for accessibility.
- **Typography**: `link` token in `action` blue. Inline with surrounding `body` text.
- **States**: Default state shows `action` color. Visited states may darken slightly.

## Responsive behavior

The layout system adapts through content reflow rather than breakpoint-dependent transformation. Marketing page carousels transition from multi-card visible states to single-card focus as viewport narrows. The account sidebar collapses to a top-level menu or icon drawer on smaller viewports, though this behavior is not visible in supplied imagery and should be validated during implementation.

Typography scales down proportionally at smaller viewports. The `hero-display` token may reduce to `section-display` size on narrow screens to prevent excessive line breaks. Media cards maintain aspect ratio through width-based scaling, with gaps reducing to `unit` multiples rather than full `content-gap` spacing.

Touch targets for interactive elements should maintain minimum 44px dimensions. The circular plus buttons and carousel arrows appear appropriately sized for this requirement, but density in sidebar navigation may need adjustment for finger-based interaction.

## Practical implementation guidance

### Preserve
- The disciplined monochrome-plus-blue color system. Resist adding secondary accent colors that compete with the action blue.
- Generous whitespace around content sections. The 5rem section spacing creates necessary breathing room between dense information blocks.
- Rounded media treatment. The consistent corner radius family (0.75rem for images, 1rem for cards) is a signature visual element.
- Weight-based typographic hierarchy. Limit styles to the defined token set rather than introducing intermediate weights or sizes.

### Avoid
- Heavy drop shadows or elevation effects. The system achieves depth through photography and whitespace, not material layering.
- Decorative borders or rules. Use `border` token sparingly for functional dividers only.
- Multi-line hero headings. The tight line height on `hero-display` assumes short, impactful phrases.
- Icon-heavy navigation. The supplied pages favor text labels; maintain this clarity.

### Recommended Build Order
1. Establish the type scale with By Dalton Maag Ltd family loading and base size normalization.
2. Implement the color tokens, ensuring action blue applies exclusively to interactive elements.
3. Build the media card component with proper aspect ratio, gradient overlay, and responsive grid behavior.
4. Construct the split-panel account layout with sidebar navigation and main content area.
5. Add the timeline component with horizontal scrolling and milestone card structure.
6. Implement navigation bar with logo, category links, and utility icons.

### Accessibility
- Ensure text overlays on media cards meet WCAG contrast requirements. The `overlay` gradient may need adjustment for specific photography.
- Provide visible focus indicators for all interactive elements. The minimal visual system should not sacrifice keyboard navigability.
- Carousel controls require accessible labeling and pause mechanisms for auto-advancing content.
- Timeline horizontal scrolling should support keyboard navigation and screen reader announcement of chronological sequence.

## Scope note

This guide covers the Meta Store product marketing pages and account management interface as visible in supplied imagery. Mobile layouts, checkout flows, search results, and interactive states including hover, focus, loading, and error conditions are not represented. Motion design, video treatment, and dark mode variants fall outside the current scope. Measurements are practical adaptation targets derived from visible proportions.
