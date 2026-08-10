# How rive.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rive.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with RIVE wordmark, Tomorrow display heading, and horizontal scrolling category cards on black background](https://pin.fontofweb.com/9761?format=jpg)](https://design.withfudge.com/share/pin-9761)

[Hero section with RIVE wordmark, Tomorrow display heading, and horizontal scrolling category cards on black background](https://design.withfudge.com/share/pin-9761)

[![Social proof section with company logos, body copy, and testimonial grid cards with avatars on dark surface](https://pin.fontofweb.com/9764?format=jpg)](https://design.withfudge.com/share/pin-9764)

[Social proof section with company logos, body copy, and testimonial grid cards with avatars on dark surface](https://design.withfudge.com/share/pin-9764)

[![Split-screen login page with animated character on purple left panel and white right panel with form fields](https://pin.fontofweb.com/9763?format=jpg)](https://design.withfudge.com/share/pin-9763)

[Split-screen login page with animated character on purple left panel and white right panel with form fields](https://design.withfudge.com/share/pin-9763)

## Overview

Rive's design system is built around immersive motion and interactive experiences, expressed through a predominantly dark interface that lets colorful media content take center stage. The visual language balances technical precision with creative energy: geometric sans-serif display type contrasts against clean body copy, while generous media containers and minimal chrome keep attention on animations and interactive demos. The homepage presents a cinematic hero with horizontal-scrolling category cards, followed by dense social proof sections featuring company logos and testimonial grids. A split-panel login page demonstrates the system's adaptability, pairing a vibrant animated character against a deep purple ground with a clean, light-form authentication flow. Navigation remains restrained and persistent, with a small wordmark and understated text links that recede until needed.

## Colors

The palette is fundamentally dark-mode, using near-black and charcoal surfaces to create depth without competing with the colorful media content that defines Rive's product.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer |
| surface | #111111 | Elevated cards, testimonial containers, secondary panels |
| surface-elevated | #1D1D1D | Navigation hover states, subtle raised elements |
| surface-login | #303030 | Dark panel backgrounds in split-screen layouts |
| ink | #FFFFFF | Primary headings, hero text, button labels on dark |
| ink-muted | #AAAAAA | Body copy, descriptions, secondary text on dark |
| ink-dim | #888888 | Placeholder text, disabled states, footer links |
| ink-inverse | #242424 | Text on light backgrounds, login form heading |
| action | #0000EE | Link color, interactive accent |
| action-hover | #121212 | Button hover fill, pressed states |
| border | #262626 | Card outlines, subtle dividers on dark surfaces |
| border-light | #F2F0F0 | Input borders on light backgrounds, form dividers |

The dark surface hierarchy creates three perceptible levels: the absolute black canvas, slightly elevated near-black cards, and mid-tone panels for specific functional zones like authentication. White and near-white ink maintains WCAG AAA contrast against all dark surfaces. The single blue accent (#0000EE) appears sparingly for links and interactive cues, avoiding the gradient-heavy aesthetic common in creative tools. The login page introduces a light inversion: white panels with dark text, demonstrating the system's ability to flip polarity for functional tasks while retaining the dark brand expression in surrounding areas.

## Typography

Five type families appear in the extracted materials: Tomorrow for display and brand moments, Inter for readable body text, Roboto for functional UI elements like buttons and forms, System-Sansserif for navigation and fallback contexts, and Times as a root-level fallback.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tomorrow | 2.5rem | 500 | 1.2 | 0.01em | Hero headings, major section titles |
| section-display | Tomorrow | 1.5rem | 500 | 1.3 | 0.008em | Card labels, category headers, subsection titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, testimonials |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Compact descriptions, metadata |
| label | Tomorrow | 0.6875rem | 400 | 1.6 | 0.01em | Tags, category pills, micro-labels |
| navigation | System-Sansserif | 0.75rem | 400 | 1 | 0 | Top nav links, utility navigation |
| form-heading | Inter | 1.25rem | 600 | 1.2 | -0.02em | Login headings, form section titles |
| button | Roboto | 1rem | 500 | 1 | 0 | Primary buttons, CTAs, form submit |

Tomorrow's geometric construction with slight tracking gives display text a technical, engineered quality that matches Rive's positioning as a runtime and design tool. Inter's generous line-height (1.6) supports long-form reading in the testimonial grid and product descriptions. Roboto's medium weight at 16px provides confident button labels without heaviness. System-Sansserif serves navigation at 12px with neutral, unobtrusive letterforms. The 11px label size, while small, is reserved for uppercase category tags where brevity and visual texture matter more than extended reading.

Verify licensing for these families before production use. Roboto is designed by Christian Robertson and available from Google. Tomorrow and Inter require separate licensing verification. No attribution is supported for System-Sansserif, Times, or Applesystem.

## Layout

The layout system uses a fluid container with consistent edge padding and generous vertical rhythm. The homepage hero occupies full viewport height with centered content, while subsequent sections stack with substantial breathing room.

**Container and padding.** Horizontal page padding is 1.25rem (20px) on mobile and expands to 1.875rem (30px) on larger screens. The login page uses wider horizontal padding of 2.5rem (40px) for its form panel, with an extreme 6.25rem (100px) padding variant for centered content containers. Maximum content width is not rigidly constrained; instead, the horizontal scrolling card row extends beyond the viewport edge, suggesting overflow and motion.

**Vertical rhythm.** Section spacing follows a 3.75rem (60px) baseline, with major divisions at 7.5rem and tighter component gaps at 1.25rem, 1.875rem, and 2.5rem. The hero section uses a 22.5rem top padding to push content below the fold, creating dramatic negative space above the wordmark.

**Grid patterns.** The testimonial section uses a three-column grid with 1.875rem gaps, each card containing an avatar, name, role, and quote. Category cards in the hero scroll horizontally in a single row with 0.625rem gaps, their labels positioned above the media thumbnail.

**Navigation.** The top bar is fixed or sticky, containing the wordmark left, text links center, and a primary CTA right. Navigation links use 0.625rem horizontal gaps, with dropdown indicators on "Products," "Community," and "Learn."

**Zoning.** The login page splits the viewport vertically: approximately 55% left for the animated character on a deep purple photographic ground, 45% right for the white form panel. This asymmetric division creates visual tension and reserves the larger portion for brand expression.

## Visual language

**Motion and media first.** The interface is designed to recede behind content. Black backgrounds, minimal borders, and restrained typography create a theater-like environment where animations, interactive demos, and colorful thumbnails command attention. The horizontal-scrolling category card row is the dominant interactive element on the homepage, suggesting continuous exploration.

**Geometric precision.** Card corners are consistently rounded at 1.25rem, creating soft but defined containers. Buttons use smaller 0.5rem radii for a more compact, actionable feel. The wordmark and display type share a constructed, almost technical geometry that reinforces the product's engineering credibility.

**Color restraint with punctuated moments.** The palette is almost achromatic except for the blue link accent and the vibrant media content itself. This discipline makes the purple login panel and colorful character animation feel intentional and premium rather than decorative.

**Depth through layering.** Testimonial cards sit on slightly elevated surfaces with subtle borders. The login form panel appears to float above the darker page footer. These depth cues are achieved through background color shifts rather than shadows, maintaining the flat, modern aesthetic.

**Iconography.** Small system icons accompany navigation items and utility actions. The download button pairs a document icon with text. Social links in the footer use recognizable platform glyphs at 1rem size.

## Components

**Primary button**

- Anatomy: Text label with optional leading icon, contained within a bordered pill shape
- Surface: `{components.primary-button.backgroundColor}` with 1px `{components.primary-button.borderColor}` border on dark; solid dark fill on light backgrounds
- Typography: `{typography.button}` in uppercase with 0.05em tracking
- Shape: `{rounded.pill}`, padding `{spacing.component-padding}` 1.5rem
- Spacing: 0.625rem gap between icon and text when present
- Variants: Default (outlined on dark), filled (solid on light), icon-only (square with rounded corners)

**Category card**

- Anatomy: Label text above, media thumbnail below, full-bleed image with rounded container
- Surface: `{components.category-card.backgroundColor}`, no border, image fills container
- Typography: `{components.category-card.typography}` in uppercase, centered above thumbnail
- Shape: `{rounded.card}`, 5px internal padding on image
- Composition: Fixed aspect ratio thumbnail, consistent width for horizontal scroll snapping
- States: Hover likely scales image slightly or reveals overlay; still image shows static state

**Testimonial card**

- Anatomy: Avatar image (circular or rounded square), name, role/company, quote text
- Surface: `{components.testimonial-card.backgroundColor}`, 1px `{components.testimonial-card.borderColor}` outline
- Typography: Name in `{typography.body-small}` weight 500, role in `{typography.label}` uppercase, quote in `{typography.body-small}` muted
- Shape: `{rounded.card}`, padding `{components.testimonial-card.padding}`
- Spacing: 0.75rem vertical gap between avatar block and quote, 0.5rem between name and role
- Composition: Avatar left-aligned with text, or top-stacked depending on density

**Text field**

- Anatomy: Label or placeholder text, input area, optional trailing action (show/hide password)
- Surface: `{colors.ink}` background on light panels, subtle border
- Typography: `{typography.body}` in `{colors.ink-inverse}`, placeholder in `{colors.ink-dim}`
- Shape: `{rounded.input}` top radius for first input, `{rounded.input}` bottom radius for last input in stack; 0 radius for middle inputs to create seamless group
- Spacing: 0.625rem horizontal padding, 0.75rem vertical; 3px bottom margin between stacked fields
- Composition: Full-width within form panel, grouped visually with adjacent fields

**Form submit button**

- Anatomy: Full-width button with centered text
- Surface: `{colors.ink-inverse}` background, `{colors.ink}` text
- Typography: `{typography.button}` weight 500
- Shape: `{rounded.input}` bottom radius when concluding input group
- Spacing: 0.9375rem bottom margin to separate from subsequent links

**Navigation bar**

- Anatomy: Wordmark left, link cluster center, CTA right
- Surface: Transparent or `{colors.canvas}` with subtle blur
- Typography: `{typography.navigation}` in `{colors.ink-muted}`, active/hover in `{colors.ink}`
- Spacing: 1.5rem gap between major nav groups, 0.625rem between individual links
- Composition: Horizontal flex, vertically centered, full-width with page padding

**Footer**

- Anatomy: Large wordmark, copyright block left, social icon row right
- Surface: `{colors.canvas}` continuous with page
- Typography: Copyright in `{typography.body-small}` muted, links underlined
- Spacing: 3.75rem vertical padding, 2.5rem horizontal
- Composition: Two-zone layout with legal left and social right

## Responsive behavior

The horizontal-scrolling category card row should maintain touch-friendly card widths on mobile, with snap points for precise browsing. The three-column testimonial grid should collapse to single column on narrow viewports, maintaining card padding and internal spacing. The login page's split panel should stack vertically on mobile, with the animated character area becoming a compact banner above the form. Navigation links should collapse to a menu trigger below approximately 768px viewport width. Hero text should scale down proportionally, with the display heading remaining prominent but not overflowing. Form fields should remain full-width across all breakpoints for consistent touch targets.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant background; it is essential to the immersive, media-forward character
- Tomorrow for display headings; its geometric personality is central to brand recognition
- Generous negative space in the hero, especially the large top padding that creates dramatic focus
- The horizontal scroll interaction for category discovery; it signals motion and exploration
- Consistent 1.25rem card radius across testimonial and media containers

### Avoid
- Adding background colors behind media content; the black canvas is intentional negative space
- Using Tomorrow for body text; its geometric construction degrades readability at small sizes
- Introducing additional accent colors beyond the single blue; the restrained palette keeps focus on user content
- Heavy drop shadows; depth should come from surface color layering
- Rigid maximum-width containers that would clip the horizontal card overflow

### Recommended build order
1. Establish the dark canvas and surface color hierarchy
2. Implement Tomorrow display type with proper tracking and line-height
3. Build the navigation bar with transparent background and pill CTA
4. Create the hero section with centered wordmark, heading, and description
5. Implement horizontal-scrolling category cards with image thumbnails and labels
6. Construct the testimonial grid with consistent card surfaces and avatar layout
7. Build the split-panel login with form input grouping and full-width submit
8. Add footer with wordmark, legal text, and social icons

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast (it does at normal sizes)
- Provide visible focus indicators on the dark canvas; the blue accent may need enhancement for focus rings
- Add `prefers-reduced-motion` support for the horizontal scroll and any animated hero content
- Label the category card scroll region as a carousel or listbox for screen reader users
- Maintain visible password toggle with clear state indication
- Ensure form error states are communicated with more than color alone

## Scope note

This guide covers the Rive homepage hero, social proof sections, and login page as visible in the supplied materials. Interior product pages, editor interfaces, documentation layouts, and mobile-specific navigation patterns are not represented. Motion specifications, animation curves, and interactive state transitions are not documented from still images.
