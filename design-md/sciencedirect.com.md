# How sciencedirect.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sciencedirect.com-design)

Last updated: 2026-08-10

## Captured pages

[![Page not found error state with pale blue-gray background, search field, and article recommendation teaser](https://pin.fontofweb.com/4304?format=jpg)](https://design.withfudge.com/share/pin-4304)

[Page not found error state with pale blue-gray background, search field, and article recommendation teaser](https://design.withfudge.com/share/pin-4304)

[![Article preview page with Elsevier header, left navigation sidebar, abstract content, and right recommendation panel](https://pin.fontofweb.com/4300?format=jpg)](https://design.withfudge.com/share/pin-4300)

[Article preview page with Elsevier header, left navigation sidebar, abstract content, and right recommendation panel](https://design.withfudge.com/share/pin-4300)

[![References section showing numbered bibliography entries with blue hyperlinked titles and gray metadata](https://pin.fontofweb.com/4299?format=jpg)](https://design.withfudge.com/share/pin-4299)

[References section showing numbered bibliography entries with blue hyperlinked titles and gray metadata](https://design.withfudge.com/share/pin-4299)

[![ScienceDirect AI promotional modal with orange border, product screenshot, and teal unlock action button](https://pin.fontofweb.com/4298?format=jpg)](https://design.withfudge.com/share/pin-4298)

[ScienceDirect AI promotional modal with orange border, product screenshot, and teal unlock action button](https://design.withfudge.com/share/pin-4298)

## Overview

ScienceDirect presents a scholarly publishing platform built around long-form reading and research discovery. The visual system prioritizes content density and typographic clarity over decorative elements, creating an environment where academic articles remain the focal point. The interface employs Elsevier's institutional identity through restrained use of blue accents against near-white backgrounds, with structural navigation that helps researchers move efficiently between abstract, full text, references, and related materials.

The design language is deliberately utilitarian: sharp corners, minimal shadow, and a strict hierarchy of serif display type for article titles against sans-serif body copy for readability at extended lengths. The system must support both authenticated and unauthenticated states, with clear calls-to-action for institutional access and article purchase. Promotional surfaces for new platform features, such as the AI research assistant, use bolder color blocking to interrupt the otherwise muted palette without breaking the overall institutional tone.

## Colors

The color system is built on a foundation of high-contrast neutrals with a single dominant blue accent that carries institutional and interactive meaning. The palette is intentionally narrow, reserving stronger colors for specific functional moments.

| token | value | use |
|---|---|---|
| action | #007398 | Primary interactive elements, links, navigation highlights, and the "Access through your organization" button |
| action-hover | #005a75 | Darker blue for hover states on interactive elements |
| ink | #1a1a1a | Primary text, article titles, section headings, and strong borders |
| muted-ink | #6e6e6e | Secondary metadata, author affiliations, journal information, and reference details |
| canvas | #ffffff | Page backgrounds, input fields, and content surfaces |
| surface | #f5f5f5 | Subtle background variation for panels and secondary regions |
| surface-alt | #e8f4f8 | Pale blue-gray background for error states and informational surfaces |
| border | #d1d1d1 | Input field borders, dividers, and subtle separators |
| border-strong | #1a1a1a | Heavy horizontal rules between major content sections |
| accent-orange | #ff6b35 | Promotional borders and feature highlights, as seen in the AI modal frame |
| accent-teal | #007398 | Alternative action surfaces, such as the "Unlock your access" button in promotional contexts |

The light mode dominates all visible surfaces. Dark text on white or near-white backgrounds provides optimal reading conditions for extended academic content. The blue accent (#007398) appears consistently for all clickable elements, creating a predictable interaction pattern. The orange accent appears only in promotional contexts, framing product announcements with a warm, attention-grabbing border that contrasts with the cool institutional palette. The pale blue-gray surface (#e8f4f8) softens error states and empty states, reducing the visual severity of dead ends without abandoning the clean aesthetic.

## Typography

The type system pairs a refined serif for display hierarchy with a neutral sans-serif for all functional and body text. Elsevier Gulliver, designed by Gerard Unger in 1994 and produced by Novatype, provides the scholarly voice for article titles and section headings. Elsevier Sans handles navigation, metadata, body copy, and interface elements with unobtrusive clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Elsevier Gulliver Regular | 2.5rem | 400 | 1.2 | -0.01em | Article titles and major page headings |
| section-display | Elsevier Gulliver Regular | 1.75rem | 400 | 1.25 | 0 | Section headings within articles (Abstract, Introduction, References) |
| body | Elsevier Sans | 1rem | 400 | 1.6 | 0 | Article abstracts, descriptions, and primary content |
| body-small | Elsevier Sans | 0.875rem | 400 | 1.5 | 0 | Reference entries, metadata, and secondary information |
| label | Elsevier Sans | 0.75rem | 400 | 1.4 | 0.02em | Captions, tags, and fine-print annotations |
| navigation | Elsevier Sans | 0.875rem | 400 | 1.5 | 0 | Sidebar navigation, top-level menu items, and breadcrumbs |
| action-text | Elsevier Sans | 0.875rem | 400 | 1.5 | 0 | Button labels and interactive text elements |

Elsevier Gulliver Regular is credited to Gerard Unger 1994, produced for Gerard Unger by Novatype, a division of Visualogik. Elsevier Sans carries no listed designer or vendor attribution. Verify licensing for these families before production use.

The type scale uses a 4px relative unit, with display sizes stepping up in whole multiples. Article titles at 40px (2.5rem) establish clear dominance over section headings at 28px (1.75rem). Body text at 16px (1rem) maintains comfortable reading for extended passages, while the 14px (0.875rem) secondary size handles the dense metadata typical of academic publishing. The serif's slightly negative tracking at display sizes tightens the word image for impact, while sans-serif text uses neutral spacing for maximum legibility.

## Layout

The page architecture follows a three-column pattern for article content: a narrow left sidebar for section navigation, a wide central column for the article body, and a right sidebar for recommendations and metrics. This structure remains consistent across article previews, full-text views, and supporting pages.

The top navigation bar spans the full viewport width with the Elsevier tree logo and ScienceDirect wordmark positioned left, followed by global navigation links (Journals & Books, Help, Search, My account) aligned right. A secondary action bar sits below, containing the prominent "Access through your organization" button and purchase options. This bar uses the full-width canvas background with a strong bottom border to separate it from content.

The central content column occupies approximately 55-60% of the viewport width on article pages, with generous internal padding that creates breathing room around dense text. The left navigation sidebar is fixed in position, allowing researchers to jump between Abstract, Introduction, Section snippets, References, and Cited by sections without scrolling. The right sidebar contains collapsible panels for Recommended articles and Article Metrics, with chevron indicators showing expand/collapse state.

On the error page, the layout simplifies to a single centered column with the pale blue-gray background extending full-width behind the message, search field, and article teaser. This creates a softer landing than the stark white of standard content pages while maintaining the same structural logic.

Spacing between major sections uses 3rem (48px) to create clear separation without excessive white space that would fragment long articles. Internal content gaps of 1.5rem (24px) separate related elements within sections. The tight 0.5rem (8px) spacing handles inline metadata and stacked reference details.

## Visual language

The visual character of ScienceDirect is institutional and content-forward, with every decorative decision subordinated to readability and research efficiency. The Elsevier tree logo provides the only organic visual element, grounding the interface in the publisher's heritage while the rest of the system relies on typographic and structural clarity.

Imagery is minimal and functional. Article thumbnails appear small and standardized in recommendation panels. The error page includes a simple illustration of documents with a magnifying glass, rendered in the same blue accent color to maintain system coherence. Promotional modals use product screenshots with subtle drop shadows to create depth against the flat interface.

Iconography follows a thin, outline style for navigation and actions. The search icon, user account icon, and external-link arrows share the same stroke weight and scale, creating a consistent visual vocabulary. Chevron indicators for expandable panels point up when open and down when closed, providing immediate state feedback.

The overall density is high by consumer-web standards but appropriate for the domain. Articles present uninterrupted text flows with inline citations, and reference lists pack substantial information into compact vertical space. The design accommodates this density through careful typographic hierarchy rather than generous spacing, using weight, size, and color to guide scanning behavior.

## Components

### Primary action button

- **Anatomy**: Text label with optional external-link arrow icon
- **Surface and text color**: Solid #007398 background with white text
- **Typography**: 0.875rem Elsevier Sans, regular weight
- **Shape and border**: Zero border-radius, no border
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline-flex with icon trailing the text
- **Variants**: The "Access through your organization" variant includes a building icon prefix; the "Unlock your access" promotional variant uses the same teal on slightly different proportional treatment

### Secondary action button

- **Anatomy**: Text label with optional icon
- **Surface and text color**: Transparent background with #007398 text and matching border
- **Typography**: 0.875rem Elsevier Sans, regular weight
- **Shape and border**: 1px solid #007398 border, zero border-radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Used for less prominent actions such as "Report missing page"

### Search input

- **Anatomy**: Text field with placeholder text and trailing search icon button
- **Surface and text color**: White background with #1a1a1a text, #d1d1d1 border
- **Typography**: 1rem Elsevier Sans for input text, 0.875rem for placeholder
- **Shape and border**: 1px solid border, zero border-radius
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Full-width within its container, with the search icon positioned at the right edge inside the field boundary

### Article title

- **Anatomy**: Single heading element, occasionally spanning multiple lines
- **Surface and text color**: #1a1a1a on white or near-white background
- **Typography**: 2.5rem Elsevier Gulliver Regular, 1.2 line height
- **Shape and border**: No containing border or background
- **Spacing**: 1.5rem bottom margin before author line
- **Composition**: Left-aligned, maximum width constrained by central column

### Section navigation (left sidebar)

- **Anatomy**: Vertical stack of text links with section names and optional counts
- **Surface and text color**: #007398 for active/available links, #6e6e6e for unavailable states
- **Typography**: 0.875rem Elsevier Sans
- **Shape and border**: No visible container, left-aligned against column edge
- **Spacing**: Approximately 1rem vertical space between items
- **Composition**: Fixed position or scroll-following, maintaining visibility during long reads
- **States**: Current section indicated by color intensity; unavailable sections shown in muted gray

### Reference entry

- **Anatomy**: Author line, hyperlinked title, and publication metadata
- **Surface and text color**: #007398 for linked titles, #6e6e6e for metadata, #1a1a1a for plain-text author names
- **Typography**: 0.875rem Elsevier Sans throughout, with title links potentially at regular weight rather than bold
- **Shape and border**: No containing elements, separated by white space
- **Spacing**: 0.5rem between author, title, and metadata lines; larger gap between entries
- **Composition**: Full-width within central column, hanging indent or flush left depending on citation style

### Recommended article card

- **Anatomy**: Hyperlinked title, journal metadata, author list
- **Surface and text color**: #007398 title links, #6e6e6e metadata
- **Typography**: Title at 0.875rem or 1rem, metadata at 0.875rem
- **Shape and border**: No visible card boundary, separated by subtle horizontal rules
- **Spacing**: Compact vertical packing with 1rem between entries
- **Composition**: Right sidebar panel, collapsible via header chevron

### Promotional modal

- **Anatomy**: Framed screenshot, heading, description, and action button
- **Surface and text color**: White content area with #ff6b35 border frame, #007398 action button
- **Typography**: 1.75rem bold sans-serif heading, 1rem body text
- **Shape and border**: Zero border-radius on content, thick orange border creating frame effect
- **Spacing**: Generous internal padding, centered composition
- **Composition**: Overlay or interstitial placement, with close control in upper right

## Responsive behavior

The three-column article layout likely collapses to a single column on smaller viewports, with the left navigation converting to a horizontal tab bar or dropdown menu and the right sidebar stacking below the main content. The central article column should maintain comfortable reading width, likely between 45 and 75 characters per line for optimal readability.

The top navigation bar compresses by hiding text labels in favor of icon-only controls, with the "Journals & Books" and "Help" links potentially moving to a hamburger menu. The secondary action bar with institutional access remains prominent, as this conversion path is critical to the business model.

Search inputs should expand to full width on narrow viewports, with the inline search button maintaining touch-friendly dimensions. Reference lists require no structural change but may benefit from increased line spacing for touch scrolling.

The promotional modal likely scales down proportionally, with the framed screenshot becoming optional below a certain breakpoint to prioritize the heading and action button.

## Practical implementation guidance

### Preserve
- The sharp, zero-radius corners on all interactive elements; this institutional aesthetic depends on geometric precision
- The strict serif/sans-serif pairing: Elsevier Gulliver for display, Elsevier Sans for everything functional
- The high-contrast black text on white backgrounds for all reading surfaces
- The single blue accent (#007398) for all interactive and linked elements
- The three-column article layout with persistent left navigation
- The dense, information-rich reference formatting with clear title-link hierarchy

### Avoid
- Rounded corners on buttons or inputs; they contradict the established institutional flatness
- Multiple accent colors in standard content surfaces; reserve orange and teal for specific promotional contexts
- Generous white space that would fragment long articles; the system supports sustained reading through continuity
- Decorative shadows or gradients behind content cards
- Custom scrollbars or other chrome modifications that would break the browser-default neutrality

### Recommended build order
1. Establish the typographic foundation with both font families loaded and the complete type scale defined
2. Implement the top navigation and secondary action bar with exact colors and spacing
3. Build the three-column article layout with responsive collapse behavior
4. Create the section navigation sidebar with active-state indication
5. Style the article body with proper heading hierarchy and citation formatting
6. Add the right sidebar panels for recommendations and metrics
7. Implement search inputs and primary/secondary button components
8. Build error-state and promotional surfaces with their distinct background treatments

### Accessibility
- Ensure all linked article titles and navigation items meet WCAG 2.1 AA contrast ratios against their backgrounds
- Provide visible focus indicators for keyboard navigation that match or exceed the hover-state color shift
- Maintain logical heading hierarchy from article title through section headings without skipping levels
- Make the left sidebar navigation available as a skip-link target and ensure it remains operable when collapsed
- Provide clear labels for icon-only controls in the top navigation bar
- Ensure the promotional modal traps focus and provides an explicit close control with visible hit area

## Scope note

This guide covers the article preview, reference, error, and promotional surfaces visible in the supplied images. Journal landing pages, search results grids, full-text PDF viewers, user account dashboards, checkout flows, and mobile-specific layouts are not represented. Measurements are practical adaptation targets.
