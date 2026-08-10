# How symbl.space is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/symbl.space-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-mode scale preview showing white logo marks at 256px, 128px, 64px, and 32px against near-black canvas with subtle scanline texture overlay](https://pin.fontofweb.com/8200?format=jpg)](https://design.withfudge.com/share/pin-8200)

[Dark-mode scale preview showing white logo marks at 256px, 128px, 64px, and 32px against near-black canvas with subtle scanline texture overlay](https://design.withfudge.com/share/pin-8200)

[![Full dashboard interface with light gray chrome, logo complexity analysis panel, multi-size scale preview, app icon variants, 3D extrusion render, and blur simulation sections](https://pin.fontofweb.com/8199?format=jpg)](https://design.withfudge.com/share/pin-8199)

[Full dashboard interface with light gray chrome, logo complexity analysis panel, multi-size scale preview, app icon variants, 3D extrusion render, and blur simulation sections](https://design.withfudge.com/share/pin-8199)

## Overview

Symbl is a logo evaluation and stress-testing tool presented as a dense, technical dashboard. The interface treats logo analysis as an engineering discipline: every metric is exposed, every transformation is previewed, and every surface communicates precision. The visual system is built around a single monospace type family, a restrained grayscale palette, and modular panel layouts that organize complex information into scannable zones.

The design operates in two distinct modes. The primary workspace uses a light gray chrome with near-white panels, creating a neutral environment where colorful logo marks can be judged without chromatic interference. The preview surfaces invert to pure black, simulating how marks perform in dark contexts or at extreme scale reductions. This duality—clinical analysis against dramatic presentation—defines the product's character.

The interface avoids decorative elements. Borders are hairline-thin or absent. Rounding is reserved exclusively for interactive elements, which use full pills. Every text label is uppercase, tightly tracked, and sized for rapid scanning. The overall impression is of a professional instrument: the Figma or CAD software of brand identity evaluation.

## Colors

The palette is strictly achromatic. Colors serve structural and semantic roles rather than emotional ones, maintaining absolute neutrality so that user-submitted logo marks can be evaluated without chromatic bias from the interface itself.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Dark preview backgrounds, 3D extrusion stage, maximum contrast testing |
| surface | `#111111` | Subtle elevation on dark surfaces, toggle off-states |
| panel | `#BFC2C4` | Primary workspace chrome, light panel backgrounds, button surfaces |
| ink | `#333333` | Primary text, active labels, score values, dark-mode logo marks |
| muted-ink | `#555555` | Secondary labels, disabled states, metadata |
| subtle-ink | `#666666` | Tertiary information, placeholder text |
| dim-ink | `#868686` | Inactive toggles, subtle borders, scanline textures |
| border | `#222222` | Dark preview container outlines, hairline separations |
| action | `#000000` | Primary button fills, active control backgrounds |
| action-text | `#333333` | Text on light buttons, interactive labels |
| action-highlight | `#FFFFFF` | Toggle on-states, bright accents on dark surfaces |

The light workspace mode dominates the interface. Panel backgrounds at `#BFC2C4` provide enough contrast for black logo marks while remaining neutral enough for color-accurate evaluation. The dark preview mode at `#000000` is not merely an inversion but a distinct testing environment, complete with its own subtle scanline texture that suggests display calibration or broadcast monitoring.

The achromatic restraint is deliberate and absolute. The only color that enters the viewport comes from the logo marks being evaluated by the user. Even the app icon preview variants remain in grayscale—dark on light, light on dark—preserving the tool's neutrality. Any warm tones visible in the interface, such as the orange-red app icon variant in the image palette, belong to the user content layer and are not part of the system chrome.

## Typography

All text uses Geist Mono, a monospace family designed by Basement Studio and distributed by Vercel. The type system is built on weight and tracking variation rather than size contrast, maintaining the technical instrument aesthetic throughout.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist Mono | 1.125rem | 400 | 1.5 | normal | Score values, primary metrics |
| section-display | Geist Mono | 0.8125rem | 600 | 1.5 | 0.146em | Panel headers, category labels |
| body | Geist Mono | 1rem | 300 | 1.5 | normal | Descriptions, analysis text |
| label | Geist Mono | 0.5625rem | 300 | 1.5 | 0.12em | Button text, tag labels, metadata |
| micro-label | Geist Mono | 0.5625rem | 300 | 1.5 | 0.08em | Dense data labels, fine print |
| score | Geist Mono | 1.125rem | 400 | 1.5 | normal | Numerical ratings, large figures |

The type scale is unusually compressed. The largest text, score values at 1.125rem, is only modestly bigger than body text. Hierarchy is established through weight (300 versus 400 versus 600) and tracking (normal versus 0.08em versus 0.146em) rather than dramatic size jumps. This reflects the dashboard's information-dense nature: every pixel of vertical space carries meaning.

Uppercase styling is applied universally to labels and headers, reinforcing the technical, specification-document aesthetic. The wide tracking on section-display (0.146em) creates breathable separation between functional zones without requiring additional spacing.

Verify licensing for Geist Mono before production use. The family is credited to Basement Studio designers Andrés Briganti and Mateo Zaragoza, with distribution through Vercel and additional contributors Guido Ferreyra and Mateo Zaragoza.

## Layout

The interface uses a rigid grid system with explicit panel boundaries and consistent internal padding. The overall structure is a full-viewport dashboard with a top action bar, a main content area divided into resizable panels, and a bottom section for specialized previews.

The top bar spans the full width at approximately 3.5rem height, containing navigation, primary actions, and secondary tools. Actions are grouped by function: left-aligned navigation ("TEST ANOTHER LOGO"), center-aligned view controls ("REORDER"), and right-aligned export functions ("EXPORT PNG PACK", "ID CARD"). This three-zone pattern keeps frequently used operations within predictable reach.

Below the top bar, the main workspace splits into two primary columns. The left column, approximately 40% width, contains the complexity analysis panel with score breakdowns, metric visualizations, and evaluation criteria. The right column, approximately 60% width, holds the scale preview with multiple logo sizes arranged in a descending sequence. Both panels share the same light gray chrome background.

The bottom section introduces a three-panel layout: app icon previews on the left, 3D extrusion in the center, and blur simulation on the right. These panels have equal visual weight but variable content density. The 3D extrusion panel inverts to dark mode, creating a deliberate rhythm of light-dark-light across the bottom row.

Internal panel padding follows a consistent system. Primary panels use 1.75rem on all sides. Dense information zones compress to 1.25rem. The complexity analysis panel uses asymmetric padding with more space on the left (3rem) to accommodate the vertical score display. Buttons and inline controls use tight horizontal padding (0.25rem to 0.5rem vertical, 0.5rem to 1rem horizontal).

Panel separation is achieved through subtle background color shifts rather than visible borders. Where borders do appear, they are 1px solid `#222222` on dark surfaces only, functioning as optical hairlines that define preview boundaries without adding visual weight.

## Visual language

The aesthetic is calibrated technical neutrality. Every surface, type treatment, and spacing decision serves the goal of objective logo evaluation. The interface does not express personality; it creates conditions for judgment.

The most distinctive visual element is the scanline texture overlay on dark preview surfaces. This fine horizontal line pattern at low opacity suggests CRT display calibration, broadcast monitoring, or print production proofing. It transforms a simple black background into an active testing environment, reminding the user that they are examining a mark under simulated conditions rather than viewing it in abstract space.

Logo marks are presented in pure black or pure white depending on background, with no color variation in the preview surfaces themselves. The interface chrome contributes no hue of its own. This chromatic restraint ensures that the tool does not influence color perception of the work being examined.

The 3D extrusion preview introduces dimensional depth through soft lighting and rounded form, but even this expressive visualization is contained within a strict rectangular panel with sharp corners. The tension between organic logo forms and rectilinear containment is intentional: it demonstrates how marks survive mechanical reproduction.

Toggle controls use simple circular indicators that slide horizontally, with no color change beyond position. This minimal treatment keeps focus on the preview content rather than the control itself.

## Components

### Top action bar

- **Anatomy**: Full-width bar with three action groups separated by flexible space.
- **Surface**: Light gray chrome at `#BFC2C4`.
- **Typography**: label token for all actions, uppercase with wide tracking.
- **Shape**: Pill buttons with `9999px` radius for all interactive elements.
- **Spacing**: Vertical padding at 0.5rem, horizontal group spacing at comfortable panel margins.
- **Composition**: Left group contains back arrow and primary action; center group contains view toggle; right group contains export and card actions.
- **Variants**: Default state shows all options; some buttons may be disabled based on evaluation state.

### Complexity analysis panel

- **Anatomy**: Vertical score display, descriptive text block, metric grid, and checklist.
- **Surface**: Light panel background.
- **Typography**: score token for large numerical rating; section-display for "COMPLEXITY" header; body for description; micro-label for metric names; hero-display for metric values.
- **Spacing**: Asymmetric padding with extra left inset for score alignment; 0.5rem between metric rows.
- **Composition**: Score dominates upper left; metrics arranged in two-column grid below; checklist items stack with checkmark indicators.
- **States**: Score updates dynamically; metrics recolor based on evaluation results.

### Scale preview panel

- **Anatomy**: Header with toggle, descending size sequence of logo marks with dimension labels.
- **Surface**: Light panel background; individual mark containers may show white or transparent backgrounds.
- **Typography**: micro-label for size annotations below each mark.
- **Shape**: Mark containers are square with no border radius; toggle uses pill shape.
- **Composition**: Marks arranged left-to-right in descending size; generous whitespace between marks prevents visual confusion.
- **Variants**: Dark mode inverts to canvas background with white marks; toggle switches between modes.

### App icon preview

- **Anatomy**: Two square icon variants with labels below.
- **Surface**: Dark rounded rectangle and light rounded rectangle; user content may introduce color.
- **Typography**: micro-label for "DARK" and "CUSTOM" labels.
- **Shape**: Square icons with substantial border radius (approximately 22% of side length).
- **Composition**: Icons side by side with consistent gap; labels centered below.

### 3D extrusion preview

- **Anatomy**: Dark panel containing rendered three-dimensional logo form with export action.
- **Surface**: canvas background with subtle depth through lighting.
- **Typography**: micro-label for panel header and export action.
- **Shape**: Panel has sharp corners; 3D form has fully rounded, soft geometry.
- **Composition**: Form centered in panel; export action at bottom center.

### Blur simulation panel

- **Anatomy**: Blurred logo preview with impairment rating and scale indicator.
- **Surface**: Light panel background.
- **Typography**: section-display for "SLIGHTLY DEGRADED" status; micro-label for impairment scale.
- **Composition**: Blurred mark centered; status below with dot indicator on severity scale.

### Primary button

- **Anatomy**: Text label with optional icon, contained in pill shape.
- **Surface**: action fill with action-text color; or panel fill with ink color for secondary variant.
- **Typography**: label token, uppercase, wide tracking.
- **Shape**: Full pill at `9999px` radius.
- **Spacing**: 0.25rem vertical, 0.5rem to 1rem horizontal depending on importance.
- **States**: Default, hover (subtle brightness shift), active (depressed shadow).

## Responsive behavior

The dashboard is optimized for desktop viewport widths where the full panel layout can be displayed without compression. The three-zone top bar and multi-column panel arrangements require substantial horizontal space to maintain scannability.

At reduced widths, the two-column main workspace should stack vertically, with complexity analysis preceding scale preview to maintain evaluation workflow. The bottom three-panel row should similarly stack, preserving the light-dark-light rhythm by keeping 3D extrusion between the two light panels.

Touch targets should maintain minimum 44px height even on dense desktop layouts. The current button padding of 0.25rem vertical may need expansion for reliable touch interaction if the interface is adapted for tablet use.

The monospace type system remains legible at standard browser zoom levels up to 200%. Score values and metric labels should not wrap; horizontal scrolling within panels is preferable to breaking the tabular data alignment.

## Practical implementation guidance

### Preserve
- The strict monochrome palette for all chrome and typography; color should only enter through user content.
- The uppercase, tracked label treatment for all functional text; this is the primary identity signal.
- The scanline texture on dark previews; it distinguishes testing surfaces from decorative backgrounds.
- The sharp-cornered panels with exclusively pill-shaped interactive elements; this contrast defines the component hierarchy.
- The weight-based type hierarchy within a compressed size range.

### Avoid
- Adding decorative borders or shadows to panels; the current flat separation is essential to the technical aesthetic.
- Introducing additional type families; the monospace constraint is fundamental to the tool's character.
- Using rounded corners on panels or preview containers; reserve rounding for interactive elements only.
- Saturated colors in the interface chrome; the neutral environment exists to serve logo evaluation without chromatic bias.

### Recommended build order
1. Establish the grayscale palette and apply to base surfaces (canvas, panel, action).
2. Implement Geist Mono at all specified sizes and weights with uppercase transforms.
3. Build the top action bar with three-zone composition and pill button shapes.
4. Create the two-column main workspace with complexity panel and scale preview.
5. Add the bottom three-panel row with dark-mode 3D extrusion center panel.
6. Implement toggle controls and dynamic preview state changes.
7. Apply scanline texture overlay to dark preview surfaces.

### Accessibility
- Ensure the light gray panel background (`#BFC2C4`) against ink text (`#333333`) meets WCAG AA contrast ratios; the current combination should be verified.
- The dark preview mode at `#000000` with white marks provides maximum contrast but may cause eye strain during extended use; consider a slightly elevated dark surface (`#111111`) for prolonged sessions.
- All metric labels and scores should be readable by screen readers in logical order: score first, then description, then individual metrics.
- Toggle controls need explicit state announcements beyond visual position; include aria-pressed or similar semantics.
- The scanline texture should be implemented as a decorative overlay that does not interfere with assistive technology parsing of underlying content.

## Scope note

This guide covers the logo evaluation dashboard interface visible on the Symbl homepage. The 3D extrusion rendering pipeline, blur simulation algorithms, and export functionality are described only as presented in the UI, not as underlying technical systems. Motion behavior, loading states, and mobile adaptations are not represented in the supplied material. Measurements are exact values from the retained interface specification.
