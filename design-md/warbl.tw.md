# How warbl.tw is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/warbl.tw-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with gradient headline, product mockup card, and teal primary action button on near-black background](https://pin.fontofweb.com/7680?format=jpg)](https://design.withfudge.com/share/pin-7680)

[Hero section with gradient headline, product mockup card, and teal primary action button on near-black background](https://design.withfudge.com/share/pin-7680)

[![Founder story section with gradient border card, large quote typography, and social proof metrics on dark canvas](https://pin.fontofweb.com/7679?format=jpg)](https://design.withfudge.com/share/pin-7679)

[Founder story section with gradient border card, large quote typography, and social proof metrics on dark canvas](https://design.withfudge.com/share/pin-7679)

## Overview

Warbl presents a dark, immersive landing experience for a Chrome extension that accelerates engagement on X/Twitter. The visual system builds authority through near-black canvases, high-contrast white typography, and energetic gradient accents that shift between teal and coral. The design balances technical credibility with approachable warmth: monospace labels signal precision, while rounded pill shapes and soft glow effects keep the interface feeling modern and friendly. Product mockups appear as floating cards with subtle depth, demonstrating the tool in context without overwhelming the narrative. The overall composition centers content in generous negative space, letting the gradient headlines and social proof metrics command attention.

## Colors

The palette operates on a near-black foundation with selective, high-saturation accents that draw the eye to actions and key messages.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #050506 | Card backgrounds, subtle elevation |
| surface-elevated | #09090B | Gradient card mid-tones, hover states |
| ink | #FAFAFA | Primary headings, body text, navigation |
| muted-ink | #A1A1AA | Secondary text, gradient headline endpoints |
| dim-ink | #71767B | Tertiary labels, metadata, disabled hints |
| accent-teal | #22E1C8 | Primary action fills, gradient starts, metric highlights |
| accent-coral | #FF8C73 | Gradient endpoints, emphasis words, energy accents |
| accent-blue | #1D9BF0 | Social platform references, link hints |
| action-primary | #22E1C8 | Download buttons, primary CTAs |
| action-primary-text | #050506 | Text on teal buttons for contrast |

The headline gradient runs from pure white (#FFFFFF) through muted gray (#A1A1AA), creating a metallic depth effect on large display type. A second gradient animates or accents key phrases with a teal-to-coral sweep (135deg, #22E1C8 to #FF8C73). Cards and containers use a subtle dark gradient from #050506 through #09090B to create dimensional lift without harsh shadows. The teal action color dominates interactive elements, while coral appears as a secondary energy pulse in text and border treatments.

## Typography

Three families create a clear hierarchy: Space Grotesk for display and brand voice, Inter for readable body copy, and Jet Brains Mono for technical labels and metadata.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Space Grotesk | 4.5rem | 500 | 1.1 | -0.02em | Main headline, gradient-treated |
| section-display | Space Grotesk | 3rem | 500 | 1.375 | -0.02em | Section headings, quotes |
| metric-display | Space Grotesk | 8rem | 500 | 1 | -0.02em | Large statistics, social proof |
| body-large | Inter | 1.25rem | 400 | 1.625 | 0 | Lead paragraphs, founder story |
| body | Inter | 1rem | 400 | 1.6 | 0 | Standard paragraphs, descriptions |
| body-small | Inter | 0.9375rem | 400 | 1.6 | 0 | Compact text, button labels |
| label | Jet Brains Mono | 0.875rem | 400 | 1.4286 | 0.05em | Tags, badges, metadata |
| navigation | Space Grotesk | 1.25rem | 500 | 1.4 | -0.02em | Nav links, logo companion |
| button-primary | Inter | 0.9375rem | 700 | 1.6 | 0 | Primary action text |

Space Grotesk carries the brand personality with its geometric construction and slightly tight tracking. Inter provides neutral, highly legible body copy at multiple sizes. Jet Brains Mono appears in uppercase for technical badges like "AI-POWERED CHROME EXTENSION" and metric labels like "MORE REPLIES." The gradient headline treatment applies to hero-display and select section-display instances, creating a shimmering effect that shifts between white, teal, and coral.

Verify licensing for these families before production use. Space Grotesk is designed by Florian Karsten.

## Layout

The page uses a centered, single-column content flow with constrained maximum widths and generous vertical breathing room. The root relative unit is 0.125rem (2px), enabling fine-grained control.

**Grid and containment:**
- Content max-width: 48rem (768px) for readable text blocks
- Wider sections stretch to 64rem (1024px) for product mockups
- Horizontal padding: 2rem (32px) on all viewport edges
- Section vertical spacing: 4rem (64px) between major blocks

**Header:**
- Fixed or sticky top navigation
- Logo left, links center, primary action right
- Height approximately 4rem with vertical centering
- Subtle bottom border or shadow for separation

**Hero composition:**
- Centered text alignment
- Badge/label above headline
- Headline with gradient treatment, two lines
- Subheadline paragraph below, muted-ink color
- Primary action button centered
- Trust indicators (checkmarks with microcopy) below button
- Product mockup card floats below, breaking the vertical flow with visual depth

**Story section:**
- Gradient-bordered card containing founder narrative
- Large quote marks as decorative elements
- Mixed-weight paragraph with gradient-highlighted words
- Metrics row with large numbers and monospace labels
- Avatar and attribution at bottom

## Visual language

**Depth and elevation:**
Cards achieve depth through subtle background gradients rather than drop shadows. The founder story card uses a distinctive gradient border that shifts from teal through coral, creating a glowing frame effect. Product mockups float with layered backgrounds suggesting interface depth.

**Gradient patterns:**
- Headline gradient: linear from white to muted-ink, creating metallic dimension
- Accent gradient: 135-degree sweep from teal to coral, used for emphasis words and border treatments
- Card gradient: subtle dark lift from surface to surface-elevated

**Shape language:**
Pill shapes dominate interactive elements: buttons, badges, and labels all use full rounding (9999px). Cards use 0.75rem (12px) radius for a slightly softer corner. The overall effect is friendly and approachable despite the dark palette.

**Iconography and imagery:**
Small checkmark icons appear in trust indicators. Product screenshots show realistic interface mockups with platform-native styling. Avatar images are circular with subtle borders.

**Motion implications:**
The gradient accents suggest potential motion: the teal-to-coral sweep could animate as a shifting highlight. The product mockup card may have subtle parallax or hover lift. These remain implementation decisions; the still images show the static baseline.

## Components

**Primary action button:**
- Anatomy: Icon + text label, horizontally centered
- Surface: Solid accent-teal fill (#22E1C8)
- Typography: button-primary token, action-primary-text color (#050506)
- Shape: Full pill (9999px radius)
- Spacing: 0.375rem vertical, 1rem horizontal padding (6px 16px)
- Composition: Flex row with 0.5rem gap between icon and text
- Variants: Header variant uses same styling but may be slightly more compact

**Badge/label:**
- Anatomy: Optional icon + uppercase text
- Surface: Transparent with subtle border or dark fill
- Typography: label token, Jet Brains Mono, uppercase
- Shape: Full pill (9999px radius)
- Spacing: 0.5rem vertical, 1rem horizontal padding
- Color: Muted teal or white text on near-black

**Product mockup card:**
- Anatomy: Platform-style interface showing tweet and reply composition
- Surface: Dark card with subtle gradient lift, rounded corners
- Border: 1px subtle border or no visible border, relying on background contrast
- Internal spacing: 1rem (16px) padding
- Composition: Realistic interface elements including avatar, username, timestamp, action bar, and reply input area

**Founder story card:**
- Anatomy: Gradient border container with internal content stack
- Surface: Dark interior (surface to surface-elevated gradient)
- Border: 1px gradient border using teal-to-coral sweep
- Shape: 0.75rem (12px) outer radius
- Internal spacing: 4rem (64px) padding
- Composition: Quote marks as decorative elements, mixed paragraph weights, metrics row, attribution block

**Metric block:**
- Anatomy: Large number + monospace label below
- Typography: metric-display for number, label token for descriptor
- Color: Gradient or solid accent-teal for number, dim-ink for label
- Composition: Centered or left-aligned, stacked vertically

**Navigation:**
- Anatomy: Logo mark + wordmark, text links, primary action button
- Typography: navigation token for links, body for logo text
- Color: Ink on transparent background
- Spacing: 2rem horizontal padding, items spaced with 2rem gaps

## Responsive behavior

The design appears optimized for desktop viewing with centered content and generous margins. At narrower viewports, the following adaptations should maintain readability:

- Reduce hero-display from 4.5rem to 2.5rem (40px), maintaining line-height ratio
- Stack navigation into hamburger menu or collapse links
- Convert metric-display from 8rem to 4rem for mobile
- Maintain 2rem horizontal padding down to smallest screens
- Product mockup card should scroll horizontally or stack elements if interface is too wide

The gradient headline treatment must remain legible at all sizes; test contrast ratios when scaling down.

## Practical implementation guidance

**Preserve:**
- The near-black canvas as the dominant background; it creates the premium, focused atmosphere
- Gradient headline treatment on key display text; it is the signature visual element
- Teal-to-coral accent gradient for energy and warmth
- Monospace labels for technical credibility
- Full-pill button shapes for friendly accessibility
- Generous vertical spacing between sections

**Avoid:**
- Light backgrounds; they would destroy the immersive dark experience
- Harsh drop shadows; prefer subtle gradient elevation
- Multiple accent colors beyond teal and coral
- Tight letter-spacing on body text; keep Inter at normal spacing
- Sharp corners on interactive elements; maintain the pill language

**Recommended build order:**
1. Establish canvas and surface color tokens with dark foundation
2. Implement Space Grotesk for headlines with gradient CSS treatment
3. Build primary action button with teal fill and dark text
4. Create product mockup card with realistic interface screenshot
5. Add founder story section with gradient border card
6. Polish with monospace labels, trust indicators, and metric blocks

**Accessibility:**
- Ensure teal action buttons meet contrast ratios against dark backgrounds (they do for large text, verify for small text)
- Provide focus states that mirror hover with visible outlines
- Add `prefers-reduced-motion` support for gradient animations
- Maintain readable line lengths: 60-75 characters for body text
- Use semantic heading hierarchy despite visual styling similarities

## Scope note

This guide covers the Warbl landing page hero and founder story sections visible in the supplied images. Pricing, FAQ, and feature detail pages are not represented. Mobile breakpoints, form interactions, and extension onboarding flows are not documented. Motion behavior and hover states are inferred from static images and should be validated in implementation.
