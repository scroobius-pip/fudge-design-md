# How openwebui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openwebui.com-design)

Last updated: 2026-08-10

## Captured pages

[![Community home feed with dark sidebar navigation, search bar, post cards with metadata badges, and right-side leaderboard panel showing user rankings.](https://pin.fontofweb.com/7514?format=jpg)](https://design.withfudge.com/share/pin-7514)

[Community home feed with dark sidebar navigation, search bar, post cards with metadata badges, and right-side leaderboard panel showing user rankings.](https://design.withfudge.com/share/pin-7514)

[![Leaderboard page with colorful stacked bar chart, model ranking tables with percentage change indicators, and country usage statistics.](https://pin.fontofweb.com/7513?format=jpg)](https://design.withfudge.com/share/pin-7513)

[Leaderboard page with colorful stacked bar chart, model ranking tables with percentage change indicators, and country usage statistics.](https://design.withfudge.com/share/pin-7513)

[![Models directory with filter pills, search input, and vertically stacked model cards with avatar icons, star ratings, and provider tags.](https://pin.fontofweb.com/7512?format=jpg)](https://design.withfudge.com/share/pin-7512)

[Models directory with filter pills, search input, and vertically stacked model cards with avatar icons, star ratings, and provider tags.](https://design.withfudge.com/share/pin-7512)

[![Community group page with hero banner image, group avatar, Chinese-language posts with TOOL and FUNCTION badges, and engagement metrics.](https://pin.fontofweb.com/7511?format=jpg)](https://design.withfudge.com/share/pin-7511)

[Community group page with hero banner image, group avatar, Chinese-language posts with TOOL and FUNCTION badges, and engagement metrics.](https://design.withfudge.com/share/pin-7511)

## Overview

Open WebUI presents a dark-first developer community platform built around AI model discovery, community discussion, and usage analytics. The visual system prioritizes information density and scannability: near-black backgrounds establish a focused, technical atmosphere while high-contrast white and near-white typography ensures readability across data-heavy interfaces. The design language draws from modern developer tools—clean lines, minimal ornamentation, and functional color coding—while incorporating community features like leaderboards, model directories, and group discussions. Navigation relies on a persistent vertical sidebar with icon-only primary actions, leaving the main content area maximized for feeds, tables, and card layouts. The overall impression is of a specialized platform that treats AI infrastructure with the same design seriousness as code repositories or analytics dashboards.

## Colors

The color system is built on a dark foundation with a restrained accent palette for data visualization and status indicators.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #171717 | Card backgrounds, elevated panels |
| surface-elevated | #262626 | Hover states, active selections, input backgrounds |
| ink | #FFFFFF | Primary headings, active navigation, primary button text |
| ink-secondary | #ECECEC | Body text on dark, secondary headings |
| ink-muted | #CDCDCD | Tertiary text, descriptions, inactive labels |
| ink-dim | #9B9B9B | Metadata, timestamps, placeholder text |
| ink-faint | #676767 | Disabled states, subtle borders |
| action | #FFFFFF | Primary buttons, key interactive elements |
| action-inverse | #000000 | Text on primary buttons |
| accent-green | #00C950 | Positive trends, success states, verified indicators |
| accent-cyan | #06B6D4 | Information highlights, secondary data series |
| accent-blue | #3B82F6 | Links, primary data series, active filters |
| accent-violet | #8B5CF6 | Tertiary data series, special categories |
| accent-pink | #EC4899 | Quaternary data series, featured highlights |
| border-subtle | #333333 | Card borders, dividers |
| border-faint | #4E4E4E | Hover borders, focus rings |

The dark canvas creates a low-luminance environment that reduces eye strain during extended browsing sessions. White and near-white ink values maintain WCAG AAA contrast ratios against all background layers. Accent colors appear primarily in data visualizations—stacked bar charts on the leaderboard use green, pink, blue, cyan, violet, and orange segments to distinguish model providers or time periods. Green specifically signals positive percentage changes in rankings. The surface and surface-elevated tokens create a two-level elevation system sufficient for card-based layouts without introducing excessive depth.

## Typography

The type system pairs Archivo for display and navigation with Inter for body content, creating a functional hierarchy that feels technical yet approachable. The platform also includes Zalando Sans Expanded and System-Uimonospace in its font sources, though these do not appear in the core interface tokens shown above.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Archivo | 4.5rem | 300 | 1.25 | -0.025em | Landing page hero headlines |
| section-display | Archivo | 3rem | 300 | 1.25 | -0.025em | Section titles, large feature headings |
| heading-large | Inter | 1.25rem | 400 | 1.4 | normal | Page titles, card headers |
| heading-medium | Inter | 1rem | 500 | 1.5 | normal | Subsection titles, table headers |
| body | Inter | 1rem | 400 | 1.5 | normal | Primary body text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Secondary content, card descriptions |
| label | Inter | 0.75rem | 400 | 1.33 | normal | Timestamps, metadata, captions |
| label-medium | Inter | 0.75rem | 500 | 1.33 | normal | Badges, tags, category labels |
| caption | Inter | 0.625rem | 400 | 1.5 | normal | Fine print, data source notes |
| navigation | Archivo | 1rem | 400 | 1.5 | normal | Sidebar items, primary buttons |

Archivo appears at light weights (300) for display sizes, creating an elegant, open feel in hero sections while maintaining technical credibility. At 400 weight and 1rem size, it serves navigation and primary actions with slightly more presence than Inter. Inter handles all body, label, and data-reading tasks with its neutral, highly legible forms. The tracking on display sizes is tight but not compressed, giving headlines modern density without sacrificing clarity. Zalando Sans Expanded appears in the source at an extremely large display size, suggesting a decorative or brand-mark usage rather than functional interface text. System-Uimonospace serves code or technical content where fixed-width rendering matters. Verify licensing for these families before production use. Archivo is designed by Hector Gatti and provided by Omnibus Type.

## Layout

The platform uses a fixed sidebar plus fluid main content layout that maximizes horizontal space for data-dense views.

The left sidebar occupies a narrow fixed width, presenting icon-only navigation items stacked vertically with generous touch targets. Each icon sits in a square container with rounded corners, creating a rhythm of pill-shaped and square elements. The sidebar background matches the canvas color, making it recede visually while remaining permanently accessible.

Main content areas use centered containers with maximum widths that vary by page type. Feed pages employ a two-column layout: the primary content stream occupies roughly two-thirds of the width, while a narrower right panel shows leaderboards, sign-in prompts, or contextual actions. This asymmetry keeps the focus on content while surfacing community metrics. Data pages like the leaderboard use full-width containers to accommodate wide tables and charts.

Vertical rhythm relies on consistent section spacing of 5rem to 6rem between major page regions. Within cards and components, the spacing scale progresses from 0.5rem for tight internal groupings to 2rem for separating distinct content blocks. The 0.125rem base unit allows fine-grained control without fractional rem values.

Grid systems appear implicit rather than explicit—cards stack vertically with consistent gaps, while tables use flexbox-like row distributions that adapt to content width. The models directory shows this clearly: filter pills wrap horizontally, then model cards stack with avatar-image, title, rating, and description aligned in a consistent left-to-right, top-to-bottom flow.

## Visual language

The visual character balances technical minimalism with community warmth through careful use of color, shape, and imagery.

Shape language favors rounded rectangles over sharp corners. Buttons use 1rem radius—noticeably rounded but not fully pill-shaped. Badges and filter pills use smaller radii or full pill shapes depending on their interactive role. Cards employ 0.75rem radius, softening their presence against the dark canvas without appearing informal. The sidebar navigation icons sit in square containers with subtle rounding, creating a middle ground between the rounded buttons and the rectilinear content cards.

Imagery appears primarily as functional avatars and provider logos rather than decorative photography. Model cards display square or slightly rounded avatar images with distinctive branding colors—Anthropic's warm coral, OpenAI's black and white spirals, Google's multicolor gems. These small images anchor each card entry and provide quick visual scanning. Community group pages feature hero banner images that span full width, typically showing abstract or location-based photography with dark gradient overlays to preserve text legibility.

Data visualization follows a distinctive multi-color approach. The leaderboard's stacked bar chart uses six or more distinct hues against the black background, creating high visual energy that contrasts with the subdued interface elsewhere. This chromatic density serves a functional purpose: distinguishing time periods or model categories at a glance.

Shadow usage is minimal and subtle. A faint drop shadow (`rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`) appears on elevated elements, providing just enough separation without suggesting physical depth. The dark environment makes heavy shadows unnecessary.

## Components

### Navigation sidebar

- Anatomy: Vertical stack of icon buttons with active state indicator, plus bottom-aligned utility icons
- Surface: Transparent background, icons in `ink` color
- Typography: None for icons; tooltips or labels use `{typography.label}`
- Shape: Icon containers at 0.5rem radius, active state at full pill or slightly larger radius
- Spacing: Generous vertical padding between items, approximately `{spacing.comfortable}`
- Composition: Fixed left edge, full viewport height, icons centered horizontally in their containers
- States: Active item shows filled or inverted treatment; hover reveals subtle background

### Search input

- Anatomy: Magnifying glass icon, placeholder text, optional clear action
- Surface: `{colors.surface}` background, no visible border
- Typography: `{typography.body}` for input text, `{colors.ink-muted}` for placeholder
- Shape: Full pill radius (`{rounded.pill}`)
- Spacing: Padding of approximately 0.75rem vertical, 1rem horizontal
- Composition: Full width within its container, often with adjacent filter pills

### Filter pills

- Anatomy: Text label, optional close icon for active filters
- Surface: `{colors.surface-elevated}` background when active, transparent or `{colors.surface}` when inactive
- Typography: `{typography.body-small}` or `{typography.label}`
- Shape: Full pill radius
- Spacing: Horizontal margin of `{spacing.tight}` between pills, internal padding approximately 0.375rem to 0.5rem vertical, 0.75rem horizontal
- Composition: Horizontal wrapping row, left-aligned below search

### Content cards (feed posts)

- Anatomy: Author avatar and name, timestamp, title, description, engagement metrics (votes, comments, views), share action, category badge
- Surface: `{colors.surface}` background, subtle border or shadow optional
- Typography: Title in `{typography.heading-medium}`, description in `{typography.body-small}`, metadata in `{typography.label}`
- Shape: 0.75rem to 1rem radius
- Spacing: Internal padding of `{spacing.comfortable}`, vertical gap of `{spacing.default}` between cards
- Composition: Full width within feed column, stacked vertically
- Variants: Some cards include embedded images or code blocks that extend to card edges

### Model cards

- Anatomy: Square avatar image, model name, provider tag, star rating with review count, brief description
- Surface: Transparent or `{colors.surface}` background
- Typography: Model name in `{typography.heading-medium}`, description in `{typography.body-small}`, metadata in `{typography.label}`
- Shape: Avatar at 0.5rem radius, card itself unbordered
- Spacing: Vertical padding of `{spacing.comfortable}` between entries, horizontal gap of `{spacing.default}` between avatar and text
- Composition: Horizontal row with fixed-width avatar, fluid text column

### Leaderboard table rows

- Anatomy: Rank number, model name with colored indicator, usage count, percentage change indicator
- Surface: Transparent background, alternating subtle hover state
- Typography: Model name in `{typography.body}`, count in `{typography.body}` right-aligned, change in `{typography.label}` with color coding
- Shape: No visible row borders, full-width rows
- Spacing: Vertical padding of approximately 0.75rem per row
- Composition: Two-column layout for Models and Countries sections

### Stat pills

- Anatomy: Label and value, sometimes with icon
- Surface: `{colors.surface-elevated}` background
- Typography: `{typography.label}` or `{typography.label-medium}`
- Shape: Full pill radius
- Spacing: Internal padding approximately 0.25rem vertical, 0.75rem horizontal
- Composition: Inline with headers or in dedicated metric bars

### Primary action button

- Anatomy: Text label, sometimes with icon
- Surface: `{colors.action}` background, `{colors.action-inverse}` text
- Typography: `{typography.navigation}`
- Shape: 1rem radius
- Spacing: Padding of 0.5rem vertical, 0.875rem horizontal
- States: Hover may slightly darken or add subtle shadow

## Responsive behavior

The sidebar navigation likely collapses to a bottom bar or hamburger menu on narrow viewports, though the exact breakpoint is not visible in the supplied images. The two-column feed layout should stack to single column on tablet and mobile, with the right panel either moving below the feed or becoming accessible through a toggle.

Leaderboard tables require horizontal scroll or column prioritization on small screens. The models directory filter pills should wrap naturally and may benefit from a "more" overflow pattern when space is constrained.

Typography scales down modestly: hero display should reduce to `{typography.section-display}` size on tablet, and body sizes remain consistent across breakpoints. Touch targets for sidebar icons and buttons must maintain minimum 44px dimensions regardless of viewport.

## Practical implementation guidance

### Preserve
- The dark canvas with high-contrast white typography; this is the platform's defining characteristic
- Archivo for navigation and primary actions; its slightly technical personality differentiates from generic sans-serif systems
- The restrained two-level surface system (surface and surface-elevated) rather than introducing additional gray layers
- Full-pill search inputs and rounded buttons; these soft shapes are signature elements
- Color-coded data visualizations with the specific accent palette for model provider differentiation

### Avoid
- Light mode implementations without complete recoloring; the dark theme is integral to the brand
- Sharp-cornered cards or buttons; the rounded language is consistent across all interactive elements
- Decorative shadows or gradients that suggest skeuomorphic depth
- More than two font families in any single view; the Archivo/Inter pairing is sufficient
- Borders between table rows; rely on spacing and hover states for separation

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the typography scale with Archivo and Inter loaded
3. Build the sidebar navigation with icon components and active states
4. Create the search input and filter pill components
5. Develop content card layouts for feeds and model directories
6. Add the leaderboard table with data visualization colors
7. Implement responsive stacking for two-column layouts

### Accessibility
- Ensure all text meets WCAG AA contrast against the #000000 canvas; the ink-secondary and ink-muted tokens should be tested carefully
- Provide visible focus indicators for keyboard navigation; the current subtle borders may need enhancement
- Add aria-labels to icon-only sidebar navigation items
- Consider reduced-motion preferences for any data visualization animations
- Ensure leaderboard color coding has text or pattern alternatives for colorblind users

## Scope note

This guide covers the community platform pages including home feeds, model directories, leaderboards, and group pages. The marketing landing page with its larger display typography and different layout approach is not fully represented. Mobile layouts, animation specifications, form validation states, and the complete icon set are not included. Zalando Sans Expanded and System-Uimonospace are present in the source but not used in the core interface components described here.
