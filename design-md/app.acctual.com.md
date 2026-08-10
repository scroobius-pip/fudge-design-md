# How app.acctual.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.acctual.com-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-up page with centered form, floating 3D currency and invoice UI decorations, and dark primary action button on light gradient background](https://pin.fontofweb.com/2026?format=jpg)](https://design.withfudge.com/share/pin-2026)

[Sign-up page with centered form, floating 3D currency and invoice UI decorations, and dark primary action button on light gradient background](https://design.withfudge.com/share/pin-2026)

[![Login page with centered welcome message, Google SSO option, floating financial document previews at bottom, and muted partner logo row](https://pin.fontofweb.com/2025?format=jpg)](https://design.withfudge.com/share/pin-2025)

[Login page with centered welcome message, Google SSO option, floating financial document previews at bottom, and muted partner logo row](https://design.withfudge.com/share/pin-2025)

## Overview

Acctual's authentication interface presents a refined, trust-building entry point for a financial technology platform. The design centers on a single-column form layout against an expansive light gradient background, creating breathing room that emphasizes clarity and reduces cognitive load. Floating decorative elements—3D-rendered currency, invoice previews, and financial document fragments—surround the form without competing for attention, establishing the product's domain in global payments and invoicing while maintaining a clean, modern aesthetic.

The visual system balances warmth and precision. Soft gray-to-white gradients avoid the sterility of pure flat design, while the disciplined typographic hierarchy and generous whitespace signal professionalism. The interface speaks to both individual freelancers and business operators, using approachable language ("Get paid the same day") and social proof through partner logos and user counts. Every element serves the conversion goal: account creation or return access with minimal friction.

## Colors

The palette is intentionally restrained, built on a near-monochrome foundation with careful temperature control. The light gradient background shifts subtly from warm white to cool gray, creating depth without chromatic distraction. Dark ink tones provide authoritative contrast for primary actions and headings, while muted grays handle secondary information and borders.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, active text, logo mark |
| canvas | #FAFAFA | Page background base, gradient start |
| surface | #FFFFFF | Input fields, buttons, elevated cards |
| border | #E5E5E5 | Input borders, dividers, subtle separators |
| muted | #737373 | Secondary text, placeholders, social proof |
| action | #171717 | Primary button fill, active link underlines |

The gradient background transitions from canvas toward a cooler gray at the edges, creating a natural vignette that draws focus to the centered form. This treatment appears in both login and sign-up contexts, establishing consistency across authentication states. The near-black action color avoids pure black for buttons, reducing optical heaviness while maintaining strong contrast against white surfaces. Muted text appears in supporting copy, placeholder states, and the partner logo row where legibility requirements are lower. Verify licensing for these families before production use.

## Typography

Two families serve distinct roles: Geist handles display and brand moments with its contemporary grotesque character, while Inter manages readable body text and interface labels with proven screen optimization. The scale is compact, appropriate for a form-focused interface where information density must remain low.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 2rem | 600 | 1.2 | -0.02em | Page headings ("Create your account", "Welcome back") |
| body | Inter | 1rem | 400 | 1.5 | 0 | Primary descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Input placeholders, helper text |
| label | Inter | 0.875rem | 400 | 1.4 | 0 | Button text, navigation links |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Active links, emphasized actions |

Geist appears at a single display size for page titles, leveraging its slightly geometric character and tight tracking for modern impact. Inter handles everything else at two sizes: 1rem for prominent descriptions and 0.875rem for compact interface elements. Weight variation is minimal—Regular for body contexts, Medium reserved for navigation emphasis—keeping the system predictable. The negative tracking on hero-display tightens the heading's visual presence without affecting readability at this scale.

## Layout

The authentication layout follows a centered single-column pattern with asymmetric decorative framing. The content column occupies a narrow maximum width, creating a focused task environment that feels personal rather than institutional.

**Page structure.** The viewport divides into three conceptual zones: a top navigation area with the Acctual wordmark, a central form region with generous vertical padding, and a bottom social-proof section with partner logos and user statistics. The form itself stacks vertically with consistent gaps between elements.

**Content width.** The form container and its child elements share a maximum width of approximately 28rem, centered horizontally. This constraint keeps line lengths comfortable for scanning and ensures touch targets remain accessible on various viewport sizes.

**Vertical rhythm.** Section spacing of 6rem separates the form from the social proof below, while 1rem gaps maintain consistent pacing between form fields, buttons, and divider elements. The heading sits with modest top margin, grounded by the form content rather than floating in excessive space.

**Decorative positioning.** Three-dimensional objects and UI fragment previews occupy the periphery: currency renders and document stacks float in the upper left and right quadrants, while additional invoice previews anchor the bottom edge. These elements break the rectangle of the centered form without disrupting its reading order, creating visual interest for returning visitors while remaining ignorable for task-focused users.

**Z-axis layering.** The decorative elements appear behind a subtle gradient overlay that lightens toward the center, ensuring text legibility regardless of background complexity. Form elements sit at the highest layer with solid white backgrounds, maintaining clear separation from the atmospheric background.

## Visual language

The aesthetic position sits between corporate fintech and creative freelancer tools—professional enough for business trust, approachable enough for individual adoption. This balance manifests in several visual choices.

**Atmospheric depth.** The gradient background with soft shadow overlays creates environmental depth unusual in authentication interfaces. Rather than flat white or solid gray, the surface breathes with subtle temperature variation, suggesting transparency and openness appropriate for a platform handling cross-border payments.

**Tactile decoration.** 3D-rendered objects—stacks of currency, bound documents, floating invoice cards—introduce physical materiality without skeuomorphic interface chrome. These elements cast soft shadows and exhibit realistic lighting, yet they remain clearly decorative rather than interactive. The style recalls contemporary product visualization common in fintech marketing, translated into ambient background texture.

**Restrained color in decoration.** While the interface itself remains monochrome, decorative elements introduce controlled color: blue Ethereum tokens, green currency accents, warm paper tones. These hues emerge from the product's domain rather than arbitrary branding, reinforcing functional associations without disrupting the interface's clarity.

**Precision in functional elements.** Against this atmospheric background, every interactive element demonstrates exacting consistency. Inputs share identical height and radius, buttons maintain uniform padding, text alignment remains strictly centered or left-aligned without mixture. This discipline creates trust through predictability.

## Components

### Primary button

The main action button carries the darkest surface in the interface, establishing clear hierarchy.

- **Anatomy:** Text label centered within a solid fill container
- **Surface:** Near-black background (#171717) with white text
- **Typography:** label token, medium weight implied by visual density
- **Shape:** Moderate rounding (0.625rem), full-width within form container
- **Spacing:** Generous vertical padding (0.75rem) for prominent touch target
- **Composition:** Stacked below form fields with 1rem separation

### Social authentication button

Google SSO appears as a secondary surface treatment, maintaining prominence through border rather than fill.

- **Anatomy:** Google "G" mark with text label, centered
- **Surface:** White background with light border (#E5E5E5)
- **Typography:** label token, same size as primary button for equal visual weight
- **Shape:** Identical rounding to primary button, full-width
- **Spacing:** Positioned above email/password fields, separated by horizontal divider

### Text input

Standard form fields for email and password entry.

- **Anatomy:** Placeholder text with optional trailing icon (password visibility toggle)
- **Surface:** White fill with light border, no shadow
- **Typography:** body-small token for placeholder, transitioning to body on entry
- **Shape:** Slightly tighter rounding than buttons (0.5rem)
- **Spacing:** Stacked with 1rem vertical gap, internal padding for comfortable text inset
- **States:** Visible focus state implied by standard browser behavior; password field includes visibility toggle icon at right edge

### Divider with text

The "or" separator between social and credential authentication.

- **Anatomy:** Horizontal rules with centered text label
- **Surface:** Light border color for rules, muted text for label
- **Typography:** body-small token, muted color
- **Composition:** Full-width rules with centered text overlay, creating visual breathing room between authentication methods

### Navigation links

Secondary actions and account state transitions.

- **Anatomy:** Inline text with underline on active state
- **Typography:** label token, with active links receiving underline treatment
- **Color:** Muted base color, transitioning to ink on hover/focus
- **Composition:** Centered below primary action, maintaining the form's axial symmetry

### Partner logo row

Social proof element displaying company affiliations.

- **Anatomy:** Grayscale or low-opacity logos in horizontal sequence
- **Surface:** Transparent, allowing background gradient to show through
- **Typography:** Preceding text in body-small, muted color
- **Spacing:** Generous top margin (section spacing unit), horizontal distribution with even gaps
- **Composition:** Centered, with logos appearing at reduced opacity to avoid competing with form actions

## Responsive behavior

The authentication interface should maintain its centered single-column structure across viewport sizes. The decorative peripheral elements require careful handling: on narrower viewports, they should scale down or fade to prevent cropping and maintain form legibility. The maximum content width of 28rem provides a natural breakpoint reference—below this, horizontal padding should compress while maintaining readable margins.

Touch targets must remain at least 44px in effective size; the current button and input padding satisfies this. The password visibility toggle icon should maintain adequate separation from the input edge to prevent accidental activation.

The decorative 3D elements, while visually distinctive, should not obstruct form interaction on any device. Consider reducing their opacity or repositioning them to corners on smaller screens. The gradient background should adapt smoothly without banding artifacts.

## Practical implementation guidance

### Preserve
- The centered axial symmetry of the form layout; this creates focus and reduces decision fatigue
- The generous whitespace between form elements and social proof; compression harms the premium impression
- The near-monochrome functional palette with atmospheric gradient background; color should emerge from decoration, not interface chrome
- The consistent rounding differential between inputs (tighter) and buttons (slightly more open)
- The floating decorative style that establishes domain context without skeuomorphic interface metaphors

### Avoid
- Adding more color to functional elements; the current restraint builds trust
- Increasing typographic scale beyond the compact hierarchy; authentication forms benefit from density control
- Removing the gradient background for flat white; the depth contributes significantly to brand character
- Center-aligning form labels or input text; left alignment maintains scannability
- Introducing shadow on input fields; the flat treatment with light border is intentionally clean

### Recommended build order
1. Establish the gradient background and centered content container with maximum width
2. Implement the typographic scale with Geist for headings and Inter for body text
3. Build the form stack: social button, divider, inputs, primary button, navigation links
4. Add decorative elements with appropriate z-layering and gradient overlay protection
5. Implement the partner logo row with opacity treatment
6. Polish focus states and transition behaviors

### Accessibility
- Ensure the near-black button text on near-black background maintains minimum 4.5:1 contrast; verify the #171717 on #FFFFFF pairing exceeds this threshold
- Provide visible focus indicators for all interactive elements, preferably with offset ring or background shift
- The password visibility toggle requires explicit accessible labeling
- Decorative 3D elements should be hidden from screen readers with appropriate aria attributes
- Form error states, while not visible in supplied images, should follow consistent color and messaging patterns when implemented

## Scope note

This guide covers the authentication entry points (login and sign-up) for Acctual's web application. The dashboard, invoice creation flows, and payment interfaces visible in decorative background fragments are not documented here. Motion behavior, loading states, form validation feedback, and responsive breakpoint specifics were not retained and require implementation decisions. Measurements are practical adaptation targets.
