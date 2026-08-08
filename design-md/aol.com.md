# How aol.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aol.com-design)

Last updated: 2026-08-08

## Captured pages

[![Lead carousel beside a tall promo grid and bright yellow masthead](https://pin.fontofweb.com/8410?format=jpg)](https://design.withfudge.com/share/pin-8410)

[Lead carousel beside a tall promo grid and bright yellow masthead](https://design.withfudge.com/share/pin-8410)

[![Dark video tile with dense trending rows and compact side promos](https://pin.fontofweb.com/8409?format=jpg)](https://design.withfudge.com/share/pin-8409)

[Dark video tile with dense trending rows and compact side promos](https://design.withfudge.com/share/pin-8409)

## Overview

AOL’s homepage reads as a dense news portal rather than a spare landing page. The bright header announces the brand immediately, then the page opens into a broad light reading field packed with a lead carousel, a trending stack, and a right-side promo grid. The structure is direct: one dominant story block at the top, a strong supporting column beside it, and a second story-and-list band below. The design depends on quick scanning, not on decorative flourish.

The tone is familiar and mass-market. Black headlines carry most of the weight, blue links and controls guide the eye, and the bright top bar keeps the interface recognizable before the content settles in. Cards stay mostly rectangular, spacing is generous between major modules, and the page keeps a steady rhythm of image, headline, source line, and short supporting text. The result is busy in content but disciplined in layout.

## Colors

AOL uses a small, high-contrast palette. The bright header sets the brand tone, while the rest of the page stays in light neutrals so headlines and thumbnails do the work. Blue is the recurring action color: it marks links, arrows, and the sign-in path. The darker neutrals keep the wordmark, headlines, and utility copy legible without adding more color noise.

| token | hex | use |
|---|---|---|
| `action` | `#0047FF` | Carousel arrows, active links, and outlined controls |
| `link` | `#0000EE` | Secondary links and short prompts |
| `ink` | `#000000` | Wordmark, headlines, and the strongest text on light surfaces |
| `mutedInk` | `#232A31` | Source names, utility labels, and secondary text |
| `deepInk` | `#12161C` | Dark media frames and the heaviest neutral text |
| `navy` | `#001633` | Deep utility accents and note text |

The relationship between the colors is simple. The bright header carries the accent mode, the light body area carries the reading mode, photo areas bring the visual variety, and dark frames are reserved for video or paused media. Blue is reserved for things that can be used, not for decoration. That keeps the interface clear even when many thumbnails are on screen.

## Typography

The page is built on one family, **Basis Grotesque Pro**, and it uses weight and size changes to separate hierarchy. The look is sturdy and compact. Headlines are bold and tightly set, utility text is medium weight, and metadata is small and quiet. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `mastheadMark` | Basis Grotesque Pro | 2.5rem | 900 | 1 | -0.04em | AOL wordmark and the strongest brand label |
| `heroDisplay` | Basis Grotesque Pro | 1.875rem | 700 | 1.05 | -0.02em | Lead story headline beside the main image |
| `sectionHeading` | Basis Grotesque Pro | 1.5625rem | 700 | 1.1 | -0.02em | Module titles such as Trending Now |
| `storyTitle` | Basis Grotesque Pro | 1.25rem | 700 | 1.2 | -0.01em | Story cards, carousel copy, and the main rows |
| `body` | Basis Grotesque Pro | 0.9375rem | 400 | 1.5 | 0em | Supporting text and short prompts |
| `utility` | Basis Grotesque Pro | 0.9375rem | 500 | 1.2 | 0em | Search field text, nav items, and button labels |
| `meta` | Basis Grotesque Pro | 0.625rem | 400 | 1.3 | 0.04em | Source names, counters, and tiny metadata |
| `label` | Basis Grotesque Pro | 0.625rem | 700 | 1.1 | 0.08em | Section markers and compact tags |

The hierarchy relies on scale and weight more than on face changes. Headline text is bold enough to stand up to busy photography, while the smaller utility roles stay quiet so the news stream can remain dominant. The font works best when line lengths are short to medium and the leading stays tight. That keeps the page feeling quick, newspaper-like, and easy to skim.

## Layout

The desktop layout uses wide side gutters and a centered content column, so the page feels open even when it carries a lot of content. The masthead spans the full width, then a thinner utility strip sits underneath with local and visited shortcuts on the left and weather on the right. The first major content block is a wide carousel card: a large image on the left, a text panel on the right, and floating navigation arrows that sit partly outside the card edge. A small counter sits low in the text panel, which reinforces the idea that this is one item in a longer sequence.

Below the hero, the page splits again. A large story or video tile anchors the left side, while the right side becomes a dense list of trending items. Those rows are compact and repeat the same pattern: tiny source mark, short headline, and a small square thumbnail. Farther to the right, a promo grid stacks small image tiles into a mosaic, which gives the page a magazine-like feel without changing the basic grid. Thin horizontal rules separate major bands, but the spacing between modules does most of the separation work.

The layout rhythm is built from a few repeating measurements. Large side margins keep the content centered. Medium gutters separate image and text inside each card. Smaller gaps keep the list rows readable without making the page feel airy. The result is a strict desktop portal: broad, structured, and fast to scan.

## Visual language

AOL’s visual language is plainspoken and high contrast. The bright header acts like a brand banner, while the light body field makes the content feel immediate and easy to read. Most surfaces are flat. Where depth appears, it comes from soft shadows under the hero card, the carousel arrows, and the outlined pill button rather than from broad decorative shading. The page uses square or near-square card edges for most story units, which keeps the interface feeling utilitarian rather than lounge-like.

Photography does the expressive work. Large news images, small portrait thumbnails, and occasional dark video frames give the page variety, but the interface never competes with them. Blue links and controls are the only recurring action color, so the eye always knows where interactivity lives. The dense rows, tiny source markers, and image-heavy promos create a newsroom tempo: quick, stacked, and constantly moving from one headline to the next. Pill controls are reserved for search, sign-in, arrows, and the lower action button; the content cards stay much more grounded so they read as story blocks, not controls.

## Components

### Masthead and utility strip

- **Anatomy:** Menu icon, AOL wordmark, centered search field, help link, mail link, and a rounded sign-in button.
- **Surface:** Full-width bright bar with a white search pill cut into it.
- **Typography:** The logo is heavy and black; utility text is smaller and medium weight.
- **Shape:** The search field and sign-in control use pill geometry; the rest of the bar stays square and flat.
- **Spacing:** Large horizontal breathing room on both sides, with compact spacing between icons and labels.
- **Visible states:** The bar reads as a steady top anchor, with blue or black line icons and no ornate hover styling shown.

### Carousel hero

- **Anatomy:** Large image panel, story text panel, source line, related-link prompt, left and right arrows, and a small slide counter.
- **Surface:** Light card with a soft shadow around it.
- **Typography:** Bold story headline, smaller source label, and a short blue prompt beneath.
- **Shape:** The arrows sit in white circular or pill-like controls with blue chevrons, while the main card stays rectangular.
- **Spacing:** Image and text are separated by a narrow gutter; the counter sits low and centered in the text area.
- **Visible states:** The carousel shows its current position with a fraction-style counter and makes navigation obvious through the blue arrows.

### Trending block

- **Anatomy:** Section heading, a stack of compact story rows, source marks, small thumbnails, and a call-to-action button at the bottom.
- **Typography:** Strong section title, bold story lines, tiny source labels.
- **Composition:** Rows are tightly grouped and aligned to a clean vertical rhythm.
- **Surface:** Light background with very little ornament.
- **Shape:** The rows stay nearly square and flat, which keeps the block feeling like a news list rather than a card gallery.
- **Visible states:** The button at the bottom is an outlined pill with blue text and border, which keeps it readable without pulling focus from the stories.

### Promo mosaic and side tiles

- **Anatomy:** A vertical grid of small image tiles and narrow promo cards.
- **Surface:** Light field with image-first blocks.
- **Composition:** The tiles stack loosely but remain aligned to the right side of the page.
- **Spacing:** Small gaps between tiles create a magazine rack feel.
- **Shape:** The tiles are mostly rectangular with hard or nearly hard corners.
- **Visible states:** The promo area looks dense but not boxed in; each tile can stand alone without extra framing.

### Large video or feature tile

- **Anatomy:** A wide, dark media frame with an overlaid caption line at the bottom.
- **Surface:** Black or near-black playback area.
- **Typography:** Small light caption text over the lower edge of the image.
- **Composition:** The tile anchors the left side of the second band and balances the trending list beside it.
- **Shape:** The frame stays grounded and rectangular instead of pill-like.
- **Visible states:** The dark frame signals playable media or a video story even when the still is paused.

## Responsive behavior

On smaller screens, the design should keep the order of importance intact: masthead, search, main story, supporting story, then the trending list and promo tiles. The dense right rail will need to stack under the hero instead of sitting beside it. The carousel arrows, the pill button, and the search field should remain large enough to tap comfortably. Story rows should keep their source label, thumbnail, and headline in a clear vertical order so the news flow stays readable when space tightens.

## Practical implementation guidance

### Preserve

- Preserve the bright masthead as the page’s first and strongest brand signal.
- Preserve the light content field and the blue action color; those two roles make the interface readable fast.
- Preserve the dense portal rhythm: one large feature, then stacked story rows, then a promo cluster.
- Preserve the compact black headlines and tiny source labels; the hierarchy depends on that contrast.
- Preserve pill controls for search, sign-in, arrows, and the lower action button.

### Avoid

- Avoid turning the homepage into a sparse hero landing page.
- Avoid soft pastel branding or decorative gradients that weaken the direct news feel.
- Avoid rounded cards everywhere; most story units stay rectangular and plain.
- Avoid large blocks of body copy that slow the scan.
- Avoid changing the blue action color from control to decoration.
- Avoid hiding the utility links inside oversized chrome.

### Recommended build order

1. Build the masthead and utility strip.
2. Add the light search pill and the sign-in control.
3. Recreate the hero carousel card with its arrows and slide counter.
4. Add the trending module with its small thumbnail rows.
5. Add the right-side promo mosaic and the dark media tile.
6. Finish with the lower outlined button and the thin separators.

### Accessibility

- Keep blue links and buttons readable against bright and light surfaces.
- Make the search field, arrows, and pill button visibly focusable.
- Give every thumbnail and story image useful alt text.
- Do not rely on color alone to distinguish the action links; keep the arrow and pill shape cues.
- Keep headline lengths short enough that they do not collapse into awkward wraps on narrower screens.
- Make light caption text on dark media frames large enough to stay legible over imagery.

## Scope note

This guide covers the AOL homepage desktop portal: the bright masthead, utility strip, main carousel, trending list, promo mosaic, and lower story band. It does not include article pages, Mail, sign-in flows, or mobile rearrangements. Verify licensing for these families before production use.
