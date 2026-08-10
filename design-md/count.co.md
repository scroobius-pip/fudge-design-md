# How count.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/count.co-design)

Last updated: 2026-08-10

## Captured pages

[![Gallery page showing a grid of data-canvas previews with large section headings and blue arrow links](https://pin.fontofweb.com/1940?format=jpg)](https://design.withfudge.com/share/pin-1940)

[Gallery page showing a grid of data-canvas previews with large section headings and blue arrow links](https://design.withfudge.com/share/pin-1940)

[![FAQ section with a two-column layout featuring large display headings and bordered accordion items with blue text](https://pin.fontofweb.com/1939?format=jpg)](https://design.withfudge.com/share/pin-1939)

[FAQ section with a two-column layout featuring large display headings and bordered accordion items with blue text](https://design.withfudge.com/share/pin-1939)

[![Feature comparison table with tiered columns, checkmarks, and section headers with colored square icons](https://pin.fontofweb.com/1938?format=jpg)](https://design.withfudge.com/share/pin-1938)

[Feature comparison table with tiered columns, checkmarks, and section headers with colored square icons](https://design.withfudge.com/share/pin-1938)

[![Pricing page hero with large display typography and a detailed feature matrix comparing Pro, Team, Scale, and Enterprise tiers](https://pin.fontofweb.com/1937?format=jpg)](https://design.withfudge.com/share/pin-1937)

[Pricing page hero with large display typography and a detailed feature matrix comparing Pro, Team, Scale, and Enterprise tiers](https://design.withfudge.com/share/pin-1937)

## Overview

Count's design system presents a data analytics platform with a deliberately restrained, technical aesthetic. The visual language balances the warmth of human-readable content with the precision expected of a business intelligence tool. Large display typography dominates page heroes and section headers, set in a distinctive grotesque sans-serif that carries subtle character through its letterforms. Monospace accents appear throughout interactive elements, labels, and data-dense tables, reinforcing the product's technical foundation without overwhelming the reader.

The system employs a near-monochrome palette with a single vibrant action color for links and interactive states. Generous whitespace structures content into clear reading zones, while bordered containers and hairline rules organize complex information like pricing tiers and feature comparisons. Photography and data visualizations appear as full-bleed or contained imagery within the gallery and product showcases, bringing color and life to the otherwise neutral interface. The overall impression is of a tool that respects the analyst's need for clarity while aspiring to the polish of modern productivity software.

## Colors

The color system is intentionally minimal, built on a foundation of pure black and white with a single accent color for interactive elements. This restraint allows data visualizations and product imagery to become the primary sources of color within the interface.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, display headings, table headers, and body copy |
| canvas | #ffffff | Page backgrounds, card surfaces, and input fields |
| action | #0000ee | Links, interactive text, accordion triggers, and pricing highlights |
| muted-ink | #666666 | Secondary descriptions, captions, and supporting text |
| surface | #f5f5f5 | Subtle background tints for alternating rows or section bands |
| border | #e5e5e5 | Hairline rules, table borders, accordion outlines, and dividers |

The interface operates in a light mode exclusively across all visible surfaces. Black text on white backgrounds provides maximum contrast for data-heavy content. The action blue appears at full saturation for all interactive elements, creating a consistent affordance without introducing additional chromatic complexity. Muted gray tones handle hierarchy within text blocks, allowing the eye to scan from bold headings through to lighter descriptive copy. Product imagery and data visualizations within the gallery and feature showcases introduce saturated color through their content rather than the interface chrome.

## Typography

Three font families create a clear typographic hierarchy: By Norm Dimitri Bruni Manuel Krebs 20112017-5199824282119152252 for display and headings, Mulish Extra Light for body text, and Azeret Mono Thin for labels, navigation, and technical annotations.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Norm Dimitri Bruni Manuel Krebs 20112017-5199824282119152252 | 3.5rem | 400 | 1.1 | -0.02em | Page heroes, major section titles |
| section-display | By Norm Dimitri Bruni Manuel Krebs 20112017-5199824282119152252 | 2.5rem | 400 | 1.15 | -0.01em | Section headers, feature group titles |
| body | Mulish Extra Light | 1rem | 300 | 1.6 | 0em | Paragraphs, descriptions, table content |
| label | Azeret Mono Thin | 1rem | 400 | 1.4 | 0em | Tags, badges, technical labels, navigation |
| navigation | Azeret Mono Thin | 1rem | 400 | 1.4 | 0em | Menu items, links, accordion triggers |

By Norm Dimitri Bruni Manuel Krebs 20112017-5199824282119152252, designed by Norm Dimitri Bruni Manuel Krebs and distributed by Lineto, provides the distinctive character of the display hierarchy. Its slightly irregular proportions and humanist details distinguish the brand without sacrificing readability at large sizes. Mulish Extra Light delivers body text with an airy, open quality that keeps dense information approachable. Azeret Mono Thin contributes a technical voice for data labels, pricing annotations, and interface chrome.

Verify licensing for these families before production use. The Mulish and Azeret Mono families are available through Google Fonts, while By Norm Dimitri Bruni Manuel Krebs 20112017-5199824282119152252 requires licensing through Lineto.

## Layout

The layout system relies on generous whitespace and clear content zones rather than dense grid structures. Pages are built with a single central column for reading content, expanding to wider arrangements for data tables and gallery grids.

The maximum content width appears to be approximately 80rem, with comfortable padding on either side that scales with viewport size. Section spacing uses 6rem vertical gaps, creating distinct breathing room between major content blocks. Within sections, component gaps of 1.5rem separate related elements, while tighter 1rem gaps handle inline content groupings.

The pricing and feature comparison tables employ a multi-column layout with a fixed description column on the left and evenly distributed tier columns to the right. This structure allows scanning across comparable values while keeping explanatory text anchored. The gallery page uses a two-column grid for case study previews, with each card containing a full-bleed image above text content.

Responsive behavior should maintain single-column stacking for tables on narrow viewports, converting the tier comparison into a scrollable or accordion format. The FAQ section's two-column layout collapses to stacked order, with the heading preceding the accordion list.

## Visual language

The visual character of Count's interface communicates precision and clarity through restraint. Interface elements avoid decorative flourishes; instead, visual interest comes from typographic scale contrast and the inherent color of data visualizations.

Square and rounded-square icons appear as section markers, colored in soft tints like pale pink and mint green to distinguish feature categories without competing with the action blue. These icons sit adjacent to section headings, providing a small moment of warmth in an otherwise neutral palette.

Borders are used structurally rather than decoratively. Hairline rules at 1px divide table rows, outline accordion items, and separate feature descriptions from their tier values. The consistent use of light gray borders creates a subtle grid that organizes information without visual heaviness.

Imagery within the product follows a documentary style: screenshots of actual data canvases, charts, and dashboards presented at realistic scale. These images are not stylized or abstracted; they show the product in use, with all the complexity of real data intact. The gallery presentation frames these screenshots with minimal chrome, letting the content speak directly.

## Components

### Primary action link

The primary action link appears as text with a trailing arrow, using the action blue color and monospace label typography.

- **Anatomy**: Text label followed by a right-pointing arrow character
- **Surface and text color**: `{colors.action}` on `{colors.canvas}`
- **Typography**: `{typography.label}`
- **Shape**: No background, no border, inline with text flow
- **Spacing**: Tight padding, typically following a description block
- **Composition**: Left-aligned within its container, often grouped with a heading and description

### Accordion item

Used in the FAQ section, accordion items expand to reveal content while maintaining a clean, bordered appearance.

- **Anatomy**: Trigger row containing question text, optional expanded content area with answer text
- **Surface and text color**: Action blue for trigger text, ink for answer body; white surface with border outline
- **Typography**: `{typography.label}` for the question, `{typography.body}` for the answer
- **Shape**: Rectangular with full-width border at 1px using `{colors.border}`
- **Spacing**: Internal padding of approximately 1.5rem, vertical gap of 1rem between items
- **Composition**: Stacked vertically in a single column, full width of content area
- **Variants**: Collapsed state shows only the trigger; expanded state reveals answer text beneath

### Feature comparison table

The pricing page's central component, organizing tiered capabilities into scannable rows.

- **Anatomy**: Header row with tier names and prices, body rows with feature descriptions and tier values, section group headers with icons
- **Surface and text color**: White surface, ink for headers and descriptions, action blue for prices and checkmarks, muted ink for unavailable features shown as em-dashes
- **Typography**: `{typography.section-display}` for group headers, `{typography.label}` for tier names and prices, `{typography.body}` for descriptions and values
- **Shape**: Full-width table with horizontal dividers between rows
- **Spacing**: Generous vertical padding within rows, approximately 1.5rem; section headers separated by additional whitespace
- **Composition**: Description column at left, tier columns evenly distributed; values center-aligned within their columns
- **Variants**: "All tiers" and "Unlimited" values appear as pill badges with light gray backgrounds rather than plain text

### Gallery card

Showcases product examples in a browsable grid format.

- **Anatomy**: Preview image, title, description, and action link
- **Surface and text color**: White card surface, ink for title, muted ink for description, action blue for link
- **Typography**: `{typography.section-display}` for title, `{typography.body}` for description, `{typography.label}` for link
- **Shape**: Rectangular card with no visible border, image at top with natural aspect ratio
- **Spacing**: Image fills card width, text content padded below with standard component gaps
- **Composition**: Two-column grid on desktop, single column on narrow viewports

## Responsive behavior

The design should adapt gracefully from large desktop viewports down to mobile widths. The two-column gallery grid collapses to a single column, with cards stacking vertically and maintaining their internal proportions. The pricing feature table, being the most complex layout, requires the most careful adaptation: tier columns may become horizontally scrollable, or the table may transform into an accordion where each feature expands to show tier comparisons.

Typography scales down proportionally, with hero display sizes reducing by approximately 30 percent on narrow viewports to prevent excessive line breaks. Section spacing compresses from 6rem to 3rem, preserving visual rhythm without wasting limited vertical space.

The FAQ section's two-column layout stacks to single column, with the heading and introductory text preceding the accordion list. Navigation, if present in a full implementation, should collapse to a hamburger menu or simplify to essential links.

## Practical implementation guidance

### Preserve
- The stark contrast between large display type and lightweight body text; this hierarchy is central to the brand voice
- Monospace accents for all technical labels, prices, and interactive elements; this creates consistent technical credibility
- The single action blue for all interactive states; avoid introducing additional link colors
- Generous whitespace around sections and within table cells; the airy quality prevents data density from feeling overwhelming
- Real product screenshots in gallery and feature contexts rather than abstract illustrations

### Avoid
- Heavy drop shadows or dimensional effects; the interface is flat and relies on borders and space for structure
- Multiple accent colors; the system derives its color from content imagery, not interface chrome
- Bold weights in body text; Mulish Extra Light is chosen specifically for its delicacy
- Tight line heights in display type; the negative tracking is balanced by generous leading

### Recommended build order
1. Establish the typographic hierarchy with the three font families and their scale relationships
2. Implement the color system with the minimal token set
3. Build the feature comparison table as the most complex layout component
4. Create the accordion component for FAQ content
5. Develop the gallery card and grid system
6. Add the primary action link as a reusable atomic element

### Accessibility
- Ensure the action blue meets contrast requirements against white backgrounds; the pure blue may need darkening for WCAG AA compliance at small sizes
- Provide visible focus indicators for accordion triggers and action links, using an outline or underline distinct from the default state
- Mark up the feature comparison table with proper `scope` attributes and headers so screen readers can navigate tier relationships
- Consider keyboard navigation for the accordion, allowing Enter and Space to toggle expansion
- When converting the pricing table for mobile, preserve the semantic relationship between feature descriptions and their tier values

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: the homepage hero and feature sections, pricing page with tier comparison, gallery showcase, and FAQ accordion. Navigation, footer, authentication flows, and the actual product interface are not represented. Motion, hover states, and mobile-specific layouts are not documented. Measurements are practical adaptation targets derived from visual inspection.
