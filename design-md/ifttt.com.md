# How ifttt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ifttt.com-design)

Last updated: 2026-08-10

## Captured pages

[![Promotional retention modal with centered IFTTT logo, heavy display heading, illustration, and pill-shaped black primary action button on white background](https://pin.fontofweb.com/4048?format=jpg)](https://design.withfudge.com/share/pin-4048)

[Promotional retention modal with centered IFTTT logo, heavy display heading, illustration, and pill-shaped black primary action button on white background](https://design.withfudge.com/share/pin-4048)

[![Subscription cancellation confirmation with bold question heading, bulleted benefit list, and pill-shaped Stay Pro button with secondary text link below](https://pin.fontofweb.com/4047?format=jpg)](https://design.withfudge.com/share/pin-4047)

[Subscription cancellation confirmation with bold question heading, bulleted benefit list, and pill-shaped Stay Pro button with secondary text link below](https://design.withfudge.com/share/pin-4047)

[![Billing dashboard with Plan details card on light gray surface, blue action links, checkbox control, and Billing History section with date-price row](https://pin.fontofweb.com/4046?format=jpg)](https://design.withfudge.com/share/pin-4046)

[Billing dashboard with Plan details card on light gray surface, blue action links, checkbox control, and Billing History section with date-price row](https://design.withfudge.com/share/pin-4046)

[![Colorful integration applet grid with orange, black, blue, and purple cards featuring service icons, white text, and user engagement counts](https://pin.fontofweb.com/4042?format=jpg)](https://design.withfudge.com/share/pin-4042)

[Colorful integration applet grid with orange, black, blue, and purple cards featuring service icons, white text, and user engagement counts](https://design.withfudge.com/share/pin-4042)

## Overview

IFTTT's visual system balances approachable clarity with confident authority. The interface centers on a stark black-and-white foundation, using heavy geometric wordmarks and display headings to establish immediate brand recognition. Content flows in generous vertical rhythm against clean white canvases, with occasional light gray surfaces grouping related information into scannable cards. The personality emerges through colorful service-branded applet cards—vibrant orange, deep blue, purple, and black rectangles that showcase automation possibilities with white text and recognizable service icons. Action elements are unmistakable: pill-shaped black buttons with white text dominate conversion moments, while blue text links handle secondary navigation and editing functions. The overall effect is friendly but purposeful, guiding users through subscription decisions, billing management, and applet discovery without visual clutter or ambiguity.

## Colors

The palette operates on a principle of maximum contrast for readability, with reserved color accents for interactive hierarchy and service branding.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, wordmark, display headings, card backgrounds |
| canvas | #FFFFFF | Page backgrounds, button text on dark surfaces, card text |
| surface | #F5F5F5 | Billing cards, grouped information panels, subtle containers |
| action | #000000 | Primary button fills, strongest interactive emphasis |
| action-text | #FFFFFF | Text on primary buttons and dark card backgrounds |
| accent-blue | #0099FF | Edit links, cancellation links, secondary actions, interactive text |
| muted-ink | #666666 | Supporting details, expiration text, secondary metadata |
| border | #E5E5E5 | Subtle dividers, checkbox frames, section separators |

The light mode is dominant across all visible surfaces. Black serves dual roles as both text and interactive surface, creating a cohesive severity that makes the blue accent feel intentionally electric when it appears. The gray surface token appears only for functional grouping—billing plan details, history sections—never as decoration. Service colors on applet cards are drawn from partner brand identities rather than the core system, appearing as full-bleed backgrounds with white text for guaranteed contrast.

## Typography

Two weights of Avenir Next anchor the system: a heavy weight for display and brand moments, and a regular weight for all reading text. The geometric sans-serif construction gives headings a blocky, confident presence that reads well at large sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Avenir Next | 3rem | 800 | 1.1 | -0.02em | Page titles, promotional headings, modal headlines |
| section-display | Avenir Next | 2rem | 700 | 1.2 | -0.01em | Card headings, section labels like "Plan details" |
| body | Avenir Next Ltw 01 | 1rem | 400 | 1.5 | 0 | Descriptions, benefit lists, billing explanations |
| body-medium | Avenir Next Ltw 01 | 1rem | 500 | 1.5 | 0 | Button labels, emphasized body text |
| label | Avenir Next Ltw 01 | 0.875rem | 500 | 1.4 | 0.01em | Links, metadata, service attribution, counts |
| navigation | Avenir Next Ltw 01 | 0.875rem | 500 | 1.4 | 0 | Navigational elements, secondary actions |

The heavy display weight achieves its impact through mass rather than italic or condensed distortion. Tight tracking on large headings prevents the geometric forms from feeling loose, while body text uses neutral spacing for comfortable reading. The type scale is restrained: only six semantic roles cover all visible applications, with no thin or light weights appearing in the interface.

Avenir Next was designed by Adrian Frutiger and Akira Kobayashi, distributed by Linotype GmbH. Verify licensing for these families before production use.

## Layout

The layout philosophy prioritizes centered, single-column flows for task completion and full-bleed grids for content exploration.

**Page structure.** Task-oriented pages—billing, cancellation, subscription success—use a narrow centered column approximately 640px wide. The IFTTT wordmark sits centered at the top, establishing brand presence without navigation complexity. Content stacks vertically with consistent section spacing, creating a deliberate pace that focuses attention on decisions.

**Content hierarchy.** Within the centered column, information unfolds in three zones: a display heading establishes context, body text explains details or consequences, and action elements conclude the sequence. On the billing page, this expands to include card surfaces that group plan information and history into scannable units with internal horizontal alignment—price left, actions right.

**Grid behavior.** The applet exploration page breaks from the narrow column into a responsive grid of rectangular cards. Cards maintain consistent aspect ratios with internal padding that preserves text legibility against vibrant backgrounds. The grid gap creates breathing room between service-branded surfaces.

**Spacing system.** All spacing derives from a 0.25rem base unit. Section breaks use 4rem vertical separation. Component gaps within sections use 1.5rem. Card internal padding uses 1.5rem uniformly. This limited scale prevents arbitrary measurements while supporting both airy marketing pages and dense functional interfaces.

## Visual language

**Brand expression.** The IFTTT wordmark appears as a bold geometric logotype, constructed from thick rectangular strokes that echo the blocky confidence of the display type. This mark anchors every page top, scaled to feel prominent without competing with page content.

**Illustration style.** Promotional moments incorporate friendly line illustrations with selective color accents—green currency, orange and yellow decorative shapes—against white backgrounds. These illustrations use thin strokes and flat fills, avoiding gradients or shadows to maintain the system's flat graphic quality.

**Card language.** Functional cards use light gray surfaces with rounded corners, subtle enough to recede behind content. Applet cards invert this logic: full-bleed color backgrounds with white text, service icons at top, and metadata at bottom. The "Pro" badge on certain cards uses a small black pill with white text, mirroring the primary button language at miniature scale.

**Iconography.** Service icons appear as simple white glyphs on colored card backgrounds—RSS symbols, social media marks, communication icons. These are flat, monochromatic, and consistently sized for grid harmony. User counts and attribution use small person icons and service marks as inline visual anchors.

## Components

**Primary action button**
- Anatomy: Pill-shaped container with centered text label
- Surface: Solid black fill with white text
- Typography: body-medium token, 1rem at 500 weight
- Shape: Full pill radius (9999px), generous horizontal padding (2.5rem), vertical padding (1rem)
- Spacing: Centered within parent, with 1.5rem gap to secondary actions below
- Composition: Full-width on narrow columns, intrinsic width on wider contexts
- Variants: The same component appears as "Get 20% off," "Stay Pro," and similar conversion labels

**Secondary text action**
- Anatomy: Plain text without container, positioned below primary button
- Surface: Transparent background
- Typography: label token at 0.875rem, 500 weight, black color
- Shape: No radius, no padding beyond intrinsic text bounds
- Composition: Centered, with underline implied by context rather than permanent decoration
- Variants: "No thanks, just cancel my subscription," "Continue with cancellation"

**Text link**
- Anatomy: Inline text with no surrounding container
- Surface: Transparent
- Typography: label token at 0.875rem, 500 weight
- Color: accent-blue (#0099FF)
- Composition: Right-aligned in card headers, or centered in standalone contexts
- Variants: "Edit payment info," "Switch to Pro+," "Cancel my subscription"

**Card surface**
- Anatomy: Rounded rectangle containing grouped information
- Surface: surface color (#F5F5F5) fill
- Shape: 0.75rem border radius
- Padding: 1.5rem internal
- Composition: Full-width within narrow column, with plan details left and action links right
- Variants: Plan details card, billing history container

**Checkbox control**
- Anatomy: Square frame with rounded corners, adjacent label text
- Surface: White fill with border color frame
- Shape: 0.5rem border radius, approximately 1.25rem square
- Typography: body token for label text
- Composition: Left-aligned frame with label to right, vertically centered

**Applet card**
- Anatomy: Colored rectangle with service icons, title text, attribution, and count
- Surface: Full-bleed service brand color (orange, blue, purple, black)
- Typography: section-display token for titles in white, label token for metadata
- Shape: 0.75rem border radius
- Padding: 1.5rem internal
- Composition: Icons at top-left, title below, attribution and count at bottom
- Variants: Color determined by primary service; "Pro" badge appears as small black pill on qualifying cards

## Responsive behavior

The narrow-column task pages likely maintain their centered single-column structure across viewports, with padding scaling to preserve readable line lengths. The primary button may expand to full width on the narrowest mobile viewports where touch targets benefit from edge-to-edge presence.

The applet grid requires explicit responsive handling: the visible four-column desktop arrangement should collapse to two columns on tablets and single column on phones, maintaining card aspect ratios and internal padding. Card text sizes may require slight reduction at small sizes to prevent overflow against fixed padding.

Touch targets for all interactive elements should maintain minimum 44px height regardless of viewport, with pill buttons naturally exceeding this. The checkbox control may require increased tap area through invisible padding on mobile contexts.

## Practical implementation guidance

**Preserve**
- The stark black-white contrast for all conversion and task flows; this severity builds trust during subscription decisions
- Heavy display weight for headings; lighter weights visibly weaken the brand presence
- Pill-shaped buttons with generous horizontal padding; the elongated proportion is distinctive
- Service brand colors on applet cards as full-bleed backgrounds, never as accent strips or borders
- Centered single-column layout for all transactional pages

**Avoid**
- Introducing additional colors into the core UI beyond black, white, gray, and blue
- Using the heavy display weight for body text; it becomes illegible and shouty at small sizes
- Rounding corners more sharply than 0.75rem; the system favors gentle curves over crisp rectangles
- Placing dark text on the gray surface card; maintain black-on-white or white-on-dark patterns
- Adding shadows to cards; the flat layering is intentional

**Recommended build order**
1. Establish typography scale with Avenir Next heavy and regular weights
2. Implement centered single-column layout with 640px max-width and 4rem section spacing
3. Build pill button component with full radius and black-white contrast
4. Create card surface component with gray fill and 0.75rem radius
5. Add text link component with blue accent color
6. Implement applet grid with responsive column behavior and service color mapping
7. Add checkbox and form controls for billing interfaces

**Accessibility**
- Ensure blue accent links maintain 3:1 contrast against white backgrounds; the current #0099FF may require darkening for small text compliance
- Provide visible focus states for pill buttons, likely an outline offset or inverse color shift
- Use semantic heading hierarchy despite visual weight similarities—page title as h1, card titles as h2
- Include alt text for service icons in applet cards, describing the automation services involved
- Maintain touch target size for all interactive elements, especially small "Pro" badges and attribution links

## Scope note

This guide covers the billing, subscription, and applet exploration surfaces visible in the supplied images. Navigation headers, footers, form validation states, loading indicators, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion, sound, and dark mode implementations are outside the current scope.
