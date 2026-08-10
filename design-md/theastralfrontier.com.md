# How theastralfrontier.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/theastralfrontier.com-design)

Last updated: 2026-08-10

## Captured pages

[![Quiz interface with large geometric display type and dashed-border answer cards against a dark starfield with orbital grid lines](https://pin.fontofweb.com/639?format=jpg)](https://design.withfudge.com/share/pin-639)

[Quiz interface with large geometric display type and dashed-border answer cards against a dark starfield with orbital grid lines](https://design.withfudge.com/share/pin-639)

[![Hero landing page featuring a massive armillary sphere, slide-to-explore control, and wide-tracked label typography on deep black](https://pin.fontofweb.com/638?format=jpg)](https://design.withfudge.com/share/pin-638)

[Hero landing page featuring a massive armillary sphere, slide-to-explore control, and wide-tracked label typography on deep black](https://design.withfudge.com/share/pin-638)

[![Info modal showing a desert sci-fi landscape with warm harvester architecture, copper accent rules, and a dashed close button](https://pin.fontofweb.com/636?format=jpg)](https://design.withfudge.com/share/pin-636)

[Info modal showing a desert sci-fi landscape with warm harvester architecture, copper accent rules, and a dashed close button](https://design.withfudge.com/share/pin-636)

[![Planet explorer view with a large rendered sphere, red-orange display numerals, technical data readout, and thumbnail navigation pills](https://pin.fontofweb.com/635?format=jpg)](https://design.withfudge.com/share/pin-635)

[Planet explorer view with a large rendered sphere, red-orange display numerals, technical data readout, and thumbnail navigation pills](https://design.withfudge.com/share/pin-635)

## Overview

The Astral Frontier presents a cinematic, science-fiction exploration interface that treats every screen as a viewport into deep space. The visual system builds atmosphere through extreme contrast: an almost-black canvas supports warm, aged-copper typography and technical grid overlays that suggest navigational instruments. Large geometric display type dominates headlines, set in a constructed sans with squared terminals and mechanical proportions that evoke starmaps and spacecraft instrumentation. Body content appears in a lighter humanist sans, creating readable texture against the dark ground. The interface avoids conventional web patterns in favor of immersive, full-bleed compositions where planetary bodies, armillary spheres, and architectural renderings float against starfields. Interactive elements use dashed borders and thin rules rather than filled buttons, maintaining the technical-drawing aesthetic throughout. The overall impression is of a mission control interface or ancient astronomical instrument rendered with contemporary precision—part archive, part invitation to voyage.

## Colors

The palette derives from the darkness of space and the warm metallics of aged instruments. Every color serves a specific atmospheric or functional role.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary background for all stages and deep space environments |
| surface | #141414 | Elevated cards, modal grounds, and secondary panels |
| ink | #c4b5a0 | Primary text, headlines, and active interface elements |
| ink-muted | #8a7e6e | Secondary labels, dashed borders, disabled states, and grid lines |
| accent-copper | #b8734a | Decorative rules, modal accents, and warm highlights |
| accent-red | #c44a3a | Planet names, critical data, and urgent callouts |
| accent-warm | #d4a574 | Hover states, illuminated elements, and photographic warmth |

The canvas color is not pure black but a very dark warm gray that prevents harsh contrast while maintaining the void-like depth essential to the space theme. Surface elements rise only slightly in luminance, creating subtle layering without breaking the immersive darkness. The ink family draws from aged parchment and brass instruments—warm enough to feel organic against the cold digital ground. Accent colors appear sparingly: copper for decorative and structural elements, red-orange for planetary identification and data emphasis, and a lighter warm tone for moments of illumination or interaction. Photographic content introduces its own color temperature, from the amber desert light of harvester architecture to the blue-white of stellar instruments, but these remain content-driven rather than systemic.

## Typography

Two families create the typographic hierarchy: a geometric display face for all headlines, labels, and technical readouts, and a light humanist sans for body content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Right Grotesk Text | 5rem | 400 | 0.9 | 0.02em | Landing headlines, planet names, quiz questions |
| section-display | PP Right Grotesk Text | 3rem | 400 | 1 | 0.04em | Modal titles, section headers |
| body | Figtree | 1rem | 300 | 1.6 | 0 | Descriptions, explanatory content |
| label | PP Right Grotesk Text | 0.75rem | 400 | 1.2 | 0.25em | Navigation, category tags, small caps headers |
| data-readout | PP Right Grotesk Text | 0.875rem | 400 | 1.4 | 0.08em | Technical specifications, statistics |

PP Right Grotesk Text carries the voice of the interface: mechanically precise, wide-set, with squared terminals and uniform stroke weight that suggest technical documentation and spacecraft instrumentation. Its tracking is consistently expanded, especially at label sizes where letterspacing reaches a quarter-em to maintain legibility at small scale and reinforce the starmap aesthetic. Figtree, credited to designer Erik Kennedy, provides the human counterweight—light weight, open apertures, and comfortable reading rhythm for longer passages. The hero display size at 5rem creates monumental presence for planet names and quiz questions, while the 3rem section display handles modal contexts. Body text at 1rem with 1.6 line height ensures readability despite the dark ground. Verify licensing for these families before production use.

## Layout

The layout system abandons conventional page structure in favor of immersive, viewport-filling stages. Each major view occupies the full browser window as a discrete scene: the hero landing with its central armillary sphere, the planet explorer with its large rendered body, the quiz with its centered question and answer grid, and the info modal with its stacked image and text composition.

The underlying grid is technical and explicit. Thin lines radiate from central points, creating orbital or navigational overlays that remain visible across all views. These grid lines use the muted ink color at low opacity, serving as atmospheric texture without competing with content. Content alignment follows a centered or slightly offset logic rather than strict columnar grids. The hero stage centers its headline and interactive element vertically, with the armillary sphere occupying the lower two-thirds as a massive focal object. The planet explorer pushes its title to the left third, the planet to center-right, and technical data to the lower left corner in a deliberate asymmetry that suggests instrument readouts.

Spacing uses the 0.25rem base unit to build relationships. Tight 0.5rem gaps appear between related label and data pairs. Comfortable 1.5rem spacing separates paragraphs and card internals. Generous 3rem and section-scale 6rem values create the dramatic vertical breathing room between major content zones. Cards and interactive elements use zero border-radius, maintaining the flat, technical drawing aesthetic. Only pill-shaped controls for sliding or navigation use full rounding.

## Visual language

The visual language synthesizes ancient astronomical instrumentation with contemporary digital interface conventions. Every element reinforces the fiction of a navigational tool for exploring distant worlds.

Grid and overlay systems appear throughout: concentric circles, radial lines, and dashed rules create the sense of looking through a technical instrument. These overlays remain subtle, using the muted ink color at reduced opacity so they texture rather than dominate. The dashed line becomes a signature motif—appearing in borders, dividers, and interactive element outlines—suggesting construction lines or paths not yet taken.

Imagery is cinematic and large-scale. Planetary bodies render with realistic texture and dramatic lighting, occupying substantial portions of the viewport. Architectural scenes show science-fiction landscapes with warm atmospheric perspective. These images receive minimal framing, often bleeding to edges or sitting within thin-bordered containers.

Typography participates in the technical aesthetic through its treatment. Labels use all-caps with extreme letterspacing. Numerals appear in the display face with tabular spacing, as seen in the "02/03" pagination and "100B PROXIMA" planet identifier. Small decorative elements—compass roses, orbital icons, and rule-based dividers—punctuate transitions between content types.

The overall mood is contemplative rather than action-oriented. The interface invites exploration through sliding, selecting, and reading rather than rapid task completion. Darkness dominates, with warmth arriving through selective accents and photographic content.

## Components

### Hero Stage

The hero stage presents the primary landing experience. A massive rendered object—an armillary sphere with metallic rings and central stellar map—occupies the lower two-thirds of the viewport against the dark canvas. Above this, centered headline text in hero-display size asks "WHICH WORLD CALLS TO YOU?" with a subheadline in section-display size reading "FIND YOUR PATH TO A NEW FRONTIER." A small label above the headline reads "EXPLORERS PATH" with decorative dashed rules extending horizontally. Below the subheadline sits a pill-shaped slider control with the text "SLIDE TO FIND OUT MORE" and a circular drag handle. Corner credits appear in label size: "SITE BY ANDREW MEASHAM" at lower left and "AWWWARDS MASTERCLASS NICCOLO MIRANDA" at lower right.

### Quiz Card Grid

Quiz questions present as centered headline text with multiple answer options arranged in a responsive grid. The question "WHAT'S YOUR IDEAL WAY OF LIFE?" appears in hero-display size with a small "QUESTION 1" label above. Answer cards use surface background with dashed borders in muted ink, containing centered label-size text. Cards arrange in rows of three, then two, maintaining consistent internal padding. Hover or selection states would logically shift border color to accent-copper or accent-warm, though static images show only the default state.

### Planet Explorer

The planet explorer view centers a large rendered sphere against the dark canvas with technical overlays. The planet name "100B PROXIMA" appears in accent-red at hero-display size in the left third, with a small "PLANET EXPLORE" label above. Descriptive body text sits below the name. A dashed-border "EXPLORE PLANET" button appears to the right of the sphere. Lower left presents technical data in data-readout size: star class, colonization status, orbital distance, mass, diameter, gravity, atmospheric density, orbital period, energy flux, and day length—each with dot-leader formatting. Lower center shows three thumbnail pills for planet selection, with the active planet receiving an accent-red border. Lower right displays pagination "02/03" in large display numerals.

### Info Modal

Info modals overlay content with a thin-bordered frame. A large image occupies the upper portion, showing architectural or landscape content. Below, a label reads "POWERED BY THE SUN" with a section-display title "HARVESTERS." A decorative divider with compass rose icon separates title from body text. Body content in Figtree light weight describes the featured element. A dashed-border "CLOSE INFO" button sits centered below. The modal uses canvas background with a thin copper-accent border, creating elevation through border rather than shadow.

### Navigation Pills

Small pill-shaped controls appear for planet selection and potentially other filtering. These use surface background with muted ink borders, containing small icons or minimal text. The active state receives an accent-red border. Rounding is full pill-shaped.

## Responsive behavior

The interface appears designed for immersive desktop viewing given its cinematic proportions and large rendered objects. At narrower viewports, several adaptations should preserve the experience: the hero headline should scale down to section-display size to prevent overflow; the planet explorer's left-positioned title and data readout should stack above the planetary sphere; quiz answer cards should collapse from three-column to single-column arrangement; and technical data readouts should wrap or truncate with expandable sections. The grid overlays should remain visible but may simplify to fewer radial lines. Touch targets for the slider and pill selectors should expand to minimum 44px for accessibility. The info modal should become a full-screen overlay on small viewports rather than a centered frame.

## Practical implementation guidance

### Preserve
- The extreme dark canvas as the dominant ground; never introduce light backgrounds
- The mechanical, wide-tracked display typography for all headlines and labels
- Dashed borders as the primary interactive element treatment
- Technical grid overlays as atmospheric texture
- The two-family typographic hierarchy with clear role separation
- Full-bleed imagery with minimal framing

### Avoid
- Filled buttons with solid backgrounds; the system uses outlined and dashed treatments
- Heavy drop shadows; elevation should read through borders and subtle surface shifts
- Pure black backgrounds; the warm very-dark gray prevents harsh contrast
- Rounded corners on cards and panels; maintain the flat technical aesthetic
- Dense information layouts; the interface breathes through generous spacing

### Recommended build order
1. Establish the canvas and surface color tokens with grid overlay implementation
2. Implement PP Right Grotesk Text at hero-display and label sizes with proper tracking
3. Build the hero stage with centered typography and full-bleed background object
4. Create the dashed-border card component for quiz and modal interactions
5. Develop the planet explorer layout with asymmetric title-sphere-data composition
6. Add Figtree body text for descriptions and longer content
7. Implement accent colors for interactive states and data emphasis

### Accessibility
- Ensure all text meets minimum contrast ratios against the dark canvas; the ink color at #c4b5a0 on #0a0a0a should verify as sufficient
- Provide focus indicators that extend beyond color alone, such as dashed border style changes
- Make the slider control keyboard-operable with visible focus states
- Consider a reduced-motion preference that simplifies grid overlay animations
- Ensure technical data readouts remain readable at small sizes through adequate tracking and line height

## Scope note

This guide covers the landing experience, planet explorer, quiz interface, and info modal surfaces visible in the supplied imagery. Mobile layouts, animation specifications, additional interior pages, and form validation states are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
