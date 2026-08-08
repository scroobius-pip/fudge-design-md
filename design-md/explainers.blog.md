# How explainers.blog is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/explainers.blog-design)

Last updated: 2026-08-08

## Captured pages

[![Blue hero panel with centered white title and cloud field](https://pin.fontofweb.com/6337?format=jpg)](https://design.withfudge.com/share/pin-6337)

[Blue hero panel with centered white title and cloud field](https://design.withfudge.com/share/pin-6337)

[![Warm gradient newsletter band with mono field and button](https://pin.fontofweb.com/6336?format=jpg)](https://design.withfudge.com/share/pin-6336)

[Warm gradient newsletter band with mono field and button](https://design.withfudge.com/share/pin-6336)

[![Reading layout with contents rail, italic lead, and notes](https://pin.fontofweb.com/6335?format=jpg)](https://design.withfudge.com/share/pin-6335)

[Reading layout with contents rail, italic lead, and notes](https://design.withfudge.com/share/pin-6335)

## Overview

Explainers.blog is built like a calm editorial article system rather than a glossy blog theme. The page opens with a large blue hero, then settles into a centered white reading column, a left-hand contents rail, and a narrow body flow that rewards slow reading. The title carries the emotional weight; the paragraphs carry the explanation. That split gives the site its voice: direct, patient, and precise.

The design uses three kinds of surfaces. The main reading area stays white and quiet. The hero banner brings in a saturated sky field with a thick framed edge. The newsletter section shifts to a much warmer purple-to-orange band with technical line art. Because those surfaces are already expressive, the interface palette can stay compact and disciplined.

The page also depends on a clear type hierarchy. Newsreader gives the site its literary, explanatory tone. Figtree handles the light chrome, and Pp Supply Mono marks the index-like utilities and the closing note. That combination makes the site feel like a serious explainer that still has a recognizable personality.

## Colors

Color is restrained in the reading area and expressive in the presentation surfaces. White canvas keeps the article open and easy to scan. The two blues are the core interface accents: the brighter one is for primary links and emphasis, while the deeper indigo carries stronger emphasis and the filled button treatment in the newsletter band. Charcoal and softer gray handle the body copy, the contents rail, and small meta text. The photographic hero and the warm newsletter banner bring their own color energy, so the UI tokens do not need to do all the work.

| token | value | use |
|---|---|---|
| `action` | `#5B5BFD` | Primary links, emphasis, and the strongest small accent |
| `action-deep` | `#31359D` | Filled buttons, heavier emphasis, and compact controls |
| `ink` | `#2D2D2D` | Main reading text and the strongest neutral copy |
| `muted-ink` | `#424242` | Secondary notes, contents labels, and quiet support text |
| `canvas` | `#FFFFFF` | Page background, hero framing, and form fields |

Dark mode is not covered here; the system stays light on the reading canvas, lets the photographic hero and newsletter surfaces carry the richest color, and keeps the blue accents as the steady interface signal against white.

The relationship between the colors is simple and stable. `canvas` carries the reading space, `ink` and `muted-ink` keep the prose legible, and the two blues create the brand accent system without turning the page into a color-heavy interface. The hero photograph and the warm newsletter gradient provide contrast through imagery, not through extra UI colors. That keeps the page coherent from top to bottom.

## Typography

Newsreader is the main voice of the site. It carries the large article title, the opening summary, and the body prose with a serious editorial tone. Figtree steps in only for the light interface layer, such as the header and form treatment. Pp Supply Mono makes the contents rail and footer line feel index-like and technical without competing with the reading text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Newsreader 16 Pt | 4.375rem | 700 | 0.95 | -0.03em | Large hero headline on the sky banner |
| `article-deck` | Newsreader 16 Pt | 1.75rem | 400 | 1.15 | 0em | Hero subtitle and other lead statements |
| `body` | Newsreader 16 Pt | 1.25rem | 400 | 1.5 | 0em | Main article paragraphs and long-form reading |
| `body-italic` | Newsreader 16 Pt | 1.25rem | 400 | 1.55 | 0em | Opening italic block and emphasis-rich lead text |
| `navigation` | Figtree | 0.875rem | 500 | 1.4 | 0em | Header link, field labels, and the button label |
| `mono-label` | Pp Supply Mono | 0.75rem | 400 | 1.2 | 0.08em | Contents rail, footer line, and compact utility copy |

The hierarchy depends on strong size contrast more than on many weights. The title sits well above the rest of the page and feels dramatic; the deck steps down cleanly; the body stays steady for long reading. That jump is what makes the page feel editorial and not corporate. Letter spacing stays tight on the serif text and opens slightly on the mono labels so the structural pieces read as separate from the prose.

## Layout

The page starts with a very small header pinned to the top edge of the canvas. The brand mark sits at the left, while the single About link stays at the opposite side with almost no visual ceremony. That restraint sets the tone immediately: the content is the focus, not the navigation.

Below that, the hero panel spans most of the page width but still feels framed. Its white edge and soft lift keep the blue field from merging into the page background. The title and subtitle sit in the middle of the panel rather than at the far left, which gives the opening more presence and keeps the line lengths readable inside the image.

After the hero, the page turns into a reading layout with a narrow center track. The opening paragraph is set in italic serif text and uses generous top space so it feels like the first spoken thought after the headline. A left rail then introduces the contents list in small mono text, while the main article text runs in the center. On wide layouts, a small side note box can sit to the right of the body column and keep the center column from feeling too wide.

The newsletter banner returns to a single large container. The form is built into the surface itself, not placed in a separate card, so the call to action feels like part of the page rhythm. The footer stays tiny, centered, and subdued. It acts like a quiet end note after the article and signup sections have done the heavy lifting.

Spacing is one of the system’s main tools. The page uses broad outer margins, a strong gap between chapter-like sections, and compact internal spacing for form controls and small labels. Those choices keep the article readable even when the page contains a large hero, a contents rail, and a sign-up panel.

## Visual language

The site speaks in three distinct visual modes that share one editorial spine. First is the sky hero: a bright blue field that feels optimistic and open, with the title set directly on top of the image. Second is the white reading canvas: flat, calm, and almost austere, with serif paragraphs and a restrained contents list. Third is the warm newsletter band: a saturated purple-to-orange surface with fine line drawings, which makes the sign-up section feel more technical and more animated than the article body.

Softened geometry unifies the system. The hero banner is the most prominent example, but the form controls and the newsletter button also use the same rounded feeling. Even when the page changes color dramatically, the shape language stays steady. That is what keeps the site from feeling like a set of unrelated blocks.

Borders and shadows are gentle. The hero frame lifts off the page with a soft edge rather than a hard line, and the reading area relies more on spacing and alignment than on heavy card outlines. The result is a design that feels airy and careful. It never shouts, but it also never becomes plain.

The mono labels are important to the personality. They give the contents rail, the footer, and the small supporting lines a tidy, analytical rhythm. That makes the site feel like an explainer with structure, not a lifestyle magazine with decorative text.

## Components

### Site header
- **Anatomy:** small stacked wordmark on the left, single About link on the right.
- **Typography:** `navigation`.
- **Surface:** open canvas with no enclosing bar.
- **Spacing:** keep top padding compact and side space generous.
- **Visible state:** the header should stay visually quiet so it never competes with the hero.

### Hero panel
- **Anatomy:** blue sky field, large centered headline, two-line subtitle.
- **Typography:** `hero-display` for the title and `article-deck` for the subtitle.
- **Shape:** a framed rectangle with softened corners and a bright edge.
- **Surface:** image-driven, with the white text sitting directly on the photograph.
- **Composition:** center the title and keep the subtitle tucked under it with a clear width relationship.
- **Visible state:** the panel should feel lifted from the page, not flush against it.

### Article intro
- **Anatomy:** opening serif paragraph below the hero.
- **Typography:** `body-italic`.
- **Surface:** plain white reading canvas.
- **Spacing:** use a strong top gap so the intro feels like a new chapter.
- **Hierarchy:** this is the first long-form block after the hero, so it should read as a lead rather than as body filler.

### Contents rail
- **Anatomy:** uppercase label, Roman-numeral list, compact link stack.
- **Typography:** `mono-label`.
- **Surface:** none; it should feel embedded in the reading layout.
- **Spacing:** keep the rail narrow and aligned to the article grid.
- **Composition:** place it to the left of the main text on wide screens, then move it below the intro when space tightens.
- **Visible state:** links should remain subtle and text-like, not button-like.

### Body column
- **Anatomy:** serif paragraphs, inline emphasis, occasional side note.
- **Typography:** `body`.
- **Surface:** white canvas with no card chrome.
- **Spacing:** paragraph rhythm should stay open enough to support long reading sessions.
- **Composition:** keep line length controlled so the text stays easy to follow.
- **Hierarchy:** this is the main content block, so it should be visually steadier than the hero and less decorative than the newsletter section.

### Newsletter banner
- **Anatomy:** brand mark, short invitation, pill field, filled button, right-side line art.
- **Typography:** `navigation` for the form and `mono-label` for the small explanatory line.
- **Surface:** warm purple-orange gradient with faint technical drawings.
- **Shape:** a broad rounded container with pill controls.
- **Composition:** keep the form readable at a glance and let the diagrams sit behind it as support.
- **Visible state:** the filled button should read as the strongest interaction on the page.

### Footer line
- **Anatomy:** short centered statement and small copyright line.
- **Typography:** `mono-label`.
- **Surface:** plain canvas.
- **Spacing:** reduce visual weight so the footer feels like an ending note rather than a new section.
- **Hierarchy:** the footer should be the quietest text on the page.

## Responsive behavior

The desktop layout depends on a wide reading field, but the hierarchy should survive when the page narrows. The hero needs to keep its large title legible and allow the subtitle to wrap without crowding the frame. The contents rail should move closer to the main reading flow or drop below it so the body column remains readable. The newsletter banner should keep its form controls clear and stack the text and diagram more tightly when horizontal space disappears. The header should remain minimal and never become a dense nav bar.

On smaller screens, the page should preserve the order of meaning: hero, lead paragraph, contents, article body, newsletter, footer. That sequence matters more than preserving the exact desktop grid. The design is strongest when the text keeps breathing room, the controls stay pill-like, and the main reading column never gets squeezed into a long, cramped strip.

## Practical implementation guidance

### Preserve
- Keep the article voice centered on a large serif headline and a calm reading column.
- Preserve the bright blue hero field and the warmer newsletter band as the two major visual turns.
- Keep the mono utility text small, tight, and secondary.
- Use the bright accent blue sparingly so the page never feels over-branded.
- Let spacing and alignment do more work than borders or shadows.

### Avoid
- Avoid adding extra color tokens just to decorate small elements.
- Avoid replacing the reading column with a dense card grid.
- Avoid making the header heavy or adding a full-width navigation bar.
- Avoid mixing sans text into the article body; the serif reading voice should stay consistent.
- Avoid shrinking the headline too quickly on wider screens, since the title is the page’s anchor.

### Recommended build order
1. Set the white canvas, serif body text, and overall reading width.
2. Build the hero banner and confirm the title/subtitle hierarchy.
3. Add the contents rail and the main body column.
4. Introduce the newsletter banner with its form controls.
5. Finish with the small footer line and test the full vertical rhythm.

### Accessibility
- Keep the hero title readable against the sky field by preserving strong contrast.
- Give the form a clear label and make the button text explicit.
- Use visible focus styles on the header link, contents links, and form controls.
- Provide descriptive alt text for the sky field and the line drawings.
- Keep paragraph line lengths comfortable so the article remains easy to scan.

## Scope note

This guide covers the article page for “Why is the sky blue?”, including the hero banner, centered reading column, contents rail, newsletter band, and closing footer line. It does not define other posts, alternate templates, motion, or mobile-specific breakpoints.
