# How aljazeera.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aljazeera.com-design)

Last updated: 2026-07-28

## Design character

Al Jazeera’s article surfaces behave like a **global newsroom template**: light gray page surround, white reading column, authoritative wordmark, and photography-led stories. The design is built for scanning—category context, bold headlines, bylines, share tools—then settling into longform body text under a large documentary still. Sports and news articles share the same skeleton; subject matter changes inside the frame, not the frame itself.

What should survive adaptation:
- Masthead clarity and category labeling before the headline
- Hero photography as the emotional lead
- Dense but ordered meta row (author, time, tools)
- A reading column that stays calmer than the homepage portal energy

## Foundations

### Color

No stable measured palette roles were retained across these pages; rely on the visual description. Visually: off-white/light gray page, white article surface, near-black headlines, muted gray meta, and photography carrying most hue. Brand identity sits mainly in the masthead wordmark rather than loud page accents. Keep body chrome neutral so images and breaking headlines own attention.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 300, 24px, lh 32px
- **text**: unknown, weight 400, 16px, lh 22.4px
- **text**: unknown, weight 400, 20px, lh 23px
- **text**: unknown, weight 700, 40px, lh 52px
- **text**: unknown, weight 400, 24px, lh 36px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 14px, lh 14px
- **text**: unknown, weight 400, 16px
- **text**: unknown, weight 700, 40px, lh 52px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 24px, lh 36px

Headlines are heavy, condensed-to-normal sans at large sizes; body copy is a readable text face at comfortable article size; labels and timestamps shrink and mute. Hierarchy is ruthless: headline first, deck/meta second, body third. Do not pretty-italicize news headlines—weight and size do the work.

### Spacing and layout

Recurring spacing measurements include 7px, 10px, 12px, 16.08px, 20px, 24px, 30px, 35px. Articles stack vertically: masthead → category/tools → title block → hero media → body. Side margins keep the column readable on wide viewports; related modules may appear below rather than fighting the lede. Prefer editorial vertical rhythm (clear breaks between title, media, paragraphs) over card-heavy dashboards.

## Visual language

Observed corner radii include 10px, 22px, 999px. Corners stay modest. Rules and hairline separators structure sections. Share icons and small UI chips stay quiet. Imagery is rectangular and contentful—not stickered with heavy gradients. The overall effect is institutional journalism, not lifestyle magazine gloss.

## Components and states

- **Masthead**: Al Jazeera wordmark, primary sections access
- **Article header**: category, headline, byline/timestamp, utility icons
- **Hero media**: full-column photograph with optional caption
- **Body**: paragraphs, subheads, occasional inline media
- **Related/sports modules**: thumbnail + headline lists where present

States such as live updates or video players should reuse the same meta typography rather than inventing a second brand layer.

## Responsive behavior

Available captures cluster around ~770px-wide article framings—already a mobile/tablet reading width. Expect single-column stacking, full-bleed or near-bleed heroes, and sticky or compact masthead behavior. Multi-column desktop homepage patterns were not the focus of these captures.

## Practical guidance

**Preserve**
- Neutral article chrome that defers to photography
- Strong headline weight and clear byline hierarchy
- Consistent news article skeleton across verticals

**Avoid**
- Turning article pages into colorful campaign landing pages
- Low-contrast gray-on-gray body text
- Decorative fonts for breaking news titles

## Scope note

Studied 3 page captures on paths /news/2026/4/26/thai-police-arrest-indonesian-wanted-for-10m-cyberfraud, /sports/2026/4/26/injured-salah-has-played-his-last-game-for-liverpool-egypt-team-official, /sports/2026/4/27/zaragoza-goalkeeper-punches-player-sparks-brawl-in-la-liga-2-derby-match. Some structural families were incomplete on these pages. Only article URLs (news/sports) were captured—not the full homepage portal or live player experiences.

## Captured pages

[![Thai police arrest Indonesian wanted for $10m cyberfraud | Cybercrime News | Al ](https://pin.fontofweb.com/9086?format=jpg)](https://design.withfudge.com/share/pin-9086)

[Thai police arrest Indonesian wanted for $10m cyberfraud | Cybercrime News | Al ](https://design.withfudge.com/share/pin-9086)

[![Injured Salah has played his last game for Liverpool: Egypt team official | Foot](https://pin.fontofweb.com/9085?format=jpg)](https://design.withfudge.com/share/pin-9085)

[Injured Salah has played his last game for Liverpool: Egypt team official | Foot](https://design.withfudge.com/share/pin-9085)

[![Zaragoza goalkeeper punches player, sparks brawl in La Liga 2 derby match | Foot](https://pin.fontofweb.com/9084?format=jpg)](https://design.withfudge.com/share/pin-9084)

[Zaragoza goalkeeper punches player, sparks brawl in La Liga 2 derby match | Foot](https://design.withfudge.com/share/pin-9084)
