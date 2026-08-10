# How soundcloud.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/soundcloud.com-design)

Last updated: 2026-08-10

## Captured pages

[![Track player page showing waveform visualization with orange progress bar, track artwork, and engagement metrics below a dark header with play controls.](https://pin.fontofweb.com/8707?format=jpg)](https://design.withfudge.com/share/pin-8707)

[Track player page showing waveform visualization with orange progress bar, track artwork, and engagement metrics below a dark header with play controls.](https://design.withfudge.com/share/pin-8707)

[![Account creation footer section with centered headline, white button on dark background, and dense legal link row.](https://pin.fontofweb.com/5215?format=jpg)](https://design.withfudge.com/share/pin-5215)

[Account creation footer section with centered headline, white button on dark background, and dense legal link row.](https://design.withfudge.com/share/pin-5215)

[![Marketing page split into light app showcase section and dark creator call-to-action with colorful editorial imagery.](https://pin.fontofweb.com/5214?format=jpg)](https://design.withfudge.com/share/pin-5214)

[Marketing page split into light app showcase section and dark creator call-to-action with colorful editorial imagery.](https://design.withfudge.com/share/pin-5214)

[![Hero banner with full-bleed artist photography, large white headline overlay, and pill-shaped navigation buttons in the corner.](https://pin.fontofweb.com/5213?format=jpg)](https://design.withfudge.com/share/pin-5213)

[Hero banner with full-bleed artist photography, large white headline overlay, and pill-shaped navigation buttons in the corner.](https://design.withfudge.com/share/pin-5213)

## Overview

SoundCloud's design system is built around a dark-first aesthetic that puts music and artist imagery at the center of the experience. The interface uses a near-black canvas with layered surface elevations to create depth without departing from its monochromatic foundation. Typography is handled by Söhne, a geometric sans-serif family that provides crisp readability at small sizes while offering enough weight range for dramatic display headlines. The system's most distinctive visual element is the waveform player—a horizontal audio visualization that serves as both progress indicator and interactive scrubber, rendered in the brand's signature orange against dark gray. Editorial photography appears full-bleed in hero sections with overlaid white text, while marketing pages alternate between light and dark bands to create rhythm. The overall impression is utilitarian and music-focused: dense information hierarchies, compact spacing, and immediate access to playback controls.

## Colors

The color system is intentionally restrained, relying on a dark monochromatic base with a single accent and full white for maximum contrast.

| token | value | use |
|---|---|---|
| canvas | #000000 | Root page background, deepest layer |
| surface | #121212 | Primary content areas, player chrome, cards |
| surface-elevated | #303030 | Buttons, inputs, hover states, tags |
| ink | #FFFFFF | Primary text, headlines, icons on dark |
| muted-ink | #999999 | Secondary text, timestamps, metadata, disabled states |
| action | #044DD2 | Links, interactive accents, focus indicators |
| action-hover | #303030 | Hover state for action elements |
| border-subtle | #121212 | Inset dividers, hairline separators |

The dark palette serves a functional purpose: music platforms are often used in low-light environments, and the near-black canvas reduces eye strain during extended listening sessions. White ink at full luminance ensures headlines and track titles remain legible without straining. The muted gray (#999999) is reserved for supporting information—upload dates, play counts, comment timestamps—creating clear information hierarchy without introducing additional hues. The action blue (#044DD2) appears sparingly, typically in links and focused states, avoiding competition with the orange waveform that dominates the player's visual attention. Marketing pages introduce light backgrounds for contrast bands, but the core product experience remains consistently dark.

## Typography

Söhne, designed by Kris Sowersby of Klim Type Foundry, is the sole type family across the interface. The design facts identify specific font files including Söhne-Buch, Söhne-Halbfett, and Söhne-Dreiviertelfett, indicating the family is deployed in multiple weights. Halbfett (semibold) handles UI chrome and headings, with Buch (book/regular) serving body text where supported.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Söhne | 3.5rem | 700 | 1.1 | -0.02em | Hero headlines over photography |
| section-display | Söhne | 2rem | 700 | 1.2 | -0.01em | Section headings, marketing CTAs |
| body-large | Söhne | 1.0625rem | 400 | 1.41 | normal | Descriptive paragraphs, subheadings |
| body | Söhne | 0.875rem | 400 | 1.43 | normal | Track titles, comments, metadata |
| label | Söhne | 0.75rem | 400 | 1.33 | normal | Timestamps, badges, small captions |
| navigation | Söhne | 0.875rem | 600 | 1.43 | normal | Buttons, tabs, primary actions |

The type scale is compact and efficient. At 14px (0.875rem), the body size is optimized for dense information display—track listings, comment threads, and activity feeds. The 28px display size used for track titles in the player chrome provides clear hierarchy without overwhelming the waveform visualization. Letter spacing remains tight to normal across all sizes, with negative tracking only at display scale to prevent headline looseness. Weight distinctions are sharp: 400 for reading, 600 for interactive elements and emphasis, 700 reserved for marketing headlines. Verify licensing for these families before production use; Söhne is available from Klim Type Foundry.

## Layout

The layout system is built on a fluid container with generous horizontal padding and tight vertical rhythm. Content maxes out at approximately 80rem (1280px) with 32px (2rem) gutters on either side at desktop widths. The player page uses a two-column asymmetric layout: the left two-thirds holds the waveform and track information, while the right third displays artwork and related metadata. Marketing pages stack full-width bands vertically, alternating between light and dark themes.

Spacing follows a 2px base unit (0.125rem), with common increments at 8px (0.5rem), 16px (1rem), and 32px (2rem). Section breaks in marketing content use 64px (4rem) or more. The player chrome compresses vertical spacing aggressively—track titles, artist names, and action buttons sit within 8–16px of each other to keep the waveform prominent.

Grid behavior is largely single-column on mobile, expanding to two-column for track pages and multi-column card grids for discovery feeds. The waveform itself is a full-width element within its container, with the progress overlay absolutely positioned. Hero sections on marketing pages use full-bleed photography with text overlaid in the left third, protected by subtle gradient scrims rather than solid overlays.

## Visual language

The most distinctive visual element is the waveform—a horizontally oriented audio visualization rendered as a series of vertical bars. The played portion appears in orange (#FF5500), while the unplayed remainder sits in a darker gray. This element functions as both progress indicator and scrubber, occupying significant vertical space to create visual impact. User avatars cluster beneath the waveform at comment timestamps, creating a social layer directly on the audio timeline.

Photography treatment varies by context: editorial hero images receive no border radius and bleed to container edges, while artist avatars and track artwork use sharp corners or minimal rounding. The marketing page introduces more expressive visual language—colorful collage-style imagery with geometric cutouts and mixed-media textures—contrasting with the utilitarian player chrome.

Iconography is minimal and functional: play/pause toggles, heart for likes, repost arrows, share glyphs. These appear at 16–20px within button containers. The SoundCloud wordmark uses its custom cloud-wave icon in white against dark backgrounds.

Shadow usage is extremely limited. The only visible shadow is a subtle inset border on certain elevated surfaces, creating definition without lift. No drop shadows appear on cards or buttons, maintaining the flat, dense aesthetic.

## Components

### Track Player

The track player is the system's centerpiece, combining audio visualization with social metadata.

- **Anatomy**: Pause/play toggle, track title, artist name, waveform visualization, timestamp markers, like/repost/share action row, comment input, fan engagement sidebar
- **Surface**: Background uses `surface` (#121212); waveform unplayed area uses `surface-elevated` (#303030)
- **Typography**: Track title in `section-display` (28px semibold), artist name in `body` (14px regular), timestamps in `label` (12px)
- **Shape**: Waveform container has no border radius; action buttons use 4px radius; avatar clusters beneath waveform are circular
- **Spacing**: 32px padding on player container; 16px between title and waveform; 8px between action buttons
- **Composition**: Asymmetric two-column layout with waveform dominant; artwork positioned right at approximately 30% width
- **Variants**: Playing state shows orange progress fill; paused state shows static waveform; hover on waveform reveals precise timestamp

### Primary Button

Used for account creation, uploads, and major actions.

- **Anatomy**: Text label centered within rectangular container
- **Surface**: White background (#FFFFFF) with near-black text (#000000) for maximum contrast on dark surfaces; inverted to dark background with white text on light marketing sections
- **Typography**: `navigation` token (14px semibold)
- **Shape**: 4px border radius; 12px vertical padding, 16px horizontal minimum
- **Spacing**: 16px margin-right when grouped; often appears centered in marketing CTAs
- **States**: Default shows solid fill; hover darkens or inverts

### Secondary Button

For sign-in, cancel actions, and less prominent choices.

- **Anatomy**: Text label with subtle background
- **Surface**: `surface-elevated` (#303030) background with white text
- **Typography**: `navigation` token
- **Shape**: 4px border radius; slightly more compact padding than primary
- **Spacing**: Appears adjacent to primary buttons with 8–16px gap

### Ghost Button

Icon-only or text-only actions without background fill.

- **Anatomy**: Heart, repost, share, or more-options icons
- **Surface**: Transparent background; icon in `muted-ink` or `ink` depending on state
- **Typography**: None for icon variants; text variants use `body`
- **Shape**: Circular touch targets (50% radius) for icon buttons; no visible border
- **Spacing**: 12px padding for circular buttons; grouped horizontally with 8px gaps

### Tag/Genre Pill

Category labels and metadata chips.

- **Anatomy**: Text within rounded container
- **Surface**: `surface-elevated` background
- **Typography**: `label` token (12px)
- **Shape**: 100px border radius (full pill)
- **Spacing**: 8px horizontal padding, 4px vertical

### Comment Input

Social engagement field below the waveform.

- **Anatomy**: User avatar placeholder, text input, submit button
- **Surface**: `surface-elevated` background for input field
- **Typography**: `body` token with `muted-ink` placeholder text
- **Shape**: No visible border radius on input; adjacent elements use 4px
- **Spacing**: Full width of player column; 16px vertical padding

### Hero Banner

Marketing and landing page feature sections.

- **Anatomy**: Full-bleed background image, headline overlay, body copy, CTA button, optional carousel indicators
- **Surface**: Photography with gradient scrim for text legibility
- **Typography**: `hero-display` (56px) for headline, `body-large` for description
- **Shape**: 16px border radius on container; no radius on internal image
- **Composition**: Text aligned left, occupying approximately 40% width; artist credit positioned bottom-right

## Responsive behavior

The design system prioritizes desktop experience in the supplied images, with clear patterns for adaptation. The track player's two-column layout likely collapses to single-column on mobile, with artwork stacking above the waveform. Marketing hero sections would stack headline over image vertically. Typography scales down modestly—hero display may drop to 2rem on mobile, body remains at 14px for readability. Touch targets for waveform scrubbing would expand vertically. The dense footer link row visible in one image would collapse to accordion or multi-column grid on narrower viewports. Implementers should test at standard widths (768px, 1024px, 1280px, 1440px).

## Practical implementation guidance

### Preserve
- The dark-first palette with true black canvas and layered grays
- Söhne as the sole type family with tight weight distinctions
- Orange waveform as the signature interactive element
- Minimal shadow usage—rely on color contrast for elevation
- Pill-shaped tags and compact button radii
- Full-bleed editorial photography with overlaid text

### Avoid
- Introducing additional accent colors beyond orange and action blue
- Heavy drop shadows or material-style elevation
- Rounded corners on artwork or waveform containers
- Light-themed player chrome—the dark player is core to brand identity
- Generic placeholder avatars; the social layer depends on real user imagery

### Recommended Build Order
1. Establish dark theme tokens (canvas, surface, ink, muted-ink)
2. Implement Söhne with weight loading strategy (400, 600, 700)
3. Build waveform component with progress state and scrub interaction
4. Construct track player layout with asymmetric columns
5. Add action button variants (primary, secondary, ghost)
6. Implement marketing page bands with theme switching
7. Polish with tag pills, comment inputs, and footer chrome

### Accessibility
- Ensure waveform progress is communicated to screen readers via ARIA live regions or alternative progress indicators
- Maintain 4.5:1 contrast minimum for body text; the white-on-dark palette exceeds this
- Provide visible focus states for keyboard navigation; the subtle action blue may need enhancement
- Consider reduced-motion preferences for waveform animation
- Touch targets for waveform scrubbing and action buttons should meet 44px minimum

## Scope note

This guide covers the public-facing track player, marketing pages, and account creation flows visible in the supplied images. Mobile layouts, upload workflows, artist dashboards, notification systems, and audio visualization alternatives are not represented. The design facts identify Söhne-Buch, Söhne-Halbfett, and Söhne-Dreiviertelfett as deployed weights; verify licensing for these families before production use. Measurements are exact where extracted from the interface; inferred values follow the 2px base unit.
