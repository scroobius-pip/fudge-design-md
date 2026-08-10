# How q-industrial.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/q-industrial.com-design)

Last updated: 2026-08-10

## Captured pages

[![Global contact locations grid with white text on black background and a globe icon](https://pin.fontofweb.com/488?format=jpg)](https://design.withfudge.com/share/pin-488)

[Global contact locations grid with white text on black background and a globe icon](https://design.withfudge.com/share/pin-488)

[![Contact form with red submit button, subject pill buttons, and checkbox agreement field](https://pin.fontofweb.com/487?format=jpg)](https://design.withfudge.com/share/pin-487)

[Contact form with red submit button, subject pill buttons, and checkbox agreement field](https://design.withfudge.com/share/pin-487)

[![Contact form upper portion showing inline labels and underlined input fields on black](https://pin.fontofweb.com/486?format=jpg)](https://design.withfudge.com/share/pin-486)

[Contact form upper portion showing inline labels and underlined input fields on black](https://design.withfudge.com/share/pin-486)

[![Split contact page layout with large left headline and right-aligned form on black background](https://pin.fontofweb.com/485?format=jpg)](https://design.withfudge.com/share/pin-485)

[Split contact page layout with large left headline and right-aligned form on black background](https://design.withfudge.com/share/pin-485)

## Overview

Q-Industrial presents a stark, high-contrast visual system built on a foundation of absolute black and pure white. The design communicates industrial precision and technical confidence through its restrained palette, generous negative space, and disciplined typographic hierarchy. Every interface element serves a functional purpose without decorative excess. The black canvas dominates all surfaces, creating a dramatic stage where white typography achieves maximum legibility. A single red accent color appears only for the most critical user action—the submit button—creating an unmistakable focal point in an otherwise monochrome environment. The system employs two font families in a clear division of labor: Matter, a light-weight geometric sans, handles display and heading text with elegant restraint, while Droid Sans manages body copy, labels, and interface elements with neutral readability. Forms are treated as architectural structures, with horizontal rules separating fields rather than enclosed boxes, and subject selection uses bordered pill buttons that invert on selection. This is a design language of subtraction, where the absence of color, ornament, and complexity becomes the defining aesthetic signature.

## Colors

The color system is intentionally minimal, deriving its power from extreme contrast rather than variety. The black canvas creates an immersive, technical atmosphere that allows photography and content to dominate without chromatic competition.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, all section backgrounds, form areas |
| surface | #1a1a1a | Elevated panels, subtle differentiation from pure black |
| ink | #ffffff | Primary text, headings, labels, active states, icons |
| muted-ink | #b3b3b3 | Placeholder text, secondary information, disabled states |
| accent | #e60012 | Primary action buttons, critical interactive elements |
| border | #4d4d4d | Dividers, input underlines, pill button borders, separators |

The relationship between colors follows a strict hierarchy. White text on black provides the fundamental reading experience at all sizes. The muted gray appears only for supporting information and placeholder states, never for primary content. The red accent is reserved exclusively for the submit action, ensuring it commands attention when present. No gradient or shadow values are employed in the visible interface—depth and hierarchy are achieved through spacing, scale, and the single accent color rather than atmospheric effects. The border gray is calibrated to be visible against black without competing with white text, functioning as a structural element rather than a decorative one.

## Typography

Two font families establish the typographic system. Matter, designed by Martin Vácha and distributed by Displaay, provides the display character with its light weight and geometric precision. Droid Sans handles all functional text with neutral clarity. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 3rem | 300 | 1.1 | -0.02em | Page headlines, major section introductions |
| section-heading | Matter | 1.5rem | 300 | 1.2 | -0.01em | Subsection titles, form headers |
| body | Droid Sans | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, contact details |
| label | Droid Sans | 0.875rem | 400 | 1.4 | 0 | Form labels, field names, small UI text |
| input | Droid Sans | 1.125rem | 400 | 1.5 | 0 | Form input text, placeholder content |

The type scale is built on a 4px relative unit, with sizes progressing in whole-number multiples. Matter's light weight at display sizes creates an elegant, almost ethereal quality that contrasts with the industrial context. The negative letter spacing on display text tightens word spacing for visual cohesion at large sizes. Droid Sans maintains consistent 400 weight throughout all functional sizes, avoiding the need for bold variations in the interface. Line heights are tight for display text to maintain compact vertical presence, while body and input sizes receive more generous leading for comfortable reading. The input size is slightly enlarged at 1.125rem to improve touch target usability and create appropriate visual weight against field labels.

## Layout

The layout system employs a split-composition approach on major pages, with content areas divided into asymmetric left-right arrangements. The contact page demonstrates this clearly: a large typographic statement occupies the left portion while the functional form anchors the right. This creates a dialogue between expressive and utilitarian space.

Page sections are separated by substantial vertical spacing of 4rem, establishing clear rhythmic breaks without visible dividers. The grid underlying form layouts uses a two-column structure for labels and inputs, with labels left-aligned and inputs extending to the right edge. This inline label pattern reduces vertical space consumption and creates strong horizontal alignment lines.

Form fields stack vertically with consistent 1.5rem gaps between complete field rows. Each field row is demarcated by a horizontal rule rather than a containing box, extending the full width of the form area. The subject selection area breaks from the two-column pattern, using a 2x3 grid of equal-width pill buttons that span the full form width.

Spacing throughout follows a 0.25rem base unit, with component gaps at 1.5rem and section breaks at 4rem. No border-radius is applied to major containers or cards—the aesthetic favors sharp corners and rectilinear forms. Small 0.25rem rounding appears only on interactive buttons, providing subtle affordance without softening the industrial character.

## Visual language

The visual language communicates technical authority through absolute restraint. Every element is stripped to its essential form: inputs become underlined text fields, buttons become flat rectangles, selections become bordered pills. There is no shadow, no gradient, no texture beyond the inherent contrast of black and white.

Iconography appears minimal and functional. The globe icon in the contact locations section uses simple line construction in white against black, matching the typographic weight rather than asserting independent visual presence. The arrow icon on the submit button follows the same principle—geometric, directional, unadorned.

The subject pill buttons represent a key interactive pattern: default state shows white text on transparent with a gray border, while selected state inverts to white background with black text. This high-contrast inversion provides clear state communication without additional color. The pills maintain consistent internal padding and equal width distribution within their grid.

The red submit button stands as the sole chromatic exception in the interface. Its saturated red against black creates immediate visual priority, guiding the user to completion action. The adjacent arrow button shares the same red background, creating a compound action element where the primary button carries the label and the secondary square button carries the directional icon.

## Components

### Contact Form

The contact form is the most complex visible component, structured as a vertical stack of field rows with horizontal rule separators.

**Anatomy:** Form header with title and required-field note, stacked field rows (label + input), subject selection grid, message text area, agreement checkbox with linked policy text, submit action group.

**Surface and text color:** Form sits on the black canvas with white labels and muted gray placeholder text. Active input text appears white.

**Typography:** Section heading uses Matter at 1.5rem for the "Get in touch" title. Field labels use Droid Sans at 0.875rem. Input text and placeholders use Droid Sans at 1.125rem. The required-field note uses the label style.

**Shape and border:** Each field row is separated by a 1px horizontal rule in border gray. Input fields have no visible background or border beyond the underline rule. Subject pills have 1px borders with 0.25rem corner radius.

**Spacing:** Field rows stack with 1.5rem vertical gaps. The subject pill grid uses 0.75rem gaps between pills. The submit group sits below the message field with standard section spacing.

**Composition:** Labels occupy a left column approximately one-third width, with inputs extending across the remaining two-thirds. The subject pills break this pattern, spanning full width in a 2-column grid.

**Variants:** Subject pills have default (transparent, white text, gray border) and selected (white background, black text, no border) states. The submit button has a default red state and presumably a hover state, though this is not visible in still images.

### Location Grid

The global locations display uses a multi-column grid of contact information.

**Anatomy:** Section title with globe icon, grid of location cards with country heading, company name, address, phone, and email.

**Surface and text color:** Black background throughout. White text for all content. No card backgrounds or borders—information exists as pure typography.

**Typography:** Section title uses Matter light weight. Location details use Droid Sans at body size, with country names potentially slightly emphasized through size or weight.

**Shape and border:** No visible borders between locations. Separation is achieved through grid spacing alone.

**Spacing:** Generous gaps between location columns, with consistent vertical spacing within each location block between address, phone, and email lines.

**Composition:** Asymmetric grid with 2-3 columns depending on viewport, left-aligned text throughout.

### Primary Action Button

The submit button represents the system's single accent application.

**Anatomy:** Rectangular button with centered label, accompanied by a square icon button containing a diagonal arrow.

**Surface and text color:** Red background (#e60012) with white text. The adjacent arrow button shares identical red background with white icon.

**Typography:** Droid Sans at label size, weight 400, white color.

**Shape and border:** 0.25rem corner radius on both buttons. The primary button is substantially wider; the arrow button is square.

**Spacing:** Internal padding creates comfortable touch targets. The two buttons sit adjacent with minimal gap.

**Composition:** Button group aligns to the right of the form area, with the agreement checkbox positioned to the left at the same vertical level.

## Responsive behavior

The split-layout composition seen on the contact page should stack vertically on narrower viewports, with the headline section preceding the form. The two-column label-input pattern should collapse to a single column with labels above inputs, maintaining the horizontal rule separators. The location grid should reduce from multiple columns to single column on mobile, with location blocks stacking vertically. Subject pill buttons should remain in a 2-column grid at minimum, potentially expanding to 3 columns on wider viewports. Touch targets for all interactive elements should maintain minimum 44px height. The large display typography should scale down proportionally, potentially reducing from 3rem to 2rem on mobile to prevent excessive line breaks.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the universal background—never introduce light backgrounds or cards
- The single red accent restriction—reserve #e60012 exclusively for primary submit actions
- The inline label pattern with horizontal rule separators rather than boxed inputs
- The Matter light weight for all display and heading text
- The sharp, rectilinear aesthetic with minimal rounding

### Avoid
- Adding secondary accent colors that would dilute the red action priority
- Using borders or backgrounds on form fields—maintain the underline-only pattern
- Introducing shadows, gradients, or atmospheric depth effects
- Bold weights in Droid Sans—the system relies on size and color contrast, not weight variation
- Card-based layouts with visible containers

### Recommended Build Order
1. Establish the black canvas and white text foundation with Matter and Droid Sans loaded
2. Implement the typographic scale with display, heading, body, label, and input tokens
3. Build the form field component with inline labels and horizontal rule separators
4. Create the subject pill button with default and selected states
5. Implement the primary action button with red background and adjacent arrow button
6. Compose the split-layout page structure with responsive stacking behavior
7. Add the location grid component for contact information display

### Accessibility
- Ensure the red submit button meets contrast requirements against black (the #e60012 red on #000000 provides approximately 5.1:1 contrast, meeting WCAG AA for large text but falling short for normal text—consider slightly lightening the red or increasing button text size)
- Provide visible focus indicators for all interactive elements, likely using white outlines or underlines against the black background
- Maintain the muted-ink placeholder color at sufficient contrast for readability guidance without being mistaken for entered content
- Ensure form labels remain programmatically associated with inputs even in the inline visual arrangement
- The globe icon should have appropriate alternative text or aria-label when used as a section marker

## Scope note

This guide covers the contact page and its visible components as represented in the supplied images. Other site pages including services, about, surfaces, catalog, technologies, and the homepage are referenced in the domain structure but not visually represented here. Mobile layouts, breakpoint behaviors, hover states, focus states, loading indicators, error messaging, and form validation styling are not covered and should be designed to extend the established principles. Measurements are practical adaptation targets derived from the visible interface.
