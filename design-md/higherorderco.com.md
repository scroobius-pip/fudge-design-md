# How higherorderco.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/higherorderco.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full landing page with hero section, navigation bar, Bend language introduction with code example, and HVM parallel runtime section with performance chart](https://pin.fontofweb.com/5390?format=jpg)](https://design.withfudge.com/share/pin-5390)

[Full landing page with hero section, navigation bar, Bend language introduction with code example, and HVM parallel runtime section with performance chart](https://design.withfudge.com/share/pin-5390)

[![Bend parallel language section with italic display heading, body copy, and code example card with syntax highlighting](https://pin.fontofweb.com/5392?format=jpg)](https://design.withfudge.com/share/pin-5392)

[Bend parallel language section with italic display heading, body copy, and code example card with syntax highlighting](https://design.withfudge.com/share/pin-5392)

[![HVM parallel runtime section with performance comparison chart showing CPU and GPU thread scaling with colored bars](https://pin.fontofweb.com/5393?format=jpg)](https://design.withfudge.com/share/pin-5393)

[HVM parallel runtime section with performance comparison chart showing CPU and GPU thread scaling with colored bars](https://design.withfudge.com/share/pin-5393)

[![Email subscription section with italic display heading, input field with red subscribe button, social icons, and footer copyright](https://pin.fontofweb.com/5391?format=jpg)](https://design.withfudge.com/share/pin-5391)

[Email subscription section with italic display heading, input field with red subscribe button, social icons, and footer copyright](https://design.withfudge.com/share/pin-5391)

## Overview

Higher Order Company's landing page presents a technical product—Bend, a parallel programming language, and HVM, its runtime—through an editorial, almost academic visual language. The design avoids the dark-mode conventions common to developer tools, instead opting for a warm, light palette that feels closer to a design journal than a code repository. The page is structured as a single continuous scroll with distinct narrative sections: a hero establishing the brand promise, a product introduction for Bend with live code examples, a performance proof point for HVM with data visualization, and a community subscription closer.

The visual system relies on contrast between two type families: Libre Baskerville in italic serves all display and headline purposes, lending an unexpected literary quality to technical content, while Inter handles all functional text at a consistent, readable size. Color is extremely restrained—a warm neutral canvas, near-black ink, and a single vivid red for all interactive elements. This discipline makes the red subscribe button and "Try it Now" links immediately scannable. The layout alternates between full-bleed centered compositions and asymmetric two-column arrangements, creating rhythm without breaking the page's coherent linear flow.

## Colors

The palette is built on warmth and restraint. The background is not a cold gray but a tinted warm neutral, suggesting paper or parchment. Against this, near-navy ink provides strong readability without the harshness of pure black. The single accent color, a coral-red, appears only on interactive elements and performance highlights, making it function as a signal rather than decoration.

| token | value | use |
|---|---|---|
| ink | #1a1a2e | Primary text, headings, navigation, icons |
| muted-ink | #4a4a6a | Secondary text, captions, chart labels, footer |
| canvas | #e8e4e0 | Page background, section fills |
| surface | #ffffff | Cards, input fields, navigation bar, code blocks |
| action | #e85a4f | Primary buttons, links, subscription submit, performance highlights |
| action-hover | #d44a3f | Button hover states |
| code-surface | #f5f5f5 | Code block background |
| code-keyword | #c44536 | Syntax highlighting for reserved words |
| code-function | #4a90d9 | Syntax highlighting for function names |
| code-comment | #8a8a8a | Syntax highlighting for comments |
| success | #6ab04c | GPU performance bar, positive indicators |
| warning | #e09f3e | Multi-thread CPU performance bar |

The warm canvas dominates the viewport, with white surfaces floating above it to contain code, charts, and calls to action. The red accent is used sparingly—appearing on the single subscribe button, inline text links, and the CPU single-thread bar in the performance chart—ensuring it draws attention precisely where conversion or comprehension is desired. The syntax highlighting in code blocks introduces a controlled secondary palette that stays within the warm-cool family, avoiding the rainbow excess of typical IDE themes.

## Typography

The type system is deliberately bipolar: all display text is set in Libre Baskerville Italic, creating an editorial voice that distinguishes this technical product from competitors, while all functional text uses Inter in regular weight for clarity and neutrality. This pairing is maintained consistently across every section.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Libre Baskerville | 3rem | 400 | 1.1 | 0.02em | Hero headline, welcome message |
| section-display | Libre Baskerville | 2.25rem | 400 | 1.15 | 0.01em | Section headings ("A PARALLEL LANGUAGE", "A PARALLEL RUNTIME") |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-bold | Inter | 1rem | 700 | 1.6 | 0 | Emphasized terms within body copy |
| label | Inter | 0.875rem | 600 | 1.4 | 0.05em | Small caps labels, "BEND", "HVM" section markers |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Top bar links, "Paper", "GitHub" |
| code | Inter | 0.8125rem | 400 | 1.5 | 0 | Code examples, monospace context |
| legal | Inter | 0.75rem | 400 | 1.4 | 0 | Footer copyright |

Libre Baskerville is credited to designers Pablo Impallari and Rodrigo Fuenzalida, with vendor attribution to Pablo Impallari Rodrigo Fuenzalida via Google Fonts. Inter is credited to designer Rasmus Andersson, with vendor attribution to Rsms. Verify licensing for these families before production use.

The italic serifs are always title-cased and often set in all-caps for major headings, creating a monumental yet refined presence. Inter appears exclusively in roman form, never italic, preserving its functional neutrality. Line heights are generous for body text, accommodating the warm background's relaxed pacing.

## Layout

The page follows a centered single-column structure with strategic asymmetric interruptions. The maximum content width appears to be approximately 72rem, with internal padding of 1.5rem on smaller viewports. Sections stack vertically with substantial breathing room—approximately 6rem between major narrative blocks.

The hero section centers its headline and decorative infinity-knot illustration, establishing immediate brand recognition. Below, the Bend section breaks into a two-column layout: text content left, code example right. This asymmetry repeats in the HVM section, but inverted—chart left, text right—creating visual alternation that prevents monotony without disrupting the scroll's coherence.

The navigation bar is fixed or sticky, containing the logo mark left and utility links right, with generous internal padding. It sits on a white surface that separates it from the warm canvas below.

The subscription section returns to full centered composition, with the italic headline stacked above an inline form (email input plus button) and social icons below. The footer is minimal, containing only copyright text centered on the canvas.

Grid gaps within two-column sections appear to be 3rem, allowing each content type—prose, code, data visualization—to occupy distinct visual territory without crowding. The code block card uses internal padding of 1.5rem, with rounded corners that soften its technical appearance.

## Visual language

The overall aesthetic balances technical credibility with unexpected warmth. The infinity-knot illustration in the hero and the hand-drawn annotation arrow in the performance chart introduce organic, almost craft-like elements that humanize the advanced computing narrative. These line drawings are executed in the same near-black as the text, maintaining visual unity.

Code presentation is treated as a featured element rather than an afterthought. Syntax highlighting is restrained—red for keywords, blue for functions, gray for comments—against a light gray surface with subtle rounded corners. Line numbers are included, reinforcing the educational, demonstrative purpose.

The performance chart abandons conventional bar-graph styling for a more narrative approach: colored horizontal bars with inline labels, accompanied by a hand-drawn arrow and annotation. The color coding—red for single-thread baseline, amber for moderate scaling, green for massive GPU parallelism—tells a story of progression without requiring legend consultation.

Decorative background elements appear in the subscription section: faint, oversized circular line patterns that echo the infinity motif, rendered in a tone slightly lighter than the canvas. These provide texture without competing with the centered content.

Shadows are minimal or absent; depth is created through surface color contrast and strategic white cards against the warm ground. The overall impression is of a well-lit, spacious environment—appropriate for a product promising to illuminate complex parallel computation.

## Components

### Navigation bar

- **Anatomy**: Logo mark (abstract knot icon) left, text links ("Paper", "GitHub") right
- **Surface**: White background, full width, subtle bottom border or shadow optional
- **Typography**: `{typography.navigation}`
- **Spacing**: Internal padding approximately 1rem vertical, 1.5rem horizontal
- **Composition**: Flex row, space-between, vertically centered

### Hero section

- **Anatomy**: Small label ("Higher Order Company"), large italic display heading, decorative illustration
- **Surface**: Transparent over canvas background
- **Typography**: Label uses `{typography.label}` in red; heading uses `{typography.hero-display}`
- **Composition**: Centered, stacked vertically, illustration positioned right of heading on wider viewports

### Section marker

- **Anatomy**: Uppercase sans-serif label ("BEND", "HVM") followed by italic display heading
- **Typography**: Label uses `{typography.label}`; heading uses `{typography.section-display}`
- **Spacing**: Tight coupling between label and heading, approximately 0.5rem

### Code example card

- **Anatomy**: Syntax-highlighted code block, caption label, action link
- **Surface**: `{colors.code-surface}` background, `{rounded.panel}` corners
- **Typography**: Code uses `{typography.code}`; caption uses `{typography.label}`; link uses `{typography.body-bold}` in `{colors.action}`
- **Spacing**: Internal padding `{spacing.component-padding}`
- **Composition**: Code block above, caption and link in flex row below

### Performance chart card

- **Anatomy**: Three horizontal bars with labels and multipliers, hand-drawn annotation, footnote
- **Surface**: White background, `{rounded.card}` corners
- **Typography**: Labels use `{typography.body-bold}`; multipliers use `{typography.body-bold}`; footnote uses `{typography.legal}`
- **Color coding**: Single-thread CPU in `{colors.action}`, multi-thread CPU in `{colors.warning}`, GPU in `{colors.success}`
- **Composition**: Stacked bars with left-aligned labels, right-aligned values, annotation arrow pointing to top bar

### Email subscription form

- **Anatomy**: Text input, submit button, social icon links below
- **Surface**: Input uses `{colors.surface}`; button uses `{colors.action}`
- **Typography**: Input placeholder uses `{typography.body}` muted; button uses `{typography.label}`
- **Shape**: Input `{rounded.input}` left corners; button `{rounded.button}` right corners; combined as inline group
- **Spacing**: Social icons approximately 1.5rem below form, spaced 1rem apart

### Text link

- **Anatomy**: Inline text with arrow suffix ("->")
- **Typography**: `{typography.body-bold}`
- **Color**: `{colors.action}`
- **States**: Underline on hover recommended

## Responsive behavior

The two-column sections (Bend introduction, HVM runtime) should stack vertically on narrow viewports, with code blocks and charts becoming full-width. The hero illustration may scale down or hide on very small screens to preserve headline prominence.

Navigation links may collapse to a menu button on mobile, though the minimal two-link structure suggests horizontal retention is feasible on most devices.

Font sizes should scale down proportionally: hero display to approximately 2rem, section display to 1.75rem on small screens. Body text remains at 1rem for readability.

The inline subscription form should stack to vertical arrangement on narrow viewports, with the subscribe button becoming full-width below the input.

## Practical implementation guidance

### Preserve
- The strict type pairing: Libre Baskerville Italic for all display, Inter for all functional text. This is the system's most distinctive feature.
- The warm canvas background against white content surfaces. The specific tint (#e8e4e0) contributes significantly to the page's approachable personality.
- The single red accent for all interactive and highlighted elements. Do not introduce additional accent colors for secondary actions.
- The hand-drawn illustration style for decorative elements and annotations.
- The generous section spacing that creates a reading pace appropriate to the editorial tone.

### Avoid
- Dark mode inversion without careful adjustment—the warm canvas is integral to the brand, not merely a light-theme default.
- Additional type families or weights beyond those specified. The system's power comes from its restraint.
- Heavy shadows or borders that would compete with the flat, paper-like surface hierarchy.
- Rainbow syntax highlighting; the restrained three-color code palette is intentional.
- Generic stock photography or abstract geometric backgrounds that would clash with the craft-oriented illustration style.

### Recommended build order
1. Establish the canvas background and load both font families with appropriate weights.
2. Implement the type scale, verifying that Libre Baskerville renders correctly in italic across all display sizes.
3. Build the navigation bar and hero section to establish the top-of-page experience.
4. Create the code block component with syntax highlighting rules.
5. Implement the two-column alternating layout pattern for product sections.
6. Build the performance chart with its specific color coding and annotation style.
7. Add the subscription form and footer to complete the page flow.
8. Verify responsive stacking behavior at each breakpoint.

### Accessibility
- Ensure the red action color (#e85a4f) meets contrast requirements against white surfaces; it may need darkening for small text.
- The italic serif headings, while stylistically important, should be tested for readability at smaller sizes; consider slightly increased letter-spacing.
- Code blocks should include copy-to-clipboard functionality and respect user preferences for reduced motion.
- Form inputs require visible focus states; recommend a 2px outline in the action color offset from the field boundary.
- The hand-drawn annotations in the performance chart should have text equivalents or be supplemental to explicit labels.

## Scope note

This guide covers the Higher Order Company landing page as visible in the supplied images: the hero, Bend language introduction, HVM runtime section, and email subscription closer. Navigation dropdowns, additional product pages, documentation layouts, and mobile-specific adaptations are not represented. The code syntax highlighting palette is visible in the code blocks shown. Measurements are practical adaptation targets.
