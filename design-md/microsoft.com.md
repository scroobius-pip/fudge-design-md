# How microsoft.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/microsoft.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large Copilot wordmark over floral photography, message input bar, and suggestion chip grid on white background](https://pin.fontofweb.com/3752?format=jpg)](https://design.withfudge.com/share/pin-3752)

[Hero section with large Copilot wordmark over floral photography, message input bar, and suggestion chip grid on white background](https://design.withfudge.com/share/pin-3752)

[![Warm amber section with maroon headline, floating rounded images, and pill-shaped action button with microphone interface](https://pin.fontofweb.com/3751?format=jpg)](https://design.withfudge.com/share/pin-3751)

[Warm amber section with maroon headline, floating rounded images, and pill-shaped action button with microphone interface](https://design.withfudge.com/share/pin-3751)

[![Device mockup showing Copilot interface in lavender frame with download buttons for Windows and Mac](https://pin.fontofweb.com/3750?format=jpg)](https://design.withfudge.com/share/pin-3750)

[Device mockup showing Copilot interface in lavender frame with download buttons for Windows and Mac](https://design.withfudge.com/share/pin-3750)

[![FAQ accordion interface with expand/collapse controls, dotted focus outline, and section headings for image generation topics](https://pin.fontofweb.com/3749?format=jpg)](https://design.withfudge.com/share/pin-3749)

[FAQ accordion interface with expand/collapse controls, dotted focus outline, and section headings for image generation topics](https://design.withfudge.com/share/pin-3749)

## Overview

Microsoft's product marketing pages, particularly for Copilot, employ a warm and approachable visual language that balances enterprise credibility with consumer-friendly softness. The system centers on conversational interfaces—large text inputs, suggestion chips, and voice interactions—presented within generously rounded containers. Photography plays a central role, with nature imagery and lifestyle scenes creating emotional resonance against clean white or softly tinted backgrounds. The design avoids sharp corners and harsh contrasts, instead favoring pill shapes, rounded rectangles, and subtle surface colors that feel tactile and inviting. Typography pairs a distinctive display face for headlines with a familiar system font for body text, creating clear hierarchy without visual heaviness. The overall impression is of an intelligent assistant that is capable yet approachable, professional yet personal.

## Colors

The color system is intentionally restrained, relying on a near-neutral foundation with selective warm and cool accents that shift based on section context. Black serves as the primary text color for maximum readability, while white and off-white surfaces dominate the canvas. Warm amber appears as the primary action accent, creating an energetic but not aggressive call-to-action. Lavender and soft purple tones emerge in device-focused sections, providing visual variety without fragmenting the system. A deep maroon appears sparingly for emphasis on warm-toned backgrounds.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, icons, and strong borders |
| canvas | #FFFFFF | Primary page background and input surfaces |
| muted-ink | #1A1A1A | Secondary text and subtle headings |
| surface-warm | #F5F5F0 | Suggestion chip backgrounds and tinted panels |
| accent-amber | #F2C94C | Primary action buttons and highlights |
| accent-lavender | #E6D5F5 | Device frame accents and cool section backgrounds |
| accent-maroon | #5C1A1A | Emphasis text on warm amber backgrounds |
| action-primary | #0F6CBD | Text links and interactive affordances |
| border-subtle | #E5E5E5 | Dividers, input borders, and accordion separators |

The light mode dominates all visible surfaces. Dark text on light backgrounds ensures accessibility without inversion. Accent colors are applied to large areas rather than small UI elements—entire sections shift to amber or lavender to denote context changes. Photography introduces additional color through natural scenes, but UI elements maintain their neutral or accent assignments regardless of background imagery.

## Typography

The type system pairs a custom display variable font for marketing impact with Microsoft's established system font for functional readability. Open Ai Sans (Ginto Copilot) provides characterful headlines with slightly rounded terminals that echo the soft geometry of the interface. Segoe Ui handles all body text, labels, and navigation with proven screen readability. The scale is generous for display sizes, with the hero treatment reaching substantial sizes for brand moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Ai Sans | 6rem | 400 | 1 | -0.02em | Page hero wordmarks and major brand statements |
| section-display | Open Ai Sans | 2.5rem | 400 | 1.1 | -0.01em | Section headlines and feature titles |
| body | Segoe Ui | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, and general content |
| body-small | Segoe Ui | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions and chip labels |
| label | Segoe Ui | 0.75rem | 600 | 1.25 | 0.02em | Button text and compact UI labels |
| navigation | Segoe Ui | 0.8125rem | 400 | 1.25 | 0 | Top-level navigation and utility links |

Open Ai Sans is designed by Dinamo Typefaces Gmb H. Segoe Ui is provided by Microsoft Corporation. Verify licensing for these families before production use. The Mwf Mdl 2 Assets and Mwf Fluent Icons families serve as icon and symbol resources; they are not used for typographic content.

## Layout

The layout system employs a centered, content-constrained approach with generous breathing room. Major sections stack vertically with substantial separation, creating clear narrative progression. The hero area occupies significant viewport height, centering its content both horizontally and vertically over immersive photography. Below the fold, alternating section treatments—white backgrounds, warm tints, and cool tints—create visual rhythm without complex grid structures.

Content containers appear to max out at a comfortable reading width, approximately 1200px, with internal elements often further constrained for typographic measure. The suggestion chip grid demonstrates a flexible wrapping pattern: items flow horizontally with consistent gaps, breaking to new lines as needed. This creates an organic, conversational feel rather than rigid table structures.

Spacing follows a clear hierarchy. Section-level padding creates major divisions, while component-internal spacing uses tighter increments. The pill-shaped input bar in the hero demonstrates horizontal internal spacing with icon and text comfortably separated. Rounded corners are applied consistently at the component level—pills for inputs and primary actions, larger radii for cards and panels, and substantial rounding for device mockups and feature images.

## Visual language

The visual language centers on softness and approachability expressed through geometry, color, and imagery. Every interactive element carries rounded corners, with full pills preferred for primary actions and inputs. This creates a conversational, bubble-like aesthetic that suggests dialogue rather than command interfaces.

Photography selection reinforces the human-centered positioning. Nature imagery with shallow depth of field—flowers, landscapes, lifestyle moments—provides warmth and emotional accessibility. Device mockups appear within colored frames that extend the rounded aesthetic to hardware representation. Floating image compositions, where multiple rounded photos overlap against tinted backgrounds, create depth and visual interest without heavy shadows or borders.

Iconography is minimal and functional, appearing primarily within suggestion chips as simple line or filled symbols. The microphone icon in voice interfaces receives special treatment with a soft glow or halo effect, indicating active listening state. Color application to icons is restrained—most use neutral tones, with occasional accent tints for categorization.

The system avoids harsh contrasts and sharp edges. Even focus indicators, as seen in the accordion interface, use dotted outlines rather than solid borders, maintaining the gentle aesthetic. Shadows, where present, are soft and diffuse rather than crisp and directional.

## Components

### Hero Input Bar

The primary interaction point presents as a wide, pill-shaped input field centered in the viewport. A small Copilot icon precedes placeholder text, with a submit arrow at the right terminus. The surface is pure white with a subtle border, creating elevation against photographic backgrounds. Internal spacing keeps text and icons comfortably separated from the rounded perimeter.

### Suggestion Chip

Conversational prompts appear as horizontal rows of rounded rectangular chips. Each chip combines an optional icon with brief text, using the warm off-white surface color. Chips wrap across multiple lines with consistent gaps, creating an exploratory browsing pattern. The hover or active state is not visible in still images, but the base state presents as a flat, inviting surface.

### Primary Button

Action buttons use full pill shaping with the amber accent fill. Text is dark for contrast, set in the semibold label style. Buttons appear in pairs for platform selection (Windows/Mac) and singly for primary calls-to-action. The generous horizontal padding creates substantial, easy targets.

### Accordion

FAQ and explainer content uses a clean accordion pattern. Each item presents as a full-width row with left-aligned question text and a right-aligned expand indicator. The active or focused item shows a distinctive dotted outline border rather than a solid line, maintaining the soft visual language. Expanded content sits directly below its trigger with standard body text formatting. Section headings group related accordions, with utility links for bulk expand/collapse actions.

### Device Mockup

Product screenshots appear within stylized device frames featuring substantial rounded corners and colored borders. The lavender-tinted frame in the PC/Mac section demonstrates how hardware representation extends the system's rounded geometry. Internal content shows the actual product interface, creating continuity between marketing and product experience.

### Voice Interface

A specialized component shows microphone controls within a floating pill container. The central microphone button receives visual emphasis through scale and a soft blue glow, flanked by dismiss and settings options. This element appears overlaid on imagery, suggesting an ambient, always-available interaction model.

## Responsive behavior

The system appears optimized for desktop presentation based on available imagery. The centered hero with large type and wide input bar suggests a viewport-width approach that maintains proportions across sizes. The suggestion chip grid naturally adapts through wrapping, with chip widths flexing to content. Section layouts with side-by-side text and imagery would likely stack vertically on narrower viewports, maintaining reading order. Button pairs for platform downloads should remain horizontally arranged where space permits, stacking only when constrained. Typography scale should reduce proportionally, with the hero display potentially reaching 3-4rem on mobile to maintain impact without overflow.

## Practical implementation guidance

### Preserve
- The full pill radius for primary inputs and actions; this is the system's most distinctive geometric signature
- Generous section spacing that allows photography and color fields to breathe
- The pairing of display and system fonts for headline and body respectively
- Soft, natural photography with shallow depth of field
- Dotted or subtle focus indicators rather than heavy outlines

### Avoid
- Sharp-cornered buttons or cards that contradict the rounded language
- Pure gray neutrals; the warm off-white provides necessary character
- Heavy drop shadows that create harsh depth rather than soft elevation
- Saturated primary colors outside the amber and lavender accent system
- Compact, table-like layouts for conversational content

### Recommended Build Order
1. Establish the type scale with Open Ai Sans for display and Segoe Ui for body
2. Implement the pill input bar as the central interactive component
3. Build the suggestion chip grid with wrapping behavior
4. Create section containers with alternating background treatments
5. Add accordion patterns for FAQ and explainer content
6. Implement device mockup frames with colored borders

### Accessibility
- Ensure the amber accent on white meets minimum contrast ratios for text; the deep maroon variant on amber backgrounds improves this
- Maintain visible focus indicators; the dotted outline pattern should be preserved for keyboard navigation
- Voice interface controls need clear labels beyond iconography alone
- Accordion content should be programmatically associated with triggers for screen reader users
- Large touch targets for pill buttons support motor accessibility

## Scope note

This guide covers the Copilot for Individuals product marketing page and related Microsoft product surfaces. Mobile layouts, animation behavior, hover states, and dark mode implementations are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection.
