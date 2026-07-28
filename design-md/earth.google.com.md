# How earth.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/earth.google.com-design)

Last updated: 2026-07-28

# How earth.google.com is designed

## Design character

Google Earth Web is a full-bleed globe product: the planet is the interface, and Chrome-like utility UI floats as compact light controls over imagery. The design character is cartographic immersion first, Google Material restraint second—minimal chrome, maximum Earth.

## Foundations

### Color

Structured colors were empty; visual system:

- **Stage:** live satellite / terrain imagery (full color, constantly changing)
- **UI surfaces:** white and light gray floating panels, search field, tool rails
- **Icons / ink on chrome:** dark gray / Google blue accents on interactive controls
- **Map labels:** light type with subtle halo for legibility on imagery (visual)

Brand color is mostly whatever the globe shows; UI stays neutral so it never competes with terrain.

### Typography

Observed UI type ~14–16px weight 400 on floating chrome. No display marketing type in these captures—this is product UI, not a landing page.

### Spacing and layout

- Viewport-filling map canvas
- Floating search / tool clusters anchored to edges
- Minimal permanent margins; panels overlay rather than push content
- No useful spacing token scale from structured data (empty spacing family)

## Visual language

- Immersive globe as hero and body
- Small rounded floating controls
- Soft shadows under panels (visual) for separation from imagery
- Knowledge cards / place panels when a location is selected (partially visible in captures)

## Components and states

- Top or corner search
- Zoom / tilt / north tools
- Layers and knowledge side sheets
- Attribution footer strip on the map
- Occasional coach marks or feature callouts

## Responsive behavior

All three captures are large desktop (1712×1314) of `/web` globe states. Layout differences are mostly map camera and open panels, not breakpoint redesigns.

## Practical guidance

**Preserve**

- Imagery-first full bleed
- Tiny neutral floating chrome
- Let map color dominate; keep UI grayscale + one accent

**Avoid**

- Heavy marketing headers over the globe
- Opaque sidebars that steal half the planet by default
- Decorative illustration competing with real Earth imagery

## Scope note

Three Google Earth Web captures with near-identical paths (camera/UI state variants). Almost no structured color/type/spacing rows—guide is screenshot-led.

## Captured pages

[![Earth Web globe](https://pin.fontofweb.com/9655?format=jpg)](https://design.withfudge.com/share/pin-9655)

[Earth Web globe](https://design.withfudge.com/share/pin-9655)

[![Earth Web alternate UI state](https://pin.fontofweb.com/9654?format=jpg)](https://design.withfudge.com/share/pin-9654)

[Earth Web alternate UI state](https://design.withfudge.com/share/pin-9654)

[![Earth Web third state](https://pin.fontofweb.com/9653?format=jpg)](https://design.withfudge.com/share/pin-9653)

[Earth Web third state](https://design.withfudge.com/share/pin-9653)

## Colors

- `#ffffff`
- `#202124`
- `#1a73e8`
