# How trustmrr.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trustmrr.com-design)

Last updated: 2026-08-10

## Captured pages

[![Marketing homepage with hero headline, search bar, startup listing cards, and revenue leaderboard table on dark background](https://pin.fontofweb.com/7516?format=jpg)](https://design.withfudge.com/share/pin-7516)

[Marketing homepage with hero headline, search bar, startup listing cards, and revenue leaderboard table on dark background](https://design.withfudge.com/share/pin-7516)

[![Startup profile form with green promotional banner, input fields, category selector, and analytics integration cards in dashboard layout](https://pin.fontofweb.com/7517?format=jpg)](https://design.withfudge.com/share/pin-7517)

[Startup profile form with green promotional banner, input fields, category selector, and analytics integration cards in dashboard layout](https://design.withfudge.com/share/pin-7517)

[![Three-panel inbox interface with sidebar navigation, empty conversation list, and acquisition details panel with floating task checklist](https://pin.fontofweb.com/7519?format=jpg)](https://design.withfudge.com/share/pin-7519)

[Three-panel inbox interface with sidebar navigation, empty conversation list, and acquisition details panel with floating task checklist](https://design.withfudge.com/share/pin-7519)

## Overview

TrustMRR is a dark-mode SaaS marketplace and database for verified startup revenue data. The visual system communicates financial precision and technical credibility through a near-black canvas, monospace typography, and restrained accent colors that signal growth, status, and action. The interface divides into two primary contexts: a public-facing marketing surface that showcases startup listings and revenue leaderboards, and an authenticated dashboard where sellers manage startup profiles, track conversations, and monitor acquisition opportunities. Every surface maintains the same austere palette—deep blacks and charcoals for backgrounds, warm white for primary text, and a narrow spectrum of greens, ambers, and reds for data indicators and calls to action. The design avoids decorative gradients and relies on subtle borders, precise spacing, and typographic hierarchy to organize dense financial information.

## Colors

The color system is built on a dark foundation with high-contrast text and functional accents derived from financial signaling conventions.

| token | value | use |
|---|---|---|
| canvas | #000000 | Root page background, deepest layer |
| surface | #0A0A0A | Primary content areas, sidebar, empty states |
| surface-elevated | #171717 | Cards, input fields, elevated panels |
| surface-highlight | #262626 | Active navigation items, selected rows |
| ink | #FAFAFA | Primary headings, body text, icons |
| muted-ink | #A1A1A1 | Secondary labels, inactive navigation, placeholders |
| border | #FFFFFF | Primary borders on buttons, inputs, cards |
| border-subtle | #E5E5E5 | Dividers, table row separators, hairlines |
| accent-green | #00C950 | Positive growth indicators, success states, connected status |
| accent-green-light | #05DF72 | Hover states on green elements, promotional highlights |
| accent-amber | #FFB900 | Warning states, pending actions, promotional badges |
| accent-red | #FF6467 | Negative growth, errors, declined status |
| accent-brown | #3A2F1F | Promotional banner backgrounds, warm dark surfaces |
| accent-brown-deep | #461901 | Badge backgrounds, deep warm accents |
| accent-orange | #7B3306 | Secondary warm accents, hover on brown surfaces |

The dark mode is not an alternative theme but the sole visual environment. Light values appear only as text, borders, and subtle elevations. Green carries positive financial meaning exclusively—revenue growth, verified connections, successful actions. Amber signals attention without urgency: pending integrations, incomplete tasks, promotional opportunities. Red is reserved for negative growth percentages and critical alerts. The brown family creates warmth in promotional contexts without breaking the dark atmosphere.

## Typography

The type system relies on Inconsolata as the primary family, with System-Uimonospace appearing for dense tabular data and Crisp Noto Sans appearing in limited button contexts. This monospace-first approach reinforces the financial and technical character of the product.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inconsolata | 3rem | 700 | 1 | -0.025em | Homepage hero headline |
| section-display | Inconsolata | 1.125rem | 600 | 1.556 | normal | Page titles, section headers in dashboard |
| body | Inconsolata | 1rem | 400 | 1.5 | normal | Primary body text, descriptions, form labels |
| body-small | Inconsolata | 0.875rem | 400 | 1.429 | normal | Card content, secondary descriptions, navigation |
| label | Inconsolata | 0.75rem | 400 | 1.333 | normal | Captions, helper text, character counters |
| navigation | Inconsolata | 0.875rem | 400 | 1.429 | normal | Sidebar links, top-level navigation |
| button | Inconsolata | 0.875rem | 500 | 1.429 | normal | Button labels, action text |
| data-mono | System-Uimonospace | 0.75rem | 700 | 1.333 | normal | Financial figures, growth percentages, leaderboard values |

Inconsolata appears at weights 400, 500, 600, and 700. The 700 weight is reserved for hero display and emphasized data points. The 500 weight distinguishes interactive elements like buttons and links from static body text. System-Uimonospace provides a narrower, more compact alternative for dense numerical tables where horizontal space is constrained. Crisp Noto Sans appears at 11px in button contexts as a secondary family alongside the monospace system. Verify licensing for these families before production use.

## Layout

The layout system uses a fixed sidebar with fluid main content on dashboard pages, and a centered single-column composition on marketing pages.

**Dashboard architecture.** The authenticated interface employs a persistent left sidebar approximately 16rem wide, containing the TrustMRR logo, role toggle (Buyer/Seller), and primary navigation. The main content area occupies the remaining viewport width. On the Inbox page, the main area splits into two additional panels: a conversation list and a detail view, creating a three-column layout. The sidebar uses internal padding of `0 0.75rem 0 1.25rem`, with navigation items receiving `0.5rem 0.75rem` of padding and `0.25rem` bottom margin for visual separation.

**Marketing page structure.** The homepage uses a centered container with generous horizontal margins, approximately `3.5rem` on each side at desktop widths. Content stacks vertically: hero headline, search bar with adjacent primary action, filter links, horizontal scrolling card rows, and a full-width leaderboard table. Section spacing between major content blocks measures `3rem` to `4rem`.

**Grid and containment.** Card rows scroll horizontally with uniform card widths and consistent `1rem` gaps. The leaderboard table uses full-width rows with internal grid columns for rank, startup identity, founder, MRR value, and growth percentage. Form layouts in the dashboard use single-column stacking with full-width inputs and grouped field sections separated by `1.5rem` vertical spacing.

**Elevation and layering.** A floating task checklist appears fixed to the bottom-left corner on dashboard pages, overlaying content with a shadow. Modal or promotional surfaces use `rgba(0, 0, 0, 0.1)` shadows with `0px 10px 15px -3px` and `0px 4px 6px -4px` offsets for subtle depth.

## Visual language

The visual character is austere, precise, and technically credible—appropriate for a financial database serving startup operators and investors.

**Monospace dominance.** Every text element uses a monospace face, creating a terminal-like aesthetic that suggests data integrity and engineering culture. This choice differentiates TrustMRR from generic SaaS products and aligns with the expectations of a technical, financially literate audience.

**Border-defined surfaces.** Rather than shadows or background color shifts alone, the interface relies on thin white or near-white borders to delineate interactive elements. Inputs, buttons, cards, and table rows all share this 1px border treatment, creating a consistent material language where elevation is expressed through edge rather than depth.

**Color as signal, not decoration.** The restricted palette uses color only for functional communication. Green means growth or success. Amber means attention. Red means decline or error. Brown creates promotional warmth without introducing a competing brand color. This discipline prevents visual noise in data-dense contexts.

**Icon and badge system.** Small circular icons represent startups in listings and leaderboards. Status badges use pill shapes with amber text on deep brown backgrounds. Growth indicators pair directional arrows with color-coded percentages, always right-aligned for scanability in tables.

**Empty states.** The inbox and conversation panels use centered muted text on dark surfaces, avoiding decorative illustrations. The absence of content is treated as a neutral technical state rather than an emotional moment requiring illustration.

## Components

### Navigation sidebar

- **Anatomy:** Vertical stack containing logo mark with wordmark, role toggle pill, navigation links with icons, and bottom-anchored task checklist.
- **Surface:** `surface` background with `border-subtle` top border on the checklist section.
- **Typography:** `navigation` for links, `label` for checklist header.
- **Shape:** Navigation items use `panel` radius; active state fills with `surface-highlight`.
- **Spacing:** `0 0.75rem 0 1.25rem` horizontal padding; items stack with `0.25rem` gap.
- **Composition:** Icon left, label right, full-width clickable rows.
- **Variants:** Active item uses filled background; inactive uses transparent with `muted-ink` text.

### Startup listing card

- **Anatomy:** Square card containing startup icon, name, category tag, and three-column financial summary (revenue, price, multiple).
- **Surface:** `surface-elevated` with `border` 1px solid, `card` radius.
- **Typography:** `body-small` for name and category, `label` for financial headers, `data-mono` for values.
- **Shape:** `card` radius with internal padding of `1rem`.
- **Spacing:** Cards arranged in horizontal scrolling rows with `1rem` gap.
- **Composition:** Icon and name top-left, "FOR SALE" badge top-right, financial metrics bottom in three equal columns.
- **Variants:** Some cards display amber "FOR SALE" badges; others omit this when not applicable.

### Leaderboard table

- **Anatomy:** Full-width table with header row and data rows containing rank, startup identity, founder avatar and name, MRR value, and MoM growth.
- **Surface:** `surface` background with `border-subtle` row separators.
- **Typography:** `body-small` for startup names and founder names, `data-mono` for financial figures, `label` for growth percentages.
- **Shape:** Full-width rows with no external border; internal top borders on each row.
- **Spacing:** `0.75rem 1.5rem` row padding; header uses same with additional top spacing.
- **Composition:** Five implicit columns with flexible widths; rank column narrow, startup identity widest, MRR and growth right-aligned.
- **Variants:** Growth values use `growth-positive` or `growth-negative` color tokens with directional arrows. Top three ranks display medal icons (gold, silver, bronze) instead of numerals.

### Promotional banner

- **Anatomy:** Full-width banner with icon, headline, subheadline, and right-aligned call-to-action link.
- **Surface:** `accent-brown` background with `accent-green` 1px border, `card` radius.
- **Typography:** `body` for headline, `body-small` for subheadline, `button` for CTA.
- **Shape:** `card` radius with `1rem` internal padding.
- **Composition:** Icon and text left-aligned, CTA right-aligned with arrow indicator.
- **Variants:** Appears in dashboard contexts to prompt profile completion or startup listing.

### Input field

- **Anatomy:** Label text above, full-width input with optional character counter or helper text below.
- **Surface:** `surface-elevated` background with `border` 1px solid, `input` radius.
- **Typography:** `body` for input text, `label` for field label and helper text.
- **Shape:** `input` radius with `0.75rem 1rem` padding.
- **Spacing:** `1.5rem` vertical gap between fields; labels sit `0.5rem` above inputs.
- **Variants:** Select inputs show dropdown chevron; text areas allow multi-line entry with same border treatment.

### Task checklist (floating)

- **Anatomy:** Collapsible panel with header showing progress, expandable list of tasks with icons and descriptions, and action link.
- **Surface:** `surface-elevated` with shadow overlay, `panel` radius.
- **Typography:** `body-small` for header, `label` for task titles and descriptions.
- **Shape:** `panel` radius with `1rem` padding.
- **Composition:** Fixed to bottom-left corner, overlaying main content with `1rem` margin from edges.
- **Variants:** Expanded state shows all tasks; collapsed state shows header only with progress indicator.

## Responsive behavior

The dashboard sidebar should collapse to an icon-only rail or hamburger menu on viewports below approximately 768px, preserving the horizontal space for the multi-panel inbox and form layouts. Card rows on the homepage should maintain horizontal scrolling rather than wrapping, as the financial summary format requires consistent card widths for comparison. The leaderboard table should switch to a condensed view showing only rank, startup name, and MRR on narrow viewports, with founder and growth details accessible via expansion. Form layouts in the dashboard should remain single-column at all widths, as the field labels and inputs require full horizontal space for readability. The floating task checklist should anchor to the bottom of the viewport on mobile rather than the bottom-left corner, becoming a full-width sheet when expanded.

## Practical implementation guidance

### Preserve
- The monospace typography throughout; this is the defining visual characteristic.
- The near-black canvas with white borders for interactive elements.
- The color semantics: green for positive, amber for pending, red for negative.
- The precise financial data formatting with compact notation ($3.5M, $15k).
- The horizontal card scrolling for startup listings.
- The three-panel inbox layout on desktop.

### Avoid
- Introducing sans-serif fonts for body text; this breaks the technical credibility.
- Using shadows as primary elevation indicators; rely on borders.
- Adding decorative gradients or background patterns.
- Expanding the accent palette beyond green, amber, red, and brown.
- Center-aligning financial figures; always right-align for comparison.
- Using color alone to indicate status; pair with icons or text.

### Recommended build order
1. Establish the dark canvas and surface hierarchy with exact color tokens.
2. Implement Inconsolata at all weights and sizes, verifying metrics for crisp rendering.
3. Build the sidebar navigation with active/inactive states.
4. Create the input field and button components with consistent border treatment.
5. Implement the startup card with financial summary layout.
6. Build the leaderboard table with responsive condensation.
7. Add the promotional banner and floating task checklist as overlay components.
8. Implement the homepage hero and search composition.

### Accessibility
- Ensure all green/amber/red status indicators have accompanying text or icons for colorblind users.
- Maintain minimum 4.5:1 contrast for `muted-ink` text against dark surfaces; verify that `A1A1A1` on `#0A0A0A` meets this threshold.
- Provide visible focus states on all interactive elements, using `accent-green` outline or border shift.
- Ensure the floating task checklist does not obscure essential controls when expanded.
- Support keyboard navigation through the three-panel inbox layout with clear focus indicators.

## Scope note

This guide covers the marketing homepage and authenticated seller dashboard surfaces visible in the supplied images. Mobile layouts, buyer-specific interfaces, payment flows, and animation behaviors are not represented. The System-Uimonospace family appears only in leaderboard data contexts; Crisp Noto Sans appears in limited button contexts at 11px. Verify licensing for these families before production use.
