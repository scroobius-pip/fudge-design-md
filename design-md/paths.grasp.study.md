# How paths.grasp.study is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/paths.grasp.study-design)

Last updated: 2026-08-10

## Captured pages

[![Split-screen sign-up page with illustrated left panel showing rabbit and hand silhouette on warm beige background, and white right panel with centered account creation form](https://pin.fontofweb.com/6586?format=jpg)](https://design.withfudge.com/share/pin-6586)

[Split-screen sign-up page with illustrated left panel showing rabbit and hand silhouette on warm beige background, and white right panel with centered account creation form](https://design.withfudge.com/share/pin-6586)

[![Split-screen sign-in page with identical illustrated left panel and white right panel containing welcome form with Google SSO, username and password fields, dark continue button,](https://pin.fontofweb.com/6585?format=jpg)](https://design.withfudge.com/share/pin-6585)

[Split-screen sign-in page with identical illustrated left panel and white right panel containing welcome form with Google SSO, username and password fields, dark continue button,](https://design.withfudge.com/share/pin-6585)

[![Landing page section showing colorful vertical course bars in blue, green, yellow, and terracotta tones with rotated text labels, featured courses heading, bespoke course creation](https://pin.fontofweb.com/6584?format=jpg)](https://design.withfudge.com/share/pin-6584)

[Landing page section showing colorful vertical course bars in blue, green, yellow, and terracotta tones with rotated text labels, featured courses heading, bespoke course creation](https://design.withfudge.com/share/pin-6584)

[![Close-up of interactive course bar chart showing expanded olive-green course card with corner fold detail, creator attribution, and surrounding vertical bars with topic labels and](https://pin.fontofweb.com/6583?format=jpg)](https://design.withfudge.com/share/pin-6583)

[Close-up of interactive course bar chart showing expanded olive-green course card with corner fold detail, creator attribution, and surrounding vertical bars with topic labels and](https://design.withfudge.com/share/pin-6583)

## Overview

Grasp presents a learning platform with a distinctive editorial personality that balances warmth and precision. The visual system pairs a soft, parchment-like canvas with crisp typographic hierarchy, using a split-screen layout for authentication flows and an inventive vertical bar chart for course discovery. The left side of authentication screens carries the brand's illustrated identity—a contemplative rabbit beside a silhouetted hand emerging from stacked books—while functional forms occupy a clean white panel on the right. This duality extends throughout: organic illustration meets systematic interface, warm tones meet high-contrast ink, and playful discovery structures meet straightforward task completion. The course visualization transforms educational browsing into a tactile, color-coded experience where topics appear as vertical bars of varying heights, each with rotated text and small identifying icons.

## Colors

The palette operates in three distinct modes: a warm neutral foundation for structure, high-contrast ink for readability, and a vibrant categorical system for course differentiation.

| token | value | use |
|---|---|---|
| ink | #020817 | Primary text, headings, and form labels |
| ink-secondary | #444341 | Secondary text, muted descriptions |
| ink-muted | #64748B | Placeholder text, disabled hints, validation notes |
| canvas | #E0DBD1 | Page background, authentication left panel, landing sections |
| surface | #FFFFFF | Form panels, cards, elevated containers |
| surface-warm | #F8FAFC | Subtle alternate backgrounds |
| border | #E2E8F0 | Input field borders, dividers |
| border-strong | #C9C4BA | Button borders, emphasized separators |
| action-primary | #0F172A | Primary button fill, active states |
| action-primary-text | #FFFFFF | Text on primary buttons |
| action-secondary | #FFFFFF | Secondary button fill |
| action-secondary-text | #020817 | Text on secondary buttons |
| action-disabled | #757370 | Disabled button text and backgrounds |
| accent-blue | #6C8DC2 | Course category: statistics, programming, technical topics |
| accent-blue-light | #98BBED | Lighter variant for adjacent course bars |
| accent-green | #8FA683 | Course category: development, frameworks |
| accent-olive | #AEAE53 | Course category: tools, consoles |
| accent-terracotta | #C27558 | Course category: design, product |
| accent-coral | #C79385 | Course category: computing, advanced topics |
| accent-warm | #C88B7B | Course category: specialized subjects |
| accent-gold | #C98C6F | Course category: infrastructure, systems |
| status-error | #212C27 | Error states, validation failures |
| status-success | #3A5327 | Success indicators, completed validations |

The warm canvas tone dominates structural surfaces, creating an approachable, paper-like atmosphere that distinguishes Grasp from clinical white-default platforms. Ink colors carry a subtle cool undertone that prevents the warmth from becoming muddy. Course colors are deployed as solid fills on vertical bars, never as text or UI chrome, ensuring accessibility while enabling quick visual scanning. The accent palette draws from muted, sophisticated tones rather than saturated primaries—terracotta and olive feel educational and timeless rather than playful or childish.

## Typography

Two type families create the system's voice: Faire Octave for display moments and Geist for functional text, with Geist Mono reserved for compact technical labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Faire Octave | 3rem | 500 | 1.16 | -0.025em | Page titles, brand moments, major headings |
| section-display | Faire Octave | 1.875rem | 600 | 1.2 | -0.025em | Section headings, form headers, course group titles |
| body | Geist | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-small | Geist | 0.875rem | 400 | 1.43 | 0 | Captions, helper text, form validation details |
| body-large | Geist | 1.375rem | 400 | 1.43 | 0 | Lead paragraphs, emphasized descriptions |
| label | Geist | 0.875rem | 500 | 1.43 | 0 | Buttons, form labels, navigation items |
| caption | Geist Mono | 0.75rem | 500 | 1 | 0 | Technical metadata, compact identifiers |
| heading-small | Geist | 1.125rem | 500 | 1.56 | -0.025em | Subsection headings, card titles |

Faire Octave, designed by Maxime Gau and available from Faire Type, supplies the system's editorial character with its medium and regular weights. Its slightly condensed proportions and distinctive seriffed details appear at 48px for hero moments and 30px for section headers, both with tight negative tracking that creates confident, grounded headlines. Geist, from Basement Studio and Vercel, handles all functional text at regular and medium weights, providing clean, contemporary sans-serif readability across sizes from 12px captions to 22px lead text. Geist Mono appears sparingly for technical labels and compact metadata where monospace clarity benefits scanning. Verify licensing for these families before production use.

## Layout

The system employs two primary layout architectures: a fixed split-screen for authentication and a fluid centered column for content discovery.

Authentication pages use a persistent 50/50 division. The left panel maintains a fixed proportion containing brand illustration, logotype, and tagline, set against the warm canvas background. The right panel presents a centered white form surface with generous vertical breathing room. This panel uses a maximum content width of approximately 440px centered within its half, creating a comfortable reading and interaction zone that does not stretch uncomfortably on wider viewports. The white panel carries a 16px border radius where it meets the viewport edge, softening the transition.

Landing and discovery pages use a centered content column with horizontal padding of 48px on larger screens, narrowing to 16px on smaller breakpoints. The course visualization spans the full content width, with vertical bars distributed proportionally across the available space. Below the visualization, content returns to a centered narrow column for taglines and calls-to-action.

Spacing follows a 2px base unit system. Key structural values include 16px for component internal padding, 32px for section gutters, 48px for major section separations, and 64px for hero section breathing room. Form elements stack with 24px between major groups and 8px between related items like labels and inputs. The course bar chart uses negative margin techniques to achieve its tight visual clustering, with individual bars separated by minimal gaps.

## Visual language

Grasp's visual identity emerges from the tension between hand-drawn illustration and systematic interface. The brand illustration on authentication screens—a rabbit in profile beside a silhouetted hand rising from stacked books—uses stark black ink on the warm canvas, creating high contrast without color complexity. This monochrome treatment lets the illustration function as texture rather than competing with functional content.

The course discovery visualization reimagines educational browsing as a vertical bar chart. Each course appears as a colored rectangle of variable height, with text rotated 90 degrees counter-clockwise to read from bottom to top. Small icons anchor the base of each bar, providing immediate visual identification before text parsing. Colors group courses by domain: blues for technical and analytical topics, greens for development and tooling, yellows and olives for specialized platforms, and terracottas for design and advanced computing. An expanded state reveals a card-like overlay with corner fold detail, creator attribution, and descriptive content, maintaining the bar's color as background while shifting to horizontal text alignment.

The overall density is restrained. Authentication forms use generous vertical spacing and clear separation between SSO, credential fields, and legal agreements. The landing page balances the dense information of the course chart with ample whitespace below for the motivational tagline and single call-to-action.

## Components

### Authentication panel

The authentication panel is a white surfaced container centered vertically and horizontally within the right half of split-screen layouts.

- **Surface**: White background with no visible shadow, relying on the canvas surround for depth separation.
- **Shape**: 16px border radius on the outer corners where the panel meets the viewport edge.
- **Spacing**: Internal padding of 48px vertical and 32px horizontal, with content maximum width of approximately 440px centered within.
- **Composition**: Stacked vertical flow with centered alignment for headings and primary actions, left alignment for form fields and validation details.

### Social sign-on button

A full-width button for Google authentication appears above the credential divider.

- **Surface**: White background with 1px border in border-strong color.
- **Typography**: Label token, medium weight, ink color.
- **Shape**: 8px border radius, 8px vertical and 16px horizontal padding.
- **Composition**: Centered with Google icon preceding text, separated by 8px gap.

### Credential divider

A horizontal rule with centered "OR" text separates SSO from email authentication.

- **Surface**: Two horizontal lines in border color, with 8px horizontal padding around the text label.
- **Typography**: Caption token, uppercase, ink-muted color.

### Text input

Standard single-line inputs for email, username, and password.

- **Surface**: White background with 1px border in border color.
- **Typography**: Body-small token for input text, label token for field labels above.
- **Shape**: 8px border radius, 8px vertical and 12px horizontal padding.
- **Spacing**: 8px between label and input, 24px between field groups.
- **States**: Password fields include a visibility toggle icon at right edge.

### Validation checklist

A structured list of password requirements with dynamic state indicators.

- **Typography**: Body-small token for requirement text.
- **Composition**: Stacked list with 4px vertical spacing, each item prefixed by an icon that transitions from muted to ink on satisfaction.
- **Surface**: No background separation, inline with form flow.

### Primary button

The main action button for form submission.

- **Surface**: action-primary background with action-primary-text color.
- **Typography**: Label token, medium weight.
- **Shape**: 8px border radius, 8px vertical and 16px horizontal padding.
- **States**: Disabled state uses action-disabled background with reduced opacity text.

### Secondary button

Alternative actions and navigation links.

- **Surface**: action-secondary background with 1px border in border-strong.
- **Typography**: Label token, medium weight, action-secondary-text color.
- **Shape**: 8px border radius, matching padding to primary.

### Course bar

The core discovery component, appearing as a vertical rectangle with rotated text.

- **Surface**: Solid accent color fill, with text in ink or white depending on background luminance.
- **Typography**: Label token, rotated 90 degrees counter-clockwise.
- **Shape**: No border radius, full height varies by data value.
- **Composition**: Small icon at bar base, text centered vertically along bar length.
- **Interaction**: Expanded state reveals overlay card with corner fold detail, horizontal text, and creator attribution.

### Course card (expanded)

Revealed state within a course bar.

- **Surface**: Inherits parent bar color with subtle lightening, white corner fold element at top-right.
- **Typography**: Section-display token for course title, body-small for creator attribution.
- **Shape**: Inherits bar width, extends downward with 8px internal border radius.
- **Composition**: Padding of 16px, with title and metadata stacked vertically.

### Bespoke course button

A secondary action prompting custom course creation.

- **Surface**: White background with 1px border.
- **Typography**: Label token with leading plus icon.
- **Shape**: 8px border radius, generous horizontal padding.
- **Composition**: Centered below course visualization with 48px vertical separation.

## Responsive behavior

The split-screen authentication layout should stack vertically on viewports below 768px, with the illustrated panel collapsing to a header height of approximately 200px containing the logotype and condensed illustration. The form panel then occupies full width with maintained internal maximum width and padding reduced to 16px horizontal.

The course bar visualization requires horizontal scrolling on narrow viewports, with bars maintaining minimum touch targets of 44px width. Alternatively, the visualization may transition to a horizontal scroll container with snap points, preserving the vertical bar metaphor while accommodating narrow screens. The rotated text should remain readable at minimum bar widths; consider abbreviating or truncating labels below 64px bar width.

Typography scales down by one step on mobile: hero-display to section-display size, section-display to heading-small size. Body text maintains 1rem minimum for readability. Horizontal padding on content sections reduces from 48px to 16px.

## Practical implementation guidance

### Preserve
- The warm canvas tone as the dominant page background; it is the system's most distinctive atmospheric choice.
- Faire Octave for all display headings; the serif character is essential to the editorial personality.
- The vertical bar chart with rotated text as the primary course discovery pattern.
- High contrast between illustration and background in the brand panel—monochrome ink on canvas.
- Generous vertical spacing in forms; the breathing room contributes to perceived simplicity.

### Avoid
- Saturated primary colors for course categories; the muted, sophisticated accent palette is intentional.
- Shadows and elevation effects; the system relies on color contrast and spacing for hierarchy, not depth.
- Rounded corners on course bars; the sharp rectangles are part of the chart metaphor.
- Stretching form panels to full width on desktop; the centered narrow column improves readability and focus.

### Recommended build order
1. Establish the canvas background and ink text colors as global defaults.
2. Implement Faire Octave and Geist with their respective weight files.
3. Build the split-screen authentication shell with responsive stacking behavior.
4. Create the form component set: inputs, buttons, validation checklist, and divider.
5. Implement the course bar visualization with color mapping and rotation.
6. Add the expanded card state with corner fold detail.
7. Polish spacing and responsive breakpoints.

### Accessibility
- Ensure course bar colors meet minimum 3:1 contrast against text; test rotated text readability at small sizes.
- Provide aria-labels or tooltips for course bar icons that supplement the rotated text.
- Maintain visible focus indicators on all interactive elements; the minimal chrome requires explicit focus states.
- Password validation should announce state changes to screen readers as requirements are satisfied.
- The split-screen layout should maintain logical tab order when stacked on mobile, with illustration preceding form content.

## Scope note

This guide covers the authentication flows and landing page course discovery visible in the supplied materials. Dashboard interfaces, course content pages, user settings, and mobile-native adaptations are not represented. Motion behavior for course bar expansion, loading states, and error page designs are not documented. Measurements are drawn from the exact values in the design facts and verified against visible interface elements.
