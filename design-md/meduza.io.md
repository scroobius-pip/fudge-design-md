# How meduza.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/meduza.io-design)

Last updated: 2026-08-10

## Captured pages

[![VPN troubleshooting article with beige illustration, showing the article header with mixed serif and sans-serif typography and a cookie consent banner at the bottom](https://pin.fontofweb.com/9073?format=jpg)](https://design.withfudge.com/share/pin-9073)

[VPN troubleshooting article with beige illustration, showing the article header with mixed serif and sans-serif typography and a cookie consent banner at the bottom](https://design.withfudge.com/share/pin-9073)

[![Michael Jackson biopic article with large concert hero image, centered headline with bold sans-serif and serif subtitle, and warm-toned category label](https://pin.fontofweb.com/9072?format=jpg)](https://design.withfudge.com/share/pin-9072)

[Michael Jackson biopic article with large concert hero image, centered headline with bold sans-serif and serif subtitle, and warm-toned category label](https://design.withfudge.com/share/pin-9072)

[![Meduza fundraising appeal with dark data visualization showing donor metrics, centered bold headline, and prominent cookie consent banner](https://pin.fontofweb.com/9071?format=jpg)](https://design.withfudge.com/share/pin-9071)

[Meduza fundraising appeal with dark data visualization showing donor metrics, centered bold headline, and prominent cookie consent banner](https://design.withfudge.com/share/pin-9071)

[![Environmental disaster article with full-width seascape hero image, multi-line headline combining bold sans-serif and elegant serif, and muted color palette](https://pin.fontofweb.com/9070?format=jpg)](https://design.withfudge.com/share/pin-9070)

[Environmental disaster article with full-width seascape hero image, multi-line headline combining bold sans-serif and elegant serif, and muted color palette](https://design.withfudge.com/share/pin-9070)

## Overview

Meduza is a Russian-language independent news publication whose visual identity balances editorial authority with contemporary clarity. The design system rests on a stark black-and-white foundation, using pure white canvas surfaces against deep black text to create maximum legibility for long-form journalism. Headlines deploy Proxima Nova in bold weights, delivering immediate visual impact through geometric sans-serif letterforms. These headlines frequently pair with Pf Regal Pro, a refined transitional serif that handles extended subtitles and body text with classical elegance. The tension between modern sans and traditional serif creates a distinctive editorial voice—authoritative yet approachable, urgent yet considered.

A warm bronze accent color appears selectively in category labels, link underlines, and interactive states, introducing human warmth into the otherwise monochrome palette. This accent reads as aged gold or weathered brass, suggesting journalistic tradition and editorial gravitas without resorting to corporate blue or aggressive red. The overall composition favors generous whitespace and centered alignment for article headers, allowing photography and illustration to breathe while maintaining strict typographic hierarchy. Content density is moderate: articles receive ample padding, and visual elements are separated by deliberate gaps that guide reading flow without fragmenting the narrative.

## Colors

The color system is intentionally restrained, built on a high-contrast foundation with a single warm accent.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, borders, and inverse surfaces |
| canvas | #FFFFFF | Page background, article cards, and content containers |
| muted-ink | #BABABA | Secondary metadata, timestamps, source attributions, and disabled states |
| accent-warm | #B88B58 | Category labels, active link underlines, and interactive emphasis |
| accent-warm-alt | #B88B59 | Shadow tints and subtle warm highlights near interactive elements |
| surface-inverse | #000000 | Cookie consent banner, modal overlays, and dark interface panels |
| text-inverse | #FFFFFF | Text on dark surfaces, banner copy, and button labels on black |
| text-on-inverse-muted | #BABABA | Secondary text within dark interface elements |

The primary reading experience operates in light mode: white canvas with black ink text. This maximizes contrast for extended reading and respects the publication's serious editorial tone. The warm accent appears sparingly, typically as uppercase category labels above headlines or as single-pixel underlines beneath inline links. Dark surfaces appear only for system-level interfaces like the cookie consent banner, which anchors to the viewport bottom with white text on pure black. No gradient backgrounds or tinted panels appear in the article reading experience; color is reserved for photography, illustration, and the occasional bronze accent.

## Typography

Meduza employs four font families with distinct editorial roles. Proxima Nova, designed by Mark Simonson and served by Mark Simonson Studio Llc, handles headlines and body text with clean geometric precision. Pf Regal Pro, designed by Panos Vassiliou and served by Parachute Worldwide, provides serif elegance for subtitles and extended reading. Pf Regal Pro-Regular B is the specific variant used for body text and button labels at 20px, offering slightly different proportions within the same family. A fourth family, referenced internally as Null, delivers small uppercase labels with tight tracking. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Proxima Nova | 2.3125rem | 700 | 1.135 | normal | Article headlines, primary page titles |
| section-display | Pf Regal Pro | 2.375rem | 400 | 1.105 | normal | Extended subtitles, deck copy beneath headlines |
| body | Proxima Nova | 1.25rem | 400 | 1.4 | normal | Body paragraphs, standard reading text |
| body-serif | Pf Regal Pro | 1.25rem | 400 | 2.0 | normal | Pull quotes, editorial asides, formal body text |
| label | Null | 0.875rem | 600 | 1.143 | 0.071em | Category labels, section markers, uppercase metadata |
| caption | Proxima Nova | 0.75rem | 400 | 1.25 | normal | Timestamps, source lines, fine print |
| button-text | Pf Regal Pro | 1.25rem | 400 | 2.0 | normal | Button labels, interactive serif text |

Headlines combine two type treatments: Proxima Nova Bold at 37px for the primary headline, followed immediately by Pf Regal Pro Regular at 38px for subtitle or deck copy. This pairing creates visual rhythm through weight and style contrast—the sans grabs attention, the serif sustains it. Body text at 20px with 28px line height provides comfortable measure for Cyrillic text. Labels use uppercase rendering with 1px letter spacing for category markers like "РАЗБОР" or "ИСТОРИИ". The Null family at 14px with 16px line height and 600 weight serves this role with compact authority. Pf Regal Pro-Regular B appears in the extracted data as the specific font name for body-sized serif text, indicating a variant within the Pf Regal Pro family tuned for 20px rendering.

## Layout

The article layout follows a centered, single-column structure with controlled measure. Content sits within a container that constrains line length for readability, while hero images and full-bleed photographs break out to wider widths. The standard content padding is 45px top, 15px horizontal, and 38px bottom for article cards—generous vertical breathing room with modest horizontal margins that keep text aligned on narrower viewports.

Headlines receive centered alignment with 30px bottom margin, creating clear separation from metadata and hero imagery. Article images carry 10px border radius, softening their presence without introducing decorative flourish. The cookie consent banner spans full viewport width with internal padding of approximately 18px left and 15px right, maintaining consistent alignment with the content area above.

Spacing follows a 2px base unit, with semantic values derived from the extracted scale: 15px and 18px for horizontal padding, 20px for content gaps, 30px for headline margins, 38px and 45px for vertical section padding. Larger structural margins like 222.5px and 455.922px appear to center content within wider containers or implement asymmetric layouts with sidebar offsets. These should be treated as implementation artifacts rather than design intent—prefer centered auto margins for content containment.

## Visual language

Meduza's visual language communicates editorial seriousness through restraint. Photography dominates the sensory experience: large hero images sit immediately below headlines, often extending nearly full-width with only modest rounded corners. Illustrations appear as contained panels with flat color backgrounds, as seen in the VPN article's beige-toned graphic with simple iconography. The illustration style favors minimal, almost diagrammatic clarity—no gradients, no shadows, just solid forms and clear typography.

The warm bronze accent (#B88B58) functions as the sole chromatic interruption in an otherwise achromatic interface. It appears in uppercase category labels, where it signals content taxonomy without competing with headline hierarchy. It also manifests as a subtle inset shadow on links: `rgb(184, 139, 88) 0px -1px 0px 0px inset` creates an underline effect that sits within the text block rather than extending below it. This treatment keeps link recognition active without disrupting the clean paragraph shape.

White inset shadows on dark surfaces—`rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`—provide subtle border definition for buttons and interactive elements on black backgrounds, avoiding harsh solid borders while maintaining tactile presence.

## Components

### Article header

The article header combines category label, headline, subtitle, and metadata in strict vertical sequence. The category label sits above the headline in uppercase bronze, using the label token with 1px letter spacing. The headline follows in Proxima Nova Bold, centered, with the section-display subtitle immediately beneath in Pf Regal Pro Regular. A timestamp and source attribution line appears below in muted-ink caption text, separated by a centered dot or similar separator.

- **Anatomy**: Category label, headline (h1), subtitle/deck (span or div), timestamp with source
- **Surface**: White canvas background, black text
- **Typography**: label token for category, hero-display for headline, section-display for subtitle, caption for metadata
- **Spacing**: 30px bottom margin on headline group, 20px top margin on metadata
- **Composition**: Centered alignment, constrained width for text elements

### Hero image

Hero images appear immediately below article metadata, breaking the content width to occupy a larger portion of the viewport. They carry 10px border radius and sit flush with the content edges or extend to a wider container boundary. The Michael Jackson article shows a dramatic concert photograph; the environmental disaster article presents a muted seascape. Both receive identical structural treatment regardless of content tone.

- **Anatomy**: Single image element, optionally with caption below
- **Shape**: 10px border radius on all corners
- **Spacing**: 20px bottom margin separating image from body text
- **Variants**: Full-bleed photographs, contained illustrations with solid color backgrounds

### Body paragraph

Body text uses Proxima Nova Regular at 20px with 28px line height. Paragraphs stack with 20px top margin, creating consistent vertical rhythm without excessive separation. Inline links maintain black text color with a bronze inset shadow underline that appears on hover or as persistent decoration.

- **Anatomy**: Text block with optional inline links
- **Typography**: body token
- **Surface**: White background, black text
- **Spacing**: 20px top margin between paragraphs

### Cookie consent banner

A persistent dark banner anchors to the viewport bottom. It uses inverse colors: black background, white text, with a dismiss button at the right edge. The banner text appears in uppercase label styling, with a linked phrase for additional information.

- **Anatomy**: Text block with inline link and close button
- **Surface**: surface-inverse background, text-inverse color
- **Typography**: label token for banner text
- **Shape**: Full viewport width, no border radius
- **Composition**: Flex row with space-between alignment, text left, close button right

### Category label

Standalone uppercase labels appear above headlines and in navigation contexts. They use the bronze accent color, uppercase transformation, and tight letter spacing to create a compact, authoritative marker.

- **Typography**: label token with accent-warm color
- **Composition**: Centered or left-aligned above content blocks

### Button

Buttons appear sparingly, using Pf Regal Pro Regular at 20px with 40px line height. The visible instance shows muted text color (#BABABA) on black background, suggesting a secondary or disabled state rather than a primary action.

- **Typography**: button-text token
- **Surface**: Black background, muted text
- **Shape**: No visible border radius in the button region

## Responsive behavior

The supplied images show desktop presentation with centered content and generous margins. No mobile layouts are visible in the material. Based on the desktop structure, the following responsive adaptations are recommended:

Content should maintain centered alignment across breakpoints, with horizontal padding reducing from 15px on desktop to narrower margins on small viewports. Headline sizes should scale down proportionally: hero-display at 2.3125rem may reduce to 1.75rem on tablet and 1.5rem on mobile to prevent excessive line breaks in Cyrillic text. The section-display subtitle, currently slightly larger than the headline at 2.375rem, should maintain its size relationship or reduce together with the headline.

Hero images should remain full-width on all breakpoints, with the 10px border radius preserved. The cookie consent banner should stack its content vertically on narrow viewports, placing the close button below the text rather than at the right edge.

Body text at 20px may reduce to 18px or 16px on mobile for improved fit, though the 20px size already provides comfortable reading. Line height should increase slightly on smaller screens to compensate for shorter line lengths.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with single warm accent
- The headline pairing of Proxima Nova Bold with Pf Regal Pro Regular
- Centered alignment for article headers and constrained measure for body text
- Generous vertical padding (45px top, 38px bottom) on article containers
- 10px border radius on images and cards
- Uppercase category labels with bronze color and 1px letter spacing
- The inset shadow underline treatment for inline links

### Avoid
- Introducing additional accent colors beyond the bronze family
- Using gradient backgrounds or tinted panels in article layouts
- Left-aligning article headlines when the source design centers them
- Reducing body text below 16px for extended reading
- Adding decorative borders or separators between body paragraphs
- Using the serif font for primary headlines—reserve it for subtitles and body

### Recommended build order
1. Establish the typographic foundation: load Proxima Nova and Pf Regal Pro with correct weights
2. Implement the article header component with centered alignment and proper margin stacking
3. Build the body paragraph style with 20px/28px metrics and link underline treatment
4. Add the cookie consent banner with inverse colors and full-width behavior
5. Implement hero image containers with 10px border radius and responsive width breaking
6. Polish with category labels, captions, and metadata styling

### Accessibility
- Maintain the high contrast between black text and white background; the current ratio exceeds WCAG AAA
- Ensure the bronze accent (#B88B58) on white meets AA standards for large text; it may need darkening for small text compliance
- Provide visible focus indicators for links and buttons that match or exceed the bronze underline treatment
- Consider adding skip navigation for the cookie banner, which may obstruct keyboard access to page content
- Preserve semantic heading hierarchy: h1 for article titles, with subtitle text as visually prominent but structurally subordinate

## Scope note

This guide covers the article reading experience as visible in the supplied material. Navigation, homepage layouts, search interfaces, and mobile breakpoints are not represented. Interactive states beyond the visible bronze link underline and muted button appearance are not documented. The rounded panel-top token (8px) appears in interface regions not fully visible in article contexts. Pf Regal Pro-Regular B is named in the source data as a distinct font variant but is treated here as part of the Pf Regal Pro family implementation.
