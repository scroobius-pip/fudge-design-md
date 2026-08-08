# How blog.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blog.google-design)

Last updated: 2026-08-08

## Captured pages

[![Wide launch hero with floating thumbnails and a rounded white story card](https://pin.fontofweb.com/7540?format=jpg)](https://design.withfudge.com/share/pin-7540)

[Wide launch hero with floating thumbnails and a rounded white story card](https://design.withfudge.com/share/pin-7540)

[![Search tray with a prompt row, divider line, and rounded suggestion pills](https://pin.fontofweb.com/4979?format=jpg)](https://design.withfudge.com/share/pin-4979)

[Search tray with a prompt row, divider line, and rounded suggestion pills](https://design.withfudge.com/share/pin-4979)

## Overview

blog.google presents Google as a calm, editorial news surface with launch-page energy. The page is built around two clear moves: a large feature stage with a blue headline, floating thumbnail imagery, and a rounded white story card; then a quieter search tray that turns the same visual language into a utility surface with a text prompt, divider rule, and rounded suggestion pills.

The system feels clean because it keeps the palette tight and the hierarchy obvious. White surfaces hold most of the text, Google blue handles action and emphasis, and gray supports secondary copy without competing with headlines. The page does not rely on ornament or dense chrome. Instead, it uses generous spacing, soft shadows, and 16px corners to make each block feel like a self-contained editorial card.

The design should read as Google-native rather than generic tech media. The typography is restrained, the text is friendly and direct, and the layout leaves enough room for imagery to breathe. Blue is the only loud accent, so every linked or primary element feels intentional.

## Colors

| token | hex | use |
|---|---|---|
| `action` | `#1A73E8` | Headline emphasis, links, arrows, and the most important calls to action |
| `action-strong` | `#3367D6` | Deeper blue accents when the interface needs more weight than the main action tone |
| `ink` | `#202124` | Main copy, card headlines, and the clearest text on white |
| `muted-ink` | `#5F6368` | Supporting copy, prompts, and secondary labels |
| `border` | `#364043` | Soft rules, divider tint, and shadow-adjacent hairline contrast |

The visible system is mostly a light editorial mode. White cards sit on a pale blue atmospheric field in the hero, so the interface can feel open without becoming empty. Photographic and launch imagery take on the role of the rich surface, while the blue action tone marks the handoff points where the page wants attention. If a darker treatment is added later, it should keep the same blue action color and the same gray text ladder so the brand still feels like Google editorial rather than a separate product line.

The strongest contrast pair is `ink` on white. `muted-ink` belongs to guidance text and short explanatory lines, not to titles. `action` should stay reserved for links, directional icons, and the few elements that need to pull the eye across the page. `action-strong` can appear in small doses when the design needs a deeper blue edge, but it should never replace the main blue as the page’s standard interactive tone.

## Typography

blog.google uses Google Sans and Google Sans 18 Pt as one family system. The 18 Pt cut carries the larger story headlines and feature titles; the standard family carries prompts, labels, and supporting copy. The overall feeling is crisp, plainspoken, and slightly softened by the rounded geometry of the family. Licensing for these families should be verified before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Google Sans 18 Pt | 3rem | 400 | 1 | -0.02em | Large blue hero title in the launch stage |
| `section-display` | Google Sans 18 Pt | 2.25rem | 400 | 1.05 | -0.02em | White-card headline and other large editorial headings |
| `card-heading` | Google Sans 18 Pt | 2rem | 400 | 1.1 | -0.015em | Feature-card title and other compact display lines |
| `body` | Google Sans | 1rem | 400 | 1.5 | 0em | Supporting copy, prompt text, and general explanation |
| `body-medium` | Google Sans | 1rem | 500 | 1.5 | 0em | Stronger body copy, links, and short utility statements |
| `label` | Google Sans | 0.75rem | 500 | 1.33 | 0.04em | Small blue eyebrow text and section labels |
| `navigation` | Google Sans | 1rem | 400 | 1.4 | 0em | Navigation and other quiet UI text |

The headline rhythm depends on scale more than on a large range of weights. Display text stays light and open, which makes the page feel editorial rather than promotional. Body copy sits at a comfortable 16px, which supports the tray text and the card summary without making the page feel dense. Small labels are compact and slightly tracked so they can sit above the larger copy without stealing attention.

The system should keep underlines and color changes available as part of the hierarchy. In the hero card, the main title uses underline as a clickable cue rather than a decorative flourish. That gives the page a content-first feel: the headline remains a headline, but it also behaves like a link.

## Layout

The homepage is organized as a wide, breathing desktop composition. The launch hero occupies a broad horizontal field with a soft blue atmospheric background, while the main white feature card overlaps that field and anchors the right side. The floating thumbnail tiles around the title make the whole opening feel like a curated cluster of stories rather than one isolated banner.

The card geometry is consistent and calm. Corners are rounded to 16px, shadows are soft and layered, and the spacing between objects is generous enough that nothing feels crowded. Small media tiles sit apart from one another so the composition reads as a collage, not a grid. The main card, by contrast, is a stable rectangle with a clear reading order: eyebrow, headline, summary, then arrow.

The second surface is more compact and functional. It reads like a search tray rather than a hero: a top row that behaves like an input, a divider, a plain explanatory line, a “Suggested searches” label, and then a row of pill-shaped chips. This structure turns the same visual language into a practical discovery tool. The difference in density is what makes the page feel composed rather than repetitive.

Spacing is built from a small rhythm of 8, 16, 24, 36, and 72px steps. Tight spacing belongs inside the tray and between short stacked lines. Medium spacing separates labels from body copy. The largest spacing belongs to the hero field and the outer breathing room around the floating imagery and main card. The design should not introduce many in-between measurements; the restrained scale is part of the identity.

## Visual language

The system combines three visible moods. First is the launch mood: soft blue background light, floating media tiles, and a strong headline in Google blue. Second is the editorial mood: a white rounded card with a small blue eyebrow, a black headline, and gray summary copy. Third is the utility mood: a quiet search surface where the chips and divider line turn the same palette into a guide for finding more content.

The imagery is treated like a set of clipped story fragments. Each thumbnail is small, rounded, and isolated enough to feel curated. None of the images try to fill the frame like a billboard. Instead, they support the title by making the page feel active and topical. That keeps the launch area lively without burying the typography.

The page’s most recognizable visual cue is the contrast between large open area and compact content block. The hero title sits in a wide field, but the actual reading unit is the rounded card on the right. That tension makes the page feel smart and editorial. Underlines, arrows, and pill chips do the work of drawing the eye without adding heavy buttons or flashy motion.

Blue is used as a precise accent, not a wash. It appears in the title, the eyebrow, the arrow, and the most important links. Gray copy keeps the page calm. White surfaces do most of the structural work. If a future page needs more emphasis, it should come from scale, spacing, and card overlap before it comes from adding more color.

## Components

### Hero launch card

- **Anatomy:** Floating thumbnail collage, large blue title, rounded white story card, small blue eyebrow, underlined headline, summary copy, and a lone arrow in the lower corner.
- **Surface:** The hero card sits on white, while the surrounding field uses a pale blue atmospheric wash.
- **Typography:** The blue page title uses the largest display size. The card headline uses the black display style with underline, and the summary stays at the standard body size in gray.
- **Shape:** The main card uses 16px corners. The surrounding thumbnails are also rounded so the collage feels related rather than mixed.
- **Composition:** The title has room to breathe between the thumbnails. The card overlaps the right side and should feel slightly elevated, not centered like a modal.
- **Visible states:** The arrow and underlined headline are the active cues. The design does not need louder buttons in this region.

### Search tray

- **Anatomy:** Top input row, divider line, one explanatory sentence, a “Suggested searches” label, and a row of rounded chips.
- **Surface:** White tray with soft elevation and a calm, utility-first reading order.
- **Typography:** Input and helper copy stay at body size. The label is smaller, tracked, and blue-leaning so it can sit above the chips without competing with them.
- **Shape:** The tray repeats the 16px corner language. The chips should read as pills with soft edges and generous horizontal padding.
- **Spacing:** The tray has more internal padding than a typical form field, which gives the chips space to breathe and keeps the section from feeling cramped.
- **Composition:** The helper line comes before the chip set, so the tray reads as a guided search surface rather than a generic query box.
- **Visible states:** The resting state is simple and quiet. The chips should feel ready to tap or click, but not loud.

### Suggested search chips

- **Anatomy:** Short text labels in rounded pills, each acting as a quick entry point into a topic.
- **Surface and text color:** Light pills with blue-leaning text work best against the white tray and should never read as dense buttons.
- **Typography:** Body-medium at 16px keeps the chips readable while leaving enough internal whitespace for the pill shape to show.
- **Composition:** Keep the set on one line when there is room, then let it wrap cleanly instead of shrinking the text.
- **Hierarchy:** These are secondary actions. They should support discovery without taking attention away from the feature card.

## Responsive behavior

On narrower screens, the hero should collapse into a stacked order: title first, image cluster second, story card third, then the search tray. The floating thumbnails can reduce in count or overlap more tightly so the page does not become cluttered. The white card should become full-width sooner than the decorative collage, because its text is the main reading unit.

The search tray should keep its calm structure when it wraps. The input row and helper text should stay legible at 16px, and the chip set should move to multiple lines without changing chip shape or reducing corner radius. The page can lose some horizontal drama on mobile, but it should keep the same contrast between the open hero field and the compact content surfaces.

The typography should step down in whole 4px increments only. Larger headline lines can drop one step at a time, but the page should never jump to a cramped text scale. The result should still feel editorial, not app-like or dashboard-like.

## Practical implementation guidance

### Preserve

- Keep the white card-on-stage structure in the hero.
- Preserve the 16px rounded corners and the soft layered shadow treatment.
- Use Google blue only for the emphasis points that need to lead the eye.
- Keep the typography light and open; the page should feel written, not shouted.
- Let the layout breathe with large outer spacing and compact inner groupings.

### Avoid

- Avoid heavy borders around every surface.
- Avoid turning every blue detail into a separate brand color.
- Avoid dense dashboard spacing or crowded card grids.
- Avoid extra font families, since the system already has a clear typographic voice.
- Avoid replacing underlines and arrows with large filled buttons in the hero.

### Recommended build order

1. Set the white canvas, blue action tone, and gray text ladder.
2. Build the hero field with floating thumbnails and the overlapping white card.
3. Add the display typography and the underlined linked headline treatment.
4. Build the search tray and its divider, helper copy, and chips.
5. Tune spacing so the page keeps the same breathing room across both surfaces.
6. Check the responsive stack so the content order stays clear when width shrinks.

### Accessibility

- Keep contrast strong for blue text on white and gray copy on white.
- Do not rely on color alone to signal that a headline or chip is interactive.
- Keep the underline visible on linked headlines.
- Make chip focus states clear enough to match the soft visual style.
- Use descriptive alt text for the launch thumbnails so the collage still communicates value when images do not load.
- Preserve readable line length in the feature card and avoid forcing the headline into a narrow column.

## Scope note

This guide covers the blog.google homepage surfaces shown here: the launch hero and the search tray with suggested queries. It does not include article detail pages, author profiles, footer structures, hover motion, or alternate color schemes. The type and spacing scales are expressed as practical implementation targets.
