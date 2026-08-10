# How goose.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/goose.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large goose illustration, green headline, email signup form, and pricing cards on dark navy background](https://pin.fontofweb.com/6491?format=jpg)](https://design.withfudge.com/share/pin-6491)

[Hero section with large goose illustration, green headline, email signup form, and pricing cards on dark navy background](https://design.withfudge.com/share/pin-6491)

[![Feature section with yellow accent headline, capability buttons, and sample text generation cards with gradient borders](https://pin.fontofweb.com/6493?format=jpg)](https://design.withfudge.com/share/pin-6493)

[Feature section with yellow accent headline, capability buttons, and sample text generation cards with gradient borders](https://design.withfudge.com/share/pin-6493)

[![Migration section with flying geese wireframe illustration, code snippet with syntax highlighting, and purple accent text](https://pin.fontofweb.com/6492?format=jpg)](https://design.withfudge.com/share/pin-6492)

[Migration section with flying geese wireframe illustration, code snippet with syntax highlighting, and purple accent text](https://design.withfudge.com/share/pin-6492)

[![FAQ accordion section with stacked question rows, chevron indicators, and subtle border separators on dark background](https://pin.fontofweb.com/6494?format=jpg)](https://design.withfudge.com/share/pin-6494)

[FAQ accordion section with stacked question rows, chevron indicators, and subtle border separators on dark background](https://design.withfudge.com/share/pin-6494)

## Overview

GooseAI presents a developer-focused AI infrastructure platform through a dark, immersive visual system. The design centers on a deep navy canvas that creates a nighttime atmosphere, punctuated by vibrant accent colors that shift between green, yellow, orange, purple, and blue depending on context. A distinctive white goose mascot serves as the brand anchor, appearing in both solid illustration and wireframe forms. The overall mood balances technical credibility with playful personality—serious enough for infrastructure decisions yet approachable through its mascot and warm accent palette. The system uses two typefaces: Karl for display headlines with a geometric, slightly technical character, and Articulat CF for body text and UI elements with clean, modern legibility. Layouts favor generous whitespace with content constrained to a central column, creating focused reading experiences against the dark background.

## Colors

The color system operates on a dark-mode-first principle with a carefully controlled accent palette that creates emotional variety without visual chaos.

| token | value | use |
|---|---|---|
| canvas | #0B0224 | Primary page background, deep navy with subtle purple undertone |
| canvas-elevated | #01001A | Card backgrounds, input fields, code blocks—slightly darker for layering |
| ink | #FFFFFF | Primary text, headings, high-contrast UI elements |
| ink-muted | #83A5FF | Secondary text, placeholders, subtle labels |
| accent-green | #83FF97 | Hero headlines, success states, primary CTAs |
| accent-yellow | #FFFA83 | Active buttons, highlighted features, warm emphasis |
| accent-orange | #FFC683 | Secondary buttons, warm accent states |
| accent-purple | #C883FF | Tertiary accents, creative emphasis |
| accent-blue | #9991FF | Link text, interactive elements, cool emphasis |
| accent-cyan | #83A5FF | Muted interactive text, secondary links |
| border-subtle | #281C59 | Card borders, dividers, accordion separators |
| border-prominent | #34276A | Input borders, focused states, stronger dividers |
| surface-code | #2F9E44 | Code syntax highlighting for modified lines |

The canvas colors create a near-black environment that makes the vibrant accents appear to glow. Green dominates the hero and primary messaging, suggesting growth and value. Yellow signals action and completion. The purple and blue family handles secondary interactions and creative contexts. Border colors are drawn from the canvas's purple family, ensuring separators feel integrated rather than overlaid. No light mode variant is visible in the supplied material.

## Typography

The type system pairs a distinctive display face with a versatile sans-serif for reading and interface elements. Code rendering uses both System-Monospace and System-Uimonospace depending on platform context.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Karl | 3.125rem | 500 | 1.3 | normal | Page hero headlines, migration section titles |
| section-display | Articulat Cf | 3.125rem | 700 | 1.35 | normal | Section headings, FAQ titles |
| body | Articulat Cf | 1rem | 400 | 1.55 | normal | Paragraphs, descriptions, navigation |
| body-large | Articulat Cf | 1.25rem | 400 | 1.55 | normal | Lead paragraphs, feature descriptions |
| label | Articulat Cf | 0.875rem | 400 | 1 | normal | Buttons, tags, small UI labels |
| navigation | Articulat Cf | 1rem | 400 | 1.55 | normal | Header links, menu items |
| code | System-Monospace | 0.75rem | 400 | 1.55 | normal | Code snippets, API examples |

Karl appears in weight 500 for hero headlines, creating a bold but not heavy presence with geometric proportions that complement the technical subject matter. Articulat CF serves across weights 400 (Regular), 600 (Demi Bold), 700 (Bold), and 900 (Heavy) for interface hierarchy. The 900 weight appears specifically for button labels, creating dense, impactful calls to action. System-Monospace and System-Uimonospace handle code at a compact 12px size with tight line height for readable terminal-style blocks.

Articulat CF is designed by Connary Fagen and distributed by Connary Fagen. Karl is designed by Local Desk Designstudio. Verify licensing for these families before production use.

## Layout

The layout system builds on a centered content model with generous vertical breathing room. The base spacing unit is 0.125rem (2px), enabling fine-grained control.

Content containers use a maximum width centered with `margin: 0 18.5rem` (296px side margins), creating substantial side gutters that focus attention on the central column. Section padding varies by purpose: hero areas use `12.5rem` (200px) vertical padding for dramatic impact, standard sections use `4.5rem` (72px) top padding, and compact components use `1.875rem` (30px) padding.

The grid behavior visible in the images shows asymmetric two-column layouts for feature sections, with text content on the left and illustrative or interactive content on the right. Pricing cards appear in horizontal rows with equal distribution. The FAQ section uses a single centered column with items stacked vertically.

Negative margins appear in the system—specifically `-5rem` (-80px) vertical offsets—to create overlapping section transitions that break the rigid horizontal banding. This technique connects adjacent sections visually while maintaining distinct content groupings.

Z-index layering is implicit in the visual hierarchy: the goose mascot illustration floats above background grid lines, code blocks sit above section backgrounds, and navigation remains fixed above scrolling content.

## Visual language

The visual identity revolves around the goose mascot rendered in two distinct styles. The primary illustration shows a solid white goose with a purple beak, positioned dynamically as if in flight or swimming. This mascot appears at large scale in the hero, occupying significant right-hand space and creating immediate brand recognition. A secondary wireframe treatment renders geese as thin purple line drawings, used as decorative background patterns in the migration section where multiple geese appear in formation flight.

Background treatments include subtle diagonal grid lines that suggest technical precision and movement, visible behind the hero mascot and in section transitions. These lines use the border-subtle color at low opacity, creating depth without distraction.

The accent color system creates emotional progression through the page: green for value proposition and hero, yellow for capabilities and action, purple for migration and technical content. This color journey guides users through the narrative from problem awareness to solution implementation.

Card surfaces use the slightly darker canvas-elevated color with single-pixel borders in border-subtle, creating subtle elevation without shadows. The absence of border-radius on cards and buttons reinforces a technical, precise aesthetic—everything is sharp-edged and intentional.

Code presentation uses inline highlighting with green background for modified lines, drawing immediate attention to the single-line change that enables migration.

## Components

### Navigation

The header navigation sits at the top of the viewport with the GooseAI wordmark on the left and text links on the right. The wordmark combines a small goose icon with "GooseAI" in Articulat CF at body size. Navigation links use the same type treatment with standard weight, spaced horizontally with comfortable gaps. A "Login" link includes a small user icon preceding the text. The navigation background is transparent, allowing the canvas color to show through.

### Hero section

The hero occupies full viewport height with asymmetric two-column composition. Left column contains the primary message; right column features the large goose illustration. The headline uses hero-display token in accent-green, spanning multiple lines with natural breaks. Below, a body-large paragraph in white provides context. An email capture form follows with a text input and primary button arranged horizontally. The input uses the input component token with placeholder text in ink-muted. The "Sign up!" button uses the primary-button token with accent-yellow background and dark text.

### Capability buttons

These interactive elements appear as full-width rows with left-aligned labels and right-aligned status indicators. The active state uses accent-yellow background with dark text and a chevron icon. Inactive states show transparent backgrounds with colored text (accent-blue or accent-purple) and "Coming Soon!" labels in the same color family. Borders use border-prominent at 2px width. Padding is generous at 0.9375rem vertical and 2.1875rem horizontal. Buttons stack vertically with consistent spacing.

### Text generation cards

Three stacked cards demonstrate the platform's output, each with a thin gradient border that shifts between accent colors. The first card shows muted text with bold lead words; the second shows active generation with warm orange emphasis; the third shows completed output with purple emphasis. Card interiors use canvas-elevated background. Text uses body-large size with selective bolding for generated portions. Cards have no border-radius and subtle 1px borders.

### Migration section

This section pairs left-aligned text with a full-bleed wireframe illustration of flying geese. The headline hierarchy places a small white label above a large purple display line. Body text follows in white. Below, a code block shows Python and JavaScript tabs with syntax-highlighted content. The active tab has an underline indicator. Code uses the code token with green background highlighting for the modified API base URL line.

### Pricing cards

Horizontal cards display model specifications with left-aligned labels and right-aligned pricing. Card headers show model names in ink-muted at label size. Model size names ("Small", "Medium") use section-display token in white. Prices use the same display size with "/request" suffix in body size. Cards use canvas-elevated background with border-subtle borders and generous internal padding.

### FAQ accordion

Stacked rows with full-width clickable areas. Each row contains a question in body weight with a chevron indicator on the right. Rows use canvas-elevated background with 1px border-subtle borders top and bottom, creating connected strip appearance. Padding is substantial at 1.875rem. The section title above uses section-display token in white, centered above the accordion.

## Responsive behavior

The desktop layouts assume wide viewports with side-by-side compositions. At narrower widths, the two-column hero should stack with the goose illustration moving below the text content. The capability buttons and pricing cards should transition to full-width single columns. The FAQ accordion maintains its stacked format across breakpoints but may reduce horizontal padding.

The code block in the migration section should remain horizontally scrollable on small screens rather than wrapping, preserving line integrity for copy-paste functionality. Navigation links should collapse to a menu trigger below approximately 768px viewport width.

Typography should scale down proportionally: hero-display and section-display may reduce to 2.5rem on tablets and 2rem on mobile devices. Body text remains at 1rem for readability. The goose mascot illustration should scale to maintain visual balance without dominating the viewport on smaller screens.

## Practical implementation guidance

### Preserve
- The dark canvas-first approach; light mode would fundamentally alter the brand character
- The sharp zero-border-radius aesthetic on all interactive elements and cards
- The two-typeface system with Karl reserved for display and Articulat CF for everything else
- The generous side margins that create focused, readable content columns
- The accent color progression that guides users through the page narrative
- The wireframe goose illustration style as a distinct secondary brand element

### Avoid
- Adding border-radius to buttons or cards; the sharp edges are intentional
- Using accent colors for large background areas; they should remain spot colors
- Replacing the goose mascot with generic illustrations; it's central to brand recognition
- Lightening the canvas colors; the near-black depth is essential to the glow effect
- Using system fonts for headlines; Karl's geometric character is distinctive

### Recommended build order
1. Establish the canvas and ink color tokens with proper dark mode defaults
2. Implement the type scale with both font families loaded and fallbacks configured
3. Build the navigation and hero section with the asymmetric layout
4. Create the button components with their multiple color variants
5. Implement the card system with consistent border treatment
6. Add the code block with syntax highlighting and tab switching
7. Build the FAQ accordion with proper chevron rotation states
8. Layer in the decorative illustrations and background grid lines

### Accessibility
- Ensure accent colors meet WCAG contrast ratios against the dark canvas; the green and yellow accents may need adjustment for small text
- Provide visible focus indicators on all interactive elements; the 2px borders can serve as focus rings with color shifts
- Maintain keyboard navigation order through the capability buttons and FAQ accordion
- Use `aria-expanded` on accordion rows and ensure chevron icons are decorative only
- The dark background with light text is inherently accessible for many users, but test with actual users who prefer dark interfaces

## Scope note

This guide covers the GooseAI marketing homepage including hero, features, migration, pricing, and FAQ sections. Mobile layouts, hover and focus states, loading animations, and the playground or documentation interfaces are not represented in the supplied material. The pricing section appears partially in the images; full pricing tiers and comparison logic are not documented here. Verify licensing for Articulat CF, Karl, System-Monospace, and System-Uimonospace before production use.
