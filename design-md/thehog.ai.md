# How thehog.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thehog.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with massive 'THE HOG' display text in white against a cyan gradient background, with contact email in small black text at top left.](https://pin.fontofweb.com/6324?format=jpg)](https://design.withfudge.com/share/pin-6324)

[Hero section with massive 'THE HOG' display text in white against a cyan gradient background, with contact email in small black text at top left.](https://design.withfudge.com/share/pin-6324)

[![Customer stories section with italic serif headline, metric cards showing 3.7x, 4.1x, 60h, 2.3x statistics, and testimonial quotes with avatar photos on light gray cards.](https://pin.fontofweb.com/6323?format=jpg)](https://design.withfudge.com/share/pin-6323)

[Customer stories section with italic serif headline, metric cards showing 3.7x, 4.1x, 60h, 2.3x statistics, and testimonial quotes with avatar photos on light gray cards.](https://design.withfudge.com/share/pin-6323)

[![Testimonials carousel with 'What Our Clients Say' italic serif heading, three profile cards with circular avatars, names, titles, and quote text on soft gray rounded panels.](https://pin.fontofweb.com/6322?format=jpg)](https://design.withfudge.com/share/pin-6322)

[Testimonials carousel with 'What Our Clients Say' italic serif heading, three profile cards with circular avatars, names, titles, and quote text on soft gray rounded panels.](https://design.withfudge.com/share/pin-6322)

[![Pricing section with 'Choose Your Plan' italic serif heading, monthly/yearly toggle, four-tier pricing cards from Solo to Enterprise with feature lists and dark CTA buttons.](https://pin.fontofweb.com/6321?format=jpg)](https://design.withfudge.com/share/pin-6321)

[Pricing section with 'Choose Your Plan' italic serif heading, monthly/yearly toggle, four-tier pricing cards from Solo to Enterprise with feature lists and dark CTA buttons.](https://design.withfudge.com/share/pin-6321)

## Overview

The Hog presents a premium SaaS identity built on dramatic scale contrast and refined restraint. The visual system opens with an immersive hero where massive, tightly-tracked sans-serif letterforms fill the viewport against a soft cyan gradient, establishing immediate brand presence. Below this theatrical entry, the experience shifts to a calmer editorial rhythm: light gray card surfaces, elegant italic serif section headings, and a disciplined two-typeface hierarchy that balances personality with readability. The design communicates growth and confidence through oversized metrics, social proof arranged in masonry-like grids, and pricing presented with clear tier differentiation. Every surface choice reinforces cleanliness—white backgrounds, near-white cards, and minimal chrome—while the occasional deep charcoal button or dark toggle provides grounding contrast. The overall impression is of a mature, trustworthy platform that lets its results speak loudly through typography rather than decoration.

## Colors

The palette is intentionally narrow, relying on temperature and luminance shifts rather than multiple hues. Black and near-black serve as the primary ink and interactive surfaces, while a progression of warm grays handles secondary information and card backgrounds. The single accent is a bright cyan that appears only in the hero gradient and occasional links, functioning as a brand signature rather than a functional color.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, hero contact line, default body copy |
| ink-secondary | #141414 | Button backgrounds, dark UI chrome |
| ink-tertiary | #2A2A2A | Toggle backgrounds, secondary dark surfaces |
| muted-ink | #646464 | Testimonial body text, feature descriptions |
| muted-ink-light | #8A8A8A | Subheadings, secondary labels |
| muted-ink-lighter | #A1A1A1 | Tertiary metadata, captions |
| canvas | #FFFFFF | Page background, featured pricing card fill |
| surface | #F5F5F5 | Standard card backgrounds, metric tiles |
| surface-warm | #F8F8F8 | Alternate section backgrounds |
| border | #2B2B2B | Featured card outline, subtle dividers |
| action | #05BFED | Hero gradient accent, link color |
| action-text | #0000EE | Standard hyperlink blue |

The hero section employs a vertical gradient that transitions from white through pale cyan to a deeper sky blue, with the massive "THE HOG" wordmark rendered in white at low opacity so it reads as atmosphere rather than competing text. This gradient is the only place color appears outside the grayscale system. Photography and avatars introduce natural skin tones and environmental color, but the interface itself maintains chromatic discipline. Dark buttons and toggles invert the value scale for calls-to-action, creating clear hierarchy without introducing new hues.

## Typography

Three families appear in the source: Inter, Playfair, and System-Sansserif. Inter handles all functional text—from the monumental hero display to body copy and navigation—while Playfair Italic provides editorial personality for section headings. System-Sansserif appears at 12px in structural divs and navigation regions, serving as a fallback or system-level utility face. The contrast between Inter's geometric clarity and Playfair's classical stroke modulation gives the brand its distinctive voice: precise yet approachable, technical yet human.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 20rem | 700 | 1 | -0.06em | Hero background wordmark |
| section-display | Playfair | 4rem | 400 | 1 | -0.04em | Section headings (testimonials, pricing) |
| section-display-large | Playfair | 7rem | 400 | 1 | -0.04em | Major section headings (customer stories) |
| body-large | Inter | 1.5rem | 500 | 1.4 | -0.06em | Subheadings, descriptive paragraphs |
| body | Inter | 1rem | 400 | 1.2 | -0.02em | Default paragraph text |
| body-small | Inter | 0.875rem | 400 | 1.4 | -0.04em | Feature lists, fine print |
| label | Inter | 0.875rem | 500 | 1.2 | -0.04em | Button text, badges, metadata |
| metric | Inter | 2rem | 500 | 1 | -0.08em | Standard statistics (3.7x, 4.1x) |
| metric-large | Inter | 2.25rem | 500 | 1 | -0.08em | Prominent statistics (60h, 2.3x) |
| navigation | Inter | 0.9375rem | 500 | 2 | -0.013em | Nav links, tab labels |
| legal | Inter | 0.75rem | 400 | 1.2 | 0em | Contact line, copyright |

Playfair Italic is credited to Claus Eggers Sørensen. Inter and System-Sansserif appear without listed attribution. Verify licensing for these families before production use.

The hero display at 320px (20rem) with -19.2px tracking is the system's most extreme treatment, functioning as environmental texture rather than readable text. Section headings at 64px–112px (4rem–7rem) maintain the tight tracking but at scales appropriate for reading. Body text uses negative tracking consistently, with the heaviest application on larger sizes. Weight distinctions are meaningful: 400 for body, 500 for labels and subheadings, 600 for navigation emphasis, and 700 reserved solely for the hero display.

## Layout

The page follows a centered, contained layout with generous breathing room between major sections. Content max-width sits around a standard large breakpoint, with internal padding of 80px on the horizontal axis for desktop viewports. Sections stack vertically with substantial gaps—over 10rem between major thematic blocks—creating a scroll experience that pauses at each story.

The hero occupies full viewport width with no side margins, allowing the gradient and oversized wordmark to bleed edge-to-edge. A small contact line sits in the upper left at 40px from the top, establishing the only navigation-like element in this immersive zone.

Below the hero, content sections employ a centered text block for headings and subheadings, followed by asymmetric card arrangements. The customer stories section uses a masonry-style grid where metric cards and testimonial quotes interlock at varying heights. Testimonials appear as a horizontal carousel or grid of three equal-width cards. The pricing section presents four equal columns on desktop, with the second column (Pro Team) receiving visual emphasis through a white background and dark border against the gray siblings.

Card padding is consistently 30px, with border radii of 20px for standard cards and 32px for larger panel-like containers. The pricing toggle sits centered above the tier cards, itself a pill-shaped container with internal segmentation.

## Visual language

The design's signature move is scale contrast: microscopic functional text against monumental display typography, intimate card padding against expansive section spacing. This creates visual drama without decorative elements. The italic serif headings introduce organic movement and editorial authority, while Inter's geometric regularity grounds the experience in technical competence.

Photography appears only as circular avatars—small, contained, and functional. No hero photography or illustrative imagery competes with the typographic brand. Social proof is handled through metrics (3.7x, 4.1x, 60h, 2.3x) rendered at large scale with tight tracking, making numbers feel like design elements rather than afterthoughts.

The gradient in the hero is the sole instance of true color beyond grayscale and the cyan accent. It reads as sky or atmosphere, suggesting openness and possibility without literal cloud imagery. Subtle platform logos (LinkedIn, Google, X, Instagram) appear as ghosted watermarks on cards, providing social validation at low opacity so they texture rather than distract.

Rounded corners are pervasive but restrained—20px for cards, 32px for larger panels, 8px for buttons. No sharp corners appear except where zero-radius defaults might apply to structural divs. The overall surface quality is soft, approachable, and premium.

## Components

### Hero section
- **Anatomy**: Full-width gradient background, oversized "THE HOG" wordmark centered horizontally, small contact email in upper left
- **Surface**: Vertical gradient from white through pale cyan (#05BFED at lower intensity) to deeper sky blue
- **Typography**: `{typography.hero-display}` in white with low opacity for atmospheric effect; `{typography.legal}` in black for contact line
- **Shape**: Full bleed, no border radius
- **Spacing**: 40px top padding for contact line; wordmark fills remaining vertical space

### Section heading
- **Anatomy**: Bracketed label in cyan above, italic serif heading below, optional subheading in gray
- **Typography**: Label uses `{typography.label}` in `{colors.action}`; heading uses `{typography.section-display}` or `{typography.section-display-large}` in `{colors.muted-ink}`; subheading uses `{typography.body-large}` in `{colors.muted-ink-light}`
- **Composition**: Centered text block, generous bottom margin before content

### Metric card
- **Anatomy**: Large statistic, descriptive label below, platform watermark in background
- **Surface**: `{colors.surface}` background, `{rounded.card}` border radius
- **Typography**: Statistic uses `{typography.metric}` or `{typography.metric-large}` in `{colors.ink}`; label uses `{typography.body-small}` in `{colors.muted-ink}`
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Left-aligned text, watermark logo at reduced opacity in lower right

### Testimonial card
- **Anatomy**: Circular avatar, name and title, quote marks, testimonial body
- **Surface**: `{colors.surface}` background, `{rounded.card}` border radius
- **Typography**: Name uses `{typography.body}` in `{colors.ink}`; title uses `{typography.body-small}` in `{colors.muted-ink-light}`; quote uses `{typography.body-large}` in `{colors.muted-ink}`
- **Spacing**: `{spacing.card-padding}` internal padding; avatar sits above text with small gap
- **Composition**: Avatar and name grouped at top, quote below with quotation mark ornament

### Pricing card
- **Anatomy**: Plan name with beta badge, description, price, feature list, CTA button
- **Surface**: Standard cards use `{colors.surface}` with `{rounded.panel}`; featured card uses `{colors.canvas}` with `{colors.border}` outline
- **Typography**: Plan name uses `{typography.metric}` in `{colors.ink}`; price uses `{typography.metric-large}` in `{colors.ink}`; features use `{typography.body-small}` in `{colors.muted-ink}`; CTA uses `{typography.label}` in `{colors.canvas}`
- **Shape**: `{rounded.panel}` for card container; `{rounded.button}` for CTA
- **Spacing**: `{spacing.card-padding}` internal padding; feature list items separated by small gaps

### Pricing toggle
- **Anatomy**: Pill-shaped container with two options and promotional tag
- **Surface**: `{colors.ink-tertiary}` background, `{rounded.pill}` border radius
- **Typography**: Active option uses `{typography.label}` in `{colors.ink}` on white background; inactive uses `{typography.label}` in `{colors.canvas}`; promotional tag uses smaller text in muted tone
- **Shape**: Full pill with internal rounded selection indicator

### Primary button
- **Anatomy**: Text label centered in rectangular container
- **Surface**: `{colors.ink-secondary}` background, `{colors.canvas}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` border radius
- **Spacing**: 12px vertical, 32px horizontal padding

## Responsive behavior

The design's heavy reliance on fixed large typography demands careful breakpoint handling. The 20rem hero display will require scaling down dramatically on smaller viewports, likely to 6–8rem on tablet and 3–4rem on mobile to maintain legibility and prevent overflow. Section headings at 4rem–7rem should scale to 2.5rem–3rem on mobile.

The four-column pricing grid must collapse to single-column stacking on mobile, with the featured Pro Team card maintaining its visual distinction through border and background. The masonry metric grid should reorganize to two columns on tablet and single column on mobile.

Testimonial cards currently show three across; this should become a horizontal scroll or single-column stack on narrow viewports. Avatar and name grouping should remain intact at all sizes.

Navigation, minimal in the supplied views, would benefit from a hamburger treatment on mobile if expanded beyond the contact line. The bracketed section labels ("[ Customer's Stories ]", "[ Testimonials ]", "[ Pricing ]") should remain visible and centered at all breakpoints as they establish section identity.

## Practical implementation guidance

### Preserve
- The two-typeface hierarchy: Inter for everything functional, Playfair Italic for section headings only
- The extreme scale contrast between hero display and body text
- The restrained grayscale palette with single cyan accent
- Consistent 20px card border radius and 30px internal padding
- The bracketed label pattern above section headings
- Circular avatars with name/title grouping for testimonials

### Avoid
- Adding additional accent colors; the cyan-to-grayscale system is intentionally narrow
- Using Playfair for body text or UI labels; reserve it for display headings only
- Sharp corners on interactive surfaces; maintain the soft radius language
- Crowding the hero with additional elements; the contact line and wordmark are sufficient
- Making metric statistics smaller than their surrounding labels; the inversion of scale is intentional

### Recommended build order
1. Establish the type scale with Inter and Playfair Italic loaded, verifying the 20rem hero display renders without performance issues
2. Implement the grayscale color tokens and single gradient hero background
3. Build the card component with 20px radius, 30px padding, and surface background
4. Create the section heading pattern with bracketed label, italic serif, and subheading
5. Assemble the metric card and testimonial card variants
6. Implement the pricing grid with standard and featured card states
7. Add the pricing toggle with pill shape and segmented selection
8. Polish with the hero gradient and oversized wordmark

### Accessibility
- The hero gradient with white text at low opacity may fail contrast requirements; consider a slightly darker gradient stop or increased text opacity
- Ensure the cyan bracketed labels (#05BFED) meet 4.5:1 contrast against white backgrounds
- Playfair Italic at display sizes is decorative; do not use it for critical information
- Pricing toggle should support keyboard navigation and clear focus indicators
- Testimonial carousel, if implemented as such, needs pause controls and swipe alternatives

## Scope note

This guide covers the desktop landing page experience for The Hog's marketing site, including hero, social proof, testimonials, and pricing sections. Mobile breakpoints, form interactions, checkout flows, dashboard interfaces, and motion behavior are not represented in the supplied material. The bracketed section labels and platform watermark treatments are described from visible design but may have additional states or animations not captured in still images.
