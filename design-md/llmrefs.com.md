# How llmrefs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/llmrefs.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with search input, orange CTA button, floating brand icons, and social proof logo bar on light gray background](https://pin.fontofweb.com/6281?format=jpg)](https://design.withfudge.com/share/pin-6281)

[Hero section with search input, orange CTA button, floating brand icons, and social proof logo bar on light gray background](https://design.withfudge.com/share/pin-6281)

[![Founder message section with large display headline, body paragraphs, and signed attribution with avatar portrait](https://pin.fontofweb.com/6280?format=jpg)](https://design.withfudge.com/share/pin-6280)

[Founder message section with large display headline, body paragraphs, and signed attribution with avatar portrait](https://design.withfudge.com/share/pin-6280)

[![Pricing card with black CTA button, feature checklist grid, and testimonial quote with star rating](https://pin.fontofweb.com/6279?format=jpg)](https://design.withfudge.com/share/pin-6279)

[Pricing card with black CTA button, feature checklist grid, and testimonial quote with star rating](https://design.withfudge.com/share/pin-6279)

## Overview

LLMrefs presents a confident, minimalist SaaS aesthetic built around a stark black-and-white foundation with a single warm amber accent. The design prioritizes clarity and conversion: large, tightly-tracked display type dominates the hero and section headers, while restrained body copy and generous whitespace keep the reading experience uncluttered. The visual hierarchy is aggressive in scale contrast—headlines push to 48px while supporting labels stay at 14px—creating clear scanning paths for busy marketers and SEO professionals. A subtle gray canvas behind the hero search area separates the primary conversion moment from the white content bands below. Floating brand icons and a social-proof logo bar reinforce credibility without competing with the core message. The overall impression is technical authority delivered with approachable simplicity.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, body text, primary button backgrounds |
| muted-ink | #4F4F4F | Secondary body text, captions, footer legal copy |
| medium-ink | #8B8B8B | Tertiary text, placeholder text, disabled states |
| border | #D1D1D1 | Hairline dividers, input borders, subtle separators |
| surface | #E5E5E5 | Hero background canvas, subtle section alternation |
| canvas | #FFFFFF | Primary page background, card surfaces, button text |
| accent | #F59E0B | Primary CTA buttons, section labels, interactive highlights |
| accent-text | #F59E0B | "LLM SEO TRACKER" category label, emphasized keywords in headlines |

The color system operates in a near-monochrome mode with amber as the sole chromatic accent. Black carries the full weight of typography and primary actions, while the warm gray scale (#4F4F4F through #E5E5E5) handles information hierarchy without introducing competing hues. The amber accent (#F59E0B) appears sparingly—reserved for the most important interactive elements and category labels—ensuring it retains visual punch. White text on amber buttons provides maximum contrast for conversion-critical actions. The light gray hero background (#E5E5E5) creates a soft container for the search interface, distinguishing it from the pure white content sections that follow.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Satoshi | 3rem | 800 | 1.1 | -0.025em | Hero headlines, major section titles |
| section-display | Satoshi | 3rem | 800 | 1.1 | -0.025em | Section headers with emphasized accent words |
| body-large | Satoshi | 1.125rem | 400 | 1.78 | 0em | Founder message paragraphs, explanatory copy |
| body | Satoshi | 1rem | 400 | 1.5 | 0em | Navigation, header elements, general UI text |
| body-medium | Satoshi | 1.25rem | 400 | 1.6 | 0em | Hero subheadlines, feature descriptions |
| label | Satoshi | 0.875rem | 400 | 1.43 | 0.025em | Category labels, small captions, metadata |
| price-display | Satoshi | 3.5rem | 800 | 1 | -0.02em | Pricing plan costs |
| button | Satoshi | 1.25rem | 700 | 1.4 | 0em | CTA button text |
| nav | Satoshi | 1rem | 500 | 1.5 | 0em | Primary navigation links |
| header-cta | Satoshi | 1rem | 600 | 1.5 | 0em | Header dashboard button |

The type system relies entirely on Satoshi, a geometric sans-serif with a contemporary, slightly technical feel. Weight variation creates hierarchy within the single family: ExtraBold (800) for display headlines, Regular (400) for body reading, and Bold (700) for button text. The tight negative tracking on display sizes (-0.025em at 48px) gives headlines a compact, authoritative presence. Letter-spacing on labels is slightly opened (0.025em) to compensate for their small size and uppercase treatment. Line heights are generous for body text (1.78 for large paragraphs) but tight for display (1.1), creating distinct rhythm zones. The accent color applied to select words within headlines—such as "for" in the founder section—creates typographic color without altering weight or size.

Verify licensing for Satoshi through Indian Type Foundry before production use. Designed by Deni Anggara.

## Layout

The page follows a centered, single-column content model with a maximum content width of approximately 82rem (1312px). Horizontal margins of 328px on desktop pin content to a readable central column, while a wider 490px margin centers certain narrow elements like category labels. The hero section breaks from this constraint with a full-bleed light gray background that extends edge to edge, containing the search interface and social proof bar.

Vertical rhythm is established through section spacing of roughly 6rem (96px) between major content blocks. Internal component spacing uses an 8px base unit: 16px for button padding, 24px for card padding, 32px for section-internal gaps, and 40-48px for card interior padding. The pricing card uses asymmetric padding (40px top, 48px bottom, 48px left) to create subtle visual weight toward the bottom.

The header employs a fixed or sticky behavior with 24px horizontal padding and a floating layout: logo left, navigation center-left, and a prominent amber "Dashboard" button right-aligned. Navigation links receive 8px padding for generous touch targets without visual bulk.

Content sections alternate between pure white backgrounds and the subtle gray hero canvas. The founder message section uses a horizontal rule (#D1D1D1, 1px) to separate the textual content from the signed attribution below. Feature lists in the pricing section deploy a two-column grid with 24px row gaps and checkmark icons as bullet replacements.

## Visual language

The aesthetic communicates analytical precision through restraint: no gradients, no shadows on static content, no border-radius beyond functional rounding. The visual interest comes from scale contrast, the single warm accent, and carefully placed social proof elements.

Photography and avatars appear as small circular crops (founder portrait, testimonial headshot), providing human warmth without dominating the information architecture. The star rating in the testimonial uses filled amber shapes that echo the primary accent.

Iconography is minimal and functional: a search magnifying glass in the hero CTA, checkmarks in feature lists, and small engine icons representing AI search platforms. These icons stay at 16-20px, subordinate to text.

The floating brand icons around the hero search input (Google, Perplexity, and others) create a dynamic, orbit-like composition that suggests connectivity across the AI search ecosystem. These appear at roughly 32-40px with subtle drop shadows that lift them from the gray background.

The social proof logo bar uses grayscale treatment on partner logos, maintaining visual quietness while establishing credibility. Logos are evenly spaced with consistent height normalization around 24px.

## Components

### Primary search interface

- **Anatomy**: Rounded container with text input left, amber search button right, and a micro-copy reassurance below
- **Surface**: White input field with #D1D1D1 border, amber button (#F59E0B) with white text
- **Typography**: Input placeholder uses body-medium at 1.25rem; button uses button token at 1.25rem/700
- **Shape**: 6px border-radius on both input and button; button has slightly more padding (16px 28px) than standard
- **Spacing**: Container floats with generous margin above and below; micro-copy sits 8px beneath with checkmark icon
- **Composition**: Input and button share a unified horizontal bar with no gap between them

### Primary CTA button

- **Anatomy**: Solid fill with text and optional right arrow icon
- **Surface**: Amber background (#F59E0B), white text (#FFFFFF)
- **Typography**: button token—1.25rem, weight 700
- **Shape**: 6px border-radius
- **Spacing**: 16px vertical padding, 28px horizontal padding
- **Variants**: Header variant uses smaller padding (8px 16px) and header-cta typography; pricing section uses black background (#000000) with white text for the trial button

### Pricing card

- **Anatomy**: Plan name, price display, billing period, trial button, cancellation policy, and two-column feature checklist
- **Surface**: White background (#FFFFFF), 16px border-radius, subtle shadow
- **Typography**: Plan name uses body at 1rem/700; price uses price-display at 3.5rem/800; features use body at 1rem/400
- **Shape**: 16px rounded corners
- **Spacing**: 40px top padding, 48px bottom and left padding; internal sections separated by 24-32px margins
- **Composition**: Left column holds pricing and CTA; right column spans feature grid with checkmark bullets

### Section label

- **Anatomy**: Uppercase or small-caps category descriptor
- **Surface**: Transparent, amber text color
- **Typography**: label token—0.875rem, weight 400, with 0.025em positive tracking
- **Composition**: Centered above section headlines, creating a two-line header hierarchy

### Testimonial block

- **Anatomy**: Quotation text, circular avatar, name, title, and star rating
- **Surface**: Transparent on white or gray background
- **Typography**: Quote uses body-medium; attribution uses body at 1rem
- **Composition**: Right-aligned in the pricing section; avatar at 40-48px with name and title stacked beside it

### Navigation header

- **Anatomy**: Logo mark, text links, and dashboard CTA
- **Surface**: Transparent or white background; nav links in black or white depending on scroll state
- **Typography**: nav token for links; header-cta for dashboard button
- **Shape**: Dashboard button uses 6px radius
- **Spacing**: 24px horizontal padding; 8px padding on nav links

## Responsive behavior

The design's generous desktop margins (328px) will require significant reduction on tablet and mobile viewports. The two-column pricing feature grid should stack to a single column below approximately 768px, with the pricing CTA moving above the feature list for thumb reachability.

The hero search interface should remain full-width on mobile with the button dropping below the input or converting to an icon-only search trigger. Floating brand icons around the hero should reduce in count or hide entirely on narrow viewports to prevent visual clutter.

Display headlines at 48px should scale down to 32-36px on tablet and 28-32px on mobile to maintain line-length control. Body text at 18px can remain consistent across breakpoints given its generous line height.

The social proof logo bar should scroll horizontally on mobile or reduce to 4-5 key logos with a "and more" treatment. Navigation should collapse to a hamburger menu below approximately 1024px, with the dashboard CTA remaining visible in the header if possible.

## Practical implementation guidance

### Preserve
- The stark black-white-amber palette; introducing additional accent colors will dilute the conversion focus
- The tight negative tracking on display headlines; this is central to the brand's authoritative tone
- The generous whitespace between sections; crowding content destroys the premium SaaS impression
- The single font family approach; mixing in secondary typefaces will fracture the technical consistency

### Avoid
- Generic blue link colors; the system uses black underlined text or amber for interactive emphasis
- Heavy drop shadows on static content; the design relies on flat planes and whitespace for separation
- Rounded corners larger than 16px on cards; the aesthetic is crisp, not playful
- Centering body text beyond the hero; left-aligned paragraphs maintain readability for longer content

### Recommended build order
1. Establish the type scale with Satoshi at all weights, verifying web font loading
2. Implement the gray hero canvas and white content band backgrounds
3. Build the search interface component with unified input-button treatment
4. Create the primary and secondary button variants with exact padding values
5. Lay out the pricing card with two-column feature grid
6. Add social proof elements: logo bar, testimonials, floating icons
7. Polish with micro-copy, checkmark icons, and attribution details

### Accessibility
- Ensure the amber accent (#F59E0B) on white meets WCAG AA for large text (it does not meet AA for normal text, so avoid small amber-on-white combinations)
- The black-on-white body text provides excellent contrast; maintain this for all essential content
- Search input needs a visible focus state; consider a 2px black or amber outline offset
- Button text should remain at 1.25rem minimum to leverage large-text contrast ratios
- Add aria-labels to icon-only elements like the search button icon

## Scope note

This guide covers the LLMrefs marketing homepage including the hero search interface, founder message section, and pricing card. Footer content, interior dashboard interfaces, mobile navigation patterns, and animation behaviors are not represented in the supplied materials. The testimonial quote and star rating appear in a partial state and may have additional layout variants not documented here.
