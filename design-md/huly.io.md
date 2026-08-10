# How huly.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/huly.io-design)

Last updated: 2026-08-10

## Captured pages

[![Signup page with centered dark glassmorphism card, glowing purple-blue aurora background, and illuminated primary button](https://pin.fontofweb.com/2967?format=jpg)](https://design.withfudge.com/share/pin-2967)

[Signup page with centered dark glassmorphism card, glowing purple-blue aurora background, and illuminated primary button](https://design.withfudge.com/share/pin-2967)

[![Login page mirroring signup layout with dark translucent card, Huly logo, and warm gradient button highlight](https://pin.fontofweb.com/2966?format=jpg)](https://design.withfudge.com/share/pin-2966)

[Login page mirroring signup layout with dark translucent card, Huly logo, and warm gradient button highlight](https://design.withfudge.com/share/pin-2966)

[![Custom Plan section with large white body text on pure black background and cyan underlined contact link](https://pin.fontofweb.com/2965?format=jpg)](https://design.withfudge.com/share/pin-2965)

[Custom Plan section with large white body text on pure black background and cyan underlined contact link](https://design.withfudge.com/share/pin-2965)

[![Three-tier pricing cards with electric blue glow border on featured Rare plan and dark translucent surfaces](https://pin.fontofweb.com/2964?format=jpg)](https://design.withfudge.com/share/pin-2964)

[Three-tier pricing cards with electric blue glow border on featured Rare plan and dark translucent surfaces](https://design.withfudge.com/share/pin-2964)

## Overview

Huly presents a premium dark-mode SaaS experience built around immersive depth and controlled luminosity. The interface rejects conventional flat design in favor of atmospheric environments: deep black canvases serve as void-like backdrops for content, while strategic electric blue and violet glows create dimensional aurora effects that seem to emanate from behind interface elements. This is not merely a dark theme—it is a cinematic presentation layer where glassmorphism cards float in space, catching and refracting colored light.

The visual system operates on a principle of selective brilliance. Most elements remain restrained in near-black and muted gray tones, allowing a few high-impact moments to command attention: the pulsing gradient on primary action buttons, the electric border glow around featured pricing tiers, and the crisp cyan of contact links. Typography splits cleanly between a distinctive geometric sans-serif for headlines and a highly legible humanist sans for body content, creating clear information hierarchy without visual competition.

The design language speaks to technical sophistication and creative professionalism simultaneously. It avoids startup clichés of excessive color or playful illustration, instead delivering confidence through precision, restraint, and carefully orchestrated light effects. Every surface, shadow, and glow serves the same goal: making complex project management feel approachable yet powerful.

## Colors

The color system is built on a near-black foundation with selective luminous accents. Dark surfaces dominate, while white and electric blue provide functional contrast and emotional energy.

| token | value | use |
|---|---|---|
| canvas | #0A0A0F | Primary page background, deepest layer |
| surface | #111118 | Card backgrounds, input fields, secondary containers |
| surface-elevated | #1A1A24 | Featured card backgrounds, elevated panels |
| ink | #FFFFFF | Primary text, headlines, active navigation |
| ink-muted | #8A8A9A | Secondary text, placeholders, disabled states, legal copy |
| action | #FFFFFF | Primary button fills, high-priority interactive surfaces |
| action-ink | #0A0A0F | Text on primary buttons |
| accent-blue | #4A7CFF | Featured borders, glow effects, active indicators |
| accent-cyan | #5BC0DE | Text links, contact CTAs, underlined actions |
| border-subtle | #2A2A35 | Card borders, input borders, dividers |
| glow-blue | #6366F1 | Aurora background effects, ambient illumination |

The canvas color establishes an environment deeper than pure black, with subtle blue undertones that harmonize with the atmospheric glow effects. Surface colors step up in lightness with purpose: the base surface for standard cards, elevated surface for featured or hovered states. The ink system is strictly binary—full white for primary content, muted gray for everything else—ensuring maximum readability against dark backgrounds without introducing chromatic noise.

Accent colors are deployed surgically. Electric blue appears primarily as emitted light rather than painted surfaces: border glows, box shadows, and background aurora gradients. Cyan functions as the interactive signal color for text links, providing a cooler, more approachable alternative to the intense blue of promotional elements. The action color remains neutral white, ensuring buttons feel immediate and universal rather than branded to a specific feature.

## Typography

The type system pairs a distinctive display family with a workhorse body family, creating clear functional separation between headline presence and reading comfort.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Es Build Neutral | 2.5rem | 600 | 1.1 | -0.02em | Page titles, auth card headlines, major section headers |
| section-display | Es Build Neutral | 2rem | 600 | 1.15 | -0.01em | Pricing tier names, feature section titles |
| body-large | Inter | 1.25rem | 400 | 1.6 | 0 | Promotional paragraphs, custom plan descriptions |
| body | Inter | 1rem | 400 | 1.5 | 0 | Form labels, input text, feature lists, navigation |
| label | Inter | 0.875rem | 400 | 1.4 | 0.01em | Small labels, metadata, button text |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Top navigation, footer links, secondary actions |

Es Build Neutral carries the brand voice in headlines with its geometric precision and semi-bold weight. The negative letter spacing on display sizes tightens the forms for impactful, compact headlines that feel contemporary and technical. Inter handles all body and interface text with its excellent screen readability and extensive weight range. The size hierarchy follows a clear 4px step system: 14px for labels and navigation, 16px for body, 20px for large body, 32px for section display, and 40px for hero display.

All type remains in normal case except for primary buttons, which use uppercase transformation for their compact label text. This creates a subtle hierarchy of voice: conversational in content, commanding in actions. Verify licensing for these families before production use. Es Build Neutral is designed by Xavier Erni and distributed by Arthur Schwarz. Inter is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout system prioritizes centered, focused compositions that feel immersive rather than utilitarian. Pages are built on a full-viewport canvas with content positioned for maximum visual impact.

The auth pages (login and signup) demonstrate the core layout philosophy: a single centered card floating in a vast dark space, with atmospheric glow effects positioned behind and around the card to create depth. The card itself uses a fixed maximum width approximately 420px, with generous internal padding of 2rem on all sides. This creates a comfortable reading and interaction zone that feels protected and focused.

Content pages like pricing expand to wider containers, using a three-column grid for tier comparison with consistent internal spacing. Cards align to a subtle grid with 1rem gaps between columns, allowing the featured center card to visually dominate through its glow effect rather than size difference. All three cards maintain equal height through flexbox alignment, with content distributed vertically: tier name and price at top, feature list in the middle, action button anchored at bottom.

Vertical rhythm follows a 4px base unit. Section spacing is generous at 6rem, creating clear separation between content blocks on longer pages. Within cards, element spacing tightens to 1rem between related items, with 0.5rem micro-spacing between labels and their associated inputs.

The background layer operates independently of content layout. Aurora glow effects are positioned absolutely, often offset from center, creating asymmetric illumination that feels organic rather than mechanical. These effects use large blur radii and gradient transitions, ensuring they read as environmental lighting rather than decorative shapes.

## Visual language

The visual language of Huly is defined by three interconnected concepts: atmospheric depth, controlled luminosity, and material transparency.

Atmospheric depth is achieved through layered darkness. The canvas is not merely black but a deep void with subtle color temperature. Against this, glassmorphism cards introduce physical presence without opacity—they are translucent membranes that both contain content and reveal the environment behind them. The backdrop blur on cards softens the aurora effects passing through, creating genuine spatial relationship between foreground and background.

Controlled luminosity governs how light behaves in this environment. Light does not evenly illuminate; it pools and radiates from specific sources. Primary buttons carry an internal gradient that shifts from white to warm amber, suggesting incandescence. Featured pricing cards emit blue light from their borders, as if electrically charged. These light sources have logical consistency: warm light for human actions, cool light for system states and promotions.

Material transparency extends beyond cards to the overall philosophy of showing process and structure. Input fields reveal their backgrounds. Borders are thin and luminous rather than heavy and opaque. Even the "OR" divider on auth pages uses hairline rules that seem to glow faintly at their centers. This transparency communicates openness and technical sophistication—nothing is hidden behind solid surfaces.

The imagery and iconography remain minimal and functional. The Huly logo is a compact geometric mark, white against dark surfaces. Provider icons (Google, GitHub) appear in monochrome within secondary buttons. Checkmarks in feature lists are simple strokes. The visual system avoids illustration in favor of pure interface elements, letting the atmospheric effects provide emotional resonance.

## Components

### Auth Card

The authentication card is the signature component of the Huly interface, appearing on both login and signup flows.

- **Anatomy**: Logo mark at top, headline below, form fields stacked vertically, primary action button, divider with "OR" text, two secondary provider buttons, footer text with link.
- **Surface**: Semi-transparent dark fill at approximately 80% opacity, with `backdrop-filter: blur(20px)` creating the glassmorphism effect. Subtle 1px border in muted gray.
- **Typography**: Headline uses `hero-display` token. Form labels use `body` token. Button text uses uppercase `label` token with increased weight.
- **Shape**: 1rem border radius on the card itself. Generous internal padding of 2rem.
- **Spacing**: 1.5rem between headline and first field, 1rem between fields, 1.5rem between button and divider.
- **Composition**: Centered horizontally and vertically within viewport. Maximum width constrained to approximately 26rem.

### Primary Button

The primary action button is the most visually active element in the interface.

- **Anatomy**: Text label centered within pill-shaped container.
- **Surface**: White fill with subtle warm gradient highlight on the right edge, creating a soft glow effect. Black text for maximum contrast.
- **Typography**: Uppercase, semi-bold weight, `label` size.
- **Shape**: Full pill with `9999px` border radius. Height approximately 3rem with horizontal padding of 2rem.
- **States**: The visible state shows a permanent warm gradient accent, suggesting active energy.

### Secondary Button

Provider authentication buttons and alternative actions use the secondary treatment.

- **Anatomy**: Icon and text label horizontally arranged, centered.
- **Surface**: Transparent with 1px border in muted gray. White text and icons.
- **Typography**: Normal case, `body` size, regular weight.
- **Shape**: Full pill matching primary button proportions.
- **Spacing**: Icon positioned 0.5rem left of text label.

### Input Field

Form inputs maintain the dark, translucent aesthetic.

- **Anatomy**: Label text above, input container with placeholder text.
- **Surface**: Dark surface fill with subtle border. No visible focus ring in static state.
- **Typography**: Label uses `body` token. Input text uses `body` token. Placeholder uses `ink-muted` color.
- **Shape**: 0.5rem border radius. Padding of 0.75rem vertical, 1rem horizontal.
- **Spacing**: 0.5rem between label and input container.

### Pricing Card

Three pricing tiers use a card system with clear hierarchy.

- **Anatomy**: Tier name at top, price with currency symbol and period, description paragraph, feature list with checkmarks, action button at bottom.
- **Surface**: Standard cards use `surface` color with `border-subtle`. Featured "Rare" card uses `surface-elevated` with `accent-blue` border and glow shadow.
- **Typography**: Tier name uses `section-display`. Price uses `hero-display` with smaller `label` for period. Features use `body`.
- **Shape**: 1rem border radius. Consistent 2rem padding.
- **Composition**: Equal width columns in three-column grid. Featured card visually elevated through border glow, not size difference.
- **Variants**: Standard (subtle border), Featured (electric blue glow border, elevated surface).

### Text Link

Inline actions and contact prompts use a distinct link treatment.

- **Anatomy**: Text with optional icon prefix, underline decoration.
- **Surface**: No background. `accent-cyan` text color.
- **Typography**: `body-large` for prominent links, `body` for inline.
- **Shape**: Underline offset below text, solid line.

## Responsive behavior

The design is authored for desktop viewport widths, with centered fixed-width compositions that suggest clear adaptation paths.

The auth card maintains its centered position and fixed maximum width across viewport sizes. On narrower viewports, the card should retain its 2rem side padding while allowing the background aurora effects to scale and reposition. The card should never touch viewport edges; minimum margins of 1rem preserve the floating effect.

The pricing grid of three columns should collapse to a single column on mobile, with cards stacking vertically. The featured card's glow effect becomes more pronounced in this layout, as it no longer competes with adjacent cards for attention. Card padding can reduce to 1.5rem on smaller screens to maximize content area.

Typography scales down proportionally: hero-display reduces to 2rem, section-display to 1.5rem. Body text maintains 1rem minimum for readability. Navigation and labels remain at 0.875rem.

Background aurora effects should scale with viewport, maintaining their asymmetric positioning relative to content. On very wide viewports, the glow should not stretch to edges but remain focused behind content areas.

## Practical implementation guidance

### Preserve
- The glassmorphism card effect with true backdrop blur and semi-transparent dark fills
- Asymmetric aurora glow positioning behind content
- The warm gradient accent on primary buttons, suggesting incandescence
- Strict two-tone ink system: white for primary, muted gray for secondary
- Full pill shapes for all buttons, creating rhythm and consistency
- The electric blue glow as the exclusive featured-state indicator

### Avoid
- Adding more accent colors beyond blue and cyan; the palette is intentionally narrow
- Solid opaque cards that destroy the depth effect
- Centered or symmetrical glow placement; asymmetry creates organic energy
- Rounded corners larger than 1rem on cards; excessive radius feels playful rather than precise
- Drop shadows without glow; the system uses emitted light, not cast shadows

### Recommended Build Order
1. Establish the canvas background and aurora glow layer with CSS gradients and blur filters
2. Implement the glassmorphism card with `backdrop-filter` and semi-transparent backgrounds
3. Set up the typography system with both font families and size hierarchy
4. Build the primary button with its distinctive warm gradient highlight
5. Create form input styles with dark surfaces and subtle borders
6. Construct the pricing grid with standard and featured card variants
7. Add secondary buttons and text link components
8. Fine-tune spacing and responsive behavior

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against dark backgrounds; white on near-black exceeds requirements
- Provide visible focus indicators for keyboard navigation; the default browser ring may be insufficient against dark surfaces
- Consider adding `prefers-reduced-motion` support for aurora background effects, which may cause vestibular issues
- Maintain touch target sizes of at least 44px for all interactive elements on mobile
- Do not rely solely on color for state differentiation; the featured pricing card uses both glow and border weight

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage hero, authentication flows, and pricing presentation. The actual application interface, mobile-native layouts, component hover states, loading sequences, and form validation feedback are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
