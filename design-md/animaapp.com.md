# How animaapp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/animaapp.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered serif hero above a violet-rimmed prompt card and four template thumbnails](https://pin.fontofweb.com/5953?format=jpg)](https://design.withfudge.com/share/pin-5953)

[Centered serif hero above a violet-rimmed prompt card and four template thumbnails](https://design.withfudge.com/share/pin-5953)

[![Dark landing page with trust logos and the cookie bar anchored to the bottom edge](https://pin.fontofweb.com/5951?format=jpg)](https://design.withfudge.com/share/pin-5951)

[Dark landing page with trust logos and the cookie bar anchored to the bottom edge](https://design.withfudge.com/share/pin-5951)

## Overview

Anima’s homepage is a dark, controlled landing page built around a single centered idea: a serif headline, a prompt-like composer, and a strip of example thumbnails that prove the product’s range. The whole page sits on a charcoal field, so the pink announcement bar, white header controls, and blue-violet hero accents read as deliberate signals instead of decoration. The mood is polished and technical at once. It feels like a design tool presenting itself with studio lighting, not like a generic software homepage.

The visual hierarchy is simple and firm. The big Roslindale headline owns the center. Supporting Mulish copy sits below it in a quieter gray. The composer block becomes the practical center of gravity, then the preview rail and logo row widen the story without weakening the focus. The system depends on contrast in scale, surface, and tone more than on a broad palette or heavy ornament.

## Colors

The palette is narrow and brand-safe. The page background is a deep charcoal that stays consistent across header, hero, preview rail, and footer-like cookie strip. White is used for the headline, the primary signup pill, and the brighter thumbnail canvases inside the example rail. Muted grays handle navigation, body copy, and trust marks, so the page can carry a lot of text without losing its quiet, premium feel. Pink is reserved for the announcement strip at the very top, which gives the page a soft warm accent before the darker shell begins.

| token | value | role |
|---|---|---|
| `action` | `#3366FF` | Primary fill for the main hero action and the strongest blue accent |
| `action-alt` | `#6D54CF` | Violet side of the action family, useful for gradients and the cookie button |
| `action-rim` | `#5C61E3` | Glowing edge around the composer and other emphasized dark-surface controls |
| `canvas` | `#2D2D2D` | Main page field and the broad charcoal background |
| `surface` | `#2B2B2B` | Raised dark panels, header bands, and the preview rail container |
| `surface-raised` | `#1E1E1E` | Inner chips, lower-contrast controls, and recessed surfaces |
| `ink` | `#FFFFFF` | Headline text, primary button text, and the brightest UI marks |
| `muted-ink` | `#A3A3A3` | Supporting body text in the hero and low-priority explanatory copy |
| `quiet-ink` | `#9CA3AF` | Trust-row labels, secondary interface text, and dimmer metadata |
| `border` | `#706F6B` | Hairline borders and subdued divider tone on the dark shell |
| `border-soft` | `#D8D8D8` | Light outline for the outlined header action and pale control edges |
| `promo` | `#FFC0CB` | The thin announcement strip at the top of the page |
| `deep-ink` | `#000000` | Darkest text and shadow anchor when a pure dark note is needed |

The system works because the accents stay limited. Blue and violet are functional, not festive. Pink is a banner-only color, so it can signal freshness without competing with the hero. The page is mostly dark mode, but the example thumbnails inside the preview rail introduce bright white and colorful micro-scenes. That keeps the shell calm while letting the product examples feel vivid. The white Signup pill also matters: it creates a bright endpoint in the top-right corner and balances the darker outlined Contact sales control beside it.

## Typography

Mulish carries the interface. Roslindale carries the promise. The contrast is the core typographic move: a narrow, elegant serif headline creates authority, while the sans serif keeps the navigation, composer labels, buttons, and trust text functional. The hierarchy is built from size and spacing more than from a wide range of weights. The hero line is tall and airy; the smaller text is regular and economical.

Licensing is not specified in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Roslindale | 4.75rem | 400 | 1.2 | -0.02em | Main hero headline |
| `lead` | Mulish | 1.6875rem | 400 | 1.5 | 0em | Supporting line under the hero |
| `body` | Mulish | 1rem | 400 | 1.5 | 0em | Explanatory text and generic interface copy |
| `navigation` | Mulish | 1rem | 400 | 1.5 | 0em | Top navigation labels |
| `small-label` | Mulish | 0.875rem | 400 | 1.5 | 0em | Banner text, trust text, and small UI labels |
| `button` | Mulish | 0.875rem | 500 | 1.2857 | 0em | Button labels and compact action pills |

The hero headline needs breathing room. Its 76px scale, compact negative tracking, and 1.2 leading make it feel editorial rather than promotional. The 27px lead text is much softer and should stay in a single calm line if space allows. Buttons are small, but they are not tiny; the 14px medium-weight treatment gives them enough presence against the dark surface. The trust-row copy and navigation should remain understated so the product story continues to belong to the center of the page.

## Layout

The page is organized as stacked horizontal bands on a dark canvas. The pink announcement strip sits flush at the top and reads as a separate header cap rather than as part of the main navigation. Below it, the nav row spreads left and right across generous padding, with the logo anchored on the far left and the action cluster on the far right. That top band is visually light but structurally restrained, so it does not steal attention from the hero below.

The hero itself is centered and symmetrical. Large empty margins on both sides keep the Roslindale headline from feeling cramped. The supporting line sits directly beneath with a smaller visual weight, then the composer card drops into the middle as the page’s most interactive object. The composer is wide, not tall; that horizontal shape makes it feel like a working surface rather than a modal or a form stack. Inside it, the smaller chips stay aligned left and the submit arrow stays pinned right, which creates a clear directional flow.

Below the hero, the preview rail stretches across a broad dark panel with rounded corners. Four thumbnails sit in a single row with even separation and matching heights. Their individual images can vary a lot, but the framing stays consistent, so the viewer reads the row as a curated gallery rather than as a random set of screenshots. Under that rail, a thin trust line and a row of monochrome brand marks widen the page without introducing new hierarchy. The bottom cookie bar spans the full width and hugs the viewport edge, so it reads like a system notice, not like another content block.

Spacing is generous, but it is not loose. The page uses repeated 24px, 25px, 32px, and 80px steps to create rhythm across the top band, hero stack, preview section, and trust row. That steady spacing keeps the dark canvas from feeling empty and gives every band enough air to stand apart.

## Visual language

The visual language combines three moves: dark shell, bright product proof, and soft glow. The shell is matte and low-noise. The hero and rail are framed by subtle borders and rounded corners rather than by heavy shadows. The glow is concentrated where the product wants attention: around the prompt composer and some button edges. It is a violet-blue halo, not a neon effect, so it feels like a controlled lighting choice.

The example thumbnails do most of the storytelling work in the lower half of the page. They are varied, colorful, and image-led, but they are restrained by consistent framing. That balance matters: the site is not asking the shell to do the visual explanation. It lets the thumbnails show range while the surrounding surfaces stay neutral.

Shape language is equally disciplined. Pills are used for top-right actions and cookie controls. The composer and rail use moderate rounded corners. The page does not scatter small decorative curves everywhere. Instead, it repeats a few stable radii so the entire system feels designed as one set.

## Components

### Announcement bar

- **Anatomy:** One line of centered text with a short linked phrase at the end.
- **Surface:** Soft pink band spanning the full width of the page.
- **Typography:** Small Mulish text with low visual weight.
- **Shape:** Flat edge-to-edge strip; no card framing.
- **Composition:** Keep the text centered and avoid turning it into a second navigation bar.
- **Visible state:** The linked phrase is underlined, which is enough to separate it from the rest of the line.

### Header

- **Anatomy:** Logo on the left, horizontal navigation in the middle, and three actions on the right.
- **Surface:** Transparent over the charcoal field, with the dark page color carrying the band.
- **Typography:** Mulish navigation size, regular weight, with a quiet, utility-first feel.
- **Shape:** The outlined action and the filled signup action both use pill radii.
- **Spacing:** The header is padded generously on the sides and top, which keeps the row from touching the viewport edges.
- **Composition:** Preserve the wide left-to-right spread; do not compress the header into a tight utility strip.
- **Visible states:** One outlined action, one text-only login link, one filled signup pill.

### Hero and composer

- **Anatomy:** Large headline, one supporting line, then a wide interactive composer.
- **Surface:** Same charcoal background as the page, with the composer lifted by border color and glow.
- **Typography:** Roslindale headline above Mulish support text.
- **Shape:** The composer uses a moderate rounded rectangle; the submit control uses a small square-ish soft button shape inside the panel.
- **Spacing:** The hero stack is centered and evenly spaced, with enough vertical separation to let each line breathe.
- **Composition:** The headline must remain the main focus; the composer should feel like the practical next step, not like a competing block.
- **Visible states:** The composer is idle and ready, with chip-like helpers and a single arrow action at the far right.

### Preview rail

- **Anatomy:** One framed container holding four example thumbnails and their short captions.
- **Surface:** Dark panel that is slightly distinct from the page field.
- **Typography:** Small Mulish labels under each thumbnail.
- **Shape:** Medium rounding on the rail, smaller rounding on individual thumbnails.
- **Spacing:** Even gaps between tiles; the container padding should preserve the row’s air and symmetry.
- **Composition:** Keep the thumbnails in a straight line and let the captions stay subordinate.
- **Visible states:** The thumbnails are static preview cards; the frame should not imply navigation chrome beyond what is visible.

### Trust row

- **Anatomy:** A brief centered claim followed by a row of brand marks.
- **Surface:** Same dark shell, with the marks rendered in low-contrast monochrome.
- **Typography:** Small Mulish text, quiet and centered.
- **Shape:** No enclosing box; the logos float in open space.
- **Spacing:** Even spacing between marks, with enough separation that each logo remains legible.
- **Composition:** This row should feel like a calm endorsement line, not a second feature section.

### Cookie banner

- **Anatomy:** Left-aligned explanatory sentence and two actions on the right.
- **Surface:** Dark strip fixed to the bottom edge.
- **Typography:** Small muted copy with compact action labels.
- **Shape:** The primary action is a violet pill; the secondary action is a darker outlined pill.
- **Spacing:** Keep the bar thin and edge-aligned so it does not compete with the hero.
- **Composition:** The sentence should stay readable first; the actions should sit clearly apart.
- **Visible states:** One bright acceptance action and one low-noise rejection action.

## Responsive behavior

On narrower screens, keep the narrative order intact: announcement bar, header, hero, composer, preview rail, trust row, then cookie notice. The hero headline should scale before the surrounding spacing collapses. The preview rail should be the first major section to reflow, because four side-by-side thumbnails will need a stacked or swipeable treatment much sooner than the headline does. The pill actions should stay comfortably tappable, and the composer should remain a single focused object rather than breaking into multiple stacked controls too early.

If the page is adapted for smaller widths, the strongest requirement is clarity, not fidelity to the desktop grid. The serif headline, dark shell, and violet action treatment should stay intact. The rail can compress, the logo row can wrap, and the header navigation can condense into a menu if needed, but the page should still read as one controlled dark stage with one central product path.

## Practical implementation guidance

### Preserve

- Keep the charcoal shell dominant; it is the frame that makes the other colors work.
- Preserve the serif/sans contrast. The page depends on that split for personality.

- Let the preview rail stay image-led and keep its captions secondary.
- Maintain the generous centered hero spacing; it is part of the page’s confidence.

### Avoid

- Avoid adding extra accent colors beyond the pink strip and the blue-violet action family.
- Avoid filling the page with heavy shadows; the system is cleaner when surfaces are mostly flat.
- Avoid replacing the serif headline with a geometric sans. That would flatten the brand.
- Avoid making the preview rail feel like a carousel if it is only a static row in the design shown here.
- Avoid crowding the header with more links or badges than the current structure supports.

### Recommended build order

1. Build the dark canvas and the top pink announcement strip.
2. Add the header with the logo, navigation, and three right-side actions.
3. Recreate the centered hero headline and lead text.
4. Build the composer as the main interactive focal point.
5. Add the preview rail and its captions.
6. Add the trust row and then the bottom cookie bar.
7. Tune spacing, borders, and radii so the whole page reads as one system.

### Accessibility

- Keep the headline and key actions high contrast against the dark background.
- Make the outline and filled actions visually distinct without relying on color alone.
- Preserve enough padding on the pill buttons for easy tapping.
- Ensure the pink announcement strip does not lower legibility for its centered text.
- Keep the trust marks readable enough that they do not disappear into the background.
- If the preview rail is made interactive, give each tile a clear focus treatment that matches the page’s restrained visual language.

## Scope note

This guide covers the homepage marketing surface: the announcement strip, header, hero, composer, preview rail, trust row, and cookie banner. It does not cover the editor, account flows, motion, or alternate states. Relative-unit values are rounded to the packet’s 0.125rem step.
