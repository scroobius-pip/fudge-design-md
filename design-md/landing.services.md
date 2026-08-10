# How landing.services is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/landing.services-design)

Last updated: 2026-08-10

## Captured pages

[![Chat widget overlay with rounded message bubbles, avatar thumbnail, and soft pink close button on a clean white ground.](https://pin.fontofweb.com/3054?format=jpg)](https://design.withfudge.com/share/pin-3054)

[Chat widget overlay with rounded message bubbles, avatar thumbnail, and soft pink close button on a clean white ground.](https://design.withfudge.com/share/pin-3054)

[![Contact section with large display heading, outlined pill button with send icon, founder attribution, and categorized footer links with external-arrow indicators.](https://pin.fontofweb.com/3052?format=jpg)](https://design.withfudge.com/share/pin-3052)

[Contact section with large display heading, outlined pill button with send icon, founder attribution, and categorized footer links with external-arrow indicators.](https://design.withfudge.com/share/pin-3052)

[![Case-study card featuring a rounded screenshot preview with category tags, testimonial bubbles with circular avatars, and a dashed-border preview thumbnail.](https://pin.fontofweb.com/3051?format=jpg)](https://design.withfudge.com/share/pin-3051)

[Case-study card featuring a rounded screenshot preview with category tags, testimonial bubbles with circular avatars, and a dashed-border preview thumbnail.](https://design.withfudge.com/share/pin-3051)

[![Full browser mockup of a healthcare SaaS landing page with a gradient blue sky background, centered white headline, and paired pill buttons in dark and light variants.](https://pin.fontofweb.com/3050?format=jpg)](https://design.withfudge.com/share/pin-3050)

[Full browser mockup of a healthcare SaaS landing page with a gradient blue sky background, centered white headline, and paired pill buttons in dark and light variants.](https://design.withfudge.com/share/pin-3050)

## Overview

Landing.services presents a portfolio and contact experience for a design studio that builds websites and products. The visual system is intentionally restrained: a near-white canvas, black ink for all primary text, and soft structural grays for secondary information. The personality emerges through rounded, friendly interface shapes—pill buttons, bubble chat messages, and generously rounded card previews—rather than through color complexity. Photography and case-study screenshots are given prominence, often appearing as rounded rectangles with subtle borders that lift them slightly from the page. The overall rhythm is spacious, with large typographic moments followed by quiet, readable supporting text. Interactions feel conversational, anchored by a persistent chat widget that uses the same rounded language as the rest of the site. This is a system designed to feel approachable, precise, and quietly confident.

## Colors

The palette is minimal and high-contrast, relying on black and white for all structural and typographic needs, with soft grays and a single atmospheric blue gradient for photographic and decorative moments.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active buttons, strong borders, footer links |
| canvas | #ffffff | Page background, button fills, chat bubbles, card surfaces |
| muted-ink | #6b7280 | Secondary labels, captions, disabled-state text, footer legal |
| surface | #f3f4f6 | Chat message backgrounds, tag fills, subtle hover states |
| surface-warm | #fef2f2 | Close-button background, soft accent moments |
| accent-blue-start | #93c5fd | Gradient sky in case-study hero photography |
| accent-blue-end | #bfdbfe | Lighter gradient terminus in case-study hero photography |
| border-subtle | #e5e7eb | Card outlines, button borders, divider lines |

The system operates in a single light mode. Dark values are reserved for primary actions and text; the canvas remains consistently white across all surfaces. The blue gradient appears only within photographic mockups and hero imagery, never as a flat UI fill, giving the portfolio work a breathable, atmospheric quality against the stark monochrome interface. Warm pink tones in the close button and occasional accents provide the only chromatic deviation, functioning as soft signals rather than structural color.

## Typography

Two families drive the system: Geist for display and interface emphasis, Inter for body and supporting text. Geist appears in Semibold weight for all headings and button labels, giving the site a contemporary, slightly technical personality. Inter handles everything at Regular weight, ensuring readability at small sizes and in dense footer or caption contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 600 | 1.1 | -0.02em | Page hero headlines, major section titles |
| section-display | Geist | 2rem | 600 | 1.15 | -0.01em | Subsection headings, case-study titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, chat messages |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Buttons, tags, navigation items, captions |
| label | Inter | 0.75rem | 400 | 1.4 | 0.01em | Metadata, timestamps, small annotations |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0em | Header links, footer category labels |

Geist is credited to Basementstudio, Andrés Briganti, Mateo Zaragoza, with distribution through Vercel. Inter is designed by Rasmus Andersson. Verify licensing for these families before production use.

Type sizing follows a 4px relative unit. Display sizes snap to 48px and 32px, body to 16px, with smaller roles at 14px and 12px. Negative tracking on display text prevents looseness at large sizes, while body text uses neutral tracking for comfortable reading.

## Layout

The page structure is single-column and centered, with content constrained to a moderate maximum width that prevents line lengths from becoming unwieldy. Sections stack vertically with generous vertical breathing room, typically six or more rems between major blocks. Horizontal padding is consistent, creating a comfortable margin on all viewport sizes.

The chat widget floats in the lower right, breaking the centered flow as a persistent overlay element. Case-study cards occupy nearly the full content width, with internal padding that keeps text and imagery separated from card edges. Footer content organizes into loose two-column groupings: category labels on the left, link lists on the right, with external links marked by diagonal arrows.

Grid behavior is implicit rather than explicit: elements align to a shared center axis, with asymmetry introduced only by the floating chat and by left-aligned testimonial avatars. The case-study preview in the full mockup shows a contained browser frame with internal navigation, suggesting that embedded project views use a rounded container with overflow hidden to simulate a device or browser window.

Spacing tokens derive from a 0.25rem base unit. Common increments include 0.5rem for tight internal padding, 1.5rem for content gaps between related elements, and 6rem for section separation. Radii are semantic: full pills for buttons and tags, 1rem for chat bubbles and panels, 0.75rem for cards, and 0.5rem for small thumbnails.

## Visual language

The dominant visual impression is one of softness and precision. Every interactive element is rounded—buttons are full pills, chat bubbles are large-radius rectangles, cards and screenshots carry noticeable corner curvature. This rounding is consistent enough to feel intentional and friendly without becoming playful or childish.

Imagery is presented as object rather than background. Case-study screenshots sit inside rounded containers with subtle borders, appearing as artifacts to be examined rather than atmospheric fills. The single visible photograph in the chat widget—a small circular avatar—follows the same logic: personal, direct, human-scaled.

The blue gradient in the healthcare case study is the only strong color moment, and it is contained entirely within the project screenshot, not bleeding into the surrounding interface. This containment strategy lets portfolio work speak with its own palette while the surrounding system remains neutral.

Motion is implied but not visible in still images: the chat widget suggests real-time messaging, the send icon on buttons implies dispatch, and the external arrows on links promise navigation. The system is built for conversion and conversation, with every visual choice supporting clarity and approachability.

## Components

### Primary action button

A pill-shaped button with full 9999px border radius, used for the main call to action in any section. The default surface is solid black with white text, though a secondary variant inverts to white fill with black text and a subtle border. Both variants use the body-small token at 0.875rem, with generous horizontal padding of 1.5rem and vertical padding of 0.75rem. A send or arrow icon appears inline after the label, spaced tightly with the text. The button has no visible shadow, relying on contrast alone for prominence.

### Secondary action button

Identical geometry to the primary button but with a white fill, black text, and a 1px border in the subtle border color. Used for alternative choices alongside a primary action, such as "Book a demo" next to "Sign up for free." The icon treatment matches the primary variant.

### Chat bubble

Rounded rectangles with 1rem border radius, appearing in two surface treatments. Incoming messages use the surface gray background with black text; outgoing or user messages use white with a subtle border. Padding is 1rem vertically and 1.25rem horizontally. Typography is body-small. Bubbles stack with tight spacing, and a small circular avatar appears beside the final message in a sequence.

### Chat widget trigger

A floating pill button in the lower right, white with border, containing the label "Chat" and a send icon. Opens an overlay panel of stacked chat bubbles with a soft pink close button in the upper right of the panel. The close button uses the surface-warm background with a small "×" mark.

### Case-study card

A rounded container with 0.75rem border radius and a 1px subtle border. Contains, from top to bottom: a row of category tags, a large screenshot or mockup image with internal rounded corners, and a bottom action bar with a right-aligned "View in full" secondary button. The image area often shows a browser chrome or device frame, with overflow hidden to clip the content cleanly. Tags above the image use the tag component.

### Tag

A small pill with 9999px radius, surface gray background, and muted-ink text. Uses the label token at 0.75rem. Padding is tight: 0.25rem vertical and 0.75rem horizontal. Tags appear in horizontal rows with small gaps between them, categorizing the work shown below.

### Testimonial attribution

A paired element of circular avatar and text block. The avatar is a small circle, approximately 2.5rem in diameter, with a photograph cropped to fit. The text block shows a name in body-small weight and a role or company in label size, separated by a centered dot. The entire attribution sits below a chat-style bubble or quote.

### Footer link group

A two-part layout with a category label on the left in muted-ink and a stack of links on the right in black. External links carry a diagonal arrow icon. Spacing between link rows is tight, while spacing between category groups is larger. The footer concludes with legal copy in label size, muted-ink color, and a final line showing founder attribution with a social handle.

## Responsive behavior

The system is built on a fluid single-column foundation. At narrower viewports, the centered content width contracts while horizontal margins persist. The chat widget remains fixed in the lower right, though its panel may expand to full-width on very small screens. Case-study cards maintain their internal padding and rounded corners; the screenshot within scales down proportionally. Footer link groups should stack vertically when horizontal space is constrained, with category labels becoming full-width headers above their respective link lists. Typography scales down modestly: hero-display should reduce to 2rem on small screens, section-display to 1.5rem, preserving line-height ratios. Touch targets for pill buttons should remain at least 44px in height, which the current padding already satisfies.

## Practical implementation guidance

### Preserve
- The strict black-and-white palette for all interface chrome; let project imagery provide color.
- Full pill rounding on every button and tag; this is the system's most distinctive gesture.
- Generous vertical spacing between sections; the quietness depends on breathing room.
- The contained, bordered presentation of case-study screenshots as objects.
- Inline icons after button labels, not before.

### Avoid
- Adding shadows to buttons or cards; the system relies on flat contrast and border definition.
- Using the blue gradient as a flat UI background; it belongs to photography only.
- Sharp corners on any interactive element; even small thumbnails should carry slight rounding.
- Centering footer link groups; the left-label, right-links asymmetry is intentional.

### Recommended build order
1. Establish the 4px spacing scale and the two font families.
2. Build the pill button with both primary and secondary variants.
3. Create the chat bubble and floating widget trigger.
4. Implement the case-study card with tag row, image container, and bottom action.
5. Add the footer with its two-column link groups and legal closing.
6. Polish with avatar circles, external-link arrows, and the close-button accent.

### Accessibility
- Ensure the chat widget trigger does not obscure essential content at 200% zoom.
- Provide visible focus states on pill buttons; a 2px outline offset or inverted fill works well.
- Use aria-label on icon-only buttons such as the close control.
- Maintain color contrast ratios: black on white and white on black exceed WCAG AAA; muted-ink on white should be verified for small text compliance.
- The diagonal arrow icons on external links should have accompanying text or aria-labels indicating destination behavior.

## Scope note

This guide covers the landing page and contact surface of landing.services, including the chat widget, case-study presentation, and footer. Pricing pages, additional project detail views, and any motion or loading states are not represented. Measurements are practical adaptation targets derived from visible composition. Verify licensing for Geist and Inter before production use.
