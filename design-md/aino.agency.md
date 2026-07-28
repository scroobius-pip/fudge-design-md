# How aino.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aino.agency-design)

Last updated: 2026-07-28

## Design character

Aino presents as a Scandinavian design-and-technology studio that speaks in the language of terminals and print grids rather than glossy agency spectacle. The home experience is a near-black stage: a monospaced wordmark, a small “EST. 2016” mark, and a large dotted ASCII portrait that fills most of the viewport. Navigation is almost invisible—tiny uppercase links and a single “CLICK” cue—so the brand moment is the image and the typewriter cadence, not a hero product shot.

Careers surfaces flip the polarity. Off-white paper fields, hairline black frames, dual-column job cards, and sparse line icons create a quiet HR brochure inside the same monospaced system. The through-line is restraint: one typeface family (monospaced), one structural idea (grid + terminal), and almost no decoration beyond rules and icons.

## Foundations

### Color

Structured color roles were not recorded for these captures; the palette is established visually.

- **Home canvas** — deep charcoal / near-black field that makes cream monospaced glyphs and the ASCII portrait read like a CRT or plotter output.
- **Home type** — light cream / off-white monospaced text for wordmark, location line, and nav.
- **Careers canvas** — warm paper cream / light gray field edge-to-edge.
- **Careers ink** — pure black for rules, labels, and body; no fill accents on cards.
- **Accent policy** — effectively none. Hierarchy comes from weight, case, and position, not hue. Do not introduce a bright brand pink or gradient wash; it would break the terminal/print duality.

### Typography

Declared font families were not captured. Visually and by measurement, the system is monospaced end-to-end.

- **Voice** — all-caps labels, tight tracking, typewriter rhythm. Feels closer to a design tool or hardware firmware screen than a lifestyle brand.
- **Measured UI size** — about **14px / weight 500** with ~19px line-height on dense chrome (nav / meta).
- **Home hierarchy** — large wordmark “AINO” in light monospaced caps; small “EST. 2016”; single-line location string (“GOTHENBURG, SWEDEN · OSLO, NORWAY”).
- **Careers hierarchy** — section titles in caps (“OPEN APPLICATION”, “INTERNSHIPS”); role lines and meta (duration, city) in the same mono face at body size; “APPLY →” as a text action, not a filled button.
- **Avoid** — pairing with a soft geometric sans for body, or mixing proportional display with mono UI. The monospaced lock is the brand.

### Spacing and layout

- Home is a **full-bleed stage**: portrait centered or slightly right, chrome pinned to corners, large empty dark field around the art.
- Careers uses a **strict two-up card grid** with shared outer hairline frame and a vertical divider between columns. Interior padding is generous; content sits top-left, icon bottom-right, CTA bottom-left.
- Density is low. Lists do not pack; each role block breathes.
- Observed micro spacing clusters around ~9px on chrome; section rhythm on careers is card-driven rather than a dense token ladder.

## Visual language

### Shape and borders

- **Home** — no cards, no pills, no soft radii. The only “shape” is the raster portrait and the rectangular viewport.
- **Careers** — **1px solid black hairlines** forming full card frames and the center split. Corners stay sharp (square modules). This print-like rule is the primary surface treatment.
- Do not round the job cards or add drop shadows; the system is flat and ruled.

### Imagery and iconography

- **Signature image** — large monochrome ASCII / dotted portrait on black (home). It is both art direction and brand proof of a tech-literate studio.
- **Icons** — tiny black line drawings (classic Mac face, set square / draft tools) parked in the lower-right of each careers card. Stroke-only, no fills, no colored badges.
- Photography is absent in the studied pages; human presence is coded, not photographed.

### Motion

Motion was not established from still captures. Any motion should stay minimal (cursor blink, slow type-on) rather than parallax or cinematic transitions.

## Components and states

### Home chrome

- Top-left lockup: wordmark + est. year.
- Top-right: sparse uppercase text links (About, Careers, contact-style actions) in the same mono face.
- Bottom or edge: location string; a small “CLICK” affordance near the portrait.
- No primary filled CTA on the hero—discovery is the click into the portrait/system, not a “Get a quote” button.

