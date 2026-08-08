# How andrian-portfolio-backup.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/andrian-portfolio-backup.framer.website-design)

Last updated: 2026-08-08

## Captured pages

[![Cream hero with centered Explore Selected Work headline and floating corner tiles](https://pin.fontofweb.com/5080?format=jpg)](https://design.withfudge.com/share/pin-5080)

[Cream hero with centered Explore Selected Work headline and floating corner tiles](https://design.withfudge.com/share/pin-5080)

[![Full-width red chapter with stacked white type and scalloped bottom edge](https://pin.fontofweb.com/5078?format=jpg)](https://design.withfudge.com/share/pin-5078)

[Full-width red chapter with stacked white type and scalloped bottom edge](https://design.withfudge.com/share/pin-5078)

## Overview

This page reads like a poster-first portfolio rather than a conventional studio site. The first screen is dominated by open cream space, a centered black headline, and a few tiny square ornaments that give the composition a playful, retro pulse. The design relies on contrast between a very quiet field and a few very loud graphic moments. The result feels confident, youthful, and slightly nostalgic, with a clear preference for centered type, hard edges, and simple shapes.

The system is built around three voices. Anton gives the page its heavy, condensed display tone. Source Code Pro handles the smaller navigation and the longer self-introduction, which makes the page feel typed and orderly. A handwritten coral signature acts as a personal mark, so the page keeps a human edge without losing its graphic discipline. The layout does not try to fill every inch. Instead, it lets each major piece claim its own space and keeps the page readable as a sequence of bold chapters.

## Colors

| token | value | role |
|---|---|---|
| `ink` | `#000000` | Headline letters, navigation text, logo outlines, and the hard frame around the bright accents |

Black is the only reusable interface color that should be treated as a stable design token here. It carries the typography, sharpens the square ornaments, and defines the edges of the brighter controls. The rest of the color world belongs to the page’s character rather than to a broad system palette. A warm cream field forms the main canvas, a coral signature mark adds a hand-drawn accent, a bright blue contact control provides a strong action point, and small green, yellow, pink, white, and red blocks add a toy-like rhythm around the page.

That color balance is important. The page works because the cream background stays calm and the saturated accents stay sparse. The black text and outlines keep everything legible and prevent the playful colors from drifting into decoration for its own sake. The red chapter later in the page is not a separate app state; it is a dramatic scene change. Keep that contrast intact so the home surface can move from quiet to loud without losing its identity.

The palette should therefore be handled in layers. Use black for the text system and outlines. Let the light canvas carry most of the page. Reserve the brighter tones for the logo, controls, ornament clusters, and the chapter break. That gives the site a memorable graphic personality without turning it into a cluttered rainbow.

## Typography

Anton is the main display voice. It powers the huge centered hero, the work-intro title, and the later full-bleed chapter heading. Source Code Pro sits underneath it and changes the temperature of the page: it feels technical, typed, and a little editorial, which is a useful counterweight to the loud display type. The handwritten signature is a separate identity gesture and should stay distinct from the body system. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Anton | 6.5rem | 400 | 0.9 | -0.04em | Main centered home headline |
| `section-display` | Anton | 4.5rem | 400 | 0.95 | -0.035em | Large chapter headings and poster-style sections |
| `feature-display` | Anton | 2.5rem | 400 | 0.95 | -0.025em | Smaller project or section titles |
| `body` | Source Code Pro | 1rem | 200 | 1.7 | 0.06em | Long intro paragraph and supportive copy |
| `body-strong` | Source Code Pro | 1rem | 400 | 1.6 | 0.04em | Navigation and emphasized explanatory text |
| `nav` | Source Code Pro | 0.75rem | 400 | 1.3 | 0.16em | Uppercase header links |
| `label` | Source Code Pro | 0.75rem | 200 | 1.3 | 0.12em | Small labels and quiet metadata |
| `legal` | Source Code Pro | 0.75rem | 200 | 1.5 | 0.04em | Footer or fine-print text |

The display family should feel compressed, heavy, and very assertive. It needs enough line contrast to hold the hero and the large red chapter, but not so much letter spacing that it loses its signboard energy. The supporting monospaced face should feel lighter and more spacious, especially in the intro paragraph where the longer sentence structure needs room to breathe. That contrast between blunt display type and measured monospaced copy gives the page its personality.

The visual system depends more on scale contrast than on many family changes. Keep the hero at a much larger size than the rest of the page. Let the smaller text step down quickly so the monospaced blocks do not compete with the big headline. Use the strongest weights for navigation and compact labels, and keep the lighter weights for quieter metadata. That preserves the page’s crisp editorial feel.

## Layout

The layout behaves like a sequence of poster panels. The first screen is almost empty on purpose: a lot of light canvas, a centered headline, and a few small marks around the edges. That emptiness gives the page a roomy, deliberate feeling and lets the typography own the scene. The hero sits in the center rather than hugging a column, so it feels like a sign suspended in open space rather than a standard website title.

The header stays light. It uses the signature mark, a centered set of links, and a strong contact control without surrounding those pieces with a bulky shell. That keeps the top of the page from feeling heavy and allows the hero to remain the main event. The small blue contact control is the most obvious action point, while the rest of the bar behaves like a quiet navigation strip.

Below the hero, the monospaced introduction stretches horizontally and reads like a personal statement. It should feel open, not dense. The preview card sits low and is only partly revealed, which makes the page feel scrollable and suggests more work below. That cropped edge is part of the composition and should not be flattened into a fully enclosed card. The red chapter then changes the mood completely. It expands to the full width, uses a loud flat fill, and turns the page from a calm portfolio field into a graphic poster moment.

Generous spacing is essential throughout. The design needs room between the hero, the intro, the preview, and the chapter break so each scene can read on its own. This is not a crowded grid site. It is a sequence of large, clear, highly contrasted moments.

## Visual language

The visual language comes from a blend of strictness and play. Anton brings a blunt poster voice. Source Code Pro brings a typed, orderly voice. The signature mark adds a hand-drawn voice. Those three together create a page that feels creative without becoming loose or messy.

The small square ornaments are the strongest expression of the playful side. They feel like tiny tiles or sticker blocks: rigid, bright, and sharply outlined. Their job is not to fill space, but to balance it. They sit near the corners and outer edges so the huge open center does not feel empty in a way that is accidental. They give the page a game-like pulse while keeping the composition grounded.

The page also avoids soft, shiny, or overly dimensional treatments. It prefers flat color fields, crisp black edges, and simple geometric silhouettes. Even the louder sections feel disciplined because the shapes remain clean and direct. The red chapter is the clearest example of this approach: it uses a loud color field, a white stacked headline, small sticker-like graphics, and a sharply defined lower edge to create a graphic flyer effect.

That mix of warm personality and hard-edged clarity is the core of the system. The site should feel handmade and digital at the same time. The handwritten logo and bright ornament blocks make it feel personal. The monospaced text and strict display type keep it structured. Together they produce a memorable portfolio language that is bold, simple, and easy to recognize.

## Components

### Header and wordmark

- **Anatomy:** Left-side signature mark, centered navigation, and a right-side contact control with a small social chip nearby.
- **Surface:** The header sits directly on the cream canvas instead of inside a heavy bar.
- **Typography:** Navigation uses the compact Source Code Pro treatment; the logo remains a separate handwritten identity mark.
- **Shape:** Use crisp outlines and compact silhouettes so the header stays light.
- **Composition:** Keep the header from overpowering the hero. It should support the page, not compete with it.

### Hero headline

- **Anatomy:** Two stacked lines with a short first line and a wider second line.
- **Typography:** Anton, centered, large, and compressed.
- **Spacing:** Leave generous air around the block so it reads like a sign in open space.
- **Hierarchy:** This is the strongest moment on the page and should remain the clearest focal point.
- **States:** The static composition is enough; do not add extra decoration inside the letterforms.

### Intro paragraph

- **Anatomy:** A wide block of monospaced text with the name highlighted in a contrasting script mark.
- **Typography:** Source Code Pro with a light weight and a measured line rhythm.
- **Surface:** Transparent over the canvas; no panel is needed.
- **Composition:** Keep the block broad and readable so it feels like a direct statement.
- **Tone:** It should sound personal and specific, not promotional.

### Decorative pixel marks

- **Anatomy:** Small square clusters in green, yellow, pink, white, red, and black.
- **Shape:** Hard-edged tiles with black outlines.
- **Composition:** Place them near the corners and outer edges to balance the large open middle.
- **States:** They are decorative only and should not read as controls.
- **Role:** These marks give the page its playful, game-like character without adding visual noise.

### Project preview card

- **Anatomy:** A bright frame around a muted inner surface with a project preview inside.
- **Surface:** The frame should feel bold and graphic, not soft or glossy.
- **Spacing:** Keep enough outer air so the card feels partly revealed rather than fully boxed in.
- **Composition:** Let the card sit low enough to suggest more content below.
- **Variants:** Future previews can shift the outer accent color while keeping the same strong outline language.

### Orange-red poster section

- **Anatomy:** A full-width saturated field, stacked white headline, small sticker-like graphics, and a distinct lower edge.
- **Typography:** Use the Anton chapter style for the central title.
- **Surface:** Flat, loud, and uninterrupted by extra panels.
- **Composition:** Center the title and let the sticker graphics attach directly to it.
- **Hierarchy:** Treat this section as a chapter break, not as a card.

## Responsive behavior

On smaller screens, keep the poster feeling but reduce the horizontal spread. The hero can break into more lines so it does not run edge to edge. The header should simplify cleanly: keep the identity mark visible, keep the navigation readable, and make sure the contact control remains easy to reach. The social chip can stay small as long as it does not crowd the logo or the main headline.

The intro paragraph should remain legible and should not collapse into a tiny block of gray text. The project preview should scale down before it loses its graphic border language, and it can remain partly clipped if that helps preserve the sense of a scrolling sequence. The corner ornaments may shift closer to the edges or shrink slightly, but they should never crowd the hero or create overlap that weakens the composition.

The red chapter should keep its identity even on narrow widths. Preserve the strong color, the centered title, and the playful sticker feel. If space gets tight, simplify the ornament scale before reducing the chapter into a generic block. The whole page should still feel like the same system, only compressed for a smaller screen.

## Practical implementation guidance

### Preserve

- Keep the cream canvas, black outlines, and huge Anton headlines.
- Preserve the contrast between the strict monospaced copy and the playful ornament blocks.
- Keep the handwritten signature as a separate identity gesture.
- Allow large areas of negative space around the hero.
- Treat the red chapter as a bold tonal shift rather than a boxed section.

### Avoid

- Avoid soft gradients, glossy shadows, and generic app-shell chrome.
- Avoid adding extra type families that dilute the clean display-to-mono contrast.
- Avoid filling the page with too many panels or cards.
- Avoid shrinking the hero until it loses its poster scale.
- Avoid turning the square ornaments into background noise.

### Recommended build order

1. Establish the canvas color, black text color, and spacing rhythm.
2. Build the header with the signature mark, centered links, and contact control.
3. Place the centered Anton hero.
4. Add the monospaced introduction with the highlighted name mark.
5. Add the corner ornament clusters.
6. Build the partially revealed preview frame.
7. Finish the red chapter section and its lower-edge treatment.
8. Check the layout at narrow widths and keep the hierarchy intact.

### Accessibility

- Make the contact control large enough to tap and give it a clear focus ring that fits the black-outline language.
- Keep the navigation links readable and provide real link text instead of relying on the signature mark as the only identity cue.
- Mark the square ornaments as decorative so they do not distract assistive technology.
- Maintain strong contrast for the black text, borders, and outlines.
- Keep the monospaced paragraph readable at small sizes.

## Scope note

This guide covers the desktop home surface: the header, hero, monospaced introduction, project preview frame, pixel ornaments, and the red chapter break. It does not define mobile reflow, motion, hover or focus variants beyond basic accessibility cues, deeper project pages, or alternate content states.
