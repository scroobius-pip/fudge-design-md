# How cosmos.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cosmos.so-design)

Last updated: 2026-07-28

## Design character

Cosmos is a **gallery-quiet visual discovery brand**: vast off-white fields, enormous black display type, and photography/art as the product surface. UI chrome is almost monastic—thin text nav, black pill primary CTA, ghost secondary pill, and soft floating image tiles. The system feels like a contemporary art platform, not a dense social app.

What should survive adaptation:

- **Warm white canvas** + pure black type
- **Massive display headlines** (58–74px) with tight negative tracking
- **Pill CTAs**: solid black primary, outlined/ghost secondary
- **Floating rounded media tiles** (scattered hero field, masonry collections)
- Soft muted captions in gray; no loud multi-color brand accents in chrome

## Foundations

### Color

No structured color roles were stored. Visual system from screenshots:

- **Canvas**: soft warm white / paper
- **Ink**: near-black for display and primary UI
- **Secondary text**: medium gray for supporting lines and footer links
- **Primary button**: black fill, white label
- **Secondary button**: white/light fill with dark outline
- **Content color**: unbounded—user art, dusty rose search stages, product photos supply hue
- Frosted glass search field over imagery (translucent gray pill)

Do not freeze content hues as brand tokens; keep chrome monochrome.

### Typography

Families not declared. Observed scale:

- **Display**: 58–74px, weights ~350–400, line-height ≈ font-size (or slightly loose ~1.1), tracking about −2.3 to −3.7px — very tight, confident
- **Subhead / pull**: 24–33px regular, slightly tight tracking
- **Body**: 16/24 regular
- **UI / meta**: 14–16px weight 500, tracking ~−0.3px; 14/18 for compact labels
- Footer and social links stay small and quiet

A high-quality neutral grotesque with a light/book display cut fits; avoid decorative display faces.

### Spacing and layout

- Hero and feature blocks use large empty field; image tiles float with organic gaps
- CTA stacks: **16px** vertical padding × **24px** horizontal on pills; some **32×48** on larger controls
- Collection cards: **16px** padding, **12–16px** radii on media frames; occasional ~19px
- Large **margin-top** spacers (60–300px) separate cinematic sections
- Explore chip was a tiny capture; main system is home marketing

## Visual language

- **Radii**: true pills for buttons (effectively full-round); media tiles ~12–16px; some controls ~11px
- **Borders**: 1px solid on ghost buttons and light frames
- **Shadows**: minimal on chrome; depth comes from overlapping photo tiles and soft focus in the hero field
- **Imagery**: curated art/photo tiles, collection covers, search-over-art compositions
- **Logo**: simple multi-dot mark centered in footer bands
- **Motion**: implied by scattered/depth tile fields; not measured

## Components and states

- **Hero**: huge “Search less. Find more.” claim, short gray subtitle, black “Sign up” pill + ghost “Download the app”, floating image constellation
- **Feature rows**: left copy (“Powerful search. Beautiful results.”) beside large rounded collection previews
- **Search stage**: oversized art triptych with centered frosted search pill (“art”)
- **Closing CTA**: “Dream with us.” + black “Sign up for Cosmos” pill over fading tile field; mega wordmark “COSMOS” footer lockup
- **Footer**: social text links left, legal right, mark center
- Hover/active states not separately captured

## Responsive behavior

Home captures span ~1489–1712 widths with the same monochrome + tile language. No dedicated mobile captures in this set—expect display type to scale down while pills and floating tiles remain.

## Practical guidance

**Preserve**

- Gallery white + black ink only in chrome
- Oversized, tightly tracked display type
- Black pill + ghost pill pair
- Art/photo as the colorful layer
- Huge sectional whitespace and floating tile depth

**Avoid**

- Bright brand gradients in UI chrome
- Dense multi-column SaaS feature grids
- Heavy card shadows and thick borders
- Claiming measured brand hexes beyond black/white/gray without structured roles
- Naming a font family without a declared source

## Scope note

Eight captures focused on `https://cosmos.so/` (plus a tiny `/explore` chip). Structured colors were empty—palette notes are screenshot-derived. Font families undeclared; sizes and radii from measured text/layout stats.

## Captured pages

[![Home — Search less hero](https://pin.fontofweb.com/8592?format=jpg)](https://design.withfudge.com/share/pin-8592)

[Home — Search less hero](https://design.withfudge.com/share/pin-8592)

[![Home — hero alternate](https://pin.fontofweb.com/8591?format=jpg)](https://design.withfudge.com/share/pin-8591)

[Home — hero alternate](https://design.withfudge.com/share/pin-8591)

[![Home — feature + collections](https://pin.fontofweb.com/8596?format=jpg)](https://design.withfudge.com/share/pin-8596)

[Home — feature + collections](https://design.withfudge.com/share/pin-8596)

[![Home — search opens a world](https://pin.fontofweb.com/8594?format=jpg)](https://design.withfudge.com/share/pin-8594)

[Home — search opens a world](https://design.withfudge.com/share/pin-8594)

[![Home — Dream with us CTA](https://pin.fontofweb.com/8595?format=jpg)](https://design.withfudge.com/share/pin-8595)

[Home — Dream with us CTA](https://design.withfudge.com/share/pin-8595)

[![Home — mid marketing band](https://pin.fontofweb.com/8593?format=jpg)](https://design.withfudge.com/share/pin-8593)

[Home — mid marketing band](https://design.withfudge.com/share/pin-8593)
