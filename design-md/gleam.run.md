# How gleam.run is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gleam.run-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with pink star mascot logo, two-column link grid, and copyright notice on white background](https://pin.fontofweb.com/2647?format=jpg)](https://design.withfudge.com/share/pin-2647)

[Footer with pink star mascot logo, two-column link grid, and copyright notice on white background](https://design.withfudge.com/share/pin-2647)

[![Newsletter signup section with pink background, rounded dark button, email input field, and cartoon mascot holding envelope](https://pin.fontofweb.com/2646?format=jpg)](https://design.withfudge.com/share/pin-2646)

[Newsletter signup section with pink background, rounded dark button, email input field, and cartoon mascot holding envelope](https://design.withfudge.com/share/pin-2646)

[![Sponsor section with dark navy background, circular avatar grid, and pink decorative wave at top edge](https://pin.fontofweb.com/2645?format=jpg)](https://design.withfudge.com/share/pin-2645)

[Sponsor section with dark navy background, circular avatar grid, and pink decorative wave at top edge](https://design.withfudge.com/share/pin-2645)

[![Feature section with dark navy background, code syntax highlighting, terminal output, and white section headings](https://pin.fontofweb.com/2644?format=jpg)](https://design.withfudge.com/share/pin-2644)

[Feature section with dark navy background, code syntax highlighting, terminal output, and white section headings](https://design.withfudge.com/share/pin-2644)

## Overview

The Gleam programming language website presents a distinctive visual personality that balances technical credibility with approachable warmth. The design centers on a playful pink star mascot that anchors the brand identity, appearing in the logo, as decorative illustrations, and as a recurring motif throughout the page. This mascot character—simple, rounded, and expressive—sets the tone for a developer tool that does not take itself too seriously while maintaining professional polish.

The page structure alternates between three dominant surface treatments: clean white editorial space for navigation and footer content, vibrant pink sections for calls-to-action and community engagement, and deep navy-dark surfaces for technical content and code demonstrations. This three-mode rhythm creates visual variety while keeping the experience coherent. The overall impression is of a modern, friendly, and technically competent open-source project that welcomes newcomers without sacrificing the depth that experienced developers expect.

Typography pairs the geometric, approachable Lexend for display headings with the clean, neutral Outfit for body text and interface elements. The combination reads as contemporary and accessible, avoiding the overly corporate or aggressively technical aesthetics common in programming language sites. Rounded shapes dominate the interface language, from pill-shaped buttons to circular avatars, reinforcing the soft, approachable character established by the mascot.

## Colors

The color system operates across three distinct modes that serve different content purposes. The light mode provides clean, readable space for navigation, documentation links, and footer content. The pink mode creates emotional energy for newsletter signup, community calls-to-action, and brand expression. The dark mode establishes technical authority for code samples, terminal output, and feature descriptions.

| token | value | use |
|---|---|---|
| action | #5C4B5A | Primary button backgrounds on pink surfaces |
| action-hover | #4A3D49 | Darker button state for interaction feedback |
| canvas | #FFFFFF | Primary page background, input fields, footer |
| surface-dark | #2A2D3E | Code sections, feature descriptions, sponsor area |
| surface-pink | #FFB3E6 | Newsletter signup background, brand expression |
| surface-pink-light | #FFD6F0 | Lighter pink tints, decorative gradients |
| ink | #1A1A2E | Primary text on light backgrounds |
| ink-light | #FFFFFF | Text on dark or pink surfaces |
| ink-muted | #8A8AA3 | Secondary text, captions, legal copy |
| border | #E0D5E0 | Subtle dividers on light backgrounds |
| border-dark | #4A4D5E | Subtle borders on dark surfaces |
| syntax-keyword | #FF79C6 | Code keywords, control flow |
| syntax-string | #F1FA8C | String literals in code blocks |
| syntax-function | #8BE9FD | Function names, identifiers |
| syntax-comment | #6272A4 | Code comments, secondary syntax |

The dark surface carries a subtle cool undertone that complements the warm pink accents. Code syntax highlighting uses a familiar palette reminiscent of popular dark themes, with pink keywords creating continuity with the brand color. The action color is a desaturated purple-brown that provides sufficient contrast against the bright pink without competing for attention. White text on dark surfaces maintains high legibility for technical content, while dark text on pink surfaces ensures readability in the emotionally charged signup section.

## Typography

The type system relies on two font families with clear role separation. Lexend handles all display and heading responsibilities with its geometric, open letterforms that feel contemporary and approachable. Outfit serves as the workhorse for body text, navigation, labels, and interface elements, providing neutral readability without visual distraction. Both families support a range of weights, though the design primarily uses Regular and Medium weights for body text, reserving Bold and Semibold for headings and emphasis.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lexend | 3rem | 700 | 1.1 | -0.02em | Page title, major hero statements |
| section-display | Lexend | 2.5rem | 600 | 1.15 | -0.01em | Section headings on dark or pink |
| body | Outfit | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-large | Outfit | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, emphasis |
| label | Outfit | 0.875rem | 500 | 1.4 | 0.01em | Button text, form labels |
| navigation | Outfit | 1rem | 500 | 1.5 | 0 | Footer links, primary navigation |
| code | monospace | 0.875rem | 400 | 1.6 | 0 | Code blocks, terminal output |
| legal-copy | Outfit | 0.75rem | 400 | 1.5 | 0 | Copyright, terms, privacy notices |

Display sizes use tight negative tracking to create cohesive word shapes at large sizes. Body text maintains generous line height for comfortable reading of technical descriptions. The code token uses a system monospace stack for syntax highlighting, with slightly reduced size to align with the visual density of terminal output. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure with maximum content width for readability. Sections stack vertically with full-bleed background colors creating clear territorial boundaries between content types. The layout avoids complex grids in favor of straightforward stacking that serves the documentation and marketing hybrid purpose.

Content containers cap at approximately 75rem, centering within the viewport with consistent horizontal gutters. Sections maintain generous vertical padding, typically 5rem, establishing breathing room between distinct content modes. The footer compresses into a tighter vertical space with a multi-column link grid that organizes resources into logical groups.

The sponsor section demonstrates a dense grid layout, with circular avatar images arranged in tight rows that scroll or paginate horizontally. This creates a visual texture of community density, with the circular crop unifying diverse source images into a coherent pattern. Navigation between grid pages uses small dot indicators centered below the avatar field.

Code and feature sections employ an asymmetric two-column composition, with descriptive text on one side and syntax-highlighted examples on the other. This split maintains roughly equal visual weight between explanation and demonstration, letting developers scan either column depending on their information needs. Terminal output blocks sit below or beside code samples, using the same dark surface with distinct color coding for command prompts, success messages, and error states.

## Visual language

The visual language derives from the tension between playful personality and technical seriousness. The pink star mascot—simple, rounded, with minimal facial features—appears at multiple scales from tiny footer accent to large newsletter illustration. This character grounds the brand in friendliness without becoming childish, its geometric simplicity allowing clean rendering at any size.

Rounded forms dominate interface elements. Buttons are fully pill-shaped with generous horizontal padding. Input fields share the same full rounding, creating visual continuity between interactive elements. Avatar images are strictly circular, their organic content contained within a geometric frame that echoes the mascot's star shape. Even the decorative wave at the top of the dark sponsor section uses smooth curves rather than angular geometry.

The three surface modes create a rhythmic progression through the page: white for navigation and footer grounding, pink for emotional engagement and community building, dark navy for technical depth and code authority. This alternation prevents monotony while establishing clear content expectations—users learn that pink means action and community, dark means technical detail, white means navigation and reference.

Syntax highlighting extends the brand pink into the code environment, with keywords rendered in a bright magenta-pink that connects to the surface-pink token. Strings use warm yellow, functions use cyan, and comments fade to muted blue-gray. This creates a cohesive technical aesthetic that feels intentional rather than default.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Background uses action color (#5C4B5A), text uses ink-light (#FFFFFF)
- **Typography**: label token, Medium weight, 0.875rem
- **Shape**: Full pill rounding with 9999px border radius
- **Spacing**: 0.75rem vertical padding, 2rem horizontal padding
- **Composition**: Centered within its container, often paired with descriptive text above
- **Variants**: Appears on pink backgrounds in newsletter section, on white backgrounds in hero areas

### Email capture form

- **Anatomy**: Text input field and submit button joined horizontally
- **Surface**: Input uses canvas (#FFFFFF) background, button uses action (#5C4B5A)
- **Typography**: Input uses body token, button uses label token
- **Shape**: Both elements fully rounded, creating a continuous pill when joined
- **Spacing**: Input padding 0.75rem 1.5rem, button padding matches primary button
- **Composition**: Centered below heading and description text
- **States**: Placeholder text in muted color, active input with standard focus ring

### Footer navigation

- **Anatomy**: Logo mark with wordmark, two columns of text links, copyright and legal line
- **Surface**: Canvas (#FFFFFF) background throughout
- **Typography**: Navigation links use navigation token, copyright uses legal-copy token
- **Shape**: No borders or containers, pure typographic layout
- **Spacing**: Generous vertical space between link rows, compact horizontal grouping
- **Composition**: Logo left-aligned, link columns center-left, legal text right-aligned
- **Hierarchy**: Link columns organized by topic, no visible section headers

### Code feature block

- **Anatomy**: Section heading, descriptive paragraphs, syntax-highlighted code sample, optional terminal output
- **Surface**: surface-dark (#2A2D3E) background, ink-light (#FFFFFF) primary text
- **Typography**: Section heading uses section-display token, body uses body token, code uses code token
- **Shape**: No visible border radius on code containers, flush with section background
- **Spacing**: Generous padding between heading, text, and code elements
- **Composition**: Two-column split with text left, code right; stacks vertically on narrow viewports
- **Syntax colors**: Keywords in syntax-keyword (#FF79C6), strings in syntax-string (#F1FA8C), functions in syntax-function (#8BE9FD), comments in syntax-comment (#6272A4)

### Sponsor avatar grid

- **Anatomy**: Dense grid of circular avatar images with pagination dots below
- **Surface**: surface-dark (#2A2D3E) background with decorative pink wave at top edge
- **Shape**: Strictly circular avatars with 50% border radius
- **Spacing**: Tight grid with minimal gaps between avatars
- **Composition**: Full-width grid, horizontally scrollable or paginated
- **Pagination**: Small dot indicators, active dot in ink-light, inactive in ink-muted

## Responsive behavior

The design appears optimized for desktop viewing with its generous two-column layouts and wide content containers. At narrower viewports, the two-column code feature blocks should stack vertically with heading and description above the code sample. The sponsor avatar grid likely maintains horizontal scrolling or reduces visible columns rather than wrapping to multiple rows.

The email capture form should remain horizontal on tablet widths but may stack vertically on mobile, with the submit button expanding to full width below the input field. Footer navigation columns should collapse to a single column on narrow screens, maintaining link grouping through vertical spacing rather than horizontal position.

Typography scales down proportionally, with hero-display and section-display reducing by approximately 25% on mobile to maintain line length control. Body text remains at 1rem minimum for readability. The mascot illustration in the newsletter section should scale down or reposition to avoid overwhelming the signup form on small screens.

## Practical implementation guidance

### Preserve
- The three-mode color rhythm: white editorial, pink emotional, dark technical
- The mascot character's consistent appearance and proportional relationship to content
- Pill-shaped buttons and inputs as a unifying interface motif
- Circular avatar treatment for any community or contributor displays
- Syntax highlighting palette that extends brand pink into code contexts

### Avoid
- Angular or sharp-cornered buttons that break the rounded visual language
- Desaturated or brown-tinted pinks that lose the vibrant, playful energy
- Light backgrounds for code samples, which would sacrifice the technical atmosphere
- Multiple mascot styles or redrawn versions that fragment brand recognition
- Generic gray action buttons that compete with the distinctive purple-brown

### Recommended build order
1. Establish the three surface modes with correct background colors
2. Implement typography scale with Lexend headings and Outfit body
3. Create pill button component with proper padding and color states
4. Build email capture form with joined input and button
5. Implement dark mode code blocks with syntax highlighting
6. Add mascot illustrations at key page positions
7. Construct footer with multi-column link grid
8. Build sponsor avatar grid with pagination

### Accessibility
- Ensure sufficient contrast for white text on pink surfaces; the bright pink may need dark text rather than white for WCAG AA compliance
- Provide focus indicators for all pill-shaped interactive elements
- Maintain keyboard navigation through footer link columns
- Consider reduced-motion preferences for any avatar grid pagination
- Test syntax highlighting contrast ratios; some theme colors may need adjustment for accessibility

## Scope note

This guide covers the Gleam homepage marketing surface including the hero, feature sections, newsletter signup, sponsor display, and footer. Measurements are practical adaptation targets. Documentation pages, interactive playground, package registry, and mobile-specific layouts are not represented in the supplied material. Hover states, focus styles, loading indicators, and error messaging were not visible and should be designed to match the established rounded, friendly aesthetic.
