# How cosmic-ray.tv is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cosmic-ray.tv-design)

Last updated: 2026-07-28

## Design character

COSMIC RAY’s captured pages are **studio case-study boards** for NAVER conference film packages (DAN25 / Dan23). The site chrome is almost invisible: deep black stage, white section titles, and dense grids of motion stills. Brand energy lives inside the *work*—neon violet/cyan gradient outdoor ads, monochrome kinetic type frames, and HUD-like UI overlays—not in a conventional marketing UI kit.

What should survive adaptation:

- **Black void canvas** with white editorial labels
- **Storyboard / contact-sheet grids** of equal film frames
- **Work-led color**: electric magenta→cyan gradients and lens-flare streaks inside assets
- **Bilingual title stacks** (English section label + Korean/English body in the films)
- Minimal site UI; maximum portfolio density

## Foundations

### Color

No structured color roles were recorded for these captures. From the boards:

- **Page chrome**: near-pure black background; white headlines (“Out Door AD Movie”, numbered frame labels)
- **DAN25 outdoor system**: horizontal spectral gradients—cyan, electric blue, violet, magenta, lime edge light—on poster tiles with black NAVER / DAN25 logotype
- **Dan23 / kinetic boards**: mostly black-and-white with occasional cool blue UI chips and purple neon streaks
- **UI inserts inside films**: soft white cards, blue primary buttons, green confirmation chips—product UI as *content*, not site theme

Treat site chrome as monochrome black/white; treat campaign gradients as art-directed per project.

### Typography

Declared families unavailable. Observed:

- Section titles: clean sans, white on black, modest size (~14–17px body chrome; display inside work much larger)
- Inside boards: bold condensed / geometric display for **DAN25**, weight 700 around ~24–34px for board titles; body ~12–17px
- Tracking slightly open on mid-size titles (~0.2–0.3px)
- Numbered frame indices (`#01`…`#30`) in small mono-like labels above each cell

### Spacing and layout

- Huge vertical section padding (~150–250px top/bottom on DAN25 boards) creating cinematic breathing room between grids
- Frame cells: tight internal padding (~9–13px); grids packed edge-to-edge on black
- Negative overlaps (~−18 to −26px) appear in layered board compositions
- Two primary case paths: `/NAVER-DAN25-Conference-Movie-Package-2025` and `/NAVER-Dan23-Conference-Movie-Package-2023`

## Visual language

- **Shape**: mostly sharp film frames; rounded corners appear inside depicted product UI, not the outer board
- **Borders**: rare 1px separators; grids rely on black gutters
- **Shadows/glow**: light streaks, bloom, and speed-lines are *in the artwork*, not CSS card shadows
- **Imagery**: stills from conference films—logo locks, UI mock journeys, outdoor LED posters, silhouette motion graphics
- **Motion**: implied by streak frames and multi-frame sequences; actual motion not measured from stills

## Components and states

- **Case header**: plain white title on black
- **Poster row**: repeated gradient DAN25 outdoor units with QR and date lockups
- **Contact sheet**: 5-across numbered thumbnails (30-up boards) mixing logo, UI, and abstract motion frames
- **In-frame UI kit** (content only): search fields, blue circular CTAs, chat bubbles, map pins
- Site nav/footer not meaningfully present in these section crops

## Responsive behavior

Captures are section crops (~1104–1272 wide), not full responsive passes. The system is a fixed editorial board: expect grids to reflow column count rather than restyle chrome.

## Practical guidance

**Preserve**

- Black stage + white type as the only persistent UI
- Dense numbered storyboard grids
- Letting campaign gradients stay inside media frames
- Cinematic vertical spacing between boards
- Bilingual, work-first labeling

**Avoid**

- Turning the studio site into a colorful SaaS marketing page
- Flattening film stills into generic card carousels with drop shadows
- Inventing a single corporate blue for COSMIC RAY chrome
- Publishing hex tokens as “brand colors” without noting they come from campaign art

## Scope note

Seven section-crop captures across two NAVER conference package case studies. Structured palette/roles were empty—color guidance above is from screenshot reading of the boards. Typography families undeclared; sizes reflect on-page text measurements.

## Captured pages

[![DAN25 — outdoor AD posters](https://pin.fontofweb.com/10400?format=jpg)](https://design.withfudge.com/share/pin-10400)

[DAN25 — outdoor AD posters](https://design.withfudge.com/share/pin-10400)

[![DAN25 — mid board](https://pin.fontofweb.com/10401?format=jpg)](https://design.withfudge.com/share/pin-10401)

[DAN25 — mid board](https://design.withfudge.com/share/pin-10401)

[![DAN25 — scene collage](https://pin.fontofweb.com/10402?format=jpg)](https://design.withfudge.com/share/pin-10402)

[DAN25 — scene collage](https://design.withfudge.com/share/pin-10402)

[![Dan23 — contact sheet](https://pin.fontofweb.com/10284?format=jpg)](https://design.withfudge.com/share/pin-10284)

[Dan23 — contact sheet](https://design.withfudge.com/share/pin-10284)

[![Dan23 — alternate grid](https://pin.fontofweb.com/10287?format=jpg)](https://design.withfudge.com/share/pin-10287)

[Dan23 — alternate grid](https://design.withfudge.com/share/pin-10287)

[![Dan23 — detail pass](https://pin.fontofweb.com/10285?format=jpg)](https://design.withfudge.com/share/pin-10285)

[Dan23 — detail pass](https://design.withfudge.com/share/pin-10285)
