# How trustpilot.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trustpilot.com-design)

Last updated: 2026-08-10

## Captured pages

[![Recent reviews grid showing eight review cards with star ratings, reviewer initials, and company logos above an app promotion banner with App Store badge.](https://pin.fontofweb.com/7774?format=jpg)](https://design.withfudge.com/share/pin-7774)

[Recent reviews grid showing eight review cards with star ratings, reviewer initials, and company logos above an app promotion banner with App Store badge.](https://design.withfudge.com/share/pin-7774)

[![Warm cream-colored banner with bold heading, social login options, and three portrait photographs with rounded corners on the right side.](https://pin.fontofweb.com/7773?format=jpg)](https://design.withfudge.com/share/pin-7773)

[Warm cream-colored banner with bold heading, social login options, and three portrait photographs with rounded corners on the right side.](https://design.withfudge.com/share/pin-7773)

[![Homepage hero with dark navigation bar, large search field, yellow abstract shape, and company category icons in a horizontal row.](https://pin.fontofweb.com/7772?format=jpg)](https://design.withfudge.com/share/pin-7772)

[Homepage hero with dark navigation bar, large search field, yellow abstract shape, and company category icons in a horizontal row.](https://design.withfudge.com/share/pin-7772)

[![Review breakdown panel showing 4.0 star rating with green star, percentage bars for five rating levels, and write-a-review link.](https://pin.fontofweb.com/7771?format=jpg)](https://design.withfudge.com/share/pin-7771)

[Review breakdown panel showing 4.0 star rating with green star, percentage bars for five rating levels, and write-a-review link.](https://design.withfudge.com/share/pin-7771)

## Overview

Trustpilot presents a review platform built around clarity, credibility, and ease of navigation. The visual system pairs a warm, approachable palette with high-contrast typography that guides users through company searches, review reading, and community participation. The homepage establishes immediate purpose through a bold search-centered hero, while interior pages organize dense review data into scannable card layouts. A dark navigation bar anchors the top of every page, creating visual weight that separates global actions from content below. The design balances friendly warmth—expressed through cream backgrounds, rounded photography, and soft accent colors—with the authoritative structure needed for a platform handling millions of consumer reviews.

## Colors

The color system operates on a warm neutral foundation with strategic accents that signal action, trust, and emotional tone.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark navigation bar, primary button fill |
| ink-light | #2D2F29 | Secondary headings, subtle dark surfaces |
| ink-muted | #605E56 | Body text in review cards, timestamps, secondary metadata |
| surface | #FFFFFF | Card backgrounds, input fields, primary content areas |
| surface-warm | #FCFBF3 | Hero background, main page canvas |
| surface-cream | #F3F0EC | Promotional banners, alternate section backgrounds |
| surface-dark | #111011 | Navigation bar, footer, dark mode surfaces |
| border | #DCD6D1 | Card outlines, dividers, input borders |
| border-light | #EBE9EC | Subtle separators, hairline rules |
| action | #3C57BC | Links, search button, interactive accents |
| action-hover | #799DFA | Hover states for action elements |
| success | #1A6820 | Positive indicators, verified badges |
| star-green | #1B1A1B | Filled star ratings |
| star-empty | #D2D2D2 | Unfilled star ratings |
| accent-yellow | #FFE1BA | Hero decorative shapes, warm highlights |
| accent-pink | #FFDDE8 | Soft promotional backgrounds |
| accent-cyan | #C8F1F5 | Informational highlights |
| accent-lemon | #FFF7C4 | Warning or attention backgrounds |

The interface alternates between warm cream surfaces and clean white cards, creating depth without heavy shadows. Dark sections use near-black rather than pure black for reduced eye strain. Accent colors appear as large abstract shapes, promotional banners, and subtle badges rather than competing for attention with content. The star rating system uses a near-black green for filled stars against light gray empties, maintaining accessibility while feeling distinctive.

## Typography

Trustpilot employs two related font families: Trustpilot for bold display headings and Trustpilot Sans for all interface text. Both were designed by Jeppe Pendrup and are available from Playtype. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Trustpilot | 3rem | 800 | 1.3 | normal | Homepage hero headings, major campaign titles |
| section-display | Trustpilot | 2rem | 800 | 1.3 | normal | Section headlines, review page titles |
| heading-large | Trustpilot Sans | 1.5rem | 575 | 1.2 | normal | Card titles, feature headings |
| heading-medium | Trustpilot Sans | 1rem | 575 | 1.2 | normal | Subheadings, filter labels |
| body | Trustpilot Sans | 1rem | 400 | 1.5 | 0.03125em | Navigation, buttons, primary body text |
| body-small | Trustpilot Sans | 0.875rem | 450 | 1.4 | normal | Review excerpts, metadata, captions |
| label | Trustpilot Sans | 0.75rem | 400 | 1.4 | 0.03125em | Tags, timestamps, fine print |
| navigation | Trustpilot Sans | 1rem | 400 | 1.5 | 0.03125em | Header links, menu items |

The display weight of Trustpilot at 800 creates immediate hierarchy on the homepage, while Trustpilot Sans at weights 400 through 575 handles all reading and interface tasks. Letter spacing of 0.5px on body and navigation text adds slight openness for screen readability. Line heights stay compact for headings and generous for body text, reflecting the platform's mix of scanning and reading behaviors.

## Layout

The layout follows a centered container model with generous horizontal padding and clear vertical rhythm.

**Page structure:** A full-width dark navigation bar sits fixed at the top, followed by full-bleed hero sections that may contain asymmetric decorative shapes. Content sections narrow to a centered maximum width, typically with 80px horizontal padding on desktop. Cards and grids use consistent gutters and maintain alignment to an implicit column system.

**Spacing scale:** The system builds from a 2px base unit. Common values include 8px for tight internal padding, 16px for card padding and standard gaps, 24px for section breaks, 32px for major component separation, 40px for section padding, and 72-80px for large structural margins. Vertical rhythm between sections typically measures 40-76px.

**Grid behavior:** Review cards arrange in responsive grids with equal-width columns and 16px gutters. Category icons distribute horizontally with consistent spacing. The search hero centers its input field with ample surrounding space. Promotional banners use asymmetric two-column layouts with text left and imagery right.

**Container logic:** Content containers max out at a readable width, while decorative elements and navigation extend full-width. The warm cream background of the hero flows edge-to-edge, but the search input itself maintains constrained width for usability.

## Visual language

**Shape language:** Rounded corners dominate the interface. Cards use 16px radius, buttons and inputs use full pill shapes at 9999px, and avatars are perfect circles. This softness counterbalances the density of review data and creates approachable, friendly containers.

**Photography and imagery:** User-generated content appears in rounded rectangular frames with 16px radius. Promotional photography shows diverse subjects in candid, natural settings. Product and company logos appear in small square containers within review cards. Abstract vector shapes in yellow and other accent colors provide visual energy in hero sections without competing with functional content.

**Iconography:** Category browsing uses simple line icons in a horizontal row with labels beneath. Star ratings use filled and empty star shapes at small sizes. The Trustpilot logo combines a green star mark with wordmark in the navigation.

**Shadow and depth:** The interface minimizes shadow use, relying instead on background color shifts and 1px borders to create elevation. A subtle shadow appears only on the search input field to suggest interactivity. Review cards sit flat against their backgrounds with only border definition.

**Motion character:** While not visible in still images, the design suggests snappy, purposeful transitions. Pill-shaped buttons and rounded inputs invite tap and click interactions. The search field's prominent placement and shadow treatment indicate it as the primary entry point.

## Components

### Navigation bar

- **Anatomy:** Full-width dark bar containing logo left, primary links center-right, utility actions right
- **Surface:** Background `{colors.surface-dark}`, text `{colors.surface}`
- **Typography:** `{typography.navigation}` in white
- **Shape:** Full-width, height approximately 64px, no border radius
- **Spacing:** Horizontal padding 80px, internal link spacing 16-24px
- **Composition:** Logo and wordmark left-aligned, "Write a review", "Categories", "Blog" as text links, "Log in" text link, "For businesses" as filled pill button in `{colors.action}`

### Search hero

- **Anatomy:** Full-width warm background section with centered heading, subheading, and prominent search input
- **Surface:** Background `{colors.surface-warm}`, with large `{colors.accent-yellow}` abstract shape on left edge
- **Typography:** Hero heading `{typography.hero-display}`, subheading `{typography.heading-large}` at lighter weight
- **Shape:** Search input is full pill with `{rounded.input}`, search button as circular icon button
- **Spacing:** Generous vertical padding, input width approximately 600px centered
- **Composition:** Asymmetric decorative shape balances centered functional content

### Review card

- **Anatomy:** Rounded rectangle containing reviewer initials or avatar, name, star rating, review excerpt, company logo and name
- **Surface:** Background `{colors.surface}`, border `{colors.border}` at 1px
- **Typography:** Reviewer name `{typography.heading-medium}`, excerpt `{typography.body-small}` in `{colors.ink-muted}`, company name `{typography.body-small}`
- **Shape:** `{rounded.card}` at 16px
- **Spacing:** Padding 16px, internal gaps 8-12px
- **Composition:** Avatar or initials top-left, stars immediately below name, excerpt truncated with ellipsis, company attribution at bottom with small logo

### Star rating display

- **Anatomy:** Row of five star icons with optional numeric score
- **Surface:** No background, stars filled or empty
- **Typography:** Numeric score in `{typography.section-display}` when large, `{typography.heading-large}` when inline
- **Shape:** Star icons at 16-24px depending on context
- **Variants:** Large display with score (review page header), inline compact (card listings), breakdown bars with percentages

### Category browse row

- **Anatomy:** Horizontal scrollable or wrapped row of icon-label pairs
- **Surface:** Transparent or `{colors.surface}` background
- **Typography:** `{typography.body-small}` centered below each icon
- **Shape:** Icons in 48px containers, labels beneath
- **Spacing:** Even distribution with 16-24px gaps
- **Composition:** Icon above label, consistent vertical alignment across items

### Promotional banner

- **Anatomy:** Full-width section with heading, body text, call-to-action button, and supporting imagery
- **Surface:** Background `{colors.surface-cream}` or warm neutral
- **Typography:** Heading `{typography.section-display}`, body `{typography.body}`, button `{typography.navigation}`
- **Shape:** Pill button for primary action, circular social login buttons with 1px borders
- **Spacing:** Padding 32px, generous internal margins
- **Composition:** Text left-aligned, imagery right-aligned with rounded corners, social proof buttons between

### Review breakdown panel

- **Anatomy:** Card showing total reviews, average score, and percentage bars for each star level
- **Surface:** Background `{colors.surface}`, border `{colors.border}`
- **Typography:** Score `{typography.section-display}`, bar labels `{typography.body-small}`, percentages `{typography.body-small}`
- **Shape:** `{rounded.panel}`, progress bars as rounded rectangles
- **Spacing:** Padding 16px, bar height approximately 8px with 12px gaps
- **Composition:** Score and total at top, five horizontal bars below with checkboxes left, labels center-left, percentages right-aligned

### App promotion card

- **Anatomy:** Rounded card with app screenshot, heading, description, and store badge
- **Surface:** Background `{colors.surface}`, border `{colors.border}`
- **Typography:** Heading `{typography.heading-large}`, body `{typography.body-small}`
- **Shape:** `{rounded.card}`, screenshot with device frame
- **Spacing:** Padding 16-24px, image left with text right

## Responsive behavior

The design maintains its core character across viewport sizes while adapting density and layout flow. On narrower screens, the review card grid collapses from four columns to two and then single column. The search hero retains its centered input but may reduce decorative shape visibility. Navigation links collapse to a menu icon, preserving the dark bar and logo. Category rows become horizontally scrollable when space-constrained. Review breakdown panels stack vertically rather than sitting beside review lists. Touch targets maintain minimum 44px height for accessibility. Typography scales down proportionally, with hero display reducing to 2rem and section display to 1.5rem on mobile.

## Practical implementation guidance

### Preserve
- The warm cream-to-white background progression that creates gentle depth
- Full pill shapes for all buttons and inputs—this is a signature element
- The 16px card radius paired with 1px light borders
- High contrast between dark navigation and light content areas
- Trustpilot display weight 800 for major headings only, keeping it scarce and impactful
- Consistent 0.5px letter spacing on body and navigation text

### Avoid
- Adding heavy shadows or elevation effects—the design achieves depth through color and spacing
- Using pure black (#000000) for large surface areas; the near-black #111011 is preferred for dark sections
- Mixing additional font families beyond Trustpilot and Trustpilot Sans
- Creating sharp-cornered cards or square buttons that break the rounded language
- Placing accent colors behind text—they should remain decorative only

### Recommended build order
1. Establish the spacing scale and color tokens, beginning with surface, ink, and border values
2. Implement the dark navigation bar with logo, links, and pill button
3. Build the search hero with warm background, decorative shape, and centered input
4. Create the review card component with avatar, stars, excerpt, and company attribution
5. Develop the star rating component in multiple sizes
6. Add promotional banner and app card variants
7. Implement review breakdown panel with progress bars
8. Polish with category browse row and footer elements

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the ink-on-surface pairing exceeds this
- Ensure star ratings are not color-only indicators; include numeric scores and text alternatives
- Search input should have visible focus states with increased border contrast
- Review card excerpts should respect user font size preferences without truncation failure
- Social login buttons need clear focus rings and descriptive labels
- Progress bars in review breakdowns require screen reader text for percentage values

## Scope note

This guide covers the Trustpilot homepage, company review pages, and shared components visible in the supplied images. It does not include checkout flows, business dashboard interfaces, email templates, or mobile-native app designs. Animation specifications, dark mode implementations beyond the navigation bar, and form validation states are not documented here.
