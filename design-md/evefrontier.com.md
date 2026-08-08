# How evefrontier.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/evefrontier.com-design)

Last updated: 2026-08-08

## Captured pages

[![Full-width orange hero with centered logo and login treatment](https://pin.fontofweb.com/9920?format=jpg)](https://design.withfudge.com/share/pin-9920)

[Full-width orange hero with centered logo and login treatment](https://design.withfudge.com/share/pin-9920)

[![Star-map hero with newsletter form and social icon row](https://pin.fontofweb.com/9921?format=jpg)](https://design.withfudge.com/share/pin-9921)

[Star-map hero with newsletter form and social icon row](https://design.withfudge.com/share/pin-9921)

[![Near-black footer with legal links and brand mark block](https://pin.fontofweb.com/9922?format=jpg)](https://design.withfudge.com/share/pin-9922)

[Near-black footer with legal links and brand mark block](https://design.withfudge.com/share/pin-9922)

## Overview

EVE Frontier is designed like a launch control screen for a hostile star system. The page stays inside a black field and uses cream mono type to carry almost every piece of information. Orange is reserved for the strongest call to action, so it reads as a signal rather than a decoration. The result is cinematic, severe, and highly organized: a few large messages, a small amount of utility text, and a lot of empty space around both.

The system shifts mood by chapter rather than by dense component variety. One frame is nearly pure black with a footer-like directory. Another frame uses a star-map composition with a signup form on the left and a constellation cluster on the right. A third frame turns the whole page into a warm orange space-sim banner with a centered logo and a single play button. Across those scenes, the same type voice and the same orange highlight hold everything together.

## Colors

### Core palette

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Main page field, open space, and the deepest shell around the content |
| `canvas-quiet` | `#0B0B0B` | Slightly lifted black for interior separation and subtle depth |
| `ink` | `#FAFAE5` | Headings, body copy, outlines, labels, and all high-contrast text on black |
| `action` | `#FF4700` | Primary CTA fill, key brand flashes, and the orange launch chapter |
| `border` | `#FAFAE5` | Hairline frames, input outlines, and thin structural rules |

The palette never turns bright or pastel. Black carries the page, cream carries reading, and orange breaks through only when the interface wants attention. That makes the orange button and the orange chapter feel urgent without forcing extra accent colors into the system. The black and near-black surfaces also let the cream logo and utility text sit clearly on top of the void. In the orange chapter, the same cream type still leads, so the page feels related even when the background warms up. The design does not need separate “light” and “dark” themes; it uses one dark base, one warm action color, and a cream reading color that stays consistent in every scene.

## Typography

The page uses a narrow, technology-forward type voice. `Frontier Disket Mono` does the heavy lifting for the large headlines and the brand marks. `Abc Favorit Mono` handles compact UI text, navigation, and buttons. `System` supports the smaller running copy, while `Applesystem` is a good fit for the quiet legal block at the bottom. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Frontier Disket Mono | 3.75rem | 400 | 1 | 0.04em | Hero headline such as the large “awake eternally” and “hardcore space survival” statements |
| `section-display` | Frontier Disket Mono | 2.75rem | 400 | 1.05 | 0.035em | Secondary chapter headings and strong subheads |
| `body` | System | 1rem | 400 | 1.5 | 0em | Supporting sentences, form guidance, and short explanatory copy |
| `ui` | Abc Favorit Mono | 0.875rem | 400 | 1.35 | 0.08em | Navigation, buttons, input placeholders, and compact utility labels |
| `legal` | Applesystem | 0.75rem | 400 | 1.4 | 0em | Footer links, policy text, and the smallest supporting copy |

The hierarchy depends more on scale and spacing than on weight changes. Headlines are all caps, wide-set, and crisp. Utility text has enough tracking to feel mechanical without becoming decorative. Smaller copy stays readable because the line length is short and the layout gives it room to breathe. The overall effect is closer to a sci-fi interface manual than a marketing site, but the text still reads cleanly at a glance.

## Layout

The layout is built from wide shells, long vertical chapters, and very little chrome. A large hero frame leaves a huge amount of black around its content so the page feels like open space rather than a crowded dashboard. One composition places the main message on the left and a star-cluster image on the right. Another composition centers the EVE Frontier wordmark above a large orange field and keeps the primary button directly under the headline. The footer returns to a wide, quiet directory layout with several aligned columns.

The spacing scale is broad and deliberate. `5rem` gutters keep the main content away from the edges on large frames. `7.5rem` chapter spacing gives each major section enough air to feel like a new scene. Smaller internal gaps of `1rem`, `1.5rem`, and `2.5rem` organize text, forms, and button pairs without breaking the overall sense of emptiness. One wide frame uses very large side margins, so the brand mark and footer columns sit far from the edges and read as a floating system rather than a boxed page.

The hero structure is especially simple. The heading sits above a short sentence, then a row of social icons, then a newsletter form. That sequence makes the page feel like a live landing zone: first the statement, then the community links, then the subscription action. The orange chapter reverses that balance by centering the brand and putting the button directly under the main headline, which makes the CTA feel like the focal point of the entire screen.

## Visual language

The visual language is sparse, technical, and theatrical. The black canvas feels like empty space, not a gray UI backdrop. Cream type has the tone of mission-control labeling, with enough contrast to stay clear but enough softness to avoid clinical white. Orange appears in the logo accent and the button fill, which gives it the feeling of a warning light, an ignition cue, or a system status marker.

The page leans on very little ornament. Thin frames, crisp letterforms, and wide gaps do most of the work. Social icons are reduced to bright, simple glyphs. The star-map image uses a dense spray of points instead of a framed illustration, so it feels like a live galaxy chart rather than a poster. The footer stays austere: brand mark on the left, link groups on the right, and tiny legal text tucked into the bottom edge. The orange chapter adds warmth, but it does not soften the overall identity. Instead it makes the black scenes feel even deeper by comparison.

This is a game-native visual system, not a product-dashboard one. Its confidence comes from restraint: one color signal, one clear type voice, and a lot of negative space.

## Components

### Header and utility rail

- **Anatomy:** Left-aligned brand mark, sparse navigation groups, and a right-aligned action area.
- **Typography:** `ui` for the compact labels and navigation items.
- **Surface:** Usually transparent over black or over a warm image field.
- **Shape:** The login action uses a thin rectangular outline; the rest of the navigation stays text-only.
- **Composition:** Keep the header very light. It should frame the scene, not compete with the headline.
- **Visible state:** The outlined action reads as the strongest control in the row because it is boxed while neighboring items remain plain text.

### Hero statement block

- **Anatomy:** Large all-caps headline, short supporting sentence, and a social icon strip or other compact utility line.
- **Typography:** `hero-display` for the main line, `body` for the sentence, `ui` for the utility line.
- **Surface:** Black or near-black with no visible card container.
- **Spacing:** Give the headline generous separation from the sentence and keep the sentence close enough to feel like one thought.
- **Composition:** Left-align the text and leave the opposite side open for star imagery or other long-form visual material.
- **Visible state:** The headline is the loudest element on the page; everything else should stay visibly subordinate.

### Newsletter form

- **Anatomy:** Single input, adjacent submit button, and a small uppercase label above.
- **Typography:** `ui` for the label, placeholder, and button text.
- **Surface:** Dark shell with a hairline input outline and a filled action button.
- **Shape:** The input is rigid and rectangular; the button is equally strict so the pair reads as one instrument.
- **Spacing:** Use a compact horizontal gap between the field and the button, then more space above to separate the form from the sentence above it.
- **Visible state:** The input outline and the orange button are the only elements that need visual emphasis; there is no need for extra decoration.

### Orange launch chapter

- **Anatomy:** Centered logo, top navigation, large headline, short supporting paragraph, and a primary button.
- **Typography:** `section-display` or `hero-display` for the headline, `body` for the copy, `ui` for the button and top nav.
- **Surface:** Full-screen warm orange field with darker structural framing in the imagery.
- **Composition:** Keep the button directly under the main statement so the call to action lands as the final beat of the message.
- **Visible state:** The filled orange button becomes the dominant control because the rest of the chapter is mostly text and background imagery.
- **Treatment:** The logo should remain centered and upright, reinforcing the sense that this is the main launch scene rather than a generic hero banner.

### Footer directory

- **Anatomy:** Brand mark, legal column, company column, media column, and tiny right-edge numerals or metadata.
- **Typography:** `legal` for the smallest text, `ui` for the column headings.
- **Surface:** Black with very little contrast shift.
- **Spacing:** Use wide horizontal separation between columns and keep the link stacks tight inside each group.
- **Composition:** Let the footer breathe; it should feel like a terminal node at the end of a long page.
- **Visible state:** The footer links are quiet and utilitarian. They should not compete with the launch chapter above them.

## Responsive behavior

On smaller screens, keep the reading order intact: headline first, support copy second, controls third, imagery last. The star-map field should collapse before the text loses its hierarchy. The newsletter form should stack cleanly when horizontal space runs short, and the button should remain obvious without becoming oversized. The orange launch chapter should preserve its centered logo and central CTA even when the background image crops aggressively.

The main risk on narrow layouts is crowding. If the page compresses too tightly, the mono lettering loses its cinematic quality and starts to feel cramped. Increase vertical gaps before you reduce type scale too far. Keep the wide breathing room wherever possible, and let the imagery crop rather than forcing the text into a denser column. The footer can collapse into fewer columns, but the small legal copy should remain readable and should not be packed into a single narrow stack.

## Practical implementation guidance

### Preserve

- Keep the black field dominant and treat orange as a single, high-value signal color.
- Preserve the mono-led type hierarchy and the all-caps tone of the large statements.
- Leave large empty zones around the hero, the form, and the footer columns.
- Keep outlines thin and squared off so the UI feels technical rather than soft.
- Use cream text consistently on both black and orange scenes.

### Avoid

- Avoid secondary accent colors, soft pastel panels, or decorative gradients that compete with the launch mood.
- Avoid rounded cards, drop shadows, and glossy UI treatments.
- Avoid dense navigation bars or busy marketing chrome.
- Avoid turning the footer into a normal app sitemap; it should stay quiet and spacious.
- Avoid making the type more playful or handwritten; the site depends on rigid, engineered forms.

### Recommended build order

1. Establish the black, near-black, cream, and orange color roles.
2. Set the mono-driven type scale and the compact UI label style.
3. Build the hero shell with its left text column and right imagery zone.
4. Add the newsletter form and social row as a single utility block.
5. Build the orange launch chapter with the centered logo and primary button.
6. Finish with the footer directory and its small legal text.

### Accessibility

- Keep the cream text on black and orange backgrounds at strong contrast.
- Provide clear labels for the email field and for every action the page exposes.
- Give the outlined login button and the filled CTA a strong visible focus treatment.
- Add descriptive alternative text for the star-map image and the launch artwork.
- If the page animates the star field, respect reduced-motion preferences and keep the text stable.

## Scope note

This guide covers the EVE Frontier /en homepage surfaces shown here: the black hero, the star-map signup block, the orange launch chapter, and the footer directory. Alternate locales, mobile-specific compositions, motion, hover treatment, focus styling details, and the full fallback font stack are not included.
