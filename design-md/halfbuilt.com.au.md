# How halfbuilt.com.au is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/halfbuilt.com.au-design)

Last updated: 2026-08-10

## Captured pages

[![Onboarding step two form with dual text inputs, large textarea, and paired Back and primary action buttons beneath a step indicator.](https://pin.fontofweb.com/10626?format=jpg)](https://design.withfudge.com/share/pin-10626)

[Onboarding step two form with dual text inputs, large textarea, and paired Back and primary action buttons beneath a step indicator.](https://design.withfudge.com/share/pin-10626)

[![Onboarding step one form with single workspace name input, plan caption, and a solitary Continue button beneath a step indicator.](https://pin.fontofweb.com/10625?format=jpg)](https://design.withfudge.com/share/pin-10625)

[Onboarding step one form with single workspace name input, plan caption, and a solitary Continue button beneath a step indicator.](https://design.withfudge.com/share/pin-10625)

[![Split-view authentication page with email registration form, gradient CTA button, and marketing hero with dotted pattern background and numbered feature list.](https://pin.fontofweb.com/10624?format=jpg)](https://design.withfudge.com/share/pin-10624)

[Split-view authentication page with email registration form, gradient CTA button, and marketing hero with dotted pattern background and numbered feature list.](https://design.withfudge.com/share/pin-10624)

## Overview

Halfbuilt presents a disciplined, minimal SaaS interface built around sparse form funnels and a split-view marketing presentation. The system relies on a near-monochrome palette anchored by deep charcoal ink against clean white and subtle warm-gray surfaces. Typography is handled through Inter Variable, deployed at restrained sizes with tight negative tracking to create a dense, professional rhythm. The onboarding experience unfolds as a stepped sequence of single-purpose forms, while the authentication page introduces the product through a dramatic left-right composition: a functional registration panel paired with a marketing hero featuring oversized display type and a decorative dotted pattern on a light gray ground. Every surface is flat, every corner is softly rounded, and every interactive element is clearly delineated through border and background contrast rather than shadow. The result is a system that feels precise, trustworthy, and deliberately uncluttered.

## Colors

The palette is fundamentally monochrome with a single purple gradient reserved for the primary conversion action on the marketing page. Light mode dominates all surfaces.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background, form panels, input backgrounds |
| surface | #FAFAFA | Subtle elevated areas, onboarding page ground |
| surface-elevated | #F4F4F5 | Marketing hero background, feature panel ground |
| ink | #09090B | Primary text, primary button backgrounds, logo |
| ink-secondary | #66666F | Secondary text, captions, helper copy |
| ink-tertiary | #52525B | Tertiary labels, muted metadata |
| border | #E6E7E9 | Input borders, dividers, hairline separators |
| border-strong | #BFBFBF | Focus states, emphasized boundaries |
| action | #09090B | Primary button fill, active navigation |
| action-text | #FFFFFF | Text on primary buttons |
| accent-gradient-start | #6A3BBC | Gradient CTA button top |
| accent-gradient-end | #9C79F5 | Gradient CTA button bottom |
| success-surface | #E8F7EF | Success message background |
| success-ink | #075D3B | Success message text and icon |
| info-surface | #E8F0FE | Informational banner background |
| info-ink | #1F1F1F | Informational banner text |

The gradient on the marketing CTA runs from #6A3BBC through #5B21B6 to #9C79F5, creating a rich purple vertical sweep that is the only saturated color in the interface. All other color relationships are built on value contrast: ink on canvas for maximum readability, ink-secondary for de-emphasized content, and the warm gray family for structural layering. Success and info states use muted tints rather than bright primaries, maintaining the system's restrained character.

## Typography

The type system uses Inter Variable as its primary family, with weights ranging from 380 to 760. The system stack includes -apple-system as a fallback for system-level UI elements. Tracking is consistently tight, with negative values on body and display sizes creating a connected, modern texture. The hierarchy is established through size, weight, and tracking rather than color variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Variable | 4.125rem | 520 | 0.98 | -0.02em | Marketing hero headline |
| section-display | Inter Variable | 1.75rem | 500 | 1.14 | -0.03em | Onboarding step headings |
| heading | Inter Variable | 0.8125rem | 500 | 1.5 | -0.011em | Form labels, feature titles |
| body | Inter Variable | 0.8125rem | 400 | 1.85 | -0.011em | Descriptions, helper text |
| body-small | Inter Variable | 0.75rem | 400 | 1.67 | -0.012em | Captions, metadata, legal |
| label | Inter Variable | 0.75rem | 500 | 1.33 | 0.035em | Uppercase-style labels, badges |
| ui | Inter Variable | 0.8125rem | 500 | 1.5 | -0.011em | Button text, navigation |
| step-indicator | Inter Variable | 0.75rem | 380 | 1.35 | -0.012em | Step counters, subtle labels |

The onboarding headings at 1.75rem with -0.03em tracking create a crisp, authoritative presence without overwhelming the sparse form content below. The marketing hero at 4.125rem with 520 weight and -0.02em tracking achieves dramatic scale while remaining readable and tightly integrated with the surrounding layout. Body text at 0.8125rem with generous 1.85 line height ensures comfortable reading of longer descriptions. Verify licensing for these families before production use.

## Layout

The system employs two distinct layout archetypes: a contained form funnel for onboarding and a split view for authentication and marketing.

The onboarding pages use a narrow, centered content column with generous vertical padding. The form container sits well below the top navigation, creating breathing room that emphasizes the step-by-step nature of the task. Maximum content width appears constrained to approximately 540px, with form elements filling this width. Step indicators sit above headings with a small horizontal rule separator, establishing clear progression. Form fields stack vertically with consistent 1.5rem gaps between label-input pairs.

The authentication page splits the viewport into two equal columns. The left panel contains the functional registration form with standard padding, while the right panel presents the marketing hero with substantially more internal spacing—approximately 3.5rem padding on all sides. The hero column uses surface-elevated as its background, creating immediate visual separation from the functional left side. A decorative dotted pattern occupies the upper right quadrant of the hero, adding texture without competing with the typography.

Navigation is minimal: a top bar with logo left and utility text right, separated from content by a 1px border. The logo combines a small square mark with the word "Halfbuilt" in bold sans-serif.

## Visual language

The visual character is defined by flat surfaces, soft rounding, and extreme typographic restraint. Every interactive element receives a 0.5rem border radius, from small buttons to large text inputs, creating a family of friendly but precise shapes. The pill radius of 9999px appears reserved for special badges or potential future use.

Shadows are minimal and functional: a subtle 0px 1px 2px rgba(17, 24, 39, 0.08) for slight elevation, and a more pronounced 0px 4px 20px rgba(0, 0, 0, 0.12) for modal or dropdown contexts. An inset highlight of 0px 1px 0px rgba(255, 255, 255, 0.1) suggests layered surfaces on dark backgrounds.

The marketing hero introduces the system's only decorative element: a field of small dots arranged in an organic, cloud-like cluster against the light gray background. This pattern uses the accent purple at very low opacity, creating atmosphere without distraction. The numbered feature list below the hero headline uses circular step indicators with thin borders, connected by a vertical line that reinforces the sequential, process-oriented nature of the product.

Borders function as the primary structural device. The 1px #E6E7E9 border defines every input field, every separator, and every panel edge. On focus or emphasis, borders shift to #BFBFBF or disappear entirely to reveal filled surfaces.

## Components

### Top navigation

- Anatomy: Logo mark and wordmark left, utility text right
- Surface: Transparent background over canvas
- Typography: ui token for utility text
- Shape: Full-width bar, height approximately 56px
- Spacing: Horizontal padding matching page margins
- Composition: Flex row, space-between alignment
- Border: 1px solid border bottom on scroll or always visible

### Step indicator

- Anatomy: Horizontal rule, step counter text, optional step label
- Surface: Transparent
- Typography: step-indicator token
- Shape: Short horizontal rule (approximately 1.5rem) followed by text
- Spacing: Margin bottom 1.5rem before heading
- Composition: Inline flex, items center

### Text input

- Anatomy: Label above, input field below, optional helper text beneath
- Surface: Canvas background, border-strong on focus
- Typography: heading token for label, body token for helper
- Shape: 0.5rem radius, 1px border
- Spacing: 1rem horizontal padding, 0.75rem vertical padding
- Border: 1px solid border default, border-strong on focus

### Textarea

- Anatomy: Label above, multi-line input below
- Surface: Canvas background
- Typography: body token for content
- Shape: 0.5rem radius, taller minimum height than text input
- Spacing: Same padding as text input
- Border: 1px solid border

### Primary button

- Anatomy: Text with optional icon
- Surface: action background, action-text color
- Typography: ui token
- Shape: 0.5rem radius
- Spacing: 1.25rem horizontal padding, 0.625rem vertical padding
- Composition: Centered text, inline-flex with gap for icons

### Secondary button

- Anatomy: Text only
- Surface: Transparent background, ink color
- Typography: ui token
- Shape: 0.5rem radius
- Spacing: Same padding as primary
- Border: 1px solid border

### Gradient CTA button

- Anatomy: Text with arrow icon
- Surface: Linear gradient from accent-gradient-start to accent-gradient-end
- Typography: ui token, action-text color
- Shape: 0.5rem radius, full width within container
- Spacing: Generous vertical padding, approximately 1rem
- Shadow: Subtle outer shadow for depth

### Success banner

- Anatomy: Icon, text, optional action
- Surface: success-surface background
- Typography: body-small token in success-ink
- Shape: 0.5rem radius
- Spacing: 1rem padding
- Border: 1px solid success-ink at reduced opacity

### Feature step list

- Anatomy: Numbered circle, title, description
- Surface: Transparent
- Typography: heading token for title, body-small for description
- Shape: 1.5rem circular step indicator with 1px border
- Spacing: 1.5rem between items, connected by vertical line
- Composition: Flex row, number left, text stack right

## Responsive behavior

The split-view authentication layout should stack vertically on viewports below approximately 960px, with the marketing hero moving above the registration form. The hero's display type should scale down to section-display size to maintain readability without excessive line breaks.

The onboarding form funnel maintains its narrow maximum width across all breakpoints, with horizontal page margins reducing on smaller screens. Input fields and buttons remain full-width within the container.

The top navigation should collapse to a simplified mark-only logo on very narrow viewports if space becomes constrained, though the current sparse navigation likely survives intact at most sizes.

Touch targets should maintain minimum 44px height even where visual padding appears smaller. Focus states should become more prominent on touch devices, with visible outlines replacing subtle border color shifts.

## Practical implementation guidance

### Preserve
- The tight negative tracking on all Inter Variable sizes; this is essential to the system's modern, dense character
- The 0.5rem universal border radius on all interactive elements
- The monochrome palette with single gradient accent; do not introduce additional brand colors
- The generous vertical spacing in form funnels; the emptiness is intentional and creates focus
- The split-view marketing page composition; it effectively balances function and persuasion

### Avoid
- Adding drop shadows to flat surfaces; the system relies on border and background contrast
- Using bold weights above 500 for body or UI text; the variable font's medium weights provide sufficient emphasis
- Introducing decorative imagery or illustrations beyond the dotted pattern; the system is typographically driven
- Making the gradient CTA button smaller or narrower; its full-width presentation within the form panel is intentional
- Using pure black (#000000) for text; the slightly warm #09090B is softer and more refined

### Recommended build order
1. Establish the type scale with Inter Variable at all specified sizes and weights
2. Implement the color tokens, verifying contrast ratios meet WCAG AA for all text-surface combinations
3. Build the top navigation and page shell with border separator
4. Create the text input component with focus states
5. Implement the primary and secondary button variants
6. Construct the onboarding form funnel layout with step indicator
7. Build the split-view authentication page with gradient CTA
8. Add the marketing hero with dotted pattern and feature step list

### Accessibility
- Ensure all form inputs have associated labels, not just placeholder text
- The gradient CTA button should have sufficient color contrast; verify the light text against the purple gradient meets WCAG AA
- Step indicators should include screen-reader-only text describing progress
- Focus rings should be visible on all interactive elements, using border-strong or a 2px outline offset
- The dotted pattern in the marketing hero is decorative; ensure it has aria-hidden or equivalent treatment

## Scope note

This guide covers the onboarding funnel and authentication pages of Halfbuilt. Marketing content pages, dashboard interfaces, mobile layouts, and interactive states such as loading, error, and disabled are not represented in the supplied material. The system stack includes -apple-system as a fallback family. The spacing and sizing values derive from the desktop interface and should be verified against production requirements.
