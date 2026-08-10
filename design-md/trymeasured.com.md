# How trymeasured.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trymeasured.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero header with medication grid showing compounded semaglutide and Wegovy options against a soft gradient background with star rating and weight-loss chart imagery.](https://pin.fontofweb.com/6994?format=jpg)](https://design.withfudge.com/share/pin-6994)

[Hero header with medication grid showing compounded semaglutide and Wegovy options against a soft gradient background with star rating and weight-loss chart imagery.](https://design.withfudge.com/share/pin-6994)

[![Three-step process section with yellow and purple UI mockups illustrating personalized prescription flow and medication support on a clean white background.](https://pin.fontofweb.com/6993?format=jpg)](https://design.withfudge.com/share/pin-6993)

[Three-step process section with yellow and purple UI mockups illustrating personalized prescription flow and medication support on a clean white background.](https://design.withfudge.com/share/pin-6993)

[![Social proof testimonial carousel with blue gradient background featuring before-and-after photography and a quoted customer review with navigation arrows.](https://pin.fontofweb.com/6992?format=jpg)](https://design.withfudge.com/share/pin-6992)

[Social proof testimonial carousel with blue gradient background featuring before-and-after photography and a quoted customer review with navigation arrows.](https://design.withfudge.com/share/pin-6992)

[![Dark footer CTA section with large white typography over a moody portrait photograph, followed by multi-column footer links and certification badges.](https://pin.fontofweb.com/6991?format=jpg)](https://design.withfudge.com/share/pin-6991)

[Dark footer CTA section with large white typography over a moody portrait photograph, followed by multi-column footer links and certification badges.](https://design.withfudge.com/share/pin-6991)

## Overview

Measured presents a metabolic health platform that balances clinical credibility with approachable warmth. The design system relies on a restrained palette of soft pastels against clean white space, punctuated by confident black typography and rounded pill-shaped actions. The visual hierarchy moves users from an airy, gradient-washed hero through structured medication grids, step-by-step process illustrations, social proof carousels, and finally into a dark, immersive footer. Every surface communicates trust through generous rounding, consistent spacing, and a deliberate absence of harsh edges. The system feels less like a medical portal and more like a wellness companion—precise enough to convey expertise, friendly enough to encourage conversion.

## Colors

The color strategy alternates between light, airy surfaces and moments of saturated accent. The foundation is nearly pure white with subtle warm and cool tints that differentiate functional zones without introducing visual noise.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, body text, navigation labels, and dark surfaces |
| muted-ink | #111111 | Footer background and near-black surfaces |
| canvas | #FFFFFF | Page background and card surfaces |
| surface | #F7F7F7 | Subtle card backgrounds and secondary containers |
| surface-warm | #FDF8EC | Warm tint for special callout sections |
| accent-blue | #1187FA | Interactive highlights, gradient endpoints, and testimonial section backgrounds |
| accent-blue-light | #A6D3FF | Gradient start points and soft blue tints |
| accent-yellow | #EABC33 | Primary action buttons, step indicators, and warm accents |
| accent-yellow-light | #FFEAAD | Gradient endpoints and soft yellow washes |
| accent-purple | #936CC5 | Process step backgrounds and secondary accent moments |
| accent-green | #D0DDA6 | Supporting step backgrounds and success tints |
| border-subtle | #F8EABE | Warm card borders and inset shadows |
| border-hairline | #E0F2FF | Cool borders for blue-tinted surfaces |

The hero and select cards employ a diagonal gradient that transitions from pale blue through ice white to warm yellow, creating a sunrise effect that suggests transformation and optimism. The testimonial section inverts this warmth with a cool blue gradient that feels calm and trustworthy. Dark sections use muted-ink rather than pure black, softening the contrast against white typography. Accent colors appear in isolation—never competing—so a yellow button on a blue gradient or a purple process card against white maintains clear focus.

## Typography

Two families drive the typographic system: Onest for all display and body text, and Inter for select supporting labels and data readouts. System sans-serif serves button labels and microcopy at small sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Onest | 4rem | 500 | 1 | -0.03em | Hero headlines, maximum impact statements |
| section-display | Onest | 3rem | 500 | 1.2 | -0.03em | Section headings and major subheads |
| subhead-large | Onest | 2rem | 400 | 1.1 | -0.02em | Large supporting headlines |
| subhead-medium | Onest | 1.375rem | 600 | 1.3 | 0em | Card titles and emphasized subheads |
| body-large | Onest | 1.25rem | 400 | 1.5 | -0.01em | Lead paragraphs and descriptive copy |
| body | Onest | 1rem | 400 | 1.4 | 0em | Standard paragraphs and list items |
| body-small | Onest | 0.875rem | 500 | 1.43 | -0.02em | Compact descriptions and metadata |
| label | Onest | 0.75rem | 500 | 1.33 | -0.03em | Tags, badges, and micro-labels |
| navigation | Onest | 1rem | 500 | 1.25 | 0em | Primary navigation links |
| button | System | 0.75rem | 400 | 1 | 0em | Button labels and CTAs |
| legal-copy | Onest | 0.875rem | 300 | 1.29 | -0.02em | Footer links and legal text |

Onest carries a geometric clarity with slightly rounded terminals that echo the system's soft shapes. Weights 300, 400, 500, and 600 are all employed, with 500 serving as the workhorse for headings and navigation. Tight negative tracking on display sizes creates a modern, confident presence without feeling compressed. Inter appears at 14px for data labels and supporting text where its slightly more neutral character aids readability at small sizes. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room. Sections stack vertically with consistent rhythm, alternating between full-bleed colored surfaces and bounded white cards.

The navigation bar sits at the top with the wordmark left-aligned, primary links centered, and utility actions right-aligned. Below this, the hero occupies a substantial vertical space with a gradient-washed card containing the main value proposition and medication grid. This card uses rounded corners at 32px and internal padding of 60px, creating a framed composition within the page.

Content sections below the hero employ a two-column asymmetric split: text and primary actions on the left, illustrative UI mockups or photography on the right. The process section uses a vertical timeline connector with numbered step pills, each associated with a rounded card showing interface screenshots. These cards stack with 24px gaps and are offset slightly to create visual movement.

The testimonial section breaks the white rhythm with a full-bleed blue gradient background. Content here is centered with a large quote card on the left and overlapping before-and-after photography on the right. Navigation arrows sit at the bottom corners, with dot indicators centered between them.

The footer transitions dramatically to a dark, near-black surface with a large photographic background. The CTA area occupies the upper portion with left-aligned text, while the link grid sits below in five columns. A massive watermark wordmark spans the bottom edge at low opacity.

Spacing tokens derive from a 2px base unit. Section padding is consistently 60px, with card internal padding ranging from 16px for compact elements to 64px for hero cards. Component gaps of 24px to 32px separate related elements within sections.

## Visual language

The visual language communicates transformation through softness and precision. Every container is rounded—no sharp corners appear in the interface. Cards at 32px radius feel friendly and approachable, while pill-shaped buttons at 48px radius invite interaction without aggression.

Photography plays a supporting but important role. Hero imagery shows lifestyle moments and product photography with soft, diffused lighting. The testimonial section uses authentic before-and-after photography with white borders and rounded corners, presented in an overlapping composition that suggests progress. The footer CTA employs a moody, atmospheric portrait with dramatic side lighting—dark and contemplative against the otherwise bright interface.

Icons and badges use simple geometric forms. Star ratings appear in yellow. Step indicators are small numbered pills connected by a thin vertical line. Medication cards in the hero grid combine product photography with color-coded status badges: green for "No Insurance Required," yellow for insurance variations.

Shadows are minimal and soft. A subtle inset shadow with warm tinting appears on select cards, while floating elements carry light drop shadows with generous blur. The overall effect is dimensional without heaviness.

The gradient system is restrained to two applications: the hero's diagonal blue-to-yellow sunrise, and the testimonial section's cool blue vertical wash. Both gradients use broad, smooth transitions without banding.

## Components

### Navigation bar
- Anatomy: Wordmark left, primary links center, utility actions right
- Surface: Transparent over light backgrounds, canvas when scrolled
- Typography: `{typography.navigation}` in ink
- Spacing: 12px vertical padding, 4px horizontal gaps between nav items
- Composition: Flex row with space-between alignment

### Primary button
- Anatomy: Text label with optional arrow icon
- Surface: `{colors.accent-yellow}` background, `{colors.ink}` text
- Typography: `{typography.button}`
- Shape: Pill shape at `{rounded.pill}` with 16px 36px padding
- Variants: Dark variant with `{colors.ink}` background and `{colors.canvas}` text for secondary actions

### Hero card
- Anatomy: Gradient background containing headline, rating, medication grid, and imagery
- Surface: `linear-gradient(133deg, #F3FAFF 20%, #E0F2FF 44%, #FFEAAD 82%)`
- Shape: 32px border radius
- Spacing: 60px padding
- Composition: Asymmetric split with text left, product grid and lifestyle imagery right

### Medication grid item
- Anatomy: Product thumbnail, name, status badge
- Surface: Transparent within hero card
- Typography: `{typography.body-small}` for names, `{typography.label}` for badges
- Shape: Small rounded thumbnails with 8px radius
- Composition: Two-column grid with 16px gaps

### Process step card
- Anatomy: Numbered step indicator, UI mockup screenshot, heading, description
- Surface: Colored background (yellow, purple, or green tint) with white card overlay
- Shape: 20px to 32px radius on outer cards, 18px on inner mockup cards
- Spacing: 32px to 48px padding
- Composition: Stacked vertically with timeline connector

### Testimonial card
- Anatomy: Quotation mark icon, quote text, attribution with avatar and rating
- Surface: Semi-transparent white at 90% opacity
- Typography: `{typography.section-display}` for section header, `{typography.body-large}` for quote
- Shape: 32px radius
- Composition: Left-aligned quote card with overlapping photography on right

### Before/after photo pair
- Anatomy: Two photographs with "Before" and "After" labels
- Surface: White border frame
- Shape: Rounded corners with 20px radius
- Composition: Overlapping with slight rotation offset, right image elevated

### Footer CTA
- Anatomy: Headline, description, action button over photographic background
- Surface: `{colors.muted-ink}` with darkened photography
- Typography: `{typography.hero-display}` in canvas, `{typography.body-large}` in muted canvas
- Spacing: 80px top padding, 60px horizontal padding

### Footer link grid
- Anatomy: Five-column grid of categorized links
- Surface: `{colors.muted-ink}` continuing from CTA
- Typography: `{typography.legal-copy}` in canvas for headers, muted canvas for links
- Spacing: 24px vertical gaps between link groups

## Responsive behavior

The design appears optimized for desktop viewport widths with substantial horizontal space for asymmetric layouts. At narrower widths, the two-column hero should stack vertically with the medication grid falling below the headline. Process step cards would similarly stack, with timeline connectors becoming horizontal or hiding entirely. The testimonial section's overlapping photography would likely become a single centered image or carousel slide. Footer columns should collapse to two-column then single-column grids.

Touch targets for pill buttons and navigation arrows should maintain at least 44px minimum dimensions. The medication grid's small thumbnails may require larger tap areas on mobile. Gradient backgrounds should remain smooth across viewport sizes without introducing banding.

## Practical implementation guidance

### Preserve
- The tight negative tracking on Onest display sizes; this is essential to the modern, confident character
- The 32px card radius as the primary container shape; smaller radii feel incidental, this feels intentional
- The gradient's specific angle and stop positions; the 133-degree diagonal with 20%/44%/82% distribution creates the signature sunrise effect
- The asymmetric two-column compositions with generous white space on the text side
- The warm yellow accent for primary actions against both light and dark backgrounds

### Avoid
- Sharp corners on any interactive or container element; they break the system's friendly clinical tone
- Pure black backgrounds; the muted-ink value maintains warmth and photographic depth
- Competing gradients; the two defined gradients serve distinct purposes and should not be multiplied
- Small body text below 16px for primary content; accessibility and the system's generous spacing demand readable sizes
- Centering long-form text; the left-aligned, asymmetric model is core to the layout personality

### Recommended build order
1. Establish the type scale with Onest at all weights, verifying web font loading
2. Implement the 2px base spacing grid and 32px card radius token
3. Build the hero gradient card with medication grid as the primary conversion surface
4. Create the process step section with timeline and colored card variants
5. Implement the testimonial carousel with blue gradient and photo composition
6. Construct the dark footer with CTA, link grid, and watermark typography

### Accessibility
- Ensure the yellow action buttons meet contrast ratios against both white and blue gradient backgrounds; the ink text on yellow typically passes, but verify at 14px and below
- Provide visible focus states that maintain the pill shape, likely with an outline offset or subtle shadow
- The dark footer photography should not be the sole carrier of information; all text must remain readable without the image
- Testimonial carousel requires keyboard navigation and screen reader announcements for slide changes
- Step indicators in the process section need clear non-color identification for users with color vision differences

## Scope note

This guide covers the homepage surface including hero, process explanation, social proof, and footer sections. Interior pages, mobile-specific layouts, form interactions, loading states, and motion behavior are not represented in the supplied material. The medication grid's detailed hover states and the quiz flow interface are not documented here.
