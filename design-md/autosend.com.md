# How autosend.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/autosend.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered envelope icon, italic serif headline 'Email for Developers & Marketers', and dual CTA buttons on light background](https://pin.fontofweb.com/5430?format=jpg)](https://design.withfudge.com/share/pin-5430)

[Hero section with centered envelope icon, italic serif headline 'Email for Developers & Marketers', and dual CTA buttons on light background](https://design.withfudge.com/share/pin-5430)

[![Email insights dashboard with green deliverability flow chart, status cards with colored borders, and week/month toggle](https://pin.fontofweb.com/5431?format=jpg)](https://design.withfudge.com/share/pin-5431)

[Email insights dashboard with green deliverability flow chart, status cards with colored borders, and week/month toggle](https://design.withfudge.com/share/pin-5431)

[![Footer area with red mailbox illustration, 'Start sending better emails' CTA band, four-column link grid, and large monospace counter](https://pin.fontofweb.com/5432?format=jpg)](https://design.withfudge.com/share/pin-5432)

[Footer area with red mailbox illustration, 'Start sending better emails' CTA band, four-column link grid, and large monospace counter](https://design.withfudge.com/share/pin-5432)

## Overview

AutoSend presents itself as an email infrastructure platform serving both developers and marketers. The visual system balances technical credibility with approachable warmth through a distinctive typographic pairing: Cooper Lt Bt's elegant italic serifs for headlines against Geist's clean, modern sans-serif for all interface text. The overall impression is of a tool that takes email seriously without taking itself too seriously—professional but not corporate, capable but not cold.

The design employs a restrained, warm-leaning neutral palette with a single vibrant purple action color that anchors every conversion moment. Data visualization plays a central role in the product story, with email deliverability and engagement metrics rendered as flowing node diagrams using semantic color coding. The layout favors generous whitespace and centered compositions, creating breathing room around key messages and allowing the product's visual elements—3D icons, flow charts, and large monospace statistics—to command attention without competition.

## Colors

| token | value | use |
|---|---|---|
| action | #5B5BFA | Primary buttons, links, and interactive accents |
| action-hover | #4A4AE0 | Hover state for primary actions |
| ink | #1A1A1A | Primary text, headings in sans-serif contexts |
| muted-ink | #6B6B6B | Secondary text, descriptions, footer links |
| canvas | #FAFAF8 | Page background, creating warmth against pure white |
| surface | #FFFFFF | Cards, panels, elevated content areas |
| surface-elevated | #F5F5F0 | Subtle background variation for section separation |
| border | #E5E5E0 | Card borders, dividers, structural lines |
| border-subtle | #F0F0EB | Hairline separators, very light boundaries |
| success | #7ED321 | Positive metrics, delivered/opened states |
| success-surface | #F0FBE5 | Light green background for success status cards |
| warning | #F5A623 | Caution metrics, bounced email states |
| warning-surface | #FFF5E0 | Light amber background for warning status cards |
| danger | #E85D75 | Negative metrics, spam/unsubscribed states |
| danger-surface | #FDEAEE | Light pink background for danger status cards |
| accent-teal | #50E3C2 | Supplementary accent for data visualization variety |

The color system operates in a light mode exclusively across the visible surfaces. The warm off-white canvas (#FAFAF8) prevents the sterility of pure white while maintaining excellent readability. The action purple (#5B5BFA) is saturated enough to feel energetic and modern without tipping into playful territory inappropriate for infrastructure software.

Status colors follow intuitive conventions: green for delivered and opened emails, amber for bounces, and pink-red for spam reports and unsubscribes. These are applied as both border colors and light tint backgrounds within status cards, creating an accessible two-tone system that communicates state at a glance. The photographic and illustrative elements—3D mailbox, envelope icon—introduce warm oranges and reds that complement the cool purple action color without competing for hierarchy.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cooper Lt Bt | 3rem | 400 | 1.1 | -0.01em | Main page headlines, italic serif presence |
| section-display | Cooper Lt Bt | 2rem | 400 | 1.2 | -0.01em | Section headings, feature callouts |
| body | Geist | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-large | Geist | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, introductory paragraphs |
| label | Geist | 0.75rem | 500 | 1.4 | 0.05em | Buttons, tags, uppercase labels |
| navigation | Geist | 0.875rem | 500 | 1.4 | 0.02em | Top nav, footer category headers |
| mono-stat | Geist Mono | 4rem | 400 | 1 | -0.02em | Large counter numbers, hero statistics |
| mono-data | Geist Mono | 0.875rem | 400 | 1.4 | 0 | Metrics, percentages, tabular data |

The typographic system rests on three families with clear role separation. Cooper Lt Bt, designed by Victoria Grigorenko and Manvel Shmavonyan for Para Type Inc, supplies the brand's distinctive voice through its light weight and italic forms. It appears exclusively in display contexts, lending an editorial sophistication that differentiates AutoSend from typical developer-tool aesthetics.

Geist, from Basementstudio and Vercel, handles all interface text with weights from Regular through Medium. Its clean geometry and excellent legibility at small sizes make it ideal for navigation, body copy, and labels. Geist Mono, sharing the same design lineage, serves data-dense contexts where monospace alignment aids scanning—email statistics, API references, and the large decorative counter in the footer.

Type sizes follow a 4px grid system, with display sizes at 48px and 32px, body at 16px and 20px, and labels at 12px. The mono-stat at 64px creates dramatic scale contrast for the footer counter. Letter spacing remains tight for display type and opens slightly for uppercase labels to improve readability.

Verify licensing for these families before production use. Cooper Lt Bt requires licensing through Para Type Inc. Geist and Geist Mono are available from Basementstudio and Vercel.

## Layout

The page structure follows a centered, single-column approach with content constrained to a moderate maximum width. The hero section occupies substantial vertical space with centered alignment: navigation at top, 3D envelope icon above the headline, descriptive text below, and paired call-to-action buttons beneath. This vertical stacking creates a clear reading path and emphasizes the product's dual audience.

Below the hero, content organizes into a two-column feature grid for transactional and marketing email offerings. Each column contains a category label, italic serif headline, descriptive paragraph, and a text-link call-to-action with arrow icon. A full-width divider separates this from subsequent content.

The email insights section introduces a more complex layout: centered section header above, then a contained panel with internal tab navigation (WEEK/MONTH toggle) and a flowing node diagram. The diagram splits into deliverability and engagement halves, with curved connector lines linking status cards in a left-to-right progression.

The footer area inverts the pattern with a promotional band containing illustration, text, and button, followed by a four-column link grid, then a bottom bar with logo, tagline, and large decorative counter. This counter spans nearly half the footer width, creating an asymmetrical balance against the compact text block.

Spacing between sections is generous, typically 5rem to 7.5rem, allowing each content block to feel distinct. Internal padding within cards and panels uses 1.5rem for comfortable readability. The overall rhythm alternates between tight, information-dense areas (the insights dashboard) and open, breathable moments (the hero and footer counter).

## Visual language

AutoSend's visual identity combines three-dimensional product illustration, data-driven node diagrams, and warm typographic expression. The 3D icons—mailbox and envelope—use soft shadows and rounded forms that feel friendly and tangible, grounding the abstract email service in physical metaphor. These appear at moderate scale, never overwhelming the surrounding text.

The data visualization language centers on connected node diagrams with curved Bézier paths linking status cards. Each node carries a colored dot indicator, percentage value, and absolute number in Geist Mono. The connecting lines inherit the source node's color, creating flowing color-coded paths through the email lifecycle. This visualization style makes complex deliverability data immediately scannable while maintaining visual interest.

Photography is absent from the visible surfaces; the design relies entirely on illustration, iconography, and typography to communicate. The warm neutral background with subtle texture-like variation prevents flatness without introducing visual noise. Borders are consistently light and precise, functioning as structural definition rather than decorative elements.

The interaction language suggests restraint: buttons are pill-shaped with solid fills or subtle outlines, tabs use minimal active-state indication, and links rely on color and arrow icons for affordance. There is no heavy shadow system, glassmorphism, or gradient mesh—just clean surfaces with purposeful color accents.

## Components

### Primary action button
- **Anatomy**: Text label centered within a pill-shaped container
- **Surface and text color**: Solid action purple (#5B5BFA) background with white text
- **Typography**: Uppercase label style, Geist Medium, 12px
- **Shape**: Full pill border radius (9999px)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears alongside secondary outline button in hero; standalone in promotional bands
- **Variants**: "GET STARTED" is the primary variant; used consistently for conversion actions

### Secondary action button
- **Anatomy**: Text label within pill-shaped container with border
- **Surface and text color**: White background, dark ink text, light border
- **Typography**: Same label style as primary
- **Shape**: Full pill border radius with 1px border
- **Spacing**: Identical padding to primary
- **Composition**: Positioned adjacent to primary button with small gap
- **Variants**: "BOOK A DEMO" variant visible in hero

### Status insight card
- **Anatomy**: Rounded rectangle containing colored dot, status label, percentage, and absolute number
- **Surface and text color**: Tinted background matching status semantic color with dark text; colored border
- **Typography**: Status label in uppercase label style; percentage in Geist Mono 14px; number in Geist Mono 12px muted
- **Shape**: 0.75rem border radius
- **Spacing**: Internal padding of 1rem to 1.5rem
- **Composition**: Nodes in flowing diagram, connected by curved lines
- **Variants**: Success (green tint/border), warning (amber), danger (pink), neutral (gray for sent baseline)

### Email metrics panel
- **Anatomy**: Contained card with header row, tab toggle, and diagram area
- **Surface and text color**: White surface on warm canvas background
- **Typography**: Panel title in Geist Medium 16px; subtitle in Geist Regular 14px muted
- **Shape**: 1rem border radius for outer panel
- **Spacing**: 1.5rem internal padding
- **Composition**: Full-width within content constraint; internal two-column split for deliverability/engagement
- **Variants**: WEEK/MONTH toggle as pill-shaped segmented control with active fill

### Feature category card
- **Anatomy**: Label, italic headline, description paragraph, and arrow link
- **Surface and text color**: Transparent/no background; text only
- **Typography**: Category label in uppercase navigation style; headline in Cooper Lt Bt italic 32px; body in Geist 16px; link in action purple uppercase
- **Shape**: No border radius (text block)
- **Spacing**: 1.5rem between elements internally
- **Composition**: Two-column grid with vertical divider
- **Variants**: Transactional Emails and Marketing Emails variants differ only in content

### Footer promotional band
- **Anatomy**: Illustration, headline, description, and primary button in horizontal arrangement
- **Surface and text color**: White or near-white background; dark text
- **Typography**: Headline in Cooper Lt Bt italic 24px; description in Geist 16px muted
- **Shape**: No distinct border; separated by horizontal rules
- **Spacing**: 2.5rem vertical padding
- **Composition**: Illustration left, text center-left, button right-aligned

### Footer link grid
- **Anatomy**: Four columns of categorized text links
- **Surface and text color**: No background; muted ink for links
- **Typography**: Category headers in uppercase label style; links in Geist Regular 14px
- **Shape**: No borders
- **Spacing**: Column gap of 2.5rem or more; row gap of 0.75rem within columns
- **Composition**: Equal-width columns, left-aligned within each

## Responsive behavior

The visible surfaces show a desktop-optimized layout. Implementation should consider how the two-column feature grid collapses to single-column on narrower viewports, with the vertical divider becoming a horizontal rule. The email insights diagram, with its flowing left-to-right node layout, requires careful adaptation—either horizontal scroll with fade indicators or a stacked vertical arrangement preserving the color-coded path logic.

The footer promotional band's horizontal arrangement should stack vertically on mobile, with the illustration centered above text and button. The four-column link grid should collapse to two columns then single column, maintaining category grouping.

The large monospace counter in the footer may require reduced scale on smaller screens to prevent overflow, though its dramatic presence should be preserved as much as possible. Navigation items with dropdown indicators should convert to a mobile menu pattern, with the chevron icons suggesting expandable sub-navigation that needs touch-friendly implementation.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against pure white cards—this subtle temperature difference defines the interface's approachable quality
- Cooper Lt Bt italic for all display headlines; the italic form is essential to the brand voice, not optional styling
- The full pill shape for primary and secondary buttons; partial rounding would break the friendly, accessible character
- Color-coded status semantics in the insights diagram; these are functional as well as aesthetic
- Generous section spacing; the design relies on whitespace to separate concerns without heavy borders

### Avoid
- Dark mode implementations without careful rethinking; the warm neutrals and semantic status colors would require complete rebalancing
- Adding drop shadows to cards; the flat, clean surfaces are intentional
- Replacing Geist with a more decorative sans-serif; the contrast with Cooper Lt Bt depends on Geist's neutrality
- Crowding the insights diagram with additional metrics; the current six-node flow is already information-dense
- Using the action purple for non-interactive elements; it should remain reserved for clickable actions

### Recommended build order
1. Establish the color tokens and apply canvas/surface backgrounds
2. Implement the typographic hierarchy with all three families loaded
3. Build the hero section with centered composition and dual CTA buttons
4. Create the feature grid with two-column layout and italic headlines
5. Develop the insights panel with status card components and SVG connector paths
6. Assemble footer with promotional band, link grid, and decorative counter
7. Add navigation with dropdown indicators and mobile adaptation

### Accessibility
- Ensure the action purple (#5B5BFA) meets WCAG AA contrast against white for all text sizes; it may need darkening for small label text
- The status color system should not be the sole indicator of state; maintain text labels and consider icon additions
- The flowing diagram needs screen reader alternatives, such as a structured list or table presenting the same metrics
- Focus states for pill buttons should use visible outlines rather than relying solely on color shift
- The large decorative counter is presentational; ensure equivalent data is available in accessible formats

## Scope note

This guide covers the AutoSend marketing homepage visible in the supplied images, including hero, feature overview, email insights dashboard, and footer sections. Pricing pages, documentation, authenticated application interfaces, and mobile-specific layouts are not represented. Interactive states including hover, focus, loading, and error conditions are not visible in still images and should be designed with accessibility best practices. Measurements are practical adaptation targets derived from the 4px grid system.
