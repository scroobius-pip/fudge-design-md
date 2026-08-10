# How windscribe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/windscribe.com-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-up form with Standard/Hashed toggle, floating labels, and dark starfield background with grid floor](https://pin.fontofweb.com/10079?format=jpg)](https://design.withfudge.com/share/pin-10079)

[Sign-up form with Standard/Hashed toggle, floating labels, and dark starfield background with grid floor](https://design.withfudge.com/share/pin-10079)

[![Hashed sign-up variant showing account hash display with copy and regenerate actions](https://pin.fontofweb.com/10078?format=jpg)](https://design.withfudge.com/share/pin-10078)

[Hashed sign-up variant showing account hash display with copy and regenerate actions](https://design.withfudge.com/share/pin-10078)

[![Legacy login page with green pill button on light background and starfield header](https://pin.fontofweb.com/5006?format=jpg)](https://design.withfudge.com/share/pin-5006)

[Legacy login page with green pill button on light background and starfield header](https://design.withfudge.com/share/pin-5006)

[![Refer-a-friend rewards page with tiered cards and step-by-step process on dark background](https://pin.fontofweb.com/5005?format=jpg)](https://design.withfudge.com/share/pin-5005)

[Refer-a-friend rewards page with tiered cards and step-by-step process on dark background](https://design.withfudge.com/share/pin-5005)

## Overview

Windscribe's design system presents a dark, immersive interface built around a space and cybersecurity aesthetic. The visual language combines deep navy and near-black backgrounds with subtle atmospheric effects—starfield imagery, grid floors, and floating particles—to create a sense of digital depth and technical sophistication. The system prioritizes clarity in account flows: sign-up, login, and referral pages share a consistent structural approach with centered card-based forms that float above the atmospheric background. Typography pairs a geometric display face for headings with a clean sans-serif for interface text, while interactive elements use rounded pill shapes and subtle border glows to maintain the futuristic tone without sacrificing usability. The overall effect is a premium, security-focused environment that feels both technical and approachable.

## Colors

The palette is built on a dark-mode foundation with selective accent usage. Interface colors derive from the exact values present in the current sign-up and account flows.

| token | hex | use |
|---|---|---|
| canvas | #090E19 | Primary page background, deep space navy |
| canvas-deep | #070E17 | Darker background variant for depth layers |
| surface | #0B0F16 | Card backgrounds, form containers, elevated panels |
| surface-elevated | #000000 | Pure black for maximum contrast elements |
| ink | #000000 | Default text color on light surfaces |
| ink-primary | #FFFFFF | Primary text on dark surfaces, button labels |
| ink-secondary | #898F9D | Muted text, placeholders, secondary labels |
| ink-muted | #84878C | Tertiary text, disabled states, fine print |
| accent | #9E9EFF | Links, interactive highlights, focus indicators |
| border | #C5CEE0 | Visible borders, dividers, structural lines |
| border-subtle | #C5CEE0 | Form borders, card edges, hairline separators at reduced opacity |

The color logic follows a dark-first hierarchy: backgrounds progress from deep navy to pure black, while text inverts from white through gray scales. The accent purple-blue provides the primary interactive signal, appearing in links and focus states. Form surfaces use a subtle gradient from semi-transparent light tones, creating a glass-like effect that separates content from the atmospheric background without opaque blocking. Shadows reinforce depth with layered inset and drop shadows using the border color family.

## Typography

The system uses two primary type families: Russo One for display headings and Mona Sans for all interface text. IBM Plex Sans appears in a limited role for small UI elements. The complete set of font sources includes Applesystem, IBM Plex Sans, IBM Plex Sans-Italic, Instrument Serif-Italic, Lato, Mona Sans, Russo One, and Times. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Russo One | 1.5rem | 400 | 1.25 | normal | Page titles, section headings |
| section-display | Mona Sans | 1rem | 700 | 1.25 | normal | Card titles, form headers |
| body | Mona Sans | 1rem | 400 | 1.55 | normal | Primary body text, descriptions |
| body-small | Mona Sans | 0.875rem | 400 | 1.5 | normal | Secondary descriptions, card content |
| label | Mona Sans | 0.875rem | 400 | 1.43 | normal | Form labels, input placeholders |
| caption | Mona Sans | 0.8125rem | 400 | 1.5 | normal | Badges, step indicators, fine print |
| legal | Mona Sans | 0.8125rem | 400 | 1.5 | normal | Terms links, copyright, disclaimers |
| button-primary | Mona Sans | 1rem | 700 | 1.25 | normal | Primary action buttons |
| button-secondary | Mona Sans | 1rem | 400 | 1 | normal | Secondary actions, icon buttons |
| input | Mona Sans | 0.875rem | 400 | 1.25 | normal | Text field content |
| navigation | Mona Sans | 1rem | 400 | 1.55 | normal | Header links, account prompts |

Russo One provides the distinctive geometric character for headings with its squared, technical letterforms. Mona Sans serves as the workhorse family across all weights from Regular to Bold. IBM Plex Sans, designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen at Bold Monday, appears at 13.5px for small interface labels. Instrument Serif-Italic, designed by Rodrigo Fuenzalida at Frag Type, is available for editorial or decorative applications. Applesystem, Times, and Lato appear in the source but serve fallback or legacy roles.

## Layout

The layout system centers content vertically and horizontally, creating a focused, modal-like experience for account flows. The page structure uses a single-column approach with generous surrounding negative space.

The background layer establishes atmospheric depth through a fixed starfield with scattered particles and a perspective grid floor that converges toward the horizon. This creates a sense of infinite digital space without distracting from foreground content.

Content containers use a maximum width approach, centered with auto margins. The primary form panel receives substantial internal padding of 32px to 40px on the sides, creating breathing room around dense form fields. Vertical rhythm between major sections maintains 24px gaps, while related elements group at 16px or 12px intervals.

The header area floats above the form, containing the wordmark left-aligned and account prompts right-aligned in a horizontal flex arrangement. Below the main content, a minimal footer carries copyright and language selection, maintaining the centered alignment.

On the referral page, the layout expands to a wider container accommodating side-by-side reward cards and a three-column step process. This demonstrates the system's adaptability from narrow form-focused layouts to broader content presentations while maintaining the dark atmospheric treatment.

## Visual language

The visual character merges cybersecurity aesthetics with playful space themes. The starfield background with its subtle animation potential and grid-floor perspective creates immediate genre recognition—this is a technical product for digital privacy. The floating particles and occasional cloud-like shapes add organic movement to an otherwise rigid geometric system.

Form surfaces employ a glassmorphism-inspired treatment: semi-transparent gradients, subtle inner glows along the top edge, and soft drop shadows that lift panels from the background. This creates depth without the heaviness of solid opaque cards. Borders remain hairline-thin, often just 1px, with colors that shift between visible white and near-invisible subtle tones depending on element importance.

Interactive states communicate through color inversion and border emphasis. Selected toggle pills fill with white background and black text, while unselected states recede to dark surfaces with light text. Buttons carry a consistent rounded capsule shape with generous horizontal padding, making actions feel substantial and approachable.

Iconography appears as simple line icons within circular containers or inline with text. The visual system avoids elaborate illustration in favor of typographic clarity and geometric simplicity, letting the atmospheric background provide personality while interface elements remain ruthlessly functional.

## Components

### Sign-up form

The sign-up form serves as the system's most complex component, demonstrating layered surface treatments and multiple interaction patterns.

- **Anatomy**: Header with mode toggle, informational banner, dynamic form fields, voucher section, consent checkbox, legal text, and submit button
- **Surface**: Gradient background from `rgba(197, 206, 224, 0.15)` to `rgba(197, 206, 224, 0.06)` with inset top border glow and outer drop shadow
- **Border**: 1px solid with subtle color, 24px radius creating a soft rounded rectangle
- **Typography**: Section title in hero-display, field labels in label token, helper text in body-small
- **Spacing**: 32px to 40px internal padding, 24px vertical gaps between major sections, 16px between related fields
- **Composition**: Single column with full-width inputs, right-aligned action icons within fields

### Mode toggle

A segmented control switching between Standard and Hashed registration modes.

- **Anatomy**: Two adjacent pill buttons within a rounded container
- **Surface**: Dark background for container, white fill for active selection
- **Typography**: button-secondary for inactive, button-primary weight for active
- **Shape**: 100px radius pills, 4px radius for small variant
- **States**: Active state inverts to white background with black text; inactive shows white text on dark surface

### Text input

Floating label pattern with embedded action icons.

- **Anatomy**: Container with label, input field, and trailing icon buttons
- **Surface**: Dark surface background matching form container
- **Border**: 1px solid with subtle color, 8px radius
- **Typography**: label for floating state, input for entered text
- **Spacing**: 15px top padding, 2px bottom padding creating asymmetric label space
- **Icons**: Eye for visibility toggle, refresh for regenerate, copy for clipboard

### Primary button

Capsule-shaped action trigger with high contrast.

- **Anatomy**: Text label with optional leading icon
- **Surface**: Dark background with subtle gradient overlay
- **Border**: 1px solid white, 46px radius creating full pill
- **Typography**: button-primary in white
- **Padding**: 10px vertical, 24px horizontal
- **Spacing**: 8px gap between icon and text when paired

### Info banner

Contained message block for contextual information.

- **Anatomy**: Icon, bold heading, body text, and action link
- **Surface**: Slightly elevated dark surface with rounded corners
- **Border**: 1px solid subtle border, 8px radius
- **Typography**: section-display for heading, body-small for description, accent color for link
- **Spacing**: 16px padding, 12px internal gaps

### Reward card

Tiered presentation for referral program benefits.

- **Anatomy**: Badge label, icon container, benefit title, and description
- **Surface**: Dark background with colored border accent (green or purple variant)
- **Border**: 1px solid with theme color, 8px radius
- **Typography**: caption for badge in accent color, section-display for title, body-small for description
- **Spacing**: 24px padding, 16px internal gaps

### Step process

Numbered instructional sequence.

- **Anatomy**: Step badge, title, and descriptive paragraph
- **Surface**: Transparent, relying on page background
- **Typography**: caption for step badge in accent, section-display for title, body-small for description
- **Composition**: Three-column grid on desktop, stacking vertically on narrow viewports

## Responsive behavior

The system appears optimized for desktop presentation. The centered form approach with fixed maximum width suggests a single breakpoint strategy: maintain centered layout until viewport narrows below approximately 640px, then reduce horizontal padding and allow full-width form containers.

The referral page's three-column step layout should stack to single column on mobile, with reward cards following suit. Form inputs maintain full-width behavior across all sizes, with touch targets maintaining minimum 44px height.

For implementation, consider adding a viewport-adaptive padding scale: 40px horizontal padding above 768px, 24px between 640px and 768px, and 16px below. The atmospheric background should remain fixed to prevent scroll jank, with content scrolling over it.

## Practical implementation guidance

### Preserve
- The dark atmospheric background with starfield and grid floor—this is the system's signature visual element
- High contrast between text and backgrounds; maintain WCAG AA minimum ratios
- The floating label pattern for form inputs, which saves vertical space and adds polish
- Pill-shaped buttons with generous horizontal padding for approachable actions
- Subtle glassmorphism effects on form surfaces using the exact gradient values
- The Russo One and Mona Sans pairing for display and interface respectively

### Avoid
- Light backgrounds for account flows; the legacy login page represents a previous design iteration
- Sharp-cornered buttons or inputs; the rounded language is consistent across all interactive elements
- Opaque card surfaces that block the atmospheric background entirely
- Multiple accent colors in single views; the system restricts accent usage to maintain focus
- Small touch targets; maintain minimum 44px for all interactive elements

### Recommended build order
1. Establish the atmospheric background layer with starfield and grid floor
2. Implement the centered content container with maximum width constraint
3. Build the form surface with exact gradient and shadow values
4. Create the text input component with floating label behavior
5. Implement pill buttons with active/invert states
6. Add the mode toggle with segmented control logic
7. Construct info banners and reward cards for secondary pages
8. Polish with icon integration and micro-interactions

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against the dark backgrounds; white on #0B0F16 exceeds requirements
- Provide visible focus indicators using the accent color for keyboard navigation
- Maintain logical tab order through form fields, with explicit label associations
- Offer reduced motion alternatives for the atmospheric background; static fallback should preserve all content readability
- Use aria-pressed for toggle buttons and aria-expanded for collapsible sections
- Ensure the starfield background does not trigger vestibular disorders; respect prefers-reduced-motion

## Scope note

This guide covers the account flow surfaces—sign-up, login, and referral pages. Marketing pages, dashboard interfaces, and mobile applications are not represented. Motion behavior, additional breakpoints, and error or loading states are not documented. The legacy login page uses a previous visual system with light backgrounds and green accents; implement the current dark system for new work. The complete font set includes Applesystem, IBM Plex Sans, IBM Plex Sans-Italic, Instrument Serif-Italic, Lato, Mona Sans, Russo One, and Times. Verify licensing for these families before production use.
