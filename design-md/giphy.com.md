# How giphy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/giphy.com-design)

Last updated: 2026-08-10

## Captured pages

[![Split-screen login page with GIPHY branding, form fields, social login buttons, and vibrant geometric artwork on the right half](https://pin.fontofweb.com/3943?format=jpg)](https://design.withfudge.com/share/pin-3943)

[Split-screen login page with GIPHY branding, form fields, social login buttons, and vibrant geometric artwork on the right half](https://design.withfudge.com/share/pin-3943)

[![Cookie consent banner with dark surface, white text, purple Agree button, and Manage Cookies button](https://pin.fontofweb.com/3942?format=jpg)](https://design.withfudge.com/share/pin-3942)

[Cookie consent banner with dark surface, white text, purple Agree button, and Manage Cookies button](https://design.withfudge.com/share/pin-3942)

[![Centered login form with GIPHY logo, BE ANIMATED tagline, segmented toggle, input fields, and social login options on black background](https://pin.fontofweb.com/3941?format=jpg)](https://design.withfudge.com/share/pin-3941)

[Centered login form with GIPHY logo, BE ANIMATED tagline, segmented toggle, input fields, and social login options on black background](https://design.withfudge.com/share/pin-3941)

## Overview

GIPHY's login surface presents a stark, immersive dark environment that places user authentication at the center while surrounding it with explosive brand energy. The design splits the viewport into two distinct zones: a functional left side containing the login form, and an expressive right side showcasing vibrant geometric artwork. This division creates a rhythm between utility and playfulness that defines the GIPHY identity. The interface avoids decorative clutter, relying instead on high-contrast typography, precise spacing, and strategic neon accents to guide attention. Every element serves the conversion goal while reinforcing the brand's animated, creative personality. The dark canvas absorbs visual noise, allowing the gradient accents and white typography to pop with maximum impact. Social login options reduce friction, and the segmented toggle between Log In and Sign Up keeps the interface compact without hiding functionality.

## Colors

The color system builds on absolute darkness as its foundation, layering muted surfaces and electric accents to create depth and hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #1a1a1a | Cookie banner background, social button backgrounds |
| surface-elevated | #2a2a2a | Segmented control track, elevated UI elements |
| ink | #ffffff | Primary text, logo, headings, input text |
| ink-muted | #a0a0a0 | Inactive tab text, placeholder text, secondary labels |
| action-primary | #9933ff | Primary button fill, Agree button in cookie banner |
| action-primary-hover | #b366ff | Hover state for primary actions |
| action-gradient-start | #00d4ff | Left side of active tab gradient |
| action-gradient-end | #00ff99 | Right side of active tab gradient |
| action-text-on-gradient | #000000 | Text overlaid on the cyan-to-green gradient |
| link | #00d4ff | Inline text links, Terms of Service, Privacy Policy |
| border | #404040 | Visible input borders, button borders |
| border-subtle | #2a2a2a | Divider lines, subtle separations |

The interface operates in a permanent dark mode. The black canvas establishes theatrical depth, while the geometric artwork on the right introduces saturated purples, pinks, cyans, and greens that echo the accent palette without competing for attention. The gradient from cyan to green on the active tab creates a kinetic energy that mirrors the brand's animated content. White text maintains crisp readability against all backgrounds, and the muted gray provides restful hierarchy for secondary information. The purple action color carries through to the cookie consent interaction, creating system-wide consistency.

## Typography

The type system uses a single custom family with weight and size variation to establish clear information hierarchy. All type sizes are whole-number multiples of 4px.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Face Custom | 4rem | 700 | 1 | -0.02em | GIPHY logo mark |
| section-display | Inter Face Custom | 1.5rem | 700 | 1.2 | 0.05em | BE ANIMATED tagline |
| body | Inter Face Custom | 1rem | 400 | 1.5 | 0 | Cookie policy body text |
| body-small | Inter Face Custom | 0.875rem | 400 | 1.5 | 0 | Legal copy, helper text |
| label | Inter Face Custom | 0.875rem | 600 | 1.25 | 0.01em | Button labels, input text |
| navigation | Inter Face Custom | 0.875rem | 600 | 1.25 | 0 | Footer links, secondary actions |

The GIPHY logo renders in a heavy, tightly tracked weight that commands the upper portion of the form area. The tagline beneath uses all-caps styling with positive letter spacing for a declarative, brand-anthem quality. Body text remains neutral and readable, while labels gain semibold weight to clarify interactive elements. The custom typeface, designed by Dalton Maag Ltd, provides a contemporary geometric sans-serif character that feels at home in a digital-native entertainment platform. Verify licensing for these families before production use.

## Layout

The login page employs a fixed two-column composition on desktop viewports. The left column occupies approximately half the viewport width and centers its content vertically and horizontally within that zone. The right column fills the remaining width with full-bleed artwork that extends to all edges without padding or borders.

The left column content follows a strict vertical stack with consistent rhythm. The GIPHY logo sits at the top of the content block, followed by the tagline, then the segmented control, form fields, primary action, recovery link, social login options, and legal copy at the bottom. Each element maintains uniform width, creating a disciplined column that feels stable and trustworthy.

Spacing between major sections uses 1.5rem to 2rem, while related elements like the email and password inputs sit closer at 0.75rem. The form inputs and buttons share identical widths, creating a clean rectangular silhouette. The social login buttons stack with 0.5rem gaps, maintaining visual connection through their shared width and alignment.

The cookie banner appears as a horizontal bar across the bottom of the viewport, floating above the page content with its own internal flex layout. Text occupies the left portion, while action buttons cluster on the right with compact spacing between them.

## Visual language

The visual identity balances restraint with exuberance. The left side of the screen practices minimalism: no decorative elements, no gradients on functional surfaces, no shadows or depth effects. This austerity makes the right-side artwork feel intentional rather than overwhelming. The geometric illustration features fragmented shapes in neon purple, hot pink, cyan, and lime green against black, creating a stained-glass effect that suggests motion and digital creativity.

The segmented control introduces the only gradient in the functional UI, and its cyan-to-green transition directly references the artwork's color vocabulary. This creates a bridge between the utilitarian form and the expressive brand world. Rounded corners appear on all interactive elements but nowhere else, softening the interface without diluting its precision. The pill shape of the active tab feels friendly and contemporary, while the sharper corners of inputs and standard buttons maintain task-focused clarity.

Iconography remains minimal: a small eye icon for password visibility, brand logos for social authentication, and a verified badge for the artist credit. These icons use the same white or muted gray as surrounding text, avoiding color competition.

## Components

### Logo and brand lockup

The GIPHY wordmark appears in white at large scale, followed by the BE ANIMATED tagline in a smaller, tracked uppercase treatment. The lockup centers horizontally within the form column and establishes the brand presence before any functional elements appear.

### Segmented control

A pill-shaped container with a dark track holds two options: Log In and Sign Up. The active segment fills with a horizontal gradient from cyan to green, with black text. The inactive segment shows muted gray text against the dark track. The entire control has generous horizontal padding and sits above the form fields as the primary mode switcher.

### Text input

White rectangular fields with rounded corners accept user credentials. A placeholder label in muted gray sits inside the field until text is entered. The password field includes a visibility toggle icon on the right edge. Inputs share the same width as buttons and maintain consistent height for visual alignment.

### Primary button

A solid purple rectangle with rounded corners fills the full width of the form column. White semibold text centers within the button. The button sits directly below the input fields with standard spacing.

### Social login button

Dark gray rectangles with subtle borders contain brand icons and service names. Facebook and Apple options stack vertically with compact spacing. These buttons match the width of other form elements but use a slightly darker surface to differentiate from the primary action.

### Text link

Inline links appear in cyan, underlined or styled as plain text depending on context. The Forgot Your Password link sits centered below the primary button, while legal links appear within sentence-form copy at the bottom of the form.

### Cookie consent banner

A dark gray horizontal bar with rounded corners contains policy text on the left and two stacked buttons on the right. The Agree button uses the same purple as the primary login button, while Manage Cookies uses a neutral dark surface. The banner floats with comfortable internal padding and maintains the site's rounded corner vocabulary.

## Responsive behavior

The two-column layout likely collapses to a single column on narrower viewports, with the artwork either hiding, scaling down, or repositioning below the form. The form column should maintain its centered alignment and maximum comfortable width to preserve touch targets and readability. Input fields and buttons should expand to full width on mobile while maintaining adequate tap areas of at least 44px height.

The cookie banner should remain fixed to the viewport bottom but may stack its text and buttons vertically on narrow screens. Legal copy should reflow naturally without horizontal scrolling. Social login buttons benefit from full-width presentation on mobile to accommodate thumb-reach ergonomics.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation; any lighter background dilutes the brand impact
- The cyan-to-green gradient on the active tab; this is the signature accent
- The strict vertical alignment of all form elements to a single width
- The high contrast between white text and dark surfaces
- The geometric artwork's full-bleed presentation without borders or frames

### Avoid
- Adding decorative shadows or depth effects to the functional UI
- Using the gradient on multiple elements simultaneously; reserve it for the mode switcher
- Introducing additional accent colors beyond the established purple, cyan, and green
- Making the artwork interactive or placing controls over it
- Light mode variants that abandon the dark theatrical quality

### Recommended build order
1. Establish the black canvas and load the custom typeface
2. Build the centered form column with logo, tagline, and spacing rhythm
3. Implement the segmented control with gradient active state
4. Add inputs and buttons with consistent widths and rounded corners
5. Integrate social login buttons with proper icon alignment
6. Position the artwork column with responsive collapse behavior
7. Add the cookie banner as a fixed overlay with proper z-index

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against the black background
- Provide visible focus indicators on all interactive elements, using the cyan accent color
- Make the password visibility toggle keyboard accessible with clear state announcement
- Consider reduced-motion preferences for any animated elements in the artwork
- Ensure the cookie banner does not trap keyboard focus and can be dismissed

## Scope note

This guide covers the GIPHY login page surface and cookie consent interaction. It does not include the main browsing experience, search results, GIF detail pages, user profiles, or upload flows. Motion behavior, hover states, loading indicators, and error messaging are not documented from the available material. Measurements are practical adaptation targets.
