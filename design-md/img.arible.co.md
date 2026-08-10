# How img.arible.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/img.arible.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with ARIBLE STOCK IMAGE AI title, live sandbox form with prompt input, seed field, private key textarea, and yellow-accented generate button on near-black background](https://pin.fontofweb.com/5512?format=jpg)](https://design.withfudge.com/share/pin-5512)

[Hero section with ARIBLE STOCK IMAGE AI title, live sandbox form with prompt input, seed field, private key textarea, and yellow-accented generate button on near-black background](https://design.withfudge.com/share/pin-5512)

[![Three-column pricing grid with numbered steps, PayPal subscribe button in yellow, and email contact link with cyan accents](https://pin.fontofweb.com/5513?format=jpg)](https://design.withfudge.com/share/pin-5513)

[Three-column pricing grid with numbered steps, PayPal subscribe button in yellow, and email contact link with cyan accents](https://design.withfudge.com/share/pin-5513)

[![Integration guide with expandable accordion sections showing frontend img tag example and Node.js backend code block with syntax highlighting](https://pin.fontofweb.com/5514?format=jpg)](https://design.withfudge.com/share/pin-5514)

[Integration guide with expandable accordion sections showing frontend img tag example and Node.js backend code block with syntax highlighting](https://design.withfudge.com/share/pin-5514)

[![Python backend code example in dark terminal-style panel, error codes list, and key management section with bordered action buttons](https://pin.fontofweb.com/5515?format=jpg)](https://design.withfudge.com/share/pin-5515)

[Python backend code example in dark terminal-style panel, error codes list, and key management section with bordered action buttons](https://design.withfudge.com/share/pin-5515)

## Overview

Arible presents a developer portal for an AI-generated stock image API, wrapped in a deliberately austere, terminal-inspired visual language. The interface rejects conventional SaaS polish in favor of a raw, code-forward aesthetic that speaks directly to its technical audience. Every surface is near-black, every accent is electric, and every character is rendered in monospace. The design system prioritizes information density and scannability over decorative flourish. Yellow serves as the primary action and success signal, while cyan handles secondary emphasis and interactive affordances. The overall impression is of a tool built by developers for developers—direct, unromantic, and functionally transparent. The page unfolds as a single continuous document with numbered sections, each revealing progressively deeper integration details from live sandbox testing through backend implementation.

## Colors

The color system is intentionally constrained, deriving its power from extreme contrast rather than variety. The near-black canvas creates immersion and reduces eye strain during extended code reading, while the two electric accents provide unmistakable hierarchy.

| token | value | use |
|---|---|---|
| canvas | #080808 | Page background, deepest surface, code block interiors |
| surface | #111111 | Card backgrounds, accordion panels, elevated containers |
| surface-elevated | #1a1a1a | Hover states, active accordion content areas |
| accent-yellow | #c8ff00 | Primary actions, success states, section numbers, key highlights, button borders |
| accent-cyan | #7ee7ff | Secondary accents, accordion headers, links, code keywords |
| ink-primary | #e8e8e8 | Headlines, body text, input values, primary readable content |
| ink-secondary | #a0a0a0 | Descriptions, secondary labels, muted body content |
| ink-muted | #666666 | Placeholder text, code comments, disabled affordances |
| border-subtle | #2a2a2a | Panel outlines, input borders, dividers, code block frames |
| border-accent | #c8ff00 | Focus rings, active section indicators, emphasized boundaries |
| success | #c8ff00 | API success responses, generated URL highlights, confirmation states |
| code-string | #c8ff00 | String literals in syntax highlighting |
| code-keyword | #7ee7ff | Language keywords in syntax highlighting |
| code-comment | #666666 | Inline comments in code examples |

The dark mode is not an alternative but the sole environment. Light surfaces appear only in external assets like the PayPal button. Photographic content is absent from the interface itself; the product (AI-generated images) is referenced only through URLs and text descriptions. The yellow-to-cyan relationship creates a clear temperature contrast: warm yellow demands attention for actions and achievements, while cool cyan guides navigation and marks structural elements.

## Typography

The typographic system is built entirely on a single monospace family, reinforcing the developer-tool positioning. Every text element shares the same mechanical rhythm, with hierarchy established through weight, size, tracking, and color rather than family change.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Courier New | 2.5rem | 700 | 1.1 | -0.02em | Page title "ARIBLE STOCK IMAGE AI" |
| section-display | Courier New | 1.25rem | 700 | 1.2 | 0.05em | Numbered section headers, accordion titles |
| body | Courier New | 1rem | 400 | 1.6 | 0 | Descriptions, list items, form labels |
| body-small | Courier New | 0.875rem | 400 | 1.5 | 0 | Code output, API responses, secondary descriptions |
| label | Courier New | 0.75rem | 700 | 1.2 | 0.08em | Button text, status badges, field labels |
| code | Courier New | 0.875rem | 400 | 1.5 | 0 | Syntax-highlighted examples, inline code |

The hero display uses tight negative tracking to create visual density appropriate for a logotype. Section displays employ positive tracking to distinguish structural headers from body content. The label token's elevated tracking serves a functional purpose: button text and status indicators must read clearly at small sizes. Code blocks maintain the same size as body-small but with distinct color coding for strings, keywords, and comments. Verify licensing for these families before production use.

## Layout

The page employs a single-column, full-width layout with generous horizontal margins that create a reading column centered in the viewport. Content maxes out at approximately 80 characters of monospace width, aligning with comfortable code-reading conventions.

The vertical rhythm is section-driven, with each major area introduced by a numbered header in the format "01 // LIVE SANDBOX". These headers sit flush left with a thin horizontal rule beneath, creating clear territorial boundaries without heavy visual weight. The numbering system reinforces the progressive disclosure narrative: users encounter the live sandbox first, then commercial access, then integration guides.

Within sections, content nests in bordered panels with consistent internal padding. The live sandbox section demonstrates the most complex composition: stacked form fields with explicit labels above each input, followed by a full-width action button, then a response panel showing the generated URL. This vertical stacking mirrors API request/response patterns familiar to developers.

The three-column pricing grid in the commercial access section breaks the single-column convention, using equal-width columns separated by thin borders. This exception is justified by the comparative nature of the content—pricing, subscription method, and activation steps form a logical sequence best scanned horizontally.

Spacing between sections uses 4rem, while component-internal padding holds at 1.5rem. The tight 0.25rem border radius on all containers prevents any softness from creeping into the severe aesthetic.

## Visual language

The visual language draws explicitly from terminal emulators and early computing interfaces, updated with modern contrast ratios and spacing discipline. Rounded corners are minimized to 0.25rem, present only to prevent literal sharp corners from feeling like a rendering error rather than as a friendly gesture.

Borders are the primary structural device. Every panel, input, and code block receives a 1px solid border in border-subtle, creating definition without depth. The absence of shadows, gradients, or blur effects maintains the flat, honest materiality of the design. When emphasis is required, the border color shifts to accent-yellow rather than gaining elevation.

The numbered section system ("01", "02", "03", "04") uses accent-yellow for numerals followed by double slashes and uppercase titles in accent-cyan. This convention unifies navigation, documentation, and interface into a single grammatical structure.

Code presentation is central to the experience. Python and Node.js examples appear in dark panels with syntax highlighting limited to three colors: yellow for strings and success states, cyan for keywords and URLs, muted gray for comments. This restricted palette ensures that code remains scannable while maintaining the site's chromatic identity.

The status badge "PUBLIC DEMO KEYS LOADED" inverts the typical dark pattern: yellow background with near-black text, creating an alert that cannot be missed without breaking the overall dark immersion.

## Components

### Accordion

The accordion component organizes documentation sections with collapsible content. Each header sits in a surface-colored bar with full-width click target, displaying a section letter, uppercase title in accent-cyan, and a right-aligned minus indicator in accent-cyan when expanded. The content area below receives surface-elevated background and maintains 1.5rem internal padding. Borders are 1px solid border-subtle on all sides. The expanded state reveals code blocks, parameter lists, or implementation notes without animation. Multiple accordions may be open simultaneously.

### Code block

Code blocks occupy full-width panels with canvas background and border-subtle 1px border. Internal padding is 1.5rem. Syntax highlighting applies three semantic colors: code-string for URL values and string literals, code-keyword for import statements and function declarations, code-comment for inline documentation. Line breaks preserve logical grouping rather than strict line numbering. A subtle bottom border or shadow separates the code from any following explanatory text.

### Primary button

The primary action button uses transparent background with 1px solid accent-yellow border and accent-yellow text in the label typography token. Internal padding is approximately 1rem vertical and 2rem horizontal. The full-width variant stretches to container edges with centered text. Hover states are not visible in still images but should maintain the border-accent treatment. The button text uses uppercase with elevated tracking, including the ">>" prefix on the generate action to suggest process initiation.

### Input field

Text inputs use canvas background with border-subtle 1px border and 0.25rem radius. The prompt input shows placeholder text in ink-muted transitioning to ink-primary for entered content. Labels appear above inputs in label typography, uppercase with tracking. The private key textarea extends this treatment to multi-line content with monospace preservation. Focus states should use border-accent to match the site's emphasis pattern.

### Status badge

The status badge inverts the dark theme: accent-yellow background with canvas text color. It appears inline with section headers, right-aligned. The label typography with elevated tracking ensures readability at small sizes. This component signals system state rather than user action.

### Pricing card

The pricing card uses surface background with border-subtle 1px border and 1.5rem internal padding. The numbered title ("01. PRICING") uses accent-yellow for the numeral and ink-primary for the label. Price display stacks currency, amount, and period vertically. The PayPal subscribe button is an external asset with its own visual treatment, breaking the site's monochrome pattern by necessity.

### Response panel

The API response panel uses surface-elevated background with left border in accent-yellow to denote success. It contains a status line in label typography ("200 OK // SIGNED RESOURCE URL") followed by the generated URL in code-string color. The URL wraps with soft breaks, maintaining readability without horizontal scroll.

## Responsive behavior

The single-column layout adapts naturally to narrower viewports by maintaining consistent margins and allowing content to reflow. The three-column pricing grid should stack vertically on viewports below approximately 768px, preserving the sequential logic of pricing, subscribe, activate. Code blocks should enable horizontal scrolling rather than wrapping, as line breaks would corrupt the syntax. Input fields and buttons should expand to full width on mobile, with stacked label-field pairs maintaining their vertical relationship. The hero title may reduce to 2rem on narrow screens to prevent overflow. Section numbering and double-slash separators should remain visible as they provide essential navigation context.

## Practical implementation guidance

### Preserve
- The absolute darkness of the canvas; any lightening breaks the terminal immersion
- Monospace exclusivity; mixing proportional fonts destroys the developer-tool credibility
- The yellow-cyan accent pairing; these two colors carry all interactive and structural meaning
- The numbered section convention with double-slash separators
- Syntax highlighting restricted to three semantic colors
- The 1px border discipline; no shadows, no gradients, no blur

### Avoid
- Rounded corners larger than 0.25rem; softness contradicts the aesthetic
- Multiple font families; the monospace constraint is definitional
- Decorative imagery or illustrations; the product is code and URLs
- Light mode as default; the dark environment is non-negotiable
- Animated transitions that would feel consumer-grade rather than utilitarian
- Color beyond yellow, cyan, and grayscale in the interface proper

### Recommended build order
1. Establish the canvas and surface color variables with exact hex values
2. Implement the monospace typography scale with proper tracking distinctions
3. Build the section header pattern with numbering, title, and horizontal rule
4. Create the bordered panel component for content containment
5. Develop the code block with syntax highlighting logic
6. Implement form inputs with label stacking and focus states
7. Add the primary button with transparent background and yellow border
8. Construct the accordion for documentation sections
9. Build the pricing grid as the primary layout exception
10. Polish responsive behavior for code scrolling and grid stacking

### Accessibility
- Ensure code blocks are keyboard-focusable and scrollable without precise pointer control
- Provide visible focus indicators using border-accent on all interactive elements
- Maintain color contrast ratios: the yellow on near-black exceeds WCAG AA for large text, but verify body text contrast meets standards
- Consider a high-contrast mode that shifts accent-yellow to pure #ffff00 for users with color vision deficiencies
- Preserve semantic HTML structure in accordions for screen reader navigation
- Label all form inputs explicitly; the visible label pattern supports this naturally

## Scope note

This guide covers the single-page developer portal visible in the supplied images. Payment flow interactions, mobile-specific layouts, hover and focus states, loading skeletons, error page designs, and the actual image generation results are not represented. Measurements are practical adaptation targets derived from visual inspection of the interface.
