# How cracked.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cracked.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered yellow wordmark with a two-tier masthead and thin category strip](https://pin.fontofweb.com/8241?format=jpg)](https://design.withfudge.com/share/pin-8241)

[Centered yellow wordmark with a two-tier masthead and thin category strip](https://design.withfudge.com/share/pin-8241)

[![Large feature image beside a stacked headline rail split by teal rules](https://pin.fontofweb.com/8242?format=jpg)](https://design.withfudge.com/share/pin-8242)

[Large feature image beside a stacked headline rail split by teal rules](https://design.withfudge.com/share/pin-8242)

## Overview

Cracked is a blunt, magazine-style entertainment system. The page sits on a pale canvas, then uses black type, teal utility marks, and a bright yellow signal color to keep the reading path loud and direct. The masthead is oversized and centered, the story stream is dense, and the page repeatedly returns to a simple formula: image, headline, short blurb, rule, next item.

The design feels like a web tabloid with a newspaper spine. It does not chase softness or polish. Instead it leans on heavy display type, compact module spacing, and thin separators that keep the page moving. The strongest visual move is the contrast between the wide yellow brand band and the otherwise restrained white and gray surfaces. That contrast makes the site feel immediate, opinionated, and easy to scan.

Three ideas matter most:

- The brand mark is the loudest object on the page.
- Headlines carry most of the personality.
- Rules and spacing organize density without adding decoration.

## Colors

The color system is narrow and purposeful. The page stays on the light side, with white, warm off-white, and very light gray doing most of the structural work. Black is the default text color and the color of the strongest headlines, giving the whole site a hard editorial edge. Teal is the functional signal color: it appears in small icon treatments, thin rules, and utility accents, so it reads as the active interface color without overwhelming the content. Yellow is the brand’s loudest accent and is used sparingly in places that need to pop: the CRACKED wordmark, the small category chips, and the newsletter band.

The relationship between the colors is straightforward. White and pale gray surfaces keep story modules readable. `surface-subtle` separates secondary wells from the page canvas without turning them into dark cards. `border` handles the thin horizontal dividers that repeat through the layout. `accent` is not a general background color; it is a signal color that should be reserved for labels, the brand mark, and major calls to action. `accent-soft` can support yellow surfaces when a lighter band or tag needs a less intense edge. There is no established dark mode in the supplied views, so the system should remain centered on light backgrounds and high-contrast black text.

## Typography

Cracked uses three families with clearly separated jobs. `Neuekabel` drives the display voice: the masthead, the biggest feature headlines, section labels, and the bold story rail titles. It gives the site its comic-book weight and its slightly theatrical seriousness. `Open Sans` is the utility face. It fits the navigation and other compact interface text because it stays clean at 16px and does not compete with the display type. `Source Serif 4` adds a magazine note to story blurbs and bylines. That serif voice is what keeps the page from feeling purely shouty.

Licensing terms for these families are not supplied in the packet and should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neuekabel | 2.25rem | 900 | 1 | 0em | Main feature headline and the loudest page statements |
| section-display | Neuekabel | 1.875rem | 900 | 1.05 | 0em | Full-width promo bands and large section calls |
| card-heading | Neuekabel | 1.625rem | 700 | 1 | 0em | Lead story titles and strong card headings |
| subhead | Neuekabel | 1.375rem | 700 | 1.15 | 0em | Secondary headlines in stacked rails |
| rail-head | Neuekabel | 1.25rem | 700 | 1.15 | 0em | Narrow-column headlines and compact story titles |
| body | Source Serif 4 | 1rem | 400 | 1.75 | 0em | Story blurbs and supporting paragraphs |
| byline | Source Serif 4 | 1rem | 400 | 1.5 | 0em | Author lines, dates, and short supporting metadata |
| nav | Open Sans | 1rem | 700 | 1 | 0em | Top navigation and utility labels |
| label | Neuekabel | 0.75rem | 700 | 1 | 0.04em | Yellow category chips and small uppercase tags |

The hierarchy depends more on scale and weight than on many font families. The display faces are compact, often all-caps in feel even when mixed case is used, and they tolerate tight leading. The serif copy opens up, which gives the story summaries a little breathing room beneath the heavier titles. The result is a page where the headline always wins first, then the summary, then the metadata.

## Layout

The layout is an editorial grid built around a strong central frame. On the homepage, the masthead sits above a broad content field, and the featured story claims a large left area while a narrow right rail stacks additional headlines. On the category page, the same structure becomes more explicit: the brand mark and utility controls sit at the top, a horizontal category bar runs under it, and the first major story stretches across a wide lead area with a compact story rail beside it.

Spacing is tight inside modules and looser only at chapter breaks. The packet’s spacing values cluster around 10px, 16px, 20px, 30px, 40px, 50px, and a very large 282.5px outer inset on the widest home composition. That means the page should feel dense but not cramped: small gaps separate a headline from its blurb, a chip from its title, or one stacked rail item from the next. Larger gaps are reserved for transitions between the masthead, the feature lead, the newsletter band, and the lower story grid.

The separators matter as much as the blocks. Thin 1px horizontal rules divide the navigation from the content field and divide stacked items in the right rail. The system does not rely on large borders or soft cards to organize content. Instead, it uses alignment, repeated rule lines, and consistent gutters. The main reading column is centered, but the visual rhythm comes from asymmetry: a large image on one side, headlines on the other, and then a more list-like grid below.

The page also uses a clear shift in module scale. The lead story is image-forward and headline-heavy. The lower rows shrink into thumbnail-led cards with shorter text. The newsletter band interrupts the grid with a full-width block of saturated yellow, which acts like a loud pause before the page returns to the article stream. That alternating scale is central to the site’s personality.

## Visual language

Cracked borrows from old-school internet magazine cues and makes them feel intentional. The big yellow wordmark is loud, almost poster-like, while the rest of the page stays plain enough to keep the content legible. Most surfaces are flat. There are no soft shadows trying to fake depth. The design prefers rules, image crops, and weight changes over decorative chrome.

The visual grammar is repetitive in a good way. A story often begins with a chip, continues with a heavy headline, and ends with a serif blurb. The right rail compresses that same grammar into a stacked column. The thumbnail cards shift the balance toward image-first layout, but they keep the same black text, yellow label, and thin divider logic. This makes the page feel like one system even when the article formats vary.

Teal is the quiet line color that keeps the page from going monochrome. It appears as a crisp utility note rather than as a decorative wash. Yellow is the opposite: it is the brand shout. Because those two colors are used with restraint, the black type and pale surfaces remain in control. The result is a system that feels energetic, opinionated, and slightly mischievous without becoming busy.

## Components

### Masthead and category navigation

- **Anatomy:** Centered brand mark, utility icons at the sides, and a horizontal category strip below.
- **Surface:** White or near-white field with thin black or gray rules separating the bar from the content below.
- **Typography:** `nav` for the category strip; the brand mark uses the strongest display treatment in the system.
- **Shape:** Mostly square, with no rounded chrome. The logo itself is a bold, blocky word treatment.
- **Spacing:** Broad horizontal breathing room at the top; compact spacing within the category row.
- **Visible states:** The active path can sit under a stronger rule or feel more visually anchored, but the layout should remain simple and flat.

### Feature story module

- **Anatomy:** Large lead image, yellow tag, bold headline, short serif blurb, and author/date line.
- **Surface:** White cardless composition on the pale canvas; the image dominates the upper half.
- **Typography:** `label`, then `hero-display` or `card-heading`, followed by `body` and `byline`.
- **Shape:** Hard edges and rectangular image crops. Little to no corner rounding.
- **Spacing:** Tight vertical rhythm inside the story block, with a larger gap before the next section.
- **Variants:** A homepage version with a larger image and a category page version with the title sitting tighter under the lead image.

### Story rail

- **Anatomy:** Stacked headlines, thin teal rules between entries, and occasional small circular or cropped images.
- **Surface:** Flat white against the pale page background.
- **Typography:** `subhead` or `rail-head`, depending on the width available.
- **Shape:** No card frame; the divider lines do the organizing.
- **Spacing:** Small gaps between headline blocks; the spacing should feel compressed but not crowded.
- **Visible states:** The rail should remain simple and readable, with the rules acting as the primary separator rather than background color.

### Thumbnail story row

- **Anatomy:** Rectangular thumbnail, yellow label, headline, short summary, and byline.
- **Surface:** White or off-white row with the image taking one side and text taking the other.
- **Typography:** `label`, `rail-head`, `body`, and `byline`.
- **Shape:** Images stay square-edged and editorial rather than soft or glossy.
- **Spacing:** Moderate internal gutters; enough room for the thumbnail to breathe without making the row feel sparse.
- **Composition:** The text block should stay compact and aligned, so the page keeps its magazine-like density.

### Newsletter band

- **Anatomy:** Small kicker, bold uppercase-style headline, email field, and a dark submit button.
- **Surface:** Saturated yellow band that breaks strongly from the pale page.
- **Typography:** `label` for the kicker and `section-display` for the main line.
- **Shape:** Rectangular field and button pair with clear edges.
- **Spacing:** The band needs generous side padding but should keep the form elements close enough to read as one action.
- **Visible states:** The field should feel plain and direct; the button should remain the darkest object inside the band.

### Promo slot

- **Anatomy:** A tall rectangular promotional block with a centered message and a clear action button.
- **Surface:** White or bright brand-colored block inside the article stream.
- **Typography:** Use the same compact display logic as the rest of the system, but keep the messaging secondary to editorial content.
- **Shape:** Flat rectangle, no decorative rounding.
- **Spacing:** The slot should occupy a full column width and stay visually distinct from the story rows around it.
- **Hierarchy:** It should read as a utility insertion, not as part of the article hierarchy.

## Responsive behavior

When the layout narrows, the system should preserve the reading order: brand, navigation, feature story, supporting rail, then lower rows. The right rail should collapse before the main story loses its image-first structure. Story chips and headlines should remain on separate lines long enough to stay legible, even if the rail becomes a single stack. The yellow newsletter band should keep its form controls usable without shrinking into decorative elements. The larger brand mark can reduce in scale, but it should still dominate the top of the page. The category strip can wrap or stack, yet it should not become a dense wall of links.

## Practical implementation guidance

### Preserve

- Keep the page flat and editorial. Thin rules and type scale should do the work, not shadows or gradient chrome.
- Keep `accent` scarce. Yellow should feel like a brand flare, not a background default.
- Keep the serif blurbs. They soften the headlines and make the page feel like a magazine rather than a product dashboard.
- Keep the grid dense. The site works because it fits a lot of stories into a controlled frame.

### Avoid

- Avoid rounded cards, soft shadows, and pastel panels. They dilute the hard editorial tone.
- Avoid using teal as a general surface color. It belongs in rules, icons, and small functional cues.
- Avoid mixing too many font sizes. The existing hierarchy is strong enough without extra steps.
- Avoid over-spacing the modules. Large gaps would break the magazine rhythm.

### Recommended build order

1. Build the centered masthead and category strip.
2. Set the display scale for the brand mark, lead headline, and stacked rail.
3. Add the main feature story with image, label, headline, blurb, and byline.
4. Add the right-side story rail and its thin dividers.
5. Add the thumbnail story rows and the newsletter band.
6. Finish with promo slots and the lower-grid spacing rules.

### Accessibility

- Maintain strong contrast on every pale surface. Black text on white and yellow should remain the default.
- Do not rely on teal alone to communicate structure. The rules should support, not replace, clear headings and labels.
- Keep keyboard focus styles visible on the menu, search, links, and form controls.
- Give images descriptive alternative text that matches the article subject.
- Ensure the newsletter field has a clear label and a button that can be reached without precision pointer input.

## Scope note

This guide covers the desktop homepage and category hub for Cracked, including the masthead, feature story, story rail, newsletter band, thumbnail rows, and promo slot. It does not define article interiors, comments, mobile rearrangements, hover choreography, or ad delivery rules. Spacing values are rounded to a consistent 0.125rem step.
