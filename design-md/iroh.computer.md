# How iroh.computer is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/iroh.computer-design)

Last updated: 2026-08-10

## Captured pages

[![Blog index page with dark charcoal background, white Koulen headings, and purple-blue Read Post links in a vertical timeline layout](https://pin.fontofweb.com/4649?format=jpg)](https://design.withfudge.com/share/pin-4649)

[Blog index page with dark charcoal background, white Koulen headings, and purple-blue Read Post links in a vertical timeline layout](https://design.withfudge.com/share/pin-4649)

[![Sendme feature section with light gray gradient background, three-column FAST/RESUMABLE FETCHING/INTEGRITY CHECKS layout, and purple-accented iroh code-style text](https://pin.fontofweb.com/4281?format=jpg)](https://design.withfudge.com/share/pin-4281)

[Sendme feature section with light gray gradient background, three-column FAST/RESUMABLE FETCHING/INTEGRITY CHECKS layout, and purple-accented iroh code-style text](https://design.withfudge.com/share/pin-4281)

[![Sendme three-step setup guide with terminal window illustrations, numbered steps, and monospace code snippets on white background](https://pin.fontofweb.com/4280?format=jpg)](https://design.withfudge.com/share/pin-4280)

[Sendme three-step setup guide with terminal window illustrations, numbered steps, and monospace code snippets on white background](https://design.withfudge.com/share/pin-4280)

[![Sendme hero with bold black SENDME display type, playful line-art illustration of connected laptops, and install code blocks with copy buttons](https://pin.fontofweb.com/4279?format=jpg)](https://design.withfudge.com/share/pin-4279)

[Sendme hero with bold black SENDME display type, playful line-art illustration of connected laptops, and install code blocks with copy buttons](https://design.withfudge.com/share/pin-4279)

## Overview

The Iroh design system serves a developer-tools brand focused on peer-to-peer networking and file transfer. The visual identity pairs aggressive, tightly-tracked display typography with clean utilitarian layouts that shift between stark dark modes and airy light sections. The brand voice is technically credible without being sterile—playful line-art illustrations of anthropomorphized laptops and paper airplanes soften the engineering precision. The system supports two primary contexts: a dark-themed blog and documentation experience, and a light-themed product marketing surface for tools like Sendme. Both share the same typographic backbone: Koulen, a bold condensed sans-serif, used for all display and label text, creating immediate brand recognition across every page. The result is a design that feels like it belongs to infrastructure software—direct, functional, confident—while remaining approachable through its illustration style and generous whitespace.

## Colors

The color system operates in two modes: a dark mode for content-heavy pages and a light mode for product marketing. Both share the same accent and semantic colors.

| token | value | use |
|---|---|---|
| ink | #18181b | Primary text on light backgrounds, dark mode backgrounds |
| canvas | #ffffff | Light mode backgrounds, dark mode text |
| surface | #f4f4f5 | Subtle backgrounds, code blocks, terminal windows |
| surface-elevated | #fafafa | Card backgrounds, elevated panels on light surfaces |
| action | #7c3aed | Primary buttons, links, accent text, interactive highlights |
| action-hover | #6d28d9 | Hover state for action elements |
| muted | #71717a | Secondary text, captions, timestamps, de-emphasized content |
| border | #e4e4e7 | Dividers, card borders, subtle boundaries on light surfaces |
| border-subtle | #27272a | Dividers on dark surfaces |
| success | #22c55e | Status indicators, online badges |

The dark mode, visible on the blog index, uses ink as the full-page background with canvas text. The light mode, used on product pages like Sendme, inverts this relationship with canvas as the background and ink for text. The action purple appears consistently across both modes for links, buttons, and highlighted technical terms like `iroh` in code style. The muted gray serves as the secondary text color in both modes, appearing for dates, descriptions, and supporting copy. Surface colors create depth without introducing chromatic noise—critical for a developer audience that values clarity over decoration.

## Typography

The typographic system is built on two families: Koulen for display and label roles, and system-ui for body text. A monospace stack handles code and technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Koulen | 4rem | 400 | 1 | 0.02em | Page titles, hero headlines |
| section-display | Koulen | 2rem | 400 | 1.1 | 0.01em | Section headings, feature titles |
| body | system-ui | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | system-ui | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, secondary descriptions |
| label | Koulen | 1rem | 400 | 1.2 | 0.04em | Buttons, navigation, category labels |
| code | monospace | 0.875rem | 400 | 1.5 | 0 | Inline code, terminal output, install commands |

Koulen, designed by Danh Hong, provides the brand's distinctive voice: bold, condensed, with slightly extended letterforms that feel industrial without being mechanical. It appears in all-caps for labels and section headers, and in mixed case for hero headlines. The system-ui stack ensures readable body text across platforms. The monospace stack uses generic family fallback for terminal aesthetics. Verify licensing for these families before production use.

## Layout

The layout system favors centered single-column flows for content pages and asymmetric two-column arrangements for product marketing. The blog index uses a narrow centered container approximately 640px wide, with entries stacked vertically and separated by generous whitespace. Each entry pairs a left-aligned date in muted text with a right-aligned content block containing the title, description, and action link.

Product pages like Sendme use wider containers with more complex internal grids. The hero section centers a large illustration between a headline and subhead, while feature sections below use three-column grids for capability highlights. The "built on iroh" section uses a full-width gradient background with an inner content container, creating a visual break without a hard border.

Spacing follows a 4px base unit. Section vertical padding is typically 5rem, with 1.5rem gaps between related elements. Content containers maintain consistent horizontal padding of 1.5rem on smaller viewports, expanding to centered fixed widths on larger screens. The terminal window illustrations in the setup guide use internal padding of 1rem, with code blocks receiving additional horizontal padding to separate the prompt character from commands.

## Visual language

The visual language balances technical credibility with approachable personality. The illustration style is distinctive: black line art with minimal fill, featuring rounded rectangles with simple dot eyes and curved mouths that represent devices and data packets. These characters interact with technical concepts—laptops shake hands through cables, paper airplanes carry data between machines—making peer-to-peer networking feel tangible and friendly.

Photography and gradients are used sparingly. The "built on iroh" section employs a subtle gray gradient with abstract curved shapes, suggesting motion and connectivity without literal representation. Elsewhere, the system relies on flat color fields and clean borders.

Iconography is minimal and functional. The copy button beside install commands uses a simple document icon. Navigation lacks traditional icons, relying entirely on text labels in Koulen. Status indicators use solid color dots—a green circle for "online" in blog entries—rather than complex icon systems.

The overall density is low. Generous whitespace around headings, between sections, and within cards prevents the technical content from feeling overwhelming. This breathing room is essential to the brand's positioning: sophisticated infrastructure made simple.

## Components

### Navigation

The navigation appears as a horizontal bar at the top of light-mode pages. It uses label typography in Koulen, with links in ink color and the active or hovered state in action purple. The navigation lacks background separation on scroll, sitting directly on the canvas. Spacing between links is 1.5rem.

### Hero section

The hero section on product pages centers a large illustration above or between text elements. The headline uses hero-display typography, often in all-caps for product names like "SENDME". A subhead in body typography sits below with muted color. The illustration dominates the vertical space, typically 60% of the section height. No background color separates the hero from the following content—a subtle border or whitespace transition suffices.

### Feature grid

The feature grid presents three capabilities side by side on desktop. Each cell contains a label-style heading in Koulen, a body-small description in muted color, and no icon. The headings use section-display size but maintain label tracking. Cells are evenly distributed with 1.5rem gutters. No card surface or border separates cells—whitespace alone creates the division.

### Terminal window

The terminal window component simulates a command-line interface for setup instructions. It uses a surface background with a border, rounded corners, and internal padding. The window chrome shows three small circles in the top-left, mimicking traffic lights. Content uses code typography with a prompt character (`>` or `$`) in muted color, followed by the command in ink. Output lines appear in muted color below commands. The component appears in a three-step sequence with numbered labels below each window.

### Code block

Code blocks appear for install commands and technical snippets. They use surface background, border, and code typography. A copy button sits at the right edge, using a small document icon in muted color. The block spans the full width of its container with internal padding of 1rem. Commands use the `$` prefix pattern established in terminal windows.

### Blog entry

Blog entries on the index page stack vertically with 2rem vertical spacing. Each entry contains a date in body-small muted text, a title in section-display typography, a description in body-small muted text, and a "Read Post" link in action color with a trailing chevron. A subtle left border or vertical line in border-subtle color may separate the date column from the content column.

### Button

Primary buttons use action background with canvas text, label typography, and rounded corners. They appear compact with 0.75rem vertical and 1.5rem horizontal padding. The "BUILD ON IROH" example shows uppercase label text with slightly wider tracking. Secondary buttons use transparent backgrounds with action text color.

## Responsive behavior

The layout should adapt from single-column on narrow viewports to multi-column on wider screens. The blog index maintains its narrow centered container across all breakpoints, as the timeline layout does not benefit from horizontal expansion. Product pages should stack the three-column feature grid to single column below 768px, with each feature cell taking full width and maintaining vertical spacing.

The hero illustration should scale down proportionally, potentially hiding below the headline on very narrow screens to preserve text readability. Terminal windows in the setup guide should remain side by side on tablet widths if possible, but stack vertically on mobile with maintained internal proportions.

Navigation should collapse to a hamburger menu or simplify to essential links on mobile, though the current system appears to use minimal navigation that may remain horizontal with reduced spacing. Code blocks should allow horizontal scrolling rather than wrapping, preserving command integrity.

## Practical implementation guidance

### Preserve
- The Koulen display type for all headings and labels; this is the primary brand identifier
- The dark/light mode duality—blog on dark, product pages on light
- The playful line-art illustration style with simple dot-eyed characters
- The `$` prompt convention and monospace treatment for all technical content
- The generous whitespace that prevents technical density from overwhelming readers
- The purple action color for all interactive and highlighted technical terms

### Avoid
- Introducing additional display typefaces that compete with Koulen's distinctive voice
- Using borders or shadows to create depth where whitespace suffices
- Adding decorative icons to the feature grid—the text hierarchy carries the communication
- Darkening the muted gray to a point where it competes with primary text
- Over-rounding corners; the system uses modest radii that feel technical, not playful

### Recommended build order
1. Establish the typography scale with Koulen loaded and system-ui configured
2. Implement the dark and light mode color variables with semantic naming
3. Build the blog entry component as the simplest content pattern
4. Create the terminal window and code block components with proper monospace handling
5. Construct the feature grid and hero section for product pages
6. Add the illustration system with SVG line art

### Accessibility
- Ensure the action purple (#7c3aed) meets WCAG AA contrast against both canvas and ink backgrounds; it may need adjustment for small text
- Provide a visible focus state for all interactive elements, using action color with an outline offset
- Maintain the semantic heading hierarchy despite the visual similarity of Koulen at different sizes
- Ensure code blocks are keyboard-focusable and screen-reader friendly with proper `pre`/`code` structure
- Consider a reduced-motion preference for any illustration animations

## Scope note

This guide covers the blog index and Sendme product page surfaces visible in the supplied images. The documentation site, additional product pages, and any interactive states beyond static presentation are not represented. Footer content, mobile navigation patterns, and form components are not visible in the source material. Measurements are practical adaptation targets.
