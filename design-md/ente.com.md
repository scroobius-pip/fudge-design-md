# How ente.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ente.com-design)

Last updated: 2026-08-08

## Captured pages

[![Wide hero with floating family photos and the centered trust strip](https://pin.fontofweb.com/8463?format=jpg)](https://design.withfudge.com/share/pin-8463)

[Wide hero with floating family photos and the centered trust strip](https://design.withfudge.com/share/pin-8463)

[![Full home view with safe-home headline, green badge card, and logo row](https://pin.fontofweb.com/8385?format=jpg)](https://design.withfudge.com/share/pin-8385)

[Full home view with safe-home headline, green badge card, and logo row](https://design.withfudge.com/share/pin-8385)

[![Hero crop with the sign-up and login pills above the photo stack](https://pin.fontofweb.com/8384?format=jpg)](https://design.withfudge.com/share/pin-8384)

[Hero crop with the sign-up and login pills above the photo stack](https://design.withfudge.com/share/pin-8384)

[![Ensu landing page with a centered title and black download pills](https://pin.fontofweb.com/8377?format=jpg)](https://design.withfudge.com/share/pin-8377)

[Ensu landing page with a centered title and black download pills](https://design.withfudge.com/share/pin-8377)

[![Blog-style Ensu page with rounded platform cards on a white field](https://pin.fontofweb.com/8376?format=jpg)](https://design.withfudge.com/share/pin-8376)

[Blog-style Ensu page with rounded platform cards on a white field](https://design.withfudge.com/share/pin-8376)

## Overview

Ente presents privacy as a calm, friendly home for personal photos rather than a technical vault. The home page is mostly white, with black navigation, rounded pills, and a centered headline that lands in two strong lines. The bright green emphasis in the hero gives the message a clear point of energy, but the rest of the system stays restrained so the page feels open and trustworthy.

The strongest image on the home page is the loose row of rounded photo cards. They are slightly rotated, spaced apart, and lifted with soft shadows so the page feels like a gallery of personal moments rather than a grid of product screenshots. That human warmth is balanced by a very simple control language: filled black sign-up buttons, a pale login pill, and a quiet row of press logos.

Lower down, the design shifts into utility surfaces. The Ensu pages keep the same white field and rounded geometry, but replace the photo story with centered product information, compact download actions, and pale cards with clearly separated rows. The result is a system that can move from lifestyle marketing to product utility without changing its underlying voice.

## Colors

Ente's palette is nearly monochrome, which makes the green hero accent feel even more deliberate. White carries the page background, card fields, and breathing room around every section. Black does the heavy lifting for the most important actions and for the footer slab. The two charcoal tones soften the text hierarchy: one for primary reading, one for quieter body copy and utility text. Gray is reserved for the least important brand marks, press logos, and tertiary labels. Photography supplies the color richness; the interface itself stays disciplined.

| token | value | use |
|---|---|---|
| `action` | `#000000` | Filled sign-up buttons, dark chips, and the strongest interactive surfaces |
| `ink` | `#282828` | Main headlines, navigation, and brand wordmarks on light surfaces |
| `muted-ink` | `#364153` | Supporting copy, platform labels, and quieter explanatory text |
| `quiet` | `#969696` | Press logos, secondary metadata, and low-emphasis utility text |
| `canvas` | `#FFFFFF` | Main page background, card fields, and the negative space around the layout |
| `surface-dark` | `#000000` | Footer slab and any deep utility section that needs a hard contrast break |
| `surface-soft` | `#FFFFFF` | Raised cards, ghost pills, and light product surfaces |

The color relationship is simple: light pages hold the story, black actions cut through the whitespace, and gray recedes into supporting roles. A darker surface appears only when the page needs a full-width closing block. That keeps the interface from feeling heavy while still giving the footer a clear ending. Keep any vivid accent local to its message so the broader system stays clean.

## Typography

Gilroy and Gilroy W 00 carry the same rounded geometric voice through the site. The larger headlines feel warm but firm, with tight leading and slight negative tracking. Smaller interface text stays compact, clean, and unshowy so the photography and hero statement stay in charge. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Gilroy | 4.5rem | 700 | 0.95 | -0.03em | The two-line hero heading and other top-level marketing statements |
| `section-display` | Gilroy | 3.5rem | 700 | 0.95 | -0.03em | Secondary page leads and centered product page titles |
| `feature-display` | Gilroy | 2.5rem | 700 | 1 | -0.02em | Strong section headings, mascot pages, and product-entry titles |
| `card-heading` | Gilroy W 00 | 1.5rem | 700 | 1.05 | -0.01em | Card titles, download-section labels, and compact headings |
| `body` | Gilroy W 00 | 1rem | 400 | 1.5 | 0em | Explanatory paragraphs and supporting copy blocks |
| `body-medium` | Gilroy W 00 | 1rem | 600 | 1.3 | 0em | Button text, emphasized helper copy, and stronger body lines |
| `navigation` | Gilroy W 00 | 0.875rem | 500 | 1.3 | 0em | Top navigation and small global links |
| `label` | Gilroy W 00 | 0.75rem | 600 | 1.2 | 0.04em | Tiny chips, platform names, and compact utility labels |
| `legal-copy` | Gilroy W 00 | 0.75rem | 400 | 1.45 | 0em | Footer metadata, legal lines, and the quietest text on the page |

The hierarchy depends on scale and spacing more than on many different weights. Headings are bold and centered or left-aligned in short blocks. Supporting copy should stay short enough that it never competes with the pictures. Keep the smallest text airy enough to read cleanly against white or black surfaces.

## Layout

The home page is built around a centered vertical spine. The logo sits high and left, the primary navigation sits across the top, and the hero message lands in the middle of the screen with wide open margins around it. The buttons beneath the headline are large, pill-shaped, and easy to scan. Below them, the image row becomes the visual anchor: several rounded photo tiles overlap slightly, each with its own crop and a small tilt that keeps the composition from feeling mechanical.

Spacing is generous. Big empty bands separate the header, the hero, the photo row, the press logos, and the lower sections. That white space is not leftover space; it is part of the identity. It lets the black text and the image cards breathe. The press row is a quiet horizontal strip with low-contrast logos and even spacing, which makes the home page feel credible without adding clutter.

The Ensu page keeps the same centered order but changes the structure beneath the title. The icon or mascot sits above a short explanatory paragraph, then the download options fall into rounded cards with row dividers and right-aligned pills. Platform names stay on the left, actions on the right, and the cards stack vertically with enough separation to keep each block distinct. The footer flips the mood into a black slab with multi-column link groups and a small utility line at the bottom, so the page can end in a denser, more functional layout without losing the brand's calm tone.

Use the wider section gaps for the home story and the tighter card gaps for the product pages. The large photo tiles need more open space than the download rows, and the footer needs the strongest vertical break so it feels like an intentional close.

## Visual language

Ente's visual language is friendly, domestic, and quietly technical. The photography shows people in ordinary moments, and the rounded card shapes turn those moments into a soft, curated strip across the page. The interface never tries to overpower the images. Instead, it frames them with white borders, shallow shadows, and a lot of empty space.

The action language is equally restrained. Black pills are the strongest signals on the page. They look solid and unambiguous, which suits a privacy product that needs to feel dependable. The lighter pills and card fields keep the system from becoming too heavy, while the gray logos and secondary text stay in the background.

A small green accent appears in the hero and in the encrypted badge treatment, which gives the brand a simple signal of safety without turning the whole page into a colored interface. That accent is strongest when it sits inside an otherwise monochrome field. It should stay local and meaningful rather than becoming a global chrome color.

The Ensu surfaces show the same language in a more product-focused form: a centered title, a small icon, pale cards, black pills, and a black footer. The geometry stays rounded, the surfaces stay quiet, and the page still feels approachable even when it becomes more informational.

## Components

### Header

The header is minimal and centered around the wordmark. Navigation links sit in a single line, and the main call to action is a black pill that reads as the most important item on the bar. The header should remain visually light so the hero can own the page. Keep the typography small and clean, and let the button carry the strongest contrast. Use the same pill shape and compact weight for any top-level account action.

### Hero stack

The hero is a centered text block with a two-line headline, a short supporting line, and two large buttons. The first button is filled black; the second is the lighter companion action. The headline is the main event, so it needs the heaviest weight and the tightest vertical rhythm. Keep the line lengths short enough that the two-line statement stays compact and balanced above the imagery. The bright accent in the first line should feel like a controlled emphasis, not a decorative flourish.

### Floating photo cards

The photo strip is the page's most distinctive visual component. Each tile is a rounded rectangle with a white edge, a soft shadow, and a slightly different rotation. The images overlap a little, which creates a casual, scrapbook-like rhythm without becoming messy. The crops should show people clearly and should avoid generic stock-photo symmetry. Preserve the slight asymmetry and the varied card sizes; that looseness is what keeps the hero warm.

### Trust strip

The press logo strip is quiet by design. It is a low-contrast horizontal band that signals credibility without stealing attention from the photos or the headline. Treat the logos as background support, not as a headline row. The spacing should be even and the text should remain small, muted, and secondary. This row works best when it feels almost like a footnote to the home page rather than a featured section.

### Product download cards

The Ensu download area uses rounded cards with a clear internal hierarchy. A title sits at the top of each card, then platform rows divide the content, and the action pills sit on the right side of each row. The cards feel calm because the structure is repetitive and easy to scan. Keep the row dividers light and the pills black so the user can quickly find the download target. The left-aligned platform names and right-aligned buttons create a simple, dependable reading path.

### Footer slab

The footer is the most compressed and functional part of the system. It turns the page black and lets white and gray text carry the information. Multiple columns sit side by side, with heading rows above quieter link lists. The footer needs a tighter rhythm than the home hero, but it should still keep the same rounded, friendly geometry at the top edge. Use it as a strong closing block rather than a dense catch-all for every possible link.

## Responsive behavior

On smaller screens, the layout should keep the same reading order: logo, navigation, headline, actions, imagery, trust strip, then the utility sections. The photo cards should reduce in number or stack more tightly before they lose their overlap and slight rotation. Buttons should remain large enough to tap comfortably, and the hero should stay centered instead of spreading into wide side margins. The Ensu cards should collapse into a single column with the labels above the actions when horizontal space is tight. The footer columns should condense in stages so the link groups stay readable.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let the images carry the warmth.
- Use the black pill as the strongest and most repeatable action shape.
- Preserve the slightly rotated photo cards with overlapping edges and soft shadows.
- Keep the press logos quiet and low-contrast.
- Hold the typography in short centered or left-aligned blocks rather than long paragraphs.

### Avoid

- Avoid adding colorful chrome across the interface; the system works because it is restrained.
- Avoid square photo containers or heavy borders that flatten the card rhythm.
- Avoid too many different button styles; the black pill should stay the main action language.
- Avoid dense card grids in the hero area; the page needs openness to feel calm.
- Avoid oversized legal text or busy footer treatments that compete with the main story.

### Recommended build order

1. Set the white canvas, black text colors, and rounded type scale.
2. Build the header and the two-button hero action pair.
3. Add the centered headline and supporting line.
4. Recreate the floating photo card strip with overlaps and soft shadows.
5. Add the quiet trust logo row.
6. Build the Ensu-style rounded cards with row dividers and right-aligned pills.
7. Finish with the black footer slab and its columns.

### Accessibility

- Keep contrast strong on every pill and text block.
- Make sure the light login-style action still reads clearly against the white field.
- Provide concise alternative text for people-focused images and for the mascot or app illustrations.
- Keep keyboard focus visible on every action, including the small pills in the download cards.
- Do not rely on color alone to separate the hero accent from the surrounding text.

## Scope note

This guide covers the desktop home hero, the press strip, the floating photo cards, the Ensu download layout, and the black footer shown here. It does not cover mobile reflow, motion, hover treatment, form flows, or unshown interior pages.
