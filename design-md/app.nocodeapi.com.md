# How app.nocodeapi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.nocodeapi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Login page with centered form, yellow submit button, Google SSO option, and minimal header with NoCodeAPI logo](https://pin.fontofweb.com/2099?format=jpg)](https://design.withfudge.com/share/pin-2099)

[Login page with centered form, yellow submit button, Google SSO option, and minimal header with NoCodeAPI logo](https://design.withfudge.com/share/pin-2099)

[![Sign-up page with centered form, yellow submit button, Google SSO option, terms agreement text with blue links, and minimal header](https://pin.fontofweb.com/2098?format=jpg)](https://design.withfudge.com/share/pin-2098)

[Sign-up page with centered form, yellow submit button, Google SSO option, terms agreement text with blue links, and minimal header](https://design.withfudge.com/share/pin-2098)

## Overview

The NoCodeAPI authentication interface presents a deliberately minimal, approachable entry point for a developer-facing no-code platform. The design language prioritizes clarity and low friction: generous white space surrounds a tightly focused vertical form, while a warm yellow accent color injects personality into an otherwise neutral palette. The system uses a single type family—Lexend—at restrained weights and sizes, creating a friendly but professional tone that avoids technical intimidation. Every element is centered and symmetrical, reinforcing the simplicity of the "connect and go" value proposition. The authentication flow covers login and account creation, sharing a unified component vocabulary that reduces cognitive load across states. Visual hierarchy is established through scale contrast between the page title and form elements, with color reserved almost exclusively for the primary action and legal hyperlinks.

## Colors

The palette is intentionally sparse, built on a foundation of pure white and near-black with a single warm accent and a functional link color. This restraint keeps attention on the form itself while the yellow provides memorable brand recognition.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Page background, input backgrounds, card surfaces |
| ink | #000000 | Primary text, logo wordmark, form labels, button borders |
| muted-ink | #6B7280 | Placeholder text, divider label, secondary hints |
| action | #FCD34D | Primary button fill, brand accent moments |
| action-hover | #FBBF24 | Darker yellow for button hover states |
| action-ink | #1F2937 | Near-black text on yellow buttons for legibility |
| link | #2563EB | Terms, Privacy Policy, and inline hyperlink text |
| border | #D1D5DB | Input borders, divider lines, secondary button strokes |
| surface | #F9FAFB | Subtle off-white for hover or selected input backgrounds |

The light mode is absolute: no dark variant is visible in the supplied surfaces. The yellow accent derives from the brand identity and appears only on primary actions, making it highly salient. Blue links serve a purely functional legal and navigational role, never competing with the yellow for attention. The near-black ink avoids pure #000000 on buttons in favor of #1F2937, softening the contrast against the warm yellow for better perceived harmony.

## Typography

The system employs a single font family, Lexend, designed by Bonnie Shaver-Troup and Thomas Jockin and provided by Lexend. Verify licensing for these families before production use. The type scale is compact, with only four distinct sizes serving all visible roles. All sizes are whole-number multiples of the 4px relative unit.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lexend | 2rem | 600 | 1.2 | -0.01em | Page titles ("Login to dashboard", "Create an account") |
| body | Lexend | 1rem | 400 | 1.5 | 0 | Input values, primary readable text |
| label | Lexend | 0.875rem | 400 | 1.4 | 0 | Button labels, form placeholders |
| legal-copy | Lexend | 0.875rem | 400 | 1.5 | 0 | Divider text, terms agreement, footer links |
| navigation | Lexend | 0.875rem | 500 | 1.4 | 0 | Header account links ("Create new account", "Sign in") |

The hero-display weight of 600 provides sufficient emphasis without the harshness of full bold, matching the friendly character of the Lexend family. Body text at 1rem ensures comfortable readability for email and password entry. The legal-copy and navigation tokens share the same 0.875rem size but differentiate through weight: navigation uses 500 for clickable prominence, while legal-copy remains at 400 for passive reading. No italic styles are employed. Letter spacing is tight only on the hero display, where slight compression adds density to the centered headline.

## Layout

The authentication pages follow a strict single-column centered layout with no sidebar, no navigation menu, and no footer beyond minimal text links. The viewport is filled with white space, pushing the form to the vertical center and creating a calm, focused environment.

The header spans the full width with horizontal padding, placing the NoCodeAPI logo mark on the left and a single text link on the right. Below the header, the main content area uses a narrow centered column approximately 400px wide at desktop widths. The page title sits with substantial top margin, followed by the SSO button, the divider with text, the email and password inputs stacked with consistent gap, the primary action button, and finally the footer link.

Vertical rhythm is maintained through uniform spacing between form elements. The SSO button and form inputs share identical width and horizontal alignment. The divider line extends full width of the column with centered text overlay. No grid system is visible; the layout relies on max-width containment and auto margins for centering.

The composition is mobile-first in spirit: the narrow column translates directly to small viewports with only padding adjustments. The generous surrounding white space prevents crowding at any width.

## Visual language

The visual character is friendly minimalism with a touch of warmth. The NoCodeAPI logo combines a lightning-bolt geometric mark with the wordmark, establishing energy and speed. The yellow accent reinforces this energy without aggression—its warmth suggests accessibility rather than warning.

Form inputs use a soft rounded rectangle with light gray borders, avoiding the severity of sharp corners or heavy strokes. The primary button extends this rounding while filling with solid yellow, creating a clear call-to-action that feels tactile and inviting. Icons within inputs (envelope, key, eye) are thin-line style, gray, and positioned at the left or right edge without background circles or bounding boxes.

The divider treatment is particularly characteristic: a horizontal hairline with centered muted text, creating visual separation without heaviness. This pattern appears identically on both login and signup, reinforcing system consistency.

No photography, illustration, or decorative graphics appear beyond the logo and functional icons. The interface relies entirely on typography, spacing, and the single yellow accent for visual interest. This austerity communicates confidence in the product's simplicity.

## Components

### Primary button

- **Anatomy**: Full-width rounded rectangle containing centered text label.
- **Surface**: Solid yellow fill (#FCD34D) with no border.
- **Typography**: label token, weight 400, dark near-black text (#1F2937).
- **Shape**: 0.5rem border radius, approximately 3rem minimum height.
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding.
- **Composition**: Spans full width of form column, sits below inputs with standard gap.
- **Variants**: "Login now" on authentication, "Create Free Account" on registration. Both share identical styling.

### Secondary button (SSO)

- **Anatomy**: Full-width rounded rectangle with Google "G" icon and centered text.
- **Surface**: White fill (#FFFFFF) with light gray border (#D1D5DB).
- **Typography**: label token, weight 400, black text (#000000).
- **Shape**: 0.5rem border radius, identical height to primary button.
- **Spacing**: Same padding as primary button.
- **Composition**: Centered above divider, full column width.
- **Variants**: "Login with Google" and "Sign up with Google" text variants only.

### Text input

- **Anatomy**: Rounded rectangle containing left icon, placeholder text, and optional right icon.
- **Surface**: White fill with light gray border (#D1D5DB).
- **Typography**: body token for entered text, muted-ink color for placeholders.
- **Shape**: 0.5rem border radius.
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding, with additional internal space for icons.
- **Composition**: Full width, stacked vertically with 1.5rem gap.
- **States**: Default shows placeholder in muted-ink; focus state would ideally shift border to action color or ink.

### Divider with text

- **Anatomy**: Horizontal line with centered text label.
- **Surface**: Light gray line (#D1D5DB) at 1px height.
- **Typography**: legal-copy token in muted-ink color.
- **Composition**: Full width of column, text centered with horizontal padding creating visual break in line.
- **Variants**: "or login with email" and "or sign up with email".

### Header

- **Anatomy**: Full-width bar containing logo mark and wordmark left, text link right.
- **Surface**: Transparent over white canvas.
- **Typography**: navigation token for right-side link.
- **Composition**: Flex row, space-between alignment, moderate horizontal padding.
- **Variants**: Login page shows "Don't have an account? Create new account"; signup shows "I already have an account — Sign in". Note the em dash on signup versus question format on login.

### Inline link

- **Anatomy**: Text span within sentence, underlined or colored.
- **Surface**: No background, transparent.
- **Typography**: legal-copy or body token in link color (#2563EB).
- **Composition**: Inline within terms text or footer line.
- **Variants**: "Terms", "Privacy Policy", "Reset now", "Sign in", "Create new account".

## Responsive behavior

The narrow centered column suggests natural responsiveness: maintain the max-width container with increased horizontal padding on smaller viewports. The header should preserve its flex layout, potentially reducing to a single row with smaller logo text if space constrains.

Touch targets for buttons and inputs should maintain minimum 44px height; the current visual height appears adequate but should be verified. The SSO button's Google icon and text should remain centered and legible at all widths.

For very small viewports, the header link text may wrap or truncate; consider shortening to "Sign in" / "Sign up" if the full sentence becomes cramped. The form title should remain at 2rem down to approximately 320px width, below which a modest reduction to 1.75rem preserves line integrity.

## Practical implementation guidance

### Preserve
- The generous white space surrounding the form; this is central to the calm, approachable character.
- The single yellow accent on primary actions only; do not extend it to secondary elements or backgrounds.
- The consistent 0.5rem rounding across all interactive elements.
- The centered, symmetrical composition of the form column.
- The identical component vocabulary across login and signup states.

### Avoid
- Adding background colors, gradients, or imagery behind the form; the stark white is intentional.
- Using multiple accent colors; the yellow-blue pairing is already established.
- Sharp corners on buttons or inputs; they contradict the friendly tone.
- Multi-column layouts for this authentication flow; the single column is a strength.
- Heavy shadows or elevation effects; the flat treatment matches the minimal aesthetic.

### Recommended build order
1. Establish the centered column container with max-width and auto margins.
2. Implement the header with logo and navigation link.
3. Build the text input component with icons, placeholder styling, and focus states.
4. Create the primary button with yellow fill and dark text.
5. Add the SSO secondary button with border and icon.
6. Implement the divider-with-text pattern.
7. Compose the full form stack with consistent vertical spacing.
8. Add footer links and terms text with inline hyperlink styling.

### Accessibility
- Ensure the yellow primary button meets contrast requirements; the near-black text on #FCD34D should be verified against WCAG AA standards for small text.
- Add visible focus indicators to all interactive elements, ideally using the ink or link color with an outline offset.
- The password visibility toggle (eye icon) needs an accessible label and keyboard operability.
- Link text should be descriptive; "Sign in" is preferable to "here" or "click here".
- Consider adding autocomplete attributes to email and password inputs for password manager compatibility.
- The terms agreement text on signup should associate the checkbox or statement with the actual form submission for screen reader clarity.

## Scope note

This guide covers the login and signup authentication surfaces of app.nocodeapi.com. Dashboard interior pages, API configuration interfaces, billing flows, and responsive mobile adaptations are not represented in the supplied images. Motion, loading states, error messaging, and dark mode are not documented. Measurements are practical adaptation targets.
