# How luna.amazon.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/luna.amazon.com-design)

Last updated: 2026-08-10

## Captured pages

[![My Collection page showing game list with dark purple gradient background, tab navigation, and claim code rows for titles like Fort Solis and Empty Shell](https://pin.fontofweb.com/4684?format=jpg)](https://design.withfudge.com/share/pin-4684)

[My Collection page showing game list with dark purple gradient background, tab navigation, and claim code rows for titles like Fort Solis and Empty Shell](https://design.withfudge.com/share/pin-4684)

[![Luna footer with dark navy background, Luna logo, social links, Amazon branding, and legal navigation links](https://pin.fontofweb.com/4683?format=jpg)](https://design.withfudge.com/share/pin-4683)

[Luna footer with dark navy background, Luna logo, social links, Amazon branding, and legal navigation links](https://design.withfudge.com/share/pin-4683)

[![Fort Solis success redemption page with purple GameNight banner, game code display, and instructional content layout](https://pin.fontofweb.com/4682?format=jpg)](https://design.withfudge.com/share/pin-4682)

[Fort Solis success redemption page with purple GameNight banner, game code display, and instructional content layout](https://design.withfudge.com/share/pin-4682)

[![Empty Shell game detail page header showing dark gradient background with purple keyboard illustration and user account dropdown](https://pin.fontofweb.com/3935?format=jpg)](https://design.withfudge.com/share/pin-3935)

[Empty Shell game detail page header showing dark gradient background with purple keyboard illustration and user account dropdown](https://design.withfudge.com/share/pin-3935)

## Overview

Amazon Luna presents a dark-immersive gaming platform interface built around deep purple and navy tonal gradients that evoke a premium entertainment experience. The visual system prioritizes content discoverability through high-contrast white typography against near-black backgrounds, with purple serving as the primary accent for interactive states and promotional moments. The interface organizes game collections through card-based list items that present key actions—claim codes, delivery status, and expansion details—within compact horizontal rows. A distinctive GameNight promotional banner introduces vibrant purple energy into the otherwise subdued palette, creating visual hierarchy for featured content. The overall aesthetic balances gaming culture expressiveness with Amazon's established commerce interface patterns, resulting in a familiar yet distinctive environment for managing digital game libraries.

## Colors

The Luna interface operates on a dark-mode foundation with a carefully controlled accent system. The palette derives from deep space-like tones that allow colorful game artwork to remain the focal point while maintaining readable interface chrome.

| token | value | use |
|---|---|---|
| canvas | #0F0F1A | Primary page background, deepest layer |
| surface | #1A1A2E | Card backgrounds, content containers |
| surface-elevated | #252540 | Elevated cards, active tab states, hover backgrounds |
| ink | #FFFFFF | Primary text, headings, active navigation |
| ink-muted | #A0A0B8 | Secondary text, timestamps, disabled states |
| accent-purple | #8B5CF6 | Promotional banners, primary buttons, brand moments |
| accent-cyan | #00D4AA | Success states, confirmation indicators |
| action-primary | #8B5CF6 | Primary call-to-action buttons |
| action-secondary | #374151 | Secondary buttons, muted actions |
| border-subtle | #2D2D4A | Dividers, card borders, input outlines |
| success | #22C55E | Success icons, confirmation messaging |

The color architecture follows a layered approach: canvas provides the atmospheric foundation, surface creates content grouping, and surface-elevated introduces interactive elevation. The accent-purple serves dual purposes as both brand identifier and functional action color, appearing in the GameNight promotional banner and primary claim buttons. Cyan appears sparingly for success confirmations, creating a complementary accent to the dominant purple. The border-subtle color maintains separation without introducing visual noise, critical for a dark interface where harsh borders would disrupt immersion.

## Typography

The Luna typographic system employs three font families: Ember Modern Display Standard for impactful headings, Amazon Ember for all interface text, and Amazon Ember-Italic for emphasized or secondary text treatments. This pairing creates clear hierarchy between expressive moments and functional content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ember Modern Display Standard | 2rem | 700 | 1.1 | -0.02em | Success banners, major announcements |
| section-display | Ember Modern Display Standard | 1.5rem | 700 | 1.2 | -0.01em | Promotional headings, section titles |
| body | Amazon Ember | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions |
| body-medium | Amazon Ember | 1rem | 500 | 1.5 | 0 | Game titles, emphasized content |
| label | Amazon Ember | 0.875rem | 500 | 1.4 | 0.01em | Buttons, badges, metadata |
| navigation | Amazon Ember | 0.875rem | 400 | 1.4 | 0 | Tab labels, footer links |
| legal-copy | Amazon Ember | 0.75rem | 400 | 1.5 | 0 | Copyright, terms, fine print |

The display typeface delivers personality through its geometric construction and tight letterspacing, appropriate for gaming context. Amazon Ember provides the workhorse functionality with excellent legibility at small sizes. Weight differentiation between Regular and Medium cuts creates hierarchy without requiring additional font files. Amazon Ember-Italic appears in the type system for secondary emphasis, such as the "past 3 months" filter text visible in the collection interface. Verify licensing for these families before production use.

## Layout

The Luna interface employs a centered content model with maximum width constraints that prevent excessive line lengths on large displays. The layout system uses a 4px base grid with spacing values derived from 0.25rem increments.

Page structure follows a predictable vertical rhythm: global navigation and account controls occupy the top edge, followed by page-specific headers with tab navigation, then primary content in scrollable regions. The game collection list uses full-width rows with internal horizontal padding, creating contained reading zones within the expansive dark canvas.

Content cards maintain consistent internal spacing of 1rem, with 1.5rem gaps between major content sections. The promotional banner breaks from standard spacing with edge-to-edge presentation, using internal padding to maintain text readability against its vibrant purple background.

Grid behavior for game artwork follows an asymmetric pattern: thumbnails maintain fixed aspect ratios while text content flexes to fill available space. Action buttons cluster at the right edge with consistent 0.75rem gaps between related controls. The summary panel on detail pages uses a two-column layout for metadata, with labels left-aligned and values right-aligned.

## Visual language

The Luna visual identity merges gaming aesthetics with Amazon's systematic approach to interface design. The dark environment creates theater-like presentation for game artwork, while purple accents signal premium and playful moments.

Imagery treatment favors full-bleed game artwork with rounded corners, allowing cover art to breathe within the dark container. The GameNight banner introduces illustrative character with stylized hands holding controllers and keyboards, rendered in flat vector style with limited color palettes that harmonize with the interface purple.

Iconography appears functional and minimal: chevrons for expansion, external-link arrows for outbound actions, and simple circles for status indicators. The Luna logo in the footer uses a geometric mark paired with wordmark, maintaining brand presence without visual heaviness.

The dark palette supports extended viewing sessions by reducing eye strain, while accent colors draw attention to time-sensitive actions like code redemption.

## Components

**Game List Item**
- Anatomy: Thumbnail image (left), title and metadata (center), action cluster (right)
- Surface: surface-elevated background with subtle border-subtle outline
- Typography: body-medium for title, label for status text
- Shape: 0.5rem border radius
- Spacing: 1rem internal padding, 0.5rem vertical gaps between items
- Composition: Flexbox row with thumbnail fixed at approximately 120px width
- Variants: Claim code state (shows code badge + button), delivered state (shows date), expandable state (chevron indicator)

**Claim Code Badge**
- Anatomy: Truncated code string with copy/action button adjacent
- Surface: canvas background with border-subtle outline
- Typography: label at 0.875rem, monospace-like presentation for code
- Shape: 0.5rem border radius
- Composition: Inline-flex with external-link icon

**Tab Navigation**
- Anatomy: Horizontal row of pill-shaped buttons
- Surface: Transparent default, surface-elevated for active state
- Typography: navigation token
- Shape: 9999px full pill radius
- Composition: Even spacing with 0.5rem gaps, left-aligned below page title

**Success Banner**
- Anatomy: Icon prefix, bold headline, optional subtext
- Surface: surface-elevated background
- Typography: hero-display for headline
- Composition: Full-width with generous vertical padding

**Promotional Card (GameNight)**
- Anatomy: Text block left, media collage right
- Surface: accent-purple background
- Typography: section-display for headline, body for description
- Shape: 0.75rem border radius
- Composition: Approximately 40/60 split with text content vertically centered

**Footer**
- Anatomy: Logo left, social links and legal center, Amazon mark right
- Surface: canvas background with top border-subtle divider
- Typography: legal-copy for copyright, navigation for links
- Composition: Three-zone flex layout with vertical centering

## Responsive behavior

The Luna interface appears optimized for desktop viewing. The content width likely constrains to a maximum container with centered alignment, preventing excessive stretching on wide monitors.

Game list items maintain horizontal layout across viewports, though thumbnail sizes may reduce on narrower screens. The promotional banner's two-column composition likely stacks vertically on smaller displays, with media collage moving below text content.

Action buttons in list items may compress to icon-only presentations on constrained widths, preserving functionality while conserving space. The tab navigation likely scrolls horizontally if container width cannot accommodate all pills.

For touch interfaces, tap targets should maintain minimum 44px dimensions, with claim code buttons expanding to full width on mobile breakpoints. The dark theme remains consistent across breakpoints, with accent colors providing sufficient contrast for touch feedback.

## Practical implementation guidance

**Preserve**
- The dark canvas-to-surface elevation hierarchy that creates depth without shadows
- Purple accent discipline: reserve for primary actions and promotional moments only
- High contrast ratios between ink and surface colors for accessibility
- Rounded corners on all interactive elements and media containers
- Ember Modern Display Standard for emotional headlines, Amazon Ember for everything else

**Avoid**
- Light mode variants that would destroy the gaming theater aesthetic
- Additional accent colors beyond purple and cyan; the palette is intentionally restrained
- Sharp corners on cards and buttons; the 0.5rem minimum radius is essential
- Borders heavier than 1px; subtle separation maintains the clean dark aesthetic
- Centered text in list items; left alignment supports scanning behavior

**Recommended Build Order**
1. Establish dark canvas and surface color tokens with proper contrast ratios
2. Implement typography scale with both font families loaded
3. Build game list item component as the primary content pattern
4. Create tab navigation with active state elevation
5. Add promotional banner with responsive composition
6. Implement claim code workflow with success states
7. Polish with footer and account controls

**Accessibility**
- Ensure all interactive elements meet 4.5:1 contrast minimum against backgrounds
- Provide visible focus indicators that complement the dark theme
- Include aria-labels for icon-only buttons like expand chevrons
- Support keyboard navigation through tab order that follows visual layout
- Consider reduced-motion preferences for any animated transitions

## Scope note

This guide covers the Luna game collection and code redemption surfaces visible in supplied images. Mobile layouts, in-game streaming interfaces, checkout flows, and account management pages are not represented. Measurements are practical adaptation targets. Amazon Ember-Italic is available in the type system for secondary emphasis treatments.
