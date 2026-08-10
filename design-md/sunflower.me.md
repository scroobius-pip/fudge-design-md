# How sunflower.me is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sunflower.me-design)

Last updated: 2026-08-10

## Captured pages

[![Success page with oversized Albra Light headline 'You're on the list.' on warm cream background with 3D sunflower seed elements and dark return button](https://pin.fontofweb.com/6008?format=jpg)](https://design.withfudge.com/share/pin-6008)

[Success page with oversized Albra Light headline 'You're on the list.' on warm cream background with 3D sunflower seed elements and dark return button](https://design.withfudge.com/share/pin-6008)

[![Dark hero section with glowing particle sunflower illustration and cream-colored Albra Light text with yellow accent words on deep navy background](https://pin.fontofweb.com/6007?format=jpg)](https://design.withfudge.com/share/pin-6007)

[Dark hero section with glowing particle sunflower illustration and cream-colored Albra Light text with yellow accent words on deep navy background](https://design.withfudge.com/share/pin-6007)

[![Full-bleed dark hero with particle-system sunflower and centered serif typography introducing the product philosophy](https://pin.fontofweb.com/6006?format=jpg)](https://design.withfudge.com/share/pin-6006)

[Full-bleed dark hero with particle-system sunflower and centered serif typography introducing the product philosophy](https://design.withfudge.com/share/pin-6006)

[![Light manifesto section with 3D metallic sunflower icon and stacked Albra Light statements in warm gray tones on cream background](https://pin.fontofweb.com/6005?format=jpg)](https://design.withfudge.com/share/pin-6005)

[Light manifesto section with 3D metallic sunflower icon and stacked Albra Light statements in warm gray tones on cream background](https://design.withfudge.com/share/pin-6005)

## Overview

Sunflower presents an email product through a deliberately editorial visual language that contrasts monumental serif typography with organic 3D imagery. The design moves between two distinct modes: expansive light sections built on warm cream backgrounds, and immersive dark moments where a particle-system sunflower becomes the atmospheric centerpiece. The tone is contemplative and premium rather than utilitarian—more manifesto than marketing page. Albra Light, an elegant serif with pronounced contrast and slightly flared terminals, carries all display messaging at sizes that dominate the viewport. Supporting typography stays minimal and functional: Inter for body copy, Geist for interface labels and buttons. The color system restrains itself to warm neutrals, with the dark hero introducing atmospheric depth through near-black fields and cream-colored text. Spatial rhythm favors dramatic vertical padding and centered compositions that let the oversized type breathe.

## Colors

The palette divides cleanly into light-mode neutrals and dark-mode atmosphere, with warm tones emerging from the 3D imagery rather than explicit accent tokens.

| token | value | use |
|---|---|---|
| ink | `#121212` | Primary text on light backgrounds; button fills |
| ink-deep | `#000000` | Deepest black for maximum contrast; dark button surfaces |
| muted-ink | `#47443B` | Secondary manifesto text; softer statements |
| warm-gray | `#696558` | Tertiary display text; transitional statements |
| stone | `#91876C` | Border color for navigation pills and input containers |
| silver | `#969284` | Subtle UI elements; disabled or placeholder states |
| cream | `#FFF7E0` | Primary light background; success page canvas; button text on dark |
| canvas | `#FFFFFF` | Pure white for nav pills, input backgrounds, and contrast moments |

The light mode builds from `cream` upward, layering `canvas` for contained elements like navigation pills and email capture forms. Text progresses from `muted-ink` through `warm-gray` to `ink-deep` to create typographic hierarchy without changing font weight. The dark hero inverts this entirely: a near-black navy field supports cream-colored Albra Light text. The 3D sunflower assets bridge both modes—the metallic seed variant appears on cream, while the particle-system glow version lives exclusively in the dark hero. In the dark hero, certain words carry a warm golden tone drawn from the particle illumination itself; this is an image-palette effect rather than a separate UI token.

## Typography

Three families serve distinct roles: Albra for all display and manifesto text, Inter for body copy and legal text, Geist for interface elements and buttons.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Albra | 11.25rem | 300 | 1 | -0.03em | Success page headline; maximum impact statements |
| section-display | Albra | 3.625rem | 300 | 1.1 | -0.04em | Standard section headlines; multi-line display |
| manifesto-display | Albra | 4.75rem | 300 | 0.9 | -0.05em | Philosophy statements; stacked manifesto lines |
| body | Inter | 0.875rem | 400 | 1.4 | 0em | Verification copy; legal text; descriptions |
| label | Geist | 0.875rem | 500 | 1.2 | 0em | Navigation; secondary button text |
| button-label | Geist | 0.9375rem | 500 | 1.2 | 0em | Primary button text |

Albra Light (weight 300) carries the entire expressive load. At hero scale, it achieves an almost architectural presence—tight leading and negative tracking keep the massive forms cohesive. The manifesto-display token uses slightly tighter leading (0.9) to create stacked statement blocks that read as single visual units. Inter appears only at small sizes for functional copy, while Geist's medium weight (500) provides the necessary density for button labels and navigation without competing with the serif display.

Albra is designed by Ultra Kuhl. Geist is designed by Basementstudio, Andrés Briganti, and Mateo Zaragoza, with vendor contribution from Basementstudio, Vercel, Andrés Briganti, Guido Ferreyra, and Mateo Zaragoza. Inter carries no attributed designer or vendor in the available records. Verify licensing for these families before production use.

## Layout

The page structure alternates between full-bleed immersive sections and contained centered compositions. The dark hero occupies the full viewport with centered text and a background particle illustration that extends to all edges. Light sections use generous horizontal margins and center-aligned content blocks, creating a narrow editorial column feel despite the wide viewport.

Vertical spacing follows a dramatic scale. The hero section employs `hero` padding (9.25rem) top and bottom to isolate the statement. Standard sections use `section` padding (6.25rem) with additional internal spacing at `spacious` (3rem) between text blocks. The manifesto section stacks statements with `comfortable` (1.5rem) to `generous` (2rem) gaps between lines, allowing each phrase to land independently before the eye moves down.

Horizontal containment varies by component. Navigation pills and email capture forms use `standard` (1.25rem) side padding with rounded borders. The success page headline breaks containment entirely, extending nearly to viewport edges. Centering is absolute: text blocks, buttons, and 3D assets all align to a single vertical axis. No sidebar, no asymmetric grid, no card cluster—just vertical rhythm and scale contrast.

The relative unit is 0.125rem (2px), and all spacing values resolve to whole-number multiples of this step.

## Visual language

The design's signature tension comes from pairing organic 3D botanical forms with rigorous typographic minimalism. Two sunflower assets appear: a metallic, almost jewelry-like 3D seed head with iridescent petals, and a luminous particle-system version composed of thousands of golden dots that coalesce into a flower shape against deep navy. The metallic variant functions as a brand icon—small, centered, precious. The particle variant operates as environmental atmosphere—large, diffuse, alive.

Photography and illustration merge in the dark hero: the particle sunflower reads as both image and light effect, with individual dots suggesting data, attention, or neural activity without literalizing the metaphor. The warm cream backgrounds in light sections avoid sterile white, instead suggesting aged paper or candlelight that complements the serif's classical proportions. The golden warmth in the dark hero emerges from the particle system itself; words that catch this light appear warmer without requiring a separate accent token in the interface palette.

Motion is implied but not documented: the particle system suggests ambient drift, and the 3D assets have dimensional depth that invites subtle parallax. The overall impression is of a product that values slowness and intentionality—every element has room, nothing crowds, and the oversized type forces a reading pace that resists scanning.

## Components

### Navigation pill

A contained horizontal element with `canvas` background, `stone` 1px solid border, and `card` border radius (0.875rem). Internal padding is `tight` (0.3125rem) all around. The pill sits at the top of light sections, containing navigation links in `label` typography. No shadow, no background blur—just border definition against the cream field.

### Email capture form

A prominent input container using the same surface treatment as the navigation pill: `canvas` fill, `stone` 1px border, `card` radius. Padding is `generous` top (2rem), zero sides, `spacious` bottom (1.5rem)—an asymmetric distribution that suggests internal field spacing. The contained input and submit elements are not fully visible in the supplied images, but the container's rounded rectangle treatment establishes the pattern.

### Primary button

Dark rectangular button with `ink-deep` background, `cream` text, and `button` radius (0.5625rem). Padding is `compact` vertical (0.5rem), `standard` horizontal (0.875rem). Typography uses `button-label` at Geist 500. The "Back to" return button on the success page uses this same treatment with a small sunflower emoji/icon appended to the label text.

### Manifesto statement block

Centered stack of Albra Light lines at `manifesto-display` size. Each line receives independent color treatment to create gradient-like progression: `muted-ink` for opening statements, `warm-gray` for middle phrases, `ink-deep` for closing declarations. Lines are separated by `comfortable` to `generous` vertical space. The 3D metallic sunflower icon sits above the first line, sized as a modest brand mark rather than a hero image.

### Success page headline

Full-width display at `hero-display` scale (11.25rem), `ink-deep` color, tight leading and tracking. The text "You're on the list." wraps with the 3D metallic seed elements interspersed between words—specifically, three seed forms appear to punctuate the phrase, functioning as both decoration and word spacing. Below, a `primary-button` returns users to the main experience, followed by `body` text in Inter providing verification instructions.

### Dark hero section

Full-bleed container with near-black background and centered two-part text block. The first paragraph uses `section-display` size with certain words catching warm golden light from the particle system behind. The second paragraph continues at the same scale in pure cream. The particle-system sunflower renders behind the text, centered, with its brightest concentration aligned to the text block's vertical center. No containing border, no additional UI elements—just typography and atmosphere.

## Responsive behavior

The design's reliance on oversized display type and centered compositions suggests specific adaptation needs. At viewport widths below approximately 900px, the `hero-display` scale at 11.25rem will require reduction to maintain legibility and prevent excessive line breaks. A proportional reduction to `section-display` scale (3.625rem) or an intermediate size may preserve impact without overflow.

The manifesto statement block's multi-line color progression should maintain its sequence on narrow viewports, though line breaks will need careful attention to avoid orphaned phrases. The 3D metallic sunflower icon above manifesto text should scale down proportionally to avoid dominating the reduced text size.

The dark hero's particle background may require repositioning or density reduction on smaller screens to prevent the illustration from overwhelming the text. The centered text block should retain its horizontal margins rather than edge-to-edge treatment.

Navigation pills and email capture forms with rounded borders should maintain their `card` radius at all sizes; the 0.875rem value remains appropriate even when containers narrow. Button padding can compress slightly on mobile, but the `button` radius and `cream`-on-`ink-deep` contrast must persist.

No mobile-specific layouts are visible in the supplied material. Implementations should test the dramatic scale contrasts at common breakpoints and adjust display sizes downward while preserving the vertical rhythm and centered axis.

## Practical implementation guidance

### Preserve
- The absolute centrality of all content; nothing in this system aligns left or right in a meaningful way
- Albra Light at weight 300 for every display and manifesto moment; no bold or medium serif weights appear
- The warm cream (`#FFF7E0`) as the dominant light background; pure white is reserved for contained elements only
- The restrained palette of warm neutrals; any golden warmth belongs to the particle imagery, not interface tokens
- The 3D sunflower assets as dimensional, light-responsive objects rather than flat illustrations
- Generous vertical padding that lets oversized type exist without crowding

### Avoid
- Introducing explicit accent colors beyond the documented neutral set; the palette's restraint is essential to its premium tone
- Using Albra for body text or UI labels; the serif's delicacy dissolves at small sizes
- Left-aligning manifesto statements; the centered stack is a core compositional choice
- Adding shadows or elevation to the navigation pill or email capture; the 1px border provides sufficient definition
- Crowding the space between manifesto lines; each statement needs isolation to land

### Recommended build order
1. Establish the cream background and load Albra Light at 300 weight
2. Implement the centered axis and vertical spacing scale
3. Build the dark hero with particle background and two-part text block
4. Create the manifesto section with color-graded statement stack and metallic sunflower icon
5. Add navigation pill and email capture form with shared border treatment
6. Implement the success page with interspersed 3D elements and return button
7. Test display scale reductions for narrow viewports

### Accessibility
- The cream-on-ink-deep button combination meets contrast requirements, but the `muted-ink` and `warm-gray` manifesto text on `cream` should be verified against WCAG AA standards for large text
- The dark hero's cream text on near-black background provides excellent contrast; ensure any words catching golden light from the particle system maintain 3:1 minimum against the dark field
- Albra Light's thin strokes at display sizes may challenge low-vision users; consider a slightly heavier weight or increased size for critical messaging if the font family permits
- The particle background behind dark hero text should not animate in a way that triggers vestibular disorders; provide a reduced-motion alternative

## Scope note

This guide covers the landing page and success page surfaces visible in the supplied material. Mobile layouts, form validation states, loading sequences, and the complete email capture interaction flow are not represented. The footer, additional product feature sections, and any dashboard or application interface beyond the marketing site remain outside the current scope. Measurements derive from the documented interface values and resolve to the 2px relative unit grid.
