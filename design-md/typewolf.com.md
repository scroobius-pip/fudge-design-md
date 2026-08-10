# How typewolf.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/typewolf.com-design)

Last updated: 2026-08-10

## Captured pages

[![Testimonial section with stacked email-style review cards, muted mauve button, and soft shadow on pale rose background](https://pin.fontofweb.com/6455?format=jpg)](https://design.withfudge.com/share/pin-6455)

[Testimonial section with stacked email-style review cards, muted mauve button, and soft shadow on pale rose background](https://design.withfudge.com/share/pin-6455)

[![Homepage hero with large Domaine serif wordmark, navigation bar, and two-column grid of featured type specimens with white frames](https://pin.fontofweb.com/6454?format=jpg)](https://design.withfudge.com/share/pin-6454)

[Homepage hero with large Domaine serif wordmark, navigation bar, and two-column grid of featured type specimens with white frames](https://design.withfudge.com/share/pin-6454)

## Overview

Typewolf presents itself as a curated destination for typography enthusiasts, blending editorial restraint with warm personality. The visual system centers on a single high-contrast serif display face for all reading and headline material, supported by a geometric sans serif that handles navigation, labels, and calls-to-action with confident weight and tight spacing. The palette avoids stark black-and-white contrasts in favor of muted rose and mauve tones that feel approachable and crafted. Every element serves the content: large type specimens, clear attribution, and generous whitespace frame each featured font pairing as the hero. The overall impression is of a specialized publication rather than a conventional blog or marketplace—thoughtful, unhurried, and visually coherent from the wordmark down to the smallest metadata label.

## Colors

The color system builds warmth through desaturated rose and brown tones rather than neutral grays. The background carries a noticeable pinkish cast that distinguishes the site from generic light-mode interfaces.

| token | value | use |
|---|---|---|
| ink | #443235 | Primary text, headings, body copy, wordmark |
| ink-secondary | #654A4E | Secondary text, metadata labels, subtle links |
| accent | #916A70 | Primary button backgrounds, hover states, decorative emphasis |
| surface | #E6DDDE | Page background, section fills |
| surface-light | #F8F5F5 | Elevated card backgrounds, input fields |
| surface-white | #FFFFFF | Card frames, content wells, high-contrast text on dark elements |

The interface operates in a single light mode. The surface token dominates the viewport, with surface-white reserved for framed content and interactive containers. The accent color appears sparingly—primarily on the primary action button—where its muted mauve quality draws attention without shouting. Image palettes within featured specimens introduce seasonal color (mustard, olive, cream) but these remain photographic and do not bleed into the UI token set. Text maintains strong legibility against the warm ground: the ink token at approximately 23% luminance sits comfortably on the surface token at 92% luminance.

## Typography

Three family labels appear in the source: Domaine, Dia, and Domaine-Not Licensed For Desktop Use. The latter is the webfont file name for the Domaine instance actually served, while "Domaine" is the clean family identifier used in CSS. Two families carry the entire typographic system in practice. Domaine, a high-contrast transitional serif designed by Kris Sowersby, handles all reading text and display settings. Dia, a geometric sans from Schick Toikka by Florian Schick, provides the structural voice for navigation, labels, and actions. The pairing creates clear hierarchy through contrast of genre rather than scale alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Domaine | 6rem | 400 | 1 | normal | Homepage wordmark, major section titles |
| section-display | Domaine | 2.5rem | 400 | 1.2 | normal | Featured specimen titles within cards |
| body | Domaine | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, testimonials |
| label | Dia | 0.75rem | 900 | 1.3 | normal | Metadata tags, category labels, "FONTS" prefix |
| navigation | Dia | 0.875rem | 900 | 2.2 | normal | Primary nav items, uppercase tracking |
| action | Dia | 0.875rem | 900 | 1.3 | normal | Button text, "LEARN MORE" calls-to-action |

Domaine appears at 16px for body with 24px line height, maintaining generous vertical rhythm. Dia at 14px and 15px handles interface chrome with tight leading and heavy weight for punchy, scannable labels. The hero wordmark scales dramatically larger than the body, establishing immediate brand recognition through sheer size contrast. Verify licensing for these families before production use. Domaine carries design credit to Kris Sowersby; Dia to Florian Schick via Schick Toikka.

## Layout

The page employs a centered single-column structure with controlled maximum width. Content sits within a narrow reading well flanked by generous margins, creating an editorial magazine feel. The header occupies significant vertical space—84px of top margin precedes the main content area—allowing the large wordmark to breathe.

Horizontal padding of 24px frames all major sections, creating consistent gutters. The featured content grid uses a two-column arrangement with substantial gap between specimens, each wrapped in a white frame that lifts the content from the rose background. Card frames receive 4px border radius, softening the rectilinear geometry without becoming rounded.

Spacing follows a deliberate rhythm: 48px separates major content blocks, 43px appears between related elements, and 16px handles tight internal groupings. The narrow well—constrained by margins of 188px to 392px depending on viewport—keeps line lengths comfortable for the serif body face and focuses attention on the curated specimens. Navigation sits below the hero area, centered and separated by a thin horizontal rule that spans the content width.

## Visual language

The aesthetic vocabulary combines editorial classicism with contemporary restraint. White frames around content specimens evoke physical print samples or gallery mounts, elevating each font pairing to object status. Photography and illustration within these frames vary widely—line drawings, seasonal typography, lifestyle imagery—yet the consistent frame treatment unifies them into a coherent collection.

Shadow appears minimally: a soft diffuse shadow in muted mauve (rgba(145, 106, 112, 0.15)) at 0px 6px 24px lifts testimonial cards and certain elevated surfaces. This shadow avoids the cool blue-gray cast common to system defaults, instead harmonizing with the warm palette.

The wordmark "Typewolf" renders in Domaine at enormous scale, its high-contrast strokes and delicate serifs demonstrating the typeface's display credentials. Below it, the tagline "What's Trending in Type" settles into a smaller, quieter Domaine setting, establishing the site's editorial mission without competing for attention.

Geometric simplicity governs the interface elements: buttons are sharp-cornered rectangles, navigation items are plain text without underlines or backgrounds, and cards are simple bordered boxes. The visual interest comes from the type specimens themselves and the careful proportional relationships between elements, not from decorative ornament.

## Components

### Primary action button

- **Anatomy**: Text label with right-pointing arrow, contained in a solid rectangular button
- **Surface**: Background color `{colors.accent}`, text color `{colors.surface-white}`
- **Typography**: `{typography.action}` at 14px Dia Black, uppercase, with arrow glyph
- **Shape**: Zero border radius—sharp rectangle
- **Spacing**: Padding 18px vertical, 20px horizontal; generous target size
- **Composition**: Centered within its container, often following descriptive content
- **States**: Visible state shows solid mauve fill; the arrow suggests forward action

### Featured specimen card

- **Anatomy**: White frame containing variable media (image, illustration, or type specimen), with metadata below
- **Surface**: Frame background `{colors.surface-white}`, page background `{colors.surface}`
- **Typography**: Title in `{typography.section-display}` Domaine; metadata in `{typography.label}` Dia Black uppercase
- **Shape**: 4px border radius on frame; media may fill or inset
- **Spacing**: Frame padding 24px; gap between grid items approximately 48px
- **Composition**: Two-column grid on homepage; media above, title and date below
- **Metadata**: "FONTS —" prefix in Dia Black, followed by comma-separated family names in Domaine; date aligned right in Dia Black

### Testimonial card

- **Anatomy**: Email-style card with sender avatar, name, date, star action, and body text
- **Surface**: Background `{colors.surface-white}`, soft shadow `{colors.accent}` at 15% opacity
- **Typography**: Sender and body in `{typography.body}` Domaine; metadata in smaller Dia Black
- **Shape**: 4px border radius
- **Spacing**: Padding 27px top, 48px sides, 24px bottom; stacked vertically with 48px gap
- **Composition**: Full-width within narrow content well; avatar left, date and actions right
- **States**: Static display of received testimonials; no visible interaction states

### Navigation bar

- **Anatomy**: Horizontal list of uppercase category links below a thin horizontal rule
- **Surface**: Transparent, page background shows through
- **Typography**: `{typography.navigation}` Dia Black, 14px, uppercase, normal letter spacing
- **Shape**: No visible borders on items; rule above spans content width
- **Spacing**: Items padded 19px horizontally; 24px horizontal page padding
- **Composition**: Centered below hero area; items evenly distributed
- **Items**: FONT LISTS, LOOKBOOKS, CHECKLIST, FREE FONTS, LEARNING RESOURCES

## Responsive behavior

The visible layout suggests a desktop-first approach with a narrow content well. At smaller viewports, the two-column specimen grid should collapse to a single column, maintaining the white frame treatment and full-bleed media. The large wordmark will require scaling down—potentially to 3rem or 4rem—to preserve horizontal fit. Navigation items may wrap to two lines or compress into a compact menu if space constrains the full uppercase labels. Testimonial cards should remain full-width within the narrowed well, with sender metadata stacking above the body text rather than flanking it. The generous 84px top margin can reduce proportionally on smaller screens to maintain content prominence without excessive scrolling.

## Practical implementation guidance

### Preserve
- The warm rose surface tone as the dominant background; avoid shifting to neutral gray
- The sharp-cornered button aesthetic alongside the slightly rounded card frames—this contrast is intentional
- The "FONTS —" prefix pattern for specimen attribution; it creates scannable consistency
- The enormous Domaine wordmark as the immediate brand signature
- The generous vertical margins that create editorial pacing

### Avoid
- Adding decorative borders or shadows beyond the single soft elevation shadow
- Introducing additional typefaces; the two-family system is deliberately constrained
- Rounding buttons; the zero-radius rectangle is a distinctive choice
- Saturating the accent color; its muted quality is essential to the palette's warmth
- Crowding the navigation; the airy spacing between uppercase items matters

### Recommended build order
1. Establish the surface background and ink text colors globally
2. Implement Domaine at body size with comfortable line height for all reading text
3. Build the centered narrow well with 24px horizontal padding
4. Create the Dia Black navigation with uppercase treatment and horizontal rule
5. Scale the Domaine wordmark to dramatic display size in the hero
6. Implement the white-framed card component with 4px radius
7. Add the specimen grid with two-column layout and metadata pattern
8. Build the sharp-cornered accent button with arrow icon
9. Layer the soft mauve shadow for elevated cards

### Accessibility
- Ensure the 4.5:1 contrast ratio between ink (#443235) and surface (#E6DDDE) meets WCAG AA for body text
- The accent button text in white on mauve should be verified for contrast compliance
- Navigation items lack visible focus indicators in the still image; implement clear focus states for keyboard users
- The large wordmark is decorative in function; ensure proper heading hierarchy follows for screen readers
- Testimonial cards contain meaningful content; maintain logical reading order when stacking at narrow widths

## Scope note

This guide covers the Typewolf homepage and its visible components: the hero wordmark, navigation, featured specimen grid, and testimonial section. Interior pages, mobile breakpoints, hover and focus states, loading behavior, and any checkout or subscription flows are not represented in the supplied material. The type scale uses exact values from the source where available, with relative-unit rounding applied to spacing tokens for practical implementation.