### Job / internship cards

Recurring structure on careers:

1. **Category label** (OPEN APPLICATION / INTERNSHIPS)
2. **Role line** (VARIOUS ROLES: AINO NORWAY / DEVELOPERS + DESIGNERS)
3. **Meta stack** (FULL-TIME · city · duration)
4. **Text CTA** — `APPLY →`
5. **Corner icon** — line glyph bottom-right

States visible in stills are default only; treat hover as a slight emphasis on the apply line or rule weight, not a color fill.

### Navigation pattern

Global nav stays typographic and minimal across home and careers. The site does not rely on a heavy sticky bar, search, or mega-menu in these captures.

## Responsive behavior

Captures include wide desktop home stages (~3400×1260) and narrower careers views (~880×466 dual cards still side-by-side). The dual-column careers module is the main layout idea; on very narrow widths it would stack into a single column of ruled cards while keeping hairlines and mono type. Home art should remain the dominant mass—shrink chrome before crushing the portrait.

## Practical guidance

**Preserve**

- The **black terminal home vs cream ruled careers** dual mode.
- **Monospaced, all-caps** voice for labels and UI.
- **Hairline black frames** and square modules on light pages.
- **ASCII / generative portraiture** as the hero medium instead of stock photography.
- Sparse chrome: few links, no loud CTAs, icons as line drawings only.

**Avoid**

- Soft SaaS blues, gradients, glassmorphism, or heavy shadows.
- Rounded pill buttons and colorful badge systems.
- Mixing a friendly proportional sans into body copy.
- Dense marketing sections, logo walls, or testimonial carousels that fight the quiet grid.
- Turning careers into a conventional ATS page with filters and avatars.

**Adaptation tips**

- If you only need the brand moment: black field + mono lockup + one large generative mono image.
- If you need content pages: cream paper, 1px rules, two-up cards, text arrows for actions.
- Keep accent count at zero unless a single functional link color is required—and even then prefer underline/weight over a new hue.

## Scope note

Studied captures: home (`/`) including the ASCII portrait stage, careers (`/careers`), and internships (`/careers/internships`). Structured color roles, palette swatches, radii, shadows, and declared font families were largely unsupported in the capture set—guidance above leans on screenshot reading plus the few measured type/spacing hits. Use this as a visual-system brief for marketing/careers surfaces, not as a full product-UI kit.

## Captured pages

[![Aino — home ASCII stage](https://pin.fontofweb.com/7074?format=jpg)](https://design.withfudge.com/share/pin-7074)

[Aino — home ASCII stage](https://design.withfudge.com/share/pin-7074)

[![Aino — home wide stage](https://pin.fontofweb.com/7072?format=jpg)](https://design.withfudge.com/share/pin-7072)

[Aino — home wide stage](https://design.withfudge.com/share/pin-7072)

[![Aino — home alternate crop](https://pin.fontofweb.com/4463?format=jpg)](https://design.withfudge.com/share/pin-4463)

[Aino — home alternate crop](https://design.withfudge.com/share/pin-4463)

[![Careers — dual job cards](https://pin.fontofweb.com/4429?format=jpg)](https://design.withfudge.com/share/pin-4429)

[Careers — dual job cards](https://design.withfudge.com/share/pin-4429)

[![Careers — card module close](https://pin.fontofweb.com/4430?format=jpg)](https://design.withfudge.com/share/pin-4430)

[Careers — card module close](https://design.withfudge.com/share/pin-4430)

[![Internships page](https://pin.fontofweb.com/4432?format=jpg)](https://design.withfudge.com/share/pin-4432)

[Internships page](https://design.withfudge.com/share/pin-4432)

[![Internships alternate](https://pin.fontofweb.com/4431?format=jpg)](https://design.withfudge.com/share/pin-4431)

[Internships alternate](https://design.withfudge.com/share/pin-4431)
