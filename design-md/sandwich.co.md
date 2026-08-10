# How sandwich.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sandwich.co-design)

Last updated: 2026-08-10

## Captured pages

[![Dark FAQ teaser panel with yellow-green left border, white question text, and toast icon with SEE ALL FAQS link](https://pin.fontofweb.com/690?format=jpg)](https://design.withfudge.com/share/pin-690)

[Dark FAQ teaser panel with yellow-green left border, white question text, and toast icon with SEE ALL FAQS link](https://design.withfudge.com/share/pin-690)

[![Contact page with large Say hello heading, email callout with yellow underline, and split photo-map footer with black address card](https://pin.fontofweb.com/689?format=jpg)](https://design.withfudge.com/share/pin-689)

[Contact page with large Say hello heading, email callout with yellow underline, and split photo-map footer with black address card](https://design.withfudge.com/share/pin-689)

[![FAQ page with bold FAQ title, color-bar question markers in blue magenta and red, and thin answer body text](https://pin.fontofweb.com/688?format=jpg)](https://design.withfudge.com/share/pin-688)

[FAQ page with bold FAQ title, color-bar question markers in blue magenta and red, and thin answer body text](https://design.withfudge.com/share/pin-688)

[![About page with brick building photo and Looking to grow heading with magenta-red and teal-blue underlines plus jobs link](https://pin.fontofweb.com/687?format=jpg)](https://design.withfudge.com/share/pin-687)

[About page with brick building photo and Looking to grow heading with magenta-red and teal-blue underlines plus jobs link](https://design.withfudge.com/share/pin-687)

## Overview

Sandwich.co presents a creative studio identity built on confident contrast and playful restraint. The system pairs massive, tightly-tracked display headings with clean, readable body copy, then punctuates the composition with vivid horizontal rules and vertical color bars. The visual personality feels approachable yet authoritative—large type dominates the viewport, while small friendly icons and colorful accents keep the tone light. Photography appears in generous rectangular blocks, often paired with maps or location imagery in asymmetric layouts. The overall impression is of a team that takes its work seriously without taking itself too seriously: bold statements, clear structure, and unexpected color moments that reward attention.

## Colors

The palette operates on a high-contrast foundation with strategic accent deployment. Black and white handle the heavy lifting for readability, while a rotating set of bright accents—magenta, yellow, teal, blue, red, and green—provide personality and wayfinding. These accents never compete; each appears in isolation within a component, creating a consistent rhythm of color surprise.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, icons, borders |
| canvas | #ffffff | Page background, text on dark panels |
| accent-magenta | #e91e8c | Primary heading underlines, emphasis bars |
| accent-yellow | #f2c94c | Email underline, dark panel left border |
| accent-teal | #00bfa5 | Secondary heading underlines, growth accents |
| accent-blue | #4a90e2 | FAQ question markers, link accents |
| accent-red | #e53935 | FAQ question markers, urgent emphasis |
| accent-green | #7ed321 | Dark panel borders, success tones |
| surface-inverse | #000000 | Dark teaser panels, footer cards |
| text-inverse | #ffffff | Text on dark surfaces, icon fills |

The accent colors rotate by context: magenta dominates brand moments, yellow signals contact and warmth, teal and blue appear in growth and help contexts, while red and green provide structural variation in FAQ lists. No gradients or shadows are present; color sits flat against flat, creating crisp, poster-like edges.

## Typography

Two families drive the typographic hierarchy. Averta Pe handles all display work with confident weight and tight tracking, while Brix Sans Regular manages body copy and labels with neutral clarity. The contrast between the expressive display and the understated body creates a clear information hierarchy without size alone doing all the work.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Averta Pe | 4rem | 700 | 1.1 | -0.02em | Page titles, major statements |
| section-display | Averta Pe | 3rem | 700 | 1.15 | -0.01em | FAQ questions, section headers |
| body-large | Brix Sans Regular | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, email callouts |
| body | Brix Sans Regular | 1rem | 400 | 1.6 | 0 | Standard paragraphs, descriptions |
| label | Brix Sans Regular | 0.75rem | 400 | 1.4 | 0.08em | Uppercase labels, CTAs, metadata |
| navigation | Brix Sans Regular | 0.875rem | 400 | 1.4 | 0.04em | Navigation, secondary links |

Brix Sans Regular is designed by Hannes Von Doehren and Livius Dietzel. Verify licensing for these families before production use.

## Layout

The layout favors generous whitespace and asymmetric two-column arrangements. Content sits in a centered single column for text-heavy pages like FAQ, then breaks into split compositions for about and contact pages where photography shares space with typography. The grid is loose rather than rigid—images bleed to edges or sit in precise rectangles, while text maintains comfortable margins.

Section spacing runs wide, with major content blocks separated by substantial vertical gaps. The FAQ page stacks questions with significant breathing room between each entry, allowing the color-bar markers to register as distinct wayfinding elements. Contact and about pages pair large imagery with compact text blocks, creating a magazine-like pacing where the eye travels between photographic detail and typographic claims.

Horizontal rules and color bars provide structural rhythm. Heading underlines extend partially beneath display text, never fully containing it. Vertical bars precede FAQ questions, sitting flush left with generous padding before the question text. These elements create a consistent left-edge alignment that anchors the page despite varying content widths.

## Visual language

The visual language balances corporate confidence with creative playfulness. The signature element is the partial underline: thick horizontal rules in magenta, teal, or split colors that sit beneath display text like highlighter strokes. These rules are intentionally imperfect—slightly offset, varying in length, never fully boxing their text.

Iconography appears as simple line drawings: a smiling toast icon for FAQ links, a similar friendly mark for jobs calls-to-action. These icons sit at small scale beside uppercase label text, creating compact CTA clusters that feel human rather than corporate.

Photography is documentary and unstyled: brick buildings, street views, office environments presented without filters or overlays. The directness of the imagery reinforces the straightforward tone of the copy. Maps appear as simple line drawings, stripped of color and detail, functioning as graphic elements rather than functional navigation tools.

Color bars serve as both decoration and hierarchy. In the dark FAQ teaser, a thin yellow-green gradient bar runs the full left edge. In the FAQ list, solid vertical bars in blue, magenta, and red precede each question. These bars create rhythm and allow quick scanning without adding secondary type styles.

## Components

### Page heading
Anatomy: Large display text with partial underline rule.
- Surface and text color: `{colors.ink}` text on `{colors.canvas}` background.
- Typography: `{typography.hero-display}`.
- Shape and border: Thick horizontal underline in `{colors.accent-magenta}` or split `{colors.accent-magenta}` and `{colors.accent-red}`, positioned below baseline, extending roughly 60-80% of text width.
- Spacing: Generous top margin, compact bottom margin before body content.

### FAQ question
Anatomy: Vertical color bar, display question text, body answer.
- Surface and text color: `{colors.ink}` text on `{colors.canvas}`.
- Typography: `{typography.section-display}` for question, `{typography.body}` for answer.
- Shape and border: Solid left border in `{colors.accent-blue}`, `{colors.accent-magenta}`, or `{colors.accent-red}`, width approximately 0.75rem, height matching question text.
- Spacing: `{spacing.content-gap}` between bar and text, substantial vertical gap between questions.

### CTA link with icon
Anatomy: Small icon, uppercase label text.
- Surface and text color: `{colors.ink}` on `{colors.canvas}`, or `{colors.text-inverse}` on `{colors.surface-inverse}`.
- Typography: `{typography.label}`.
- Shape and border: No border; icon sits in simple square frame with `{rounded.icon}` corners.
- Composition: Icon left, text right, inline flex alignment.
- Variants: Dark variant inverts colors for use on `{colors.surface-inverse}` panels.

### Inverse teaser panel
Anatomy: Full-width dark panel with left color border, white text, CTA link.
- Surface and text color: `{colors.surface-inverse}` background, `{colors.text-inverse}` text.
- Typography: `{typography.section-display}` for question, `{typography.label}` for CTA.
- Shape and border: Left border in `{colors.accent-yellow}` transitioning to `{colors.accent-green}`, approximately 0.5rem width.
- Spacing: Comfortable internal padding, text aligned left.

### Contact email callout
Anatomy: Centered label, large email address, underline rule.
- Surface and text color: `{colors.ink}` on `{colors.canvas}`.
- Typography: `{typography.label}` for "SEND US AN EMAIL:", `{typography.body-large}` for address.
- Shape and border: Bottom border in `{colors.accent-yellow}`, 2px solid, centered beneath email.
- Spacing: Compact vertical stack with clear separation from surrounding body text.

### Photo-map split
Anatomy: Large photograph left, simple line map right, overlaid address card.
- Surface and text color: Photographic full color; map black lines on white; address card `{colors.surface-inverse}` with `{colors.text-inverse}`.
- Typography: `{typography.body}` for address details, `{typography.label}` for company name.
- Shape and border: Address card as solid black rectangle with internal padding.
- Composition: Image and map share horizontal space; card overlaps map intersection.

## Responsive behavior

The layout should maintain its asymmetric character at all widths. At narrower viewports, the photo-map split should stack vertically with the image leading, followed by the map and address card. FAQ questions should retain their left color bars but may reduce in size to 2.5rem to preserve line length. The partial heading underlines should scale proportionally, never becoming hairlines. Dark teaser panels should remain full-width with consistent internal padding. Navigation, if present in a header, should collapse to a compact menu or remain as a simple wordmark link.

## Practical implementation guidance

### Preserve
- The partial underline as a distinctive brand element: thick, slightly offset, never fully containing text.
- The two-family type hierarchy: expressive display against neutral body.
- The documentary photography style: unfiltered, honest, contextual.
- The rotating accent color system: each context gets one dominant accent.
- The friendly icon style: simple line drawings with consistent stroke weight.

### Avoid
- Adding drop shadows or gradients; the system is flat and poster-like.
- Using accent colors for large background fills; they should remain as rules, bars, and borders.
- Centering body text; the left-aligned structure is part of the rhythm.
- Overcrowding the FAQ spacing; the breathing room is intentional.

### Recommended build order
1. Establish the type scale with Averta Pe display and Brix Sans Regular body.
2. Implement the partial underline utility for headings.
3. Build the FAQ question component with color-bar variants.
4. Create the inverse teaser panel for dark callouts.
5. Add the photo-map split with overlaid address card.
6. Implement CTA links with icon and label pairing.

### Accessibility
- Ensure color bars meet minimum 3:1 contrast against backgrounds for wayfinding.
- Provide visible focus states on CTA links; the icon-plus-label pattern should have a unified focus rectangle.
- Maintain sufficient line length in body text: 45-75 characters per line for `{typography.body}`.
- The dark inverse panel should use `{colors.text-inverse}` at sufficient size and weight for readability.

## Scope note

This guide covers the about, FAQ, and contact page surfaces visible in the supplied images. The home page, navigation header, footer, and any motion or interaction patterns are not represented. Measurements are practical adaptation targets. Verify licensing for Averta Pe and Brix Sans Regular before production use.
