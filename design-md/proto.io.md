# How proto.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/proto.io-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-up form with centered heading, split name fields, email and password inputs, checkboxes, and a prominent dark-blue submit button on a white background.](https://pin.fontofweb.com/2948?format=jpg)](https://design.withfudge.com/share/pin-2948)

[Sign-up form with centered heading, split name fields, email and password inputs, checkboxes, and a prominent dark-blue submit button on a white background.](https://design.withfudge.com/share/pin-2948)

[![Sign-in page with a split layout featuring a light-gray left panel with the proto.io logo and decorative circles, and a white right panel with the centered sign-in form.](https://pin.fontofweb.com/2947?format=jpg)](https://design.withfudge.com/share/pin-2947)

[Sign-in page with a split layout featuring a light-gray left panel with the proto.io logo and decorative circles, and a white right panel with the centered sign-in form.](https://design.withfudge.com/share/pin-2947)

[![Footer section with five-column link grid, email subscription input with dark-blue subscribe button, social media icons, Proddy Awards badge, and bottom bar with copyright and](https://pin.fontofweb.com/2946?format=jpg)](https://design.withfudge.com/share/pin-2946)

[Footer section with five-column link grid, email subscription input with dark-blue subscribe button, social media icons, Proddy Awards badge, and bottom bar with copyright and](https://design.withfudge.com/share/pin-2946)

[![Testimonial carousel with the IDEO logo, centered quote text, circular avatar, attribution name and title, and light circular navigation arrows on either side.](https://pin.fontofweb.com/2945?format=jpg)](https://design.withfudge.com/share/pin-2945)

[Testimonial carousel with the IDEO logo, centered quote text, circular avatar, attribution name and title, and light circular navigation arrows on either side.](https://design.withfudge.com/share/pin-2945)

## Overview

Proto.io presents itself as a polished, enterprise-ready prototyping platform through a design system that prioritizes clarity and conversion. The visual language balances professional restraint with approachable warmth: deep indigo anchors the action layer, while a near-white canvas and light gray surfaces create breathing room for dense marketing content and focused authentication flows. The system serves two primary contexts visible in the supplied material—a persuasive marketing site with social proof and detailed footer navigation, and a streamlined authentication experience with split-panel layouts. Inter provides the sole type voice, lending a contemporary, neutral tone that scales from bold display headings to compact legal copy without losing legibility. The overall impression is of a mature SaaS product that respects user attention through generous spacing, consistent component behavior, and a limited palette that avoids visual fatigue.

## Colors

The color system is intentionally narrow, deriving its character from a single deep indigo action hue against neutral grounds. This restraint allows product imagery and user content to carry visual interest while maintaining brand recognition.

| token | value | use |
|---|---|---|
| action | #2D2F8F | Primary buttons, subscribe actions, key interactive elements |
| action-hover | #252780 | Darker indigo for button hover states |
| canvas | #FFFFFF | Primary page background, form panels, input backgrounds |
| surface | #F5F7FA | Secondary panel backgrounds, decorative sections, footer upper area |
| ink | #1A1D2B | Primary text, headings, body copy, logo color |
| muted-ink | #6B7280 | Secondary text, placeholders, disabled states, footer legal links |
| link | #3B82F6 | Inline text links, "Sign In" and "Start your free trial" references |
| border | #E5E7EB | Input borders, dividers, checkbox outlines, subtle separators |
| input-bg | #FFFFFF | Form field backgrounds |
| input-placeholder | #9CA3AF | Input placeholder text |

The interface operates in a light mode throughout. The deep indigo (#2D2F8F) functions as the singular brand accent, appearing on every primary call-to-action. Text links use a brighter blue (#3B82F6) to distinguish inline navigation from button actions. The near-black ink (#1A1D2B) provides strong contrast for reading without the harshness of pure black. Gray values are warm-neutral, avoiding cold blue undertones that would compete with the indigo accent. No dark mode or alternative theme is visible in the supplied material.

## Typography

The type system relies entirely on Inter, a variable font family designed by Rasmus Andersson and provided by Rsms. Verify licensing for these families before production use. The hierarchy is established through weight and size rather than family variation, creating a cohesive reading experience from marketing headlines to form labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.5rem | 700 | 1.2 | -0.02em | Page titles, "Sign Up for Free", "Sign In" |
| section-display | Inter | 2rem | 700 | 1.2 | -0.01em | Section headings, testimonial logos |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraph text, form descriptions |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | Emphasized body, checkbox labels |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Form field labels, button text, footer headings |
| caption | Inter | 0.875rem | 400 | 1.4 | 0 | Footer links, secondary navigation |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0 | Copyright, terms links, fine print |

Display headings use tight negative tracking for a compact, confident presence appropriate for a tool-oriented brand. Body text maintains generous line height for extended reading in marketing sections. The 0.875rem label size serves dual duty as both form metadata and uppercase footer category headings, differentiated by weight and letter spacing. No italic styles or display alternates are employed. The Cl 3 Iskicons family appears in the source but functions as an icon system rather than typography; it should not be used for readable text.

## Layout

The layout system favors centered, single-column compositions for authentication flows and multi-column grids for marketing content and navigation. The fundamental unit is 0.25rem, with major sections separated by 6rem of vertical space.

Authentication pages employ a split-panel structure: a narrow left sidebar (approximately one-third width) in light gray surface color carries the brand logo, tagline, and decorative circular elements, while the right two-thirds presents a centered form on white canvas. This asymmetry creates visual interest while keeping the task-focused form prominent. The left panel's decorative circles—partial indigo and cyan forms clipped by the panel edge—add personality without distracting from the conversion goal.

Marketing content uses a full-width approach with generous horizontal padding. The footer demonstrates a five-column grid for link categories, with the rightmost column reserved for the subscription form and social proof. Below this, a full-width divider separates the main footer from a bottom bar containing the logo, copyright, and legal links. The testimonial section centers its content with generous side padding, placing navigation arrows at the extreme edges.

Form layouts stack fields vertically with 1.25rem gaps, using two-column arrangements only for closely related pairs like first and last name. Labels sit directly above inputs with minimal spacing, creating tight label-field relationships. All interactive elements maintain consistent left alignment within their containers.

## Visual language

The visual personality of Proto.io communicates competence through restraint. Rounded corners are minimal—0.25rem for inputs and buttons, 0.5rem for larger panels—avoiding the playfulness of heavy rounding while softening the technical precision of the interface. Shadows are absent from the visible material; depth is created through color contrast and spacing rather than elevation.

Decorative elements serve brand recognition without overwhelming content. The authentication sidebar features large, partially cropped circles in indigo and cyan, suggesting creativity and dynamism. The footer includes a shield-shaped award badge with a gold accent band, providing third-party credibility. Social media icons use simple monochrome treatments in the ink color, maintaining visual quietness.

The photography and avatar treatment is straightforward: circular crops for testimonial portraits, clean logo presentations for client social proof. No gradients, patterns, or textured backgrounds appear in the supplied material. The overall effect is of a tool that lets user creations take center stage while providing a calm, predictable environment for account management and exploration.

## Components

### Primary Button

- **Anatomy**: Full-width or content-width rectangular button with centered text label
- **Surface**: Solid indigo background (#2D2F8F) with white text
- **Typography**: Label token, uppercase, medium weight, 0.875rem
- **Shape**: 0.25rem border radius
- **Spacing**: 1rem vertical padding, 2rem horizontal padding minimum
- **Composition**: Centered text, no icon in default state
- **Variants**: Full-width in forms; inline width in subscription area

### Text Input

- **Anatomy**: Single-line field with label above, placeholder text inside
- **Surface**: White background with light gray border (#E5E7EB)
- **Typography**: Body token for value, placeholder uses muted gray (#9CA3AF)
- **Shape**: 0.25rem border radius, 1px solid border
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Label stacked above with small gap; full-width in forms
- **Variants**: Single column for email and password; half-width pair for name fields

### Checkbox

- **Anatomy**: Small square box with label text to the right
- **Surface**: White background, light gray border
- **Typography**: Body-medium token for label text
- **Shape**: Slight rounding (approximately 0.125rem)
- **Spacing**: Compact inline arrangement with text baseline aligned to box center
- **Composition**: Left-aligned within form, stacked vertically with 1rem gaps

### Footer Navigation

- **Anatomy**: Columnar grid of link categories with uppercase headings
- **Surface**: White upper section, separated by light divider from bottom bar
- **Typography**: Footer-heading token for category labels (uppercase, letter-spaced), caption token for links
- **Shape**: No rounding on containers
- **Spacing**: Generous column gutters, consistent 0.75rem vertical link spacing
- **Composition**: Five equal columns; subscription form and social icons occupy the rightmost column
- **Variants**: Bottom bar uses horizontal inline layout for legal links

### Testimonial Card

- **Anatomy**: Client logo above, large quote text, circular avatar with name and title below
- **Surface**: White background, no visible card container
- **Typography**: Section-display for client logo treatment, body-medium for quote, label for attribution name, caption for title
- **Shape**: Circular avatar crop (50%)
- **Spacing**: 1.5rem gaps between logo, quote, and attribution
- **Composition**: Centered alignment throughout; navigation arrows positioned at viewport edges
- **Variants**: Arrow buttons use light gray circular backgrounds with ink chevrons

### Subscription Form

- **Anatomy**: Email input with adjacent submit button
- **Surface**: Input uses light gray background distinct from white canvas; button uses indigo action color
- **Typography**: Caption for placeholder, label for button text
- **Shape**: Input has 0.25rem left radius, button has 0.25rem right radius, forming a joined unit
- **Spacing**: Zero gap between input and button
- **Composition**: Horizontal flex layout, button fixed width

## Responsive behavior

The authentication split-panel layout should stack vertically on narrow viewports, with the decorative sidebar collapsing to a minimal header or hiding entirely to prioritize the form. The footer five-column grid should reflow to two columns on tablet widths and single column on mobile, maintaining category grouping. Testimonial navigation arrows should remain accessible at reduced sizes, potentially moving below the quote on very narrow screens. Form inputs should maintain full-width behavior across all breakpoints, with the name-field pair stacking vertically when horizontal space is insufficient. The subscription form should stack to vertical arrangement on mobile, with the button becoming full-width below the input.

## Practical implementation guidance

### Preserve
- The deep indigo as the singular action color; do not introduce additional button colors
- Generous white space around forms and marketing content; the calmness depends on breathing room
- Inter as the sole type family; the system's neutrality is intentional
- Minimal rounding on interactive elements; avoid pill shapes or heavy radius
- Uppercase, letter-spaced footer category headings for scanability

### Avoid
- Heavy shadows or elevation effects; the design achieves hierarchy through color and space
- Multiple accent colors competing with the indigo action
- Decorative gradients behind content areas
- Tight line heights on body text; the 1.5 ratio supports readability
- Icon-only buttons without text labels in primary actions

### Recommended Build Order
1. Establish the color tokens and Inter font loading
2. Build the text input and primary button components as the most reused elements
3. Compose the authentication form layout with proper label-field stacking
4. Implement the split-panel page structure for sign-in and sign-up flows
5. Construct the footer grid and subscription component
6. Add the testimonial section with centered composition and edge navigation

### Accessibility
- Ensure the indigo action buttons meet contrast ratios against white; the dark value (#2D2F8F) should satisfy WCAG AA for normal text
- Maintain visible focus indicators on all interactive elements, using the link blue or a distinct outline
- Associate form labels explicitly with inputs using proper markup
- Provide accessible names for the icon-only social media links and testimonial navigation arrows
- Consider reduced motion preferences for any carousel or testimonial transitions

## Scope note

This guide covers the marketing homepage, authentication pages, and footer system visible in the supplied material. It does not include the product editor interface, pricing tables, documentation pages, or mobile-specific layouts. Measurements are practical adaptation targets derived from the visible interface. No motion, hover states, or dark mode specifications are represented. Verify licensing for the Inter family before production use; the icon font requires separate licensing review.
