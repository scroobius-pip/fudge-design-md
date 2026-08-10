# How motion.software is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/motion.software-design)

Last updated: 2026-08-10

## Captured pages

[![Changelog page with versioned release entries, green category badges, and monospace metadata against near-black background](https://pin.fontofweb.com/7006?format=jpg)](https://design.withfudge.com/share/pin-7006)

[Changelog page with versioned release entries, green category badges, and monospace metadata against near-black background](https://design.withfudge.com/share/pin-7006)

[![Centered login form with social auth buttons, email input field, and light primary action on dark canvas](https://pin.fontofweb.com/7005?format=jpg)](https://design.withfudge.com/share/pin-7005)

[Centered login form with social auth buttons, email input field, and light primary action on dark canvas](https://design.withfudge.com/share/pin-7005)

[![Footer section with Motion logo, copyright, multi-column link groups, and muted secondary text](https://pin.fontofweb.com/7004?format=jpg)](https://design.withfudge.com/share/pin-7004)

[Footer section with Motion logo, copyright, multi-column link groups, and muted secondary text](https://design.withfudge.com/share/pin-7004)

[![FAQ accordion with expand/collapse items, green email link, and centered download call-to-action](https://pin.fontofweb.com/7003?format=jpg)](https://design.withfudge.com/share/pin-7003)

[FAQ accordion with expand/collapse items, green email link, and centered download call-to-action](https://design.withfudge.com/share/pin-7003)

## Overview

Motion presents a dark, technically precise interface built around a near-black canvas with subtle warm undertones. The design communicates screen-recording software through restrained color, monospace metadata accents, and generous spatial rhythm. Every surface sits close to black, with text emerging in bright neutral tones and occasional electric green highlights that signal interactive or emphasized content. The system avoids decorative gradients and relies on typographic hierarchy, thin borders, and careful padding to structure information. Navigation remains minimal and persistent, while content sections breathe through large vertical margins and a consistent maximum content width. The overall impression is of a developer-friendly tool: direct, uncluttered, and confident in its material choices.

## Colors

The palette is fundamentally dark with a single bright accent. Backgrounds progress from pure black through warm near-blacks, while text inverts to light neutrals. The green accent appears sparingly for links, badges, and highlighted metadata.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #14120B | Card backgrounds, elevated panels |
| surface-elevated | #1B1913 | Login inputs, subtle raised areas |
| border | #26241E | Dividers, accordion separators, panel edges |
| border-subtle | #2A2822 | Navigation button borders, hairline outlines |
| ink | #ECECEC | Primary text, headings, body copy |
| ink-muted | #A9F894 | Secondary text, version labels, metadata |
| action | #FFFFFF | Primary button backgrounds, emphasized text |
| action-inverse | #000000 | Text on primary buttons |
| accent | #A9F894 | Links, category badges, highlighted terms |

The warm near-blacks distinguish Motion from cooler dark-mode interfaces. The green accent (#A9F894) functions as the only saturated color in the interface, reserved for interactive signals and categorical labels. White appears almost exclusively as a button fill or hover state, never as a background. Borders remain extremely subtle, often disappearing into the canvas at normal viewing distance. The login page demonstrates the surface-elevated token in practice: input fields sit slightly above the canvas at #1B1913, creating just enough separation for affordance without breaking the dark continuity.

## Typography

Motion uses two related families from the same design studio: Geist for all interface text and Geist Mono for code-like metadata. Both were designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and are distributed by Basementstudio and Vercel. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 525 | 1.15 | 0em | Page titles, "Changelog", "Try Motion now" |
| section-display | Geist | 2.25rem | 500 | 1.15 | 0em | Section headings, FAQ title, feature headers |
| body | Geist | 1rem | 400 | 1.5 | 0em | Navigation, default paragraphs, list items |
| body-large | Geist | 1.25rem | 400 | 1.25 | 0em | Intro paragraphs, hero descriptions |
| label | Geist | 0.875rem | 500 | 1.25 | 0em | Button text, category badges, footer headings |
| navigation | Geist | 1rem | 400 | 1.5 | 0em | Nav links, header items |
| code | Geist Mono | 0.8125rem | 400 | 1.25 | 0em | Version numbers, dates, technical metadata |
| legal-copy | Geist | 0.75rem | 400 | 1.5 | 0em | Terms links, copyright, fine print |

The type system is intentionally compact. Only three sizes carry significant weight differentiation: hero-display at 525 (a custom weight between Medium and Semibold), section-display at 500, and everything else at 400 Regular. Geist Mono appears exclusively at 13px for version strings like "1.11.1" and dates like "December 19, 2025" on the changelog, establishing a clear technical voice without dominating the reading experience. Line heights stay tight for display sizes and generous for body text, with the 20px body-large receiving a 25px line height that creates comfortable measure for introductory paragraphs.

## Layout

The layout follows a centered single-column model with a fixed maximum width. Content never stretches to full viewport; instead, it occupies a narrow reading column that keeps line lengths disciplined and focuses attention.

**Content width.** The maximum content width is approximately 74rem (1184px at 16px root), with internal padding of 2rem on each side. This creates the centered, floating appearance visible in all page sections.

**Section rhythm.** Vertical spacing between major sections uses 4rem as a base unit, expanding to 8rem for hero areas and compressing to 2rem for related content groups. The changelog shows this clearly: the header area carries extra top padding, while individual release entries stack with consistent internal spacing.

**Navigation.** A fixed or sticky header spans full width with internal horizontal padding of 1rem. The logo sits left, navigation links center, and utility actions (Log in, Start for free) right. The header itself shares the canvas background, creating a seamless top edge.

**Grid behavior.** The footer demonstrates a multi-column grid within the same content width: logo and copyright occupy the left portion, while link columns distribute across the remaining space. No complex grid system is visible; the layout relies on flex distribution and consistent gap spacing.

**Responsive approach.** At narrower viewports, the content padding reduces to 1rem and multi-column footers should stack vertically. The navigation collapses to a simplified state, though the exact breakpoint is not visible in the supplied images.

## Visual language

Motion's visual character emerges from restraint and material precision. The interface avoids decoration in favor of structural clarity.

**Surface treatment.** All backgrounds are flat. No gradients, no glassmorphism, no elevation shadows. The only depth cue is the subtle value step between canvas (#000000), surface (#14120B), and surface-elevated (#1B1913). This creates a shallow layering system sufficient for cards, inputs, and panels without breaking the dark immersion.

**Borders and dividers.** Borders are 1px solid lines in #26241E or #2A2822, functioning as optical hairlines that separate content without drawing attention. The changelog uses these to divide releases; the FAQ uses them between accordion items. Border radius is minimal at 4px, applied to buttons, inputs, and navigation items for slight softening without pill-like roundness.

**Iconography.** Icons appear as simple geometric marks: plus and minus for accordion states, external link arrows, download indicators. They share the text color of their context and maintain a 16px or 20px footprint. The Motion logo itself is a stylized cursor or pointer mark, white on dark, reinforcing the screen-recording product identity.

**Imagery and photography.** No photography appears in the interface. Product visuals, if present, would likely be interface screenshots or abstract geometric marks.**Accent usage.** The green accent (#A9F894) appears in three contexts: inline links (the support email in the FAQ), category badges (FIXES, IMPROVEMENTS, NEW on the changelog), and highlighted terms. This disciplined application prevents the accent from becoming decorative noise.

## Components

### Navigation header

- **Anatomy:** Logo mark left, text links center, two buttons right
- **Surface:** Transparent over canvas, or matching canvas background
- **Typography:** `{typography.navigation}` for links, `{typography.label}` for buttons
- **Shape:** No border radius on the bar itself; individual buttons use 4px radius
- **Spacing:** 1rem horizontal padding, 1.25rem vertical padding
- **Composition:** Flex row with space-between alignment; links grouped with 1.5rem gaps
- **Variants:** "Log in" as text button; "Start for free" as filled light button with dark text

### Primary button

- **Anatomy:** Text label with optional leading icon
- **Surface:** `{colors.action}` background with `{colors.action-inverse}` text; or `{colors.surface-elevated}` with `{colors.ink}` text for secondary
- **Typography:** `{typography.label}`
- **Shape:** 4px border radius, 1px border in `{colors.border-subtle}` for secondary variant
- **Spacing:** 0.5rem 0.75rem padding (8px 12px) for compact; 1.25rem 2rem (20px 32px) for hero call-to-action
- **Composition:** Centered text, inline-flex with icon gap of 0.5rem
- **Variants:** Filled white (primary), dark filled (secondary), text-only (tertiary)

### Input field

- **Anatomy:** Label above, text input below, optional helper text
- **Surface:** `{colors.surface-elevated}` background, no visible border or 1px `{colors.border-subtle}`
- **Typography:** `{typography.body}` for input text, `{typography.legal-copy}` for labels
- **Shape:** 4px border radius
- **Spacing:** 0.75rem vertical padding, 1rem horizontal padding
- **Composition:** Full width within parent, stacked label-input with 0.5rem gap

### Accordion

- **Anatomy:** Trigger row with question text and toggle icon; expandable content area below
- **Surface:** Transparent trigger, content area shows no distinct background
- **Typography:** `{typography.body}` for questions, `{typography.body}` at smaller size for answers
- **Shape:** No radius; full-width horizontal border in `{colors.border}` between items
- **Spacing:** 1.5rem vertical padding per trigger, 1rem padding for content
- **Composition:** Full width, icon right-aligned (plus for closed, X for open)
- **States:** Closed shows plus icon; open shows X icon with expanded content below

### Changelog entry

- **Anatomy:** Version number and date left, title and content right; category badges inline
- **Surface:** No distinct card background; separated by horizontal borders
- **Typography:** `{typography.code}` for version and date, `{typography.section-display}` for entry title, `{typography.body}` for list items
- **Shape:** No radius; badges have 4px radius
- **Spacing:** 2rem vertical padding per entry, 1.5rem gap between title and content
- **Composition:** Two-column layout at desktop: metadata column (20% width) and content column (80%)
- **Variants:** Category badges in green background with dark text for FIXES, IMPROVEMENTS, NEW

### Footer

- **Anatomy:** Logo and copyright left, link columns right
- **Surface:** `{colors.surface}` or matching canvas
- **Typography:** `{typography.label}` for column headings, `{typography.body}` for links, `{typography.legal-copy}` for copyright
- **Shape:** No radius; full-width top border optional
- **Spacing:** 2rem vertical padding, 2rem horizontal padding within content width
- **Composition:** Multi-column grid with 3rem column gaps

## Responsive behavior

The supplied images show desktop widths exclusively. Based on the layout patterns, the following responsive adaptations are recommended:

- **Content width:** Maintain the 74rem maximum with 2rem side padding down to approximately 1024px. Below this, reduce padding to 1rem and allow content to fill available width.
- **Navigation:** Collapse center links to a menu button at narrower widths, preserving the logo and primary action.
- **Changelog:** Stack the two-column layout vertically at smaller sizes, placing version metadata above each entry title rather than beside it.
- **Footer:** Convert multi-column link groups to a single stacked column with accordion behavior or simple vertical lists.
- **Typography:** Reduce hero-display from 3rem to 2.25rem and section-display from 2.25rem to 1.75rem on narrow viewports to prevent overflow and improve readability.
- **Buttons:** Maintain full-width primary actions on mobile for thumb reachability; secondary buttons may stack vertically.

## Practical implementation guidance

### Preserve
- The extremely dark palette with warm undertones; pure black alone would feel colder and less distinctive
- The single green accent used sparingly for links, badges, and highlights
- The tight border radius of 4px consistently applied across interactive elements
- The generous content max-width that creates focused, readable columns
- The monospace metadata treatment for technical information like versions and dates
- The flat, shadowless surface system that relies on value steps for depth

### Avoid
- Introducing additional accent colors; the green carries all emphasis needs
- Rounding corners beyond 4px; pills and large radii would soften the technical character
- Adding background gradients or blur effects; these break the material flatness
- Using borders thicker than 1px; the interface depends on hairline precision
- Light mode implementations without complete palette inversion; partial light surfaces would fragment the dark continuity

### Recommended build order
1. Establish the canvas and surface color tokens with the warm near-black values
2. Implement Geist and Geist Mono with the exact weight and size scale
3. Build the navigation header with logo, links, and button variants
4. Create the centered content container with consistent padding and max-width
5. Develop the button component with primary, secondary, and tertiary variants
6. Implement the accordion pattern for FAQ and similar content
7. Build the changelog entry layout with two-column metadata arrangement
8. Add the footer with multi-column link groups
9. Apply the green accent only to links, badges, and highlighted terms

### Accessibility
- Ensure all text on canvas and surface backgrounds meets WCAG AA contrast ratios; the #ECECEC on #000000 combination exceeds requirements
- The green accent (#A9F894) on dark backgrounds should be verified for contrast compliance when used for text; it may fall short for small text and should be reserved for large text or UI components
- Focus indicators should be visible against dark surfaces; consider using the green accent or white outline with 2px offset
- The login form requires clear error states with visible color differentiation beyond the green accent; add a red or orange error token for validation feedback
- Accordion triggers should be fully keyboard operable with Enter and Space activation, and aria-expanded states should toggle appropriately

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage sections, changelog, login page, and footer. Pricing pages, mobile layouts, motion behavior, hover states, and form validation feedback are not represented. The spacing and radius values derive directly from the retained interface measurements; font sizes use the exact pixel values from the type system converted to rem units.
