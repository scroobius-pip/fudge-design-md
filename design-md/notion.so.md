# How notion.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/notion.so-design)

Last updated: 2026-08-10

## Captured pages

[![Dark workspace page with left sidebar navigation, page title 'Font of Web', and structured content blocks including checklists and embedded links.](https://pin.fontofweb.com/9217?format=jpg)](https://design.withfudge.com/share/pin-9217)

[Dark workspace page with left sidebar navigation, page title 'Font of Web', and structured content blocks including checklists and embedded links.](https://design.withfudge.com/share/pin-9217)

[![Minimal dark page header showing 'Whisp OS' title with dotted underline decoration and breadcrumb navigation.](https://pin.fontofweb.com/9062?format=jpg)](https://design.withfudge.com/share/pin-9062)

[Minimal dark page header showing 'Whisp OS' title with dotted underline decoration and breadcrumb navigation.](https://design.withfudge.com/share/pin-9062)

[![Home dashboard with greeting, recently visited page cards, calendar events panel, database view preview, and tutorial content cards.](https://pin.fontofweb.com/6779?format=jpg)](https://design.withfudge.com/share/pin-6779)

[Home dashboard with greeting, recently visited page cards, calendar events panel, database view preview, and tutorial content cards.](https://design.withfudge.com/share/pin-6779)

[![Desktop app promotion modal with centered Notion logo, feature list, and blue primary action button on dark background.](https://pin.fontofweb.com/5254?format=jpg)](https://design.withfudge.com/share/pin-5254)

[Desktop app promotion modal with centered Notion logo, feature list, and blue primary action button on dark background.](https://design.withfudge.com/share/pin-5254)

## Overview

Notion presents a dark-first workspace interface built around content density and minimal visual chrome. The system prioritizes long-form reading and writing with a near-black canvas that reduces eye strain during extended use. Typography is handled entirely by Noto Sans Arabic across all weights, creating a unified voice from navigation labels to large page titles. The layout follows a classic sidebar-plus-main pattern, with the left rail providing persistent access to workspaces, pages, and tools while the main area hosts fluid, block-based content. Visual hierarchy emerges through careful spacing, weight variation, and subtle surface elevation rather than heavy borders or shadows. The interface feels calm and focused, with interactive elements receding until needed and content always occupying center stage.

## Colors

The color system is built on a dark foundation with carefully graded neutrals and a single accent color for actions.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Primary background for all workspace surfaces |
| surface | #191919 | Elevated cards, panels, and content blocks |
| surface-elevated | #24292F | Hover states, active selections, deeper elevation |
| ink | #F0EFED | Primary text, headings, and interactive labels |
| ink-secondary | #ADA9A3 | Secondary text, descriptions, metadata |
| ink-tertiary | #7D7A75 | Tertiary text, disabled states, placeholders |
| border | #383836 | Visible dividers, card outlines, structural borders |
| border-subtle | #2C2C2B | Hairline separators, sidebar divisions |
| action | #2783DE | Primary buttons, links, active indicators |
| accent-warm | #BCBAB6 | Subtle warm highlights, special labels |
| highlight | #FFFCEB | Attention backgrounds, callout blocks |

The dark mode dominates all visible surfaces. Pure black canvas creates maximum contrast with off-white ink, while intermediate grays provide depth without introducing color temperature shifts. The single blue action color appears sparingly for primary calls-to-action and interactive anchors. Warm accents appear in specific contexts like labels or badges but never compete with the core blue action. Light surfaces appear only in embedded content previews or external link cards, creating natural contrast boundaries without explicit borders.

## Typography

All text uses Noto Sans Arabic with weights ranging from Regular (400) through Medium (500), Semibold (600), to Bold (700). Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Noto Sans Arabic | 2.5rem | 700 | 1.2 | normal | Page titles, major headings |
| section-display | Noto Sans Arabic | 1.5rem | 600 | 1.3 | normal | Section headers, card group titles |
| card-title | Noto Sans Arabic | 1.875rem | 600 | 1.2 | normal | Dashboard card headings, featured content |
| body | Noto Sans Arabic | 1rem | 400 | 1.5 | normal | Paragraph text, descriptions, content blocks |
| body-small | Noto Sans Arabic | 0.875rem | 400 | 1.43 | normal | Navigation items, metadata, captions |
| label | Noto Sans Arabic | 0.75rem | 500 | 1.33 | normal | Tags, timestamps, status indicators |
| navigation | Noto Sans Arabic | 1rem | 500 | 1.5 | normal | Sidebar items, top-level navigation |
| button-primary | Noto Sans Arabic | 0.875rem | 500 | 1.5 | normal | Button labels, action text |

The type scale is compact and functional. Large headings at 40px establish page context without overwhelming the content. Body text at 16px maintains readability for extended reading sessions. Smaller sizes at 14px and 12px handle metadata and dense information displays. Line heights are generous for body text to support scanning and reading comfort, while tighter leading on labels and buttons keeps compact elements visually connected. No letter-spacing adjustments are applied, preserving the natural rhythm of the typeface.

## Layout

The workspace follows a fixed sidebar with fluid main content arrangement. The left sidebar occupies approximately 240 pixels of persistent horizontal space, providing navigation hierarchy from workspace switching down to individual page access. The main content area fills remaining viewport width with generous internal padding.

Content within the main area uses a centered reading column for text-heavy pages, while dashboard views expand to use available width with card-based layouts. The home dashboard demonstrates a hybrid approach: full-width sections containing horizontally scrolling card groups, with internal grids adapting to content density.

Spacing follows a 2px base unit system. Common increments include 8px for tight internal padding, 12px for comfortable element separation, 16px for section-internal spacing, 24px for distinct content blocks, and 80px for major section divisions. Negative margins of -1px appear at content boundaries to collapse adjacent borders visually.

The block-based content system stacks elements vertically with minimal separation. Related blocks group with 2-4px spacing, while distinct sections separate with 20-32px. Horizontal rhythm relies on consistent left alignment with selective indentation for hierarchical content like nested pages or task lists.

## Visual language

The interface communicates through restraint and density rather than decoration. Surfaces are flat with no gradients; depth emerges from subtle background color shifts between canvas, surface, and elevated surface tokens. Borders are hairline-thin and colored to blend rather than stand out, appearing only where structural separation is necessary.

Interactive elements signal state through background color changes rather than outlines or shadows. Buttons fill on hover, list items highlight with surface-elevated backgrounds, and navigation items brighten from ink-secondary to ink. The absence of heavy shadows keeps focus on content; the single visible shadow in the system is subtle and diffuse, used sparingly for floating elements.

Icons appear as simple line drawings or filled shapes, always in ink-secondary or matching adjacent text color. They sit inline with text or as standalone touch targets in toolbars. The Notion logo mark appears as a clean geometric monogram, often white on dark or dark on light depending on context.

Content cards on the home dashboard use rounded corners at 16px, creating friendly containers that contrast with the sharper 6px radius of interactive buttons and 2-4px radius of inline elements. This radius hierarchy helps users distinguish container types at a glance.

## Components

### Sidebar

The sidebar provides persistent workspace navigation on a pure black canvas. It contains workspace identity at top, followed by collapsible section groups for pages, shared content, and tools. Each navigation item shows an optional icon, label text in navigation typography, and hover feedback via subtle background highlight. Active items display in ink color while inactive items use ink-secondary. The sidebar can be collapsed to icon-only mode, though the expanded text view is default.

### Page header

The page header sits above main content, showing breadcrumb navigation and page actions. It uses minimal height with compact padding, displaying workspace and page hierarchy in body-small typography. Action buttons align right with ghost button styling. The header background matches canvas, creating seamless continuation with the content area below.

### Content blocks

The core content system presents free-form blocks stacked vertically. Text blocks use body typography with generous line height. Heading blocks scale from section-display down through body size based on hierarchy level. Checklist items show custom checkbox graphics in accent-warm, with completed items struck through in ink-tertiary. Embedded content like files or links render as cards with surface background, thumbnail preview, and metadata text.

### Database views

Database content appears as structured rows with visible column alignment. Each row shows property values inline, with select-type properties rendered as small pills with colored backgrounds. Row hover triggers surface-elevated background. Column headers use label typography in ink-secondary. The view supports inline editing, with cells becoming interactive inputs on focus.

### Cards

Dashboard cards group related content with surface background and 16px border radius. They contain a thumbnail or icon area, title in card-title or body weight, and optional metadata footer. Card grids flow horizontally with consistent 8-12px gaps, scrolling when content exceeds viewport width. Hover states lift cards subtly through background shift rather than shadow.

### Buttons

Primary buttons use action background with white text, 6px radius, and compact padding. Ghost buttons appear transparent with ink-secondary text, filling on hover. Icon buttons are square with centered graphics, often appearing in toolbars or inline with text. Button groups align horizontally with 4px spacing between items.

### Modal dialogs

Modal overlays center content on a dark scrim. The dialog surface uses elevated background with generous padding. Content stacks vertically with section-display or body headings, descriptive text, and action buttons at bottom. Primary action uses filled button styling; secondary actions use ghost buttons. Close controls appear as icon buttons in the header area.

## Responsive behavior

The sidebar collapses to a narrow icon rail on smaller viewports, with full expansion available via toggle. Main content maintains readable column width for text, switching to full-width layouts for dashboard views. Card grids reflow from multiple columns to horizontal scroll or single column based on available space. The home dashboard's recently visited cards compress from six-across to fewer visible items with peek indicators for additional content.

Touch targets maintain minimum 44px height for all interactive elements. Dense database views may switch to card-based mobile layouts on narrow viewports. The onboarding modal remains centered with maximum width constraint, scaling padding proportionally.

## Practical implementation guidance

### Preserve
- The near-black canvas as default background; it defines the product's visual identity
- Generous line height on body text for reading comfort in long documents
- Subtle border colors that separate without drawing attention
- The single blue accent for all primary actions to maintain clear hierarchy
- Consistent left alignment and indentation patterns for hierarchical content

### Avoid
- Light mode as default; the dark interface is core to the experience
- Heavy shadows or dimensional effects; keep surfaces flat
- Multiple accent colors competing for attention
- Tight line height that compromises readability
- Borders stronger than 1px or colors darker than the border token

### Recommended build order
1. Establish canvas, surface, and ink color tokens with proper contrast ratios
2. Implement typography scale with Noto Sans Arabic at all specified weights
3. Build sidebar navigation with collapse behavior and active states
4. Create content block system with heading hierarchy and checklist styling
5. Add database row components with property pill rendering
6. Implement dashboard card grids with responsive reflow
7. Polish interaction states: hover, active, focus, and disabled

### Accessibility
- Ensure all text meets WCAG AA contrast against canvas and surface backgrounds
- Provide visible focus indicators for keyboard navigation, using outline or background shift
- Maintain logical tab order through sidebar, header, then main content
- Use semantic heading hierarchy without skipping levels
- Include aria-labels on icon-only buttons and interactive elements
- Support reduced motion preferences for any animated transitions

## Scope note

This guide covers the authenticated workspace interface including sidebar navigation, page content, dashboard home, and modal dialogs. Marketing pages, public share views, and mobile applications are not represented. The onboarding flow and desktop app promotion appear as isolated modal surfaces. Measurements reflect the desktop interface at standard resolution; viewport scaling may require proportional adjustment of spacing tokens.
