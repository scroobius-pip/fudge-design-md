# How giga.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/giga.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Thin waveform strip with purple line and three dark status chips](https://pin.fontofweb.com/8976?format=jpg)](https://design.withfudge.com/share/pin-8976)

[Thin waveform strip with purple line and three dark status chips](https://design.withfudge.com/share/pin-8976)

[![Centered serif hero with glowing pink orb and mountain backdrop](https://pin.fontofweb.com/8975?format=jpg)](https://design.withfudge.com/share/pin-8975)

[Centered serif hero with glowing pink orb and mountain backdrop](https://design.withfudge.com/share/pin-8975)

[![Dark timeline section with a violet-to-peach progress line](https://pin.fontofweb.com/8972?format=jpg)](https://design.withfudge.com/share/pin-8972)

[Dark timeline section with a violet-to-peach progress line](https://design.withfudge.com/share/pin-8972)

[![Two warm gradient feature cards with embedded product screenshots](https://pin.fontofweb.com/8971?format=jpg)](https://design.withfudge.com/share/pin-8971)

[Two warm gradient feature cards with embedded product screenshots](https://design.withfudge.com/share/pin-8971)

[![Large agent canvas section with dark footer and compliance badges](https://pin.fontofweb.com/8970?format=jpg)](https://design.withfudge.com/share/pin-8970)

[Large agent canvas section with dark footer and compliance badges](https://design.withfudge.com/share/pin-8970)

[![Deep charcoal footer with logo, badge row, and link columns](https://pin.fontofweb.com/8973?format=jpg)](https://design.withfudge.com/share/pin-8973)

[Deep charcoal footer with logo, badge row, and link columns](https://design.withfudge.com/share/pin-8973)

## Overview

Giga's page is a dark, theatrical marketing system with a disciplined center. Black and near-black surfaces hold most of the canvas, while white serif headlines carry the message. The layout uses very little ornamental framing; instead, it leans on scale, spacing, glow, and contrast to separate each section. The result feels serious and cinematic rather than playful.

The strongest visual pattern is the alternation between restrained chrome and oversized product storytelling. The top navigation stays tiny and quiet. The hero and section headlines are large, elegant, and lightly weighted. Supporting copy is compact and calm. A few saturated accents — violet, pink, orange, green, and electric blue — appear only where they need to mark status, progress, or interaction. That restraint keeps the page from turning noisy even when the imagery is dramatic.

## Colors

| token | value | role |
|---|---|---|
| `canvas` | `#000000` | Main page background and the quietest negative space |
| `surface` | `#0F0E0D` | Primary dark section fill |
| `surface-raised` | `#131313` | Raised panels and footer blocks |
| `surface-deep` | `#07070B` | The deepest dark field used under image fades |
| `panel-dark` | `#1E1F1F` | Mid-dark card bodies and inset controls |
| `border` | `#262828` | Hairline separators and low-contrast card edges |
| `ink` | `#FCFCFC` | Main text on dark surfaces |
| `ink-strong` | `#FFFFFF` | The brightest white used for the largest headlines |
| `muted-ink` | `#969696` | Secondary explanatory copy |
| `soft-ink` | `#BBBBBB` | Lighter secondary text and quiet metadata |
| `faint-ink` | `#828282` | Low-emphasis labels and footer detail |
| `action` | `#FCFCFC` | The white pill button fill |
| `action-ink` | `#000000` | Button text on the white action fill |
| `link` | `#0000EE` | Small blue link cue |
| `accent-blue` | `#2195FF` | Small technical accents |
| `accent-violet` | `#6640FF` | Waveform line, progress line, and emphasis marks |
| `accent-pink` | `#E89EEE` | Soft glow around the hero orb and voice sections |
| `accent-rose` | `#FF9AEA` | The core pink orb color and bright highlight tone |
| `accent-orange` | `#F76B15` | Timeline markers and section bullets |
| `accent-green` | `#C3EACA` | Compliance, trust, and calm status cues |
| `panel-warm` | `#3E3930` | Warm product-card ground color |
| `panel-fog` | `#F0F0F0` | Pale badge and chip fill |
| `panel-lilac` | `#C1B2FF` | Soft lilac edge and glow tone |

The palette stays in one family of deep blacks and charcoal grays. White is used decisively for the main CTA and for the largest headlines, so it reads as an interruption against the dark field. The accents are not spread evenly; they are assigned roles. Violet and pink belong to voice and motion. Orange marks progress and section labels. Green reads as status and trust. Blue appears sparingly as a link signal, not as the main brand color. That separation matters because it keeps the page from feeling like a multicolor dashboard.

The page also uses layered darkness instead of a single flat black. `#000000`, `#07070B`, and `#0F0E0D` can sit next to each other without looking muddy, while `#131313` and `#1E1F1F` let cards rise just enough to separate from the canvas. Borders stay close to the card color so the structure remains soft.

## Typography

Giga mixes a delicate serif display face with practical sans serif UI text. The serif headlines carry the emotional weight; the sans families do the work of explanation, navigation, and status. The page reads cleanly because the hierarchy is mostly scale-based. Very large headline sizes sit next to restrained 12–16px system and Inter text, so the contrast is immediate even before color is applied. Licensing is not specified here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Emilio | 3.75rem | 300 | 1.1 | -0.03em | Main hero statement and large section leads |
| `section-display` | Emilio | 3rem | 300 | 1.1 | -0.03em | Big CTA headings and major dark-section statements |
| `section-display-compact` | Emilio | 2.75rem | 300 | 1.1 | -0.03em | Slightly smaller display lines in denser sections |
| `lead` | Inter | 1.25rem | 300 | 1.2 | 0em | Hero support copy and short explanatory lines |
| `body` | Inter | 0.875rem | 400 | 1.5 | 0em | Paragraph text, card copy, and longer descriptions |
| `body-strong` | Inter | 1rem | 500 | 1.75 | 0em | Emphasized supporting text and button text variants |
| `card-title` | Inter | 0.875rem | 500 | 1.5 | 0em | Feature-card headings and compact labels |
| `label` | Giga Sans | 0.875rem | 500 | 1.2 | 0.08em | Section tags such as “Voice Experience” and “Agent Canvas” |
| `mono-note` | Geist Mono | 0.6875rem | 400 | 2 | 0.009em | Tiny system notes, counters, and compliance microcopy |
| `navigation` | System | 0.75rem | 400 | 1 | 0em | Header links and tiny chrome text |
| `legal-copy` | Inter | 0.8125rem | 400 | 1.5 | 0em | Footer legal text and low-emphasis notes |

Emilio is the face of the page. Its thin serif construction creates a refined, editorial tone that would feel out of place on a normal SaaS site, which is exactly why it works here. The headlines are not decorative for their own sake; they make the product feel premium and deliberate. Inter then steps in with very plain, readable forms that can handle lists, card descriptions, and footer text without competing for attention. Giga Sans appears as a compact label face and adds a small amount of technical polish. Geist Mono only shows up in tiny utility text, where its rigid rhythm makes status information feel precise.

## Layout

The page opens with a centered hero that leaves plenty of black space around the message. The top navigation floats above it with minimal visual weight: logo on the left, a small pair of menu items, and a right-aligned white pill action. The hero itself is mostly empty around a single large serif line, a short supporting paragraph, and a glowing orb or landscape image below. That blank space is not wasted; it is what gives the headline its authority.

Midpage sections keep the same calm left-right discipline but change scale. One section uses a wide editorial composition with a large statement on the left and a large screenshot or card block on the right. Another uses two equal cards with warm gradient fills and embedded interface screenshots. These cards are broad, softly rounded, and roomy enough that the screenshot can sit inside without feeling cramped. The dark background remains visible around them, which keeps the page from becoming a stack of boxed widgets.

The timeline section is more linear. A tiny orange label, a large serif heading, a long horizontal gradient rule, and three evenly spaced columns form a simple progression. The thin separators between columns are quieter than full cards, so the eye reads the line first and the milestones second. That section acts like a visual reset before the footer.

The footer is dense but orderly. It starts with the brand mark and compliance signals on the left, then uses multiple link columns on the right. The lowest row contains copyright and social marks with much lower visual emphasis. The whole block sits on the deepest dark tone, which makes it feel like the end of the page rather than just another section.

## Visual language

The visual language is built from contrast between stillness and glow. Most surfaces are flat and matte. Then a few pieces — the pink orb, the violet waveform, the gradient progress bar — introduce a soft luminous edge. Those glowing accents do a lot of work because there are so few of them. They signal voice, motion, and product energy without requiring illustration-heavy ornament.

Shape is controlled and repetitive. Large containers use gentle corners rather than sharp rectangles. Pills are reserved for high-value actions and small status chips. Cards stay broad and slightly rounded so the embedded screenshots feel like they are resting on a platform instead of floating loose on the page. The strong round shape of the hero orb gives the page one memorable circular counterpoint to all the rectangular layout blocks.

The page also uses image treatment as a visual language. The mountain or landscape imagery is dark, low-saturation, and partially submerged in black. That allows the pink glow and white type to remain legible. The voice waveform strip is stripped down to narrow vertical marks and a single horizontal line, which makes it feel technical and calm at the same time. The footer badges and link columns are intentionally plain, so the end of the page does not fight the earlier sections.

## Components

### Top navigation
- **Anatomy:** Left brand mark, compact menu items, and a right-aligned signed-out action.
- **Typography:** Tiny System text for the chrome, with white labels over black.
- **Surface:** Transparent or black, with no heavy box around the nav row.
- **Shape:** The action uses a pill shape; the rest stays square and quiet.
- **Composition:** Keep the nav shallow and low-contrast so the hero remains dominant.
- **Visible state:** The action reads as a white pill with dark text; secondary items are simple text links.

### Hero stage
- **Anatomy:** A single giant serif headline, a short support line, one white action, and a large image or glow beneath.
- **Typography:** Emilio for the main statement, Inter for the supporting line.
- **Surface:** Black field with a soft fade into the image area.
- **Spacing:** Generous top and side breathing room; little decoration around the headline.
- **Composition:** The headline sits centered and large; the image provides atmosphere rather than a separate panel.
- **Visible state:** The orb is pink and softly luminous, which gives the section its signature focal point.

### Waveform strip
- **Anatomy:** Thin purple horizontal line, narrow vertical amplitude bars, and three rounded status chips.
- **Typography:** Geist Mono for the tiny status text, or a similarly compact utility face.
- **Surface:** Pure black with no framing border.
- **Shape:** Chips are small, dark, and softly rounded.
- **Composition:** Keep the waveform long and low, with the chips centered below it.
- **Visible state:** The strip reads as an active speech-analysis band rather than a decorative divider.

### Feature cards
- **Anatomy:** Short uppercase or small-label lead, a large serif or bold section title, one support paragraph, and an embedded screenshot.
- **Typography:** Emilio for the title, Inter for the copy, Giga Sans for the section label.
- **Surface:** Warm brown gradients over the dark page, with a glassy but restrained feel.
- **Shape:** Rounded rectangles with gentle corners and a little internal padding.
- **Composition:** The screenshot should dominate the right side or the lower field, while text stays readable on the left.
- **Visible state:** Cards can be side-by-side or stacked, but they keep the same high-contrast title hierarchy.

### Timeline rail
- **Anatomy:** Small label, large heading, a long gradient rule, then three equal milestone columns.
- **Typography:** Emilio for the heading, Inter for milestone notes, Geist Mono for the label.
- **Surface:** Black, with the gradient line acting as the main color event.
- **Shape:** No heavy containers; the structure is mostly spacing and thin dividers.
- **Composition:** Read left to right. The line should feel like a path through the milestones.
- **Visible state:** Orange labels and violet-to-peach transitions make the section feel sequential.

### Footer
- **Anatomy:** Brand mark, compliance signals, three or more link columns, and a subdued legal strip.
- **Typography:** Inter and System text at small sizes.
- **Surface:** A deeper charcoal or near-black block than the main content.
- **Shape:** Badges are small pills or circles; link columns remain straight and formal.
- **Composition:** Left side holds trust signals; right side holds navigation depth.
- **Visible state:** The footer is quieter, denser, and less luminous than the hero and product sections.

## Responsive behavior

On narrower screens, the layout should collapse in the same order the page tells its story: hero first, then the waveform or feature summary, then the large product cards, then the timeline, then the footer. The serif headlines should step down one size at a time rather than shrinking abruptly, because the page depends on their graceful proportions. The two-column feature cards should stack before they become too narrow, and the long gradient line should remain visible even when the milestone columns become vertical blocks. The hero orb or landscape image can crop more aggressively on small screens, but it should still read as the main visual anchor.

## Practical implementation guidance

### Preserve
- Keep the black canvas and near-black section rhythm intact.
- Use Emilio only for the big statements; let Inter handle the explanation.
- Reserve violet, pink, orange, green, and blue for role-specific accents.
- Keep the white pill action as the strongest interactive shape on the page.
- Let cards breathe; the design needs generous margins more than dense borders.

### Avoid
- Avoid adding bright background colors that break the dark sequence.
- Avoid replacing the serif display with a geometric sans.
- Avoid turning every panel into a card with equal visual weight.
- Avoid using the accent colors as decoration everywhere; each one should mean something.
- Avoid crowded footer treatment that competes with the hero and timeline.

### Recommended build order
1. Establish the dark canvas, section fills, and border colors.
2. Set the Emilio and Inter hierarchy before laying out any section.
3. Build the top navigation and white pill action.
4. Add the hero stage with the orb and the large centered headline.
5. Build the waveform strip and the timeline rail.
6. Add the warm feature cards with embedded screenshots.
7. Finish with the footer trust block and link columns.

### Accessibility
- Keep white text above dark imagery with enough fade or overlay to preserve contrast.
- Use non-color cues for status chips and milestone markers so orange and violet are not the only signals.
- Keep link text and small labels large enough to read comfortably in the footer and nav.
- Give the large screenshots descriptive alternative text so the product meaning survives without the image.
- Make sure keyboard focus is visible on the white pill action and any footer links.

## Scope note

This guide covers the desktop marketing pages shown here: the hero, waveform strip, feature cards, timeline section, agent canvas section, and footer. Mobile breakpoints, hover and focus styling, motion, menu behavior, and exact interaction states are not included. Values are rounded to a 0.125rem step.
