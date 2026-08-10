# How smithsonianmag.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/smithsonianmag.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with dark navigation overlay, serif headline, and subscription banner featuring yellow accent](https://pin.fontofweb.com/9548?format=jpg)](https://design.withfudge.com/share/pin-9548)

[Article page with dark navigation overlay, serif headline, and subscription banner featuring yellow accent](https://design.withfudge.com/share/pin-9548)

[![Homepage section grid showing History and Science category cards with large photography and condensed serif titles](https://pin.fontofweb.com/9547?format=jpg)](https://design.withfudge.com/share/pin-9547)

[Homepage section grid showing History and Science category cards with large photography and condensed serif titles](https://design.withfudge.com/share/pin-9547)

[![Current issue preview with stacked article thumbnails, category labels, and dark call-to-action button](https://pin.fontofweb.com/9546?format=jpg)](https://design.withfudge.com/share/pin-9546)

[Current issue preview with stacked article thumbnails, category labels, and dark call-to-action button](https://design.withfudge.com/share/pin-9546)

[![Magazine subscription panel with dark background, yellow subscribe button, and cover image display](https://pin.fontofweb.com/9545?format=jpg)](https://design.withfudge.com/share/pin-9545)

[Magazine subscription panel with dark background, yellow subscribe button, and cover image display](https://design.withfudge.com/share/pin-9545)

## Overview

Smithsonian Magazine presents a distinguished editorial experience that balances scholarly authority with contemporary readability. The design system centers on classical typography—Minion Pro and its condensed variant for headlines and body text—supported by the clean geometry of Proxima Nova for navigation, labels, and interactive elements. A restrained palette of warm neutrals and near-black ink creates sophisticated contrast, while a signature yellow-gold accent energizes subscription calls-to-action and promotional surfaces.

The visual architecture prioritizes content hierarchy through dramatic scale shifts: massive condensed serif headlines command attention, while generous margins and deliberate pacing allow photography and illustration to breathe. Dark navigation layers slide over the light canvas, creating depth without disrupting the reading flow. The system serves a dual purpose—presenting breaking cultural journalism alongside timeless magazine features—unified by consistent typographic discipline and measured whitespace.

## Colors

| token | hex | use |
|---|---|---|
| ink | `#000000` | Primary text, headlines, body copy |
| ink-secondary | `#242424` | Navigation backgrounds, dark panels, button surfaces |
| ink-tertiary | `#3D3C3B` | Secondary text, captions, metadata |
| muted | `#575757` | Tertiary text, timestamps, bylines |
| muted-light | `#777777` | Disabled states, placeholder text |
| border | `#D6D6D6` | Dividers, hairline rules between sections |
| border-light | `#D7D9DB` | Subtle borders on light surfaces |
| surface-warm | `#E7E9ED` | Warm gray backgrounds, promotional bands |
| surface | `#EEEEEE` | Neutral section backgrounds |
| surface-cool | `#F5F4F4` | Slightly warm canvas alternatives |
| surface-warmest | `#F6F3F3` | Card backgrounds, subtle elevation |
| canvas | `#F7F7F7` | Page background, content wells |
| canvas-pure | `#FCFCFC` | Near-white surfaces, input backgrounds |
| action | `#FFE27C` | Primary buttons, subscription CTAs, promotional highlights |
| white | `#FFFFFF` | Text on dark surfaces, secondary button fills |

The color system operates in three modes. Light mode dominates: a warm off-white canvas supports black ink for maximum readability in long-form articles. Dark mode appears in navigation overlays, subscription panels, and promotional interruptions—near-black backgrounds with white and yellow-gold text creating dramatic contrast. The action yellow functions as the sole warm accent, reserved for conversion moments and magazine branding. Photographic content carries its own color temperature, with the neutral palette designed to complement rather than compete with editorial imagery.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Minion Pro Condensed | 3.5625rem | 500 | 1.1 | normal | Article headlines, feature titles |
| section-display | Minion Pro Condensed | 2.375rem | 500 | 1.3 | normal | Section headers, category titles |
| card-title | Minion Pro Condensed | 1.875rem | 400 | 1.3 | normal | Card headlines, related story titles |
| body-large | Minion Pro | 1.375rem | 400 | 1.65 | normal | Article body text, feature descriptions |
| body | Minion Pro | 1.25rem | 400 | 1.4 | normal | Secondary body, card descriptions |
| label | Proxima Nova | 0.9375rem | 700 | 1.3 | normal | Category tags, section labels, bylines |
| navigation | Proxima Nova | 0.875rem | 700 | 1 | normal | Primary navigation, menu items |
| button | Proxima Nova | 1.125rem | 700 | 1.3 | normal | Button text, CTAs |
| caption | Proxima Nova | 1rem | 500 | 1.4 | normal | Timestamps, metadata, small print |

The typographic system pairs two distinct personalities: Minion Pro's classical, high-contrast serifs convey editorial authority and historical depth, while Proxima Nova's geometric sans-serif provides functional clarity at small sizes and in interactive contexts. Headlines use the condensed variant for dramatic horizontal compression, allowing multi-line titles without excessive line breaks. Body text maintains generous leading for comfortable reading in extended articles. Weight distinctions are minimal—Medium (500) for display, Regular (400) for text, Bold (700) for labels and navigation—preserving the system's restrained elegance.

The system also includes Applesystem as a system-ui fallback for interface elements and Proximanova-600 as a specific weight variant used in certain button and label contexts. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with substantial side margins that frame content and create a magazine-like reading experience. The main content well uses `17rem` side margins on desktop, producing a focused column that prevents line lengths from exceeding comfortable reading measure. Section containers apply `3.5rem` horizontal padding internally, with `50px` bottom padding creating rhythmic vertical spacing.

Grid systems vary by context. Article pages employ a single dominant column with occasional sidebar elements for related content and advertising. Homepage sections use asymmetric two-column layouts for category features, with `48px` gaps between cards maintaining clear separation without excessive distance. Promotional bands and subscription panels break the centered model, extending full-width with internal padding to create visual interruption.

The navigation system layers above content: a persistent dark bar with compact horizontal links, expandable search and menu overlays that obscure the page with near-black surfaces. These overlays maintain the same typographic standards while inverting color relationships—white text on dark grounds with yellow accents for primary actions.

Vertical rhythm is established through consistent `5rem` section spacing, with `80px` margins between major homepage divisions. Internal component spacing uses `40px` gaps for card grids and `24px` for stacked elements within cards. The system avoids tight packing; even dense index pages maintain breathing room around each editorial unit.

## Visual language

Photography dominates the visual experience, presented at large scale with minimal framing—images bleed to card edges or float with subtle shadow separation. The system favors documentary and archival imagery, with color photography appearing vibrant against the neutral palette and black-and-white historical photographs gaining gravitas from the restrained surroundings.

Category labels function as wayfinding devices, appearing in bold sans-serif above headlines in consistent positions. The label-to-headline relationship creates immediate scannability: "Science" or "History" in Proxima Nova precedes the Minion Pro Condensed title, establishing content type before reader commitment.

The yellow-gold accent appears sparingly but decisively: subscription buttons, promotional banners, and magazine cover highlights. This warm tone references print magazine traditions while providing the sole chromatic warmth in an otherwise achromatic system. Dark surfaces—navigation, subscription panels, footer areas—create depth through value contrast rather than shadow, maintaining the flat, editorial aesthetic.

Typography itself becomes imagery at display sizes. The condensed headline variant at `3.5625rem` creates strong rectangular blocks of text that anchor compositions visually, functioning as graphic elements even before content is read.

## Components

### Navigation overlay

- **Anatomy**: Dark full-screen or partial overlay triggered by menu or search activation, containing hierarchical section links, utility actions (Subscribe, Give a Gift, Renew), and search input
- **Surface**: Background `{colors.ink-secondary}`, text `{colors.white}`
- **Typography**: Section links use `{typography.label}` at white; utility buttons stack vertically with full-width treatment
- **Shape**: No border radius; sharp rectangular panels with `{rounded.panel}` corners
- **Spacing**: `20px` horizontal padding on utility buttons, `23px` vertical padding on navigation links, `40px` top margin on section groupings
- **Composition**: Left-aligned link stack with generous vertical spacing; search input at top with dark background and light text

### Primary button

- **Anatomy**: Text label centered within rectangular container
- **Surface**: Background `{colors.action}`, text `{colors.ink-secondary}`
- **Typography**: `{typography.button}`
- **Shape**: Sharp corners with `{rounded.button}` radius
- **Spacing**: `15px` vertical padding, full-width or contained by parent
- **Variants**: Yellow fill for primary actions; white fill with dark text for secondary; dark fill with white text for inverted contexts

### Article card

- **Anatomy**: Thumbnail image, category label, headline, description excerpt, optional timestamp
- **Surface**: Transparent or `{colors.surface-warmest}` background; image sits flush or with minimal padding
- **Typography**: Category `{typography.label}`, headline `{typography.card-title}`, description `{typography.body}`, timestamp `{typography.caption}` in `{colors.muted}`
- **Shape**: No border radius on images; sharp corners maintain editorial severity
- **Spacing**: `48px` gap between cards in grids; `15px` between label and headline; `5px` between headline and description
- **Composition**: Asymmetric two-column layouts on homepage; single column with right-rail on article pages

### Subscription banner

- **Anatomy**: Promotional text, magazine cover imagery, stacked action buttons
- **Surface**: Dark background `{colors.ink-secondary}` with `{colors.white}` text; yellow accent for primary subscribe action
- **Typography**: Magazine name in italic serif display; body text in light weight; buttons in `{typography.button}`
- **Shape**: Full-width band with `{rounded.panel}` corners; sharp interruption of page flow
- **Spacing**: `10px` vertical padding on compact bars; `40px` padding on expanded panels; `20px` horizontal padding
- **Composition**: Text and buttons left-aligned; cover image right-aligned or stacked below on narrow viewports

### Search input

- **Anatomy**: Text field with placeholder, submit action
- **Surface**: Dark background `{colors.ink-tertiary}`, light text `{colors.white}`, no visible border
- **Typography**: `{typography.navigation}` at `14.4px`
- **Shape**: Sharp corners with `{rounded.input}` radius
- **Spacing**: `10px` vertical padding, `15px` horizontal padding

### Section header

- **Anatomy**: Category name, optional decorative rule, section description
- **Surface**: Transparent or `{colors.surface}` background
- **Typography**: `{typography.section-display}` for category titles; `{typography.body}` for descriptions
- **Spacing**: `26.56px` bottom margin on titles; `56px` top padding, `36px` bottom padding on section containers

## Responsive behavior

The system maintains its editorial character across viewport sizes through proportional scaling rather than structural transformation. The `17rem` desktop content margins collapse to narrower values on tablet and eliminate entirely on mobile, allowing text to reach comfortable margins without excessive whitespace. Headline sizes reduce proportionally: the `3.5625rem` hero display scales to `2.375rem` on intermediate breakpoints and `1.875rem` on mobile while preserving line-height ratios.

Navigation transforms from horizontal link lists to hamburger-triggered overlays, preserving the dark surface and typographic standards. Two-column homepage grids stack to single column with maintained `48px` vertical gaps. Subscription panels retain their dark background and yellow accent but reposition cover imagery above or below text blocks as space constrains.

Image aspect ratios remain constant across breakpoints, with cards reflowing around fixed-ratio thumbnails. Typography never drops below `0.875rem` for body contexts, maintaining accessibility standards. Touch targets for navigation and buttons maintain minimum `44px` height through increased padding rather than scaled type.

## Practical implementation guidance

### Preserve
- The sharp-cornered, zero-radius aesthetic throughout all components—this editorial severity distinguishes the system from rounded consumer interfaces
- The Minion Pro Condensed / Proxima Nova pairing; substituting either font disrupts the scholarly-contemporary balance
- Generous whitespace around content; the `17rem` margins and `5rem` section spacing are essential to the magazine-like reading experience
- The restrained yellow accent; expanding the palette beyond this single warm tone dilutes brand recognition

### Avoid
- Border radius on any component; the system maintains deliberately flat, print-derived surfaces
- Drop shadows for elevation; use value contrast (dark overlays on light pages) to create depth
- Body text smaller than `1.25rem` for primary content; the generous sizing supports extended reading
- Saturated colors outside the defined palette; photography should provide chromatic interest

### Recommended build order
1. Establish typographic foundation with Minion Pro and Proxima Nova loaded at required weights
2. Implement color tokens, particularly the ink-to-white contrast scale and single yellow accent
3. Build navigation overlay with dark surface and inverted text relationships
4. Create button system with three variants (yellow, white, dark) and consistent sharp corners
5. Develop article card component with image, label, headline, and description stacking
6. Implement section containers with `17rem` margins and responsive collapse behavior
7. Add subscription banner as full-width interrupt with promotional imagery

### Accessibility
- Maintain `4.5:1` minimum contrast for all body text; the black-on-off-white pairing exceeds this substantially
- Ensure navigation overlays trap focus and provide clear close mechanisms
- Preserve visible focus indicators on all interactive elements; the flat design risks losing focus state visibility without explicit treatment
- Use semantic heading hierarchy: `h1` for article titles, `h2` for section headers, `h3` for card headlines
- Provide `aria-label` on icon-only navigation triggers

## Scope note

This guide covers the homepage, article page, and subscription surfaces visible in the supplied materials. Footer components, comment systems, video players, and mobile-specific navigation patterns are not represented. Print-specific styles and email newsletter templates fall outside this scope. Measurements reflect the desktop viewport state captured in the source images.
