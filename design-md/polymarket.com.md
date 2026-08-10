# How polymarket.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/polymarket.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage showing dark-themed prediction market cards with category navigation, featured Bitcoin market, and breaking news sidebar with percentage indicators](https://pin.fontofweb.com/8585?format=jpg)](https://design.withfudge.com/share/pin-8585)

[Homepage showing dark-themed prediction market cards with category navigation, featured Bitcoin market, and breaking news sidebar with percentage indicators](https://design.withfudge.com/share/pin-8585)

[![NCAA Tournament market detail view with multi-line probability chart, team percentage breakdown, and comment thread](https://pin.fontofweb.com/8584?format=jpg)](https://design.withfudge.com/share/pin-8584)

[NCAA Tournament market detail view with multi-line probability chart, team percentage breakdown, and comment thread](https://design.withfudge.com/share/pin-8584)

[![Esports match page for Kiwoom DRX vs DN SOOPers showing live score, team tabs, and diverging probability chart with volume indicator](https://pin.fontofweb.com/8583?format=jpg)](https://design.withfudge.com/share/pin-8583)

[Esports match page for Kiwoom DRX vs DN SOOPers showing live score, team tabs, and diverging probability chart with volume indicator](https://design.withfudge.com/share/pin-8583)

## Overview

Polymarket presents a dark, data-dense prediction market interface designed for rapid scanning and decision-making. The visual system prioritizes legibility of numerical data—probabilities, prices, and volumes—against a near-black canvas. Information hierarchy is established through color saturation rather than size variation: bright accent colors signal actionable data points while muted grays recede into supporting context. The interface organizes markets into scannable cards, each containing embedded probability charts, outcome buttons, and metadata. A persistent navigation bar provides category filtering, while sidebars surface trending topics and breaking news with percentage indicators. The overall impression is of a financial terminal reimagined for consumer prediction markets: serious, efficient, and visually restrained except where color encodes meaning.

## Colors

The color system operates on a dark-mode foundation with semantic accent colors that encode market outcomes and data states. Every token below is drawn from the live interface.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #15191D | Primary card backgrounds, elevated panels |
| surface-elevated | #181D21 | Hover states, active navigation items |
| surface-highlight | #1E2428 | Subtle highlights, category pill backgrounds |
| ink | #FFFFFF | Primary text, headings, active data |
| ink-secondary | #E5E5E5 | Secondary headings, emphasized body text |
| ink-tertiary | #BBC4CD | Tertiary information, timestamps |
| muted | #7B8996 | Labels, placeholders, inactive metadata |
| muted-dim | #586879 | Disabled states, subtle borders |
| border | #242B32 | Card borders, dividers, chart grid lines |
| border-subtle | #1E2428 | Hairline separators within cards |
| action-primary | #0093FD | Primary buttons, links, active chart lines |
| action-primary-hover | #4080E0 | Button hover states, link underlines |
| success | #3DB468 | "Yes" outcomes, positive price movement, winning probabilities |
| success-dim | #D4FFAF | Success backgrounds, subtle positive indicators |
| danger | #CB3131 | "No" outcomes, negative price movement, losses |
| warning | #FF9900 | Attention states, price alerts, featured highlights |
| accent-purple | #6A5A9A | Secondary chart lines, team identifiers |
| accent-pink | #FABBF1 | Gradient accents, decorative highlights |
| accent-teal | #0E446B | Deep informational backgrounds |
| chart-blue | #0093FD | Primary data series, main probability line |
| chart-orange | #FF9900 | Secondary data series, comparison lines |
| chart-purple | #6A5A9A | Tertiary data series, team-specific encoding |
| chart-green | #3DB468 | Positive trend indicators, volume bars |

The dark canvas creates a theater-like environment for data visualization. Bright accents against black achieve high perceived contrast without eye strain during extended sessions. Color carries semantic weight: green universally indicates "Yes" or positive outcomes, red indicates "No" or negative outcomes, and blue serves as the neutral action color. Charts use a diverging palette where each data series receives a distinct hue, with opacity and line weight providing additional differentiation. A subtle radial gradient in pink (#FABBF1) appears as a decorative background element in featured sections, softening the otherwise austere palette.

## Typography

The interface uses Inter as the sole typeface for UI elements, with Open Sauce One reserved for legal and policy text. Inter's extensive weight range supports fine-grained hierarchy without size inflation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2rem | 600 | 1.25 | -0.02em | Featured market titles, page headlines |
| section-display | Inter | 1.5rem | 600 | 1.33 | -0.0125em | Section headings, "All markets" |
| market-title | Inter | 1.25rem | 600 | 1.2 | -0.01em | Card titles, market names |
| body | Inter | 1rem | 400 | 1.5 | normal | Descriptions, comments, general content |
| body-medium | Inter | 0.875rem | 500 | 1.43 | -0.005em | Emphasized body, tab labels |
| label | Inter | 0.8125rem | 500 | 1.23 | normal | Badges, tags, metadata labels |
| caption | Inter | 0.75rem | 400 | 1.33 | -0.005em | Timestamps, volume figures, fine print |
| stat-large | Inter | 2rem | 500 | 1.5 | normal | Large percentages, prices, countdowns |
| navigation | Inter | 0.875rem | 600 | 1.43 | -0.005em | Top nav categories, breadcrumbs |
| button | Inter | 0.875rem | 600 | 1.43 | -0.005em | All button labels |
| legal-copy | Open Sauce One | 1rem | 400 | 1.5 | normal | Terms, disclaimers, legal text |

Tracking tightens at larger sizes to maintain visual density. The 14px/0.875rem size with 500-600 weight serves as the workhorse for interactive elements, providing clear affordance without overwhelming. Percentage values in market cards use the same size as body text but with heavier weight to create numerical prominence. Open Sauce One, designed by Alfredo Marco Pradil and provided by Creative Sauce Fz Llc, appears only where distinct legal voice is required. Verify licensing for these families before production use.

## Layout

The page structure follows a centered content model with generous horizontal margins. The main content area sits within a maximum width container, creating focused reading zones against the full-bleed dark canvas.

**Grid and containment.** The primary layout uses a single centered column for market listings, with a secondary sidebar appearing at wider viewports. Content maxes at approximately 73rem (1168px), with 185px auto margins creating substantial side gutters. Internal card grids use flexible layouts: market cards arrange in responsive rows, typically 3-4 columns on desktop, with consistent 1rem gaps.

**Navigation architecture.** A persistent top bar contains the logo, search field, authentication actions, and a full-width category strip below. The category navigation scrolls horizontally when viewport width is insufficient, with "Trending" anchored as the first item with a distinctive zigzag icon. Navigation items use compact pill-shaped containers with 4px 10px padding.

**Card composition.** Market cards follow a strict internal hierarchy: thumbnail or icon at top-left, title and subtitle as primary block, probability or price data as prominent right-aligned figures, and outcome buttons at the bottom. Charts embed directly within cards when space permits, with sparklines showing recent price history. Card padding is asymmetric—more horizontal breathing room (20px) than vertical—to accommodate varying content heights.

**Detail views.** Individual market pages expand to full-width data visualization, with probability charts dominating the right two-thirds and market metadata, comments, and outcome selection occupying the left third. Breadcrumb navigation traces category hierarchy above the title.

**Spacing scale.** The system uses a 2px base unit. Common increments: 4px for tight internal padding, 8px for related element grouping, 12px for card internal spacing, 16px for section separation, 20px for card padding, 24px for major section breaks, and 32-40px for page-level vertical rhythm.

## Visual language

The interface communicates through a financial-terminal aesthetic tempered by consumer-friendly color coding. Visual density is high—multiple data points compete for attention within each card—yet the dark canvas and careful color restraint prevent chaos.

**Iconography and imagery.** Market thumbnails are photographic or branded icons, small and square with rounded corners. Category icons are minimal line drawings. The Polymarket logo appears as a geometric mark beside wordmark. User avatars in comment threads are circular with subtle colored rings indicating status.

**Data visualization.** Probability charts use thin lines (1-2px) with dot markers at current values. Area fills appear beneath lines with low opacity. Grid lines are extremely subtle, nearly blending into the canvas. Multiple series use distinct hues with sufficient separation in hue space. Y-axis labels are minimal, often omitted in sparkline contexts. Time axes show abbreviated timestamps.

**Motion and feedback.** While static images cannot confirm motion, the interface suggests micro-interactions: outcome buttons likely shift color on hover, chart lines may animate on load, and probability values probably tick with live updates. The "LIVE" indicator uses a pulsing red dot convention.

**Texture and depth.** Elevation is minimal—no heavy shadows. A single subtle shadow appears on elevated elements: `oklab(0 0 0 / 0.04) 0px 8px 16px 0px`. Borders provide most structural definition, with 1px solid lines in muted tones. The overall effect is flat but layered, like a sophisticated spreadsheet.

## Components

**Market card.** The fundamental unit of the interface. Anatomy: thumbnail image (40x40px, rounded), title block (market name + subtitle), probability display (large percentage or price), outcome buttons ("Yes"/"No" or specific options), volume indicator, and optional sparkline chart. Surface: background at surface token, 1px border in border token, 15.2px border radius. Spacing: 20px left padding, 12px top, 8px bottom, with internal elements stacked at 8px intervals. Typography: title at market-title token, metadata at caption, probabilities at stat-large or body-medium depending on prominence.

**Outcome button.** Compact toggle for binary or multiple-choice markets. Two variants visible: filled pill with success or danger background for selected/active state, and outlined or muted pill for unselected. Anatomy: label text with optional percentage, contained in rounded rectangle. Surface: selected "Yes" uses success green with canvas text; selected "No" uses danger red with white text; unselected uses surface-highlight background with muted text. Shape: 6px radius, padding 8px 16px for standard, 4px 12px for compact. Typography: label token, weight 500-600.

**Probability chart.** Line or area chart showing price/probability history. Anatomy: SVG path with optional area fill, Y-axis grid lines, X-axis time labels, current value marker dot, and legend for multi-series data. Surface: transparent background, grid lines at border-subtle. Composition: occupies right portion of detail view or embeds in card footer. Multi-series charts use color-coded lines with corresponding legend pills.

**Category navigation.** Horizontal scrollable list of market categories. Anatomy: text labels with optional dropdown chevron, "Trending" with distinctive icon. Surface: transparent background, individual items as subtle pills on hover. Spacing: items at 0px 14px padding, with 24px section padding above and below. Typography: navigation token.

**Search bar.** Prominent top-bar element. Anatomy: magnifying glass icon, placeholder text, optional clear button. Surface: surface background, pill shape (9999px radius), full-width within constraints. Typography: body token in muted color.

**Breaking news sidebar.** Vertical list of trending markets with percentage indicators. Anatomy: numbered list, market title, probability figure with directional arrow. Surface: transparent, separated by subtle borders. Typography: body for titles, stat-large for percentages, caption for metadata.

**Comment thread.** Nested discussion within market detail. Anatomy: avatar, username, comment text, timestamp. Surface: transparent, indented replies. Typography: body for comments, caption for metadata.

## Responsive behavior

The interface appears optimized for desktop viewing with substantial content width. At narrower viewports, the following adaptations should occur: the sidebar collapses or stacks below main content; market cards reduce from multi-column to single-column layout; category navigation becomes horizontally scrollable with fade indicators; search bar may collapse to icon-only trigger; and probability charts maintain aspect ratio with reduced axis labeling. Touch targets should maintain minimum 44px height for outcome buttons. The dense data presentation may require horizontal scrolling for tables or alternative card layouts on mobile.

## Practical implementation guidance

**Preserve.** The dark canvas as default—never implement a light mode without complete color recalculation. The semantic color mapping: green for positive/yes, red for negative/no, blue for neutral actions. The tight tracking on large headings. The asymmetric card padding with more horizontal than vertical space. The subtle border-based elevation rather than heavy shadows.

**Avoid.** Light backgrounds behind charts—they destroy the terminal aesthetic. Pure white (#FFFFFF) for large areas; use ink-secondary and ink-tertiary for reduced emphasis. Saturated colors for non-semantic decoration. Drop shadows on individual cards—use borders instead. Generic button styling that doesn't encode outcome state.

**Recommended build order.** 1) Establish dark canvas and surface color tokens. 2) Implement Inter at base 16px with full weight range. 3) Build market card component with all spacing and border tokens. 4) Create outcome button variants with semantic colors. 5) Implement category navigation and search bar. 6) Add probability chart with line/area rendering. 7) Build detail view layout with chart prominence. 8) Add breaking news sidebar. 9) Implement responsive breakpoints for card grid collapse.

**Accessibility.** Ensure probability values are not color-only—supplement with text labels or patterns. Provide sufficient contrast for success/danger text against their backgrounds (the green on black passes, but verify for thinner weights). Chart lines should have distinct patterns or labels for colorblind users. Interactive elements need visible focus states, likely a 2px outline in action-primary. The high information density may overwhelm screen readers; implement proper heading hierarchy and ARIA labels for market data.

## Scope note

This guide covers the Polymarket homepage, market detail views, and esports match pages as visible in the supplied images. Mobile layouts, authentication flows, wallet interfaces, market creation tools, and real-time WebSocket update animations are not represented. The Open Sauce One font appears only in legal contexts and may have limited interface presence. Measurements derive from the desktop viewport state shown.
