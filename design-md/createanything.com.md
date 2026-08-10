# How createanything.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/createanything.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with rounded bordered items and chevron expand icons on a clean white background](https://pin.fontofweb.com/5158?format=jpg)](https://design.withfudge.com/share/pin-5158)

[FAQ accordion section with rounded bordered items and chevron expand icons on a clean white background](https://design.withfudge.com/share/pin-5158)

[![Four-column pricing comparison table with tier headers, credit badges, and filled action buttons](https://pin.fontofweb.com/5157?format=jpg)](https://design.withfudge.com/share/pin-5157)

[Four-column pricing comparison table with tier headers, credit badges, and filled action buttons](https://design.withfudge.com/share/pin-5157)

[![Pricing card grid with Popular badge, monthly-yearly toggle, and feature checklists with outlined cards](https://pin.fontofweb.com/5156?format=jpg)](https://design.withfudge.com/share/pin-5156)

[Pricing card grid with Popular badge, monthly-yearly toggle, and feature checklists with outlined cards](https://design.withfudge.com/share/pin-5156)

[![Hero section with serif italic headline, device mockup showing messaging app interface, and Mobile-Web toggle](https://pin.fontofweb.com/5155?format=jpg)](https://design.withfudge.com/share/pin-5155)

[Hero section with serif italic headline, device mockup showing messaging app interface, and Mobile-Web toggle](https://design.withfudge.com/share/pin-5155)

## Overview

Create Anything presents itself as an AI-powered app builder with a visual language that prioritizes clarity, restraint, and confident simplicity. The design system relies on a near-monochrome palette of black, white, and grays, allowing product imagery and subtle interface accents to carry visual interest. Typography creates hierarchy through family contrast rather than weight alone: a refined serif italic for emotional, brand-forward headlines, paired with a clean geometric sans-serif for all functional and readable text. The interface favors generous whitespace, rounded rectangular containers with thin borders, and minimal decorative elements. Components feel lightweight and modern, with cards that float on white backgrounds rather than casting heavy shadows. The overall impression is of a professional tool that wants to feel approachable to non-technical users while signaling technical capability through its precision and consistency.

## Colors

The color system is intentionally restrained, built on a foundation of high-contrast neutrals with a single functional accent. Black carries the primary content and interactive weight; white provides breathing room; grays handle secondary information and structural boundaries. The palette avoids decorative gradients or complex color relationships, instead deriving visual richness from photography and product mockups.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active navigation, filled button backgrounds, checkmark icons |
| muted-ink | #737373 | Secondary text, feature descriptions, inactive toggle states, FAQ body copy |
| canvas | #ffffff | Page backgrounds, card surfaces, active toggle pill backgrounds |
| surface | #f5f5f5 | Subtle section alternation, toggle track backgrounds, inactive pill states |
| border | #e5e5e5 | Card outlines, accordion borders, divider lines, secondary button borders |
| action | #171717 | Primary button fill, hover states for interactive elements |
| action-text | #ffffff | Text on filled buttons and dark interactive surfaces |
| accent | #8b5cf6 | Links within product mockups, "Load older messages" text, promotional highlights |

The near-black action color provides slightly softer contrast than pure black for interactive elements, reducing optical vibration on hover and press states. The muted-ink gray is warm-neutral rather than cool, harmonizing with the warmth of the serif display type. The purple accent appears sparingly, reserved for calls-to-action within simulated app interfaces and secondary links where it adds personality without disrupting the monochrome discipline. Product photography and device mockups introduce their own color worlds—skin tones, message bubbles, avatar backgrounds—which the neutral system accommodates without competition.

## Typography

The type system pairs two distinct families: Instrument Serif for display and brand moments, and Geist for all functional interface text. Instrument Sans and Inter are also available in the system, with Instrument Sans serving as an additional sans-serif option and Inter likely for fallback or specific numeric contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 3rem | 400 | 1.1 | -0.02em | Homepage headlines, brand slogans in italic |
| section-display | Geist | 2.5rem | 400 | 1.15 | -0.02em | Page titles like "Plans and Pricing" |
| body | Geist | 1rem | 400 | 1.5 | 0 | Paragraphs, accordion questions, feature lists |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0 | Descriptions, credit annotations, metadata |
| label | Geist | 0.875rem | 500 | 1.25 | 0 | Button text, navigation, table headers |
| price-display | Geist | 2rem | 500 | 1.1 | -0.02em | Pricing figures like "$16/mo" |
| navigation | Geist | 0.875rem | 400 | 1.25 | 0 | Site navigation, utility links |

The hero-display token uses Instrument Serif in italic for the "Anything Anywhere" headline, creating an elegant, editorial contrast against the geometric sans-serif body. Section-display handles page-level headings with the same tight tracking as the hero but without italic styling, maintaining hierarchy through scale and weight rather than style variation. The price-display token at 2rem with medium weight gives numerical pricing prominence without competing with section headings. Body text at 1rem with 1.5 line-height ensures comfortable reading for feature descriptions and FAQ content. Label at medium weight distinguishes interactive elements from readable content.

Instrument Serif is designed by Rodrigo Fuenzalida and published by Frag Type. Instrument Sans is designed by Rodrigo Fuenzalida and published by Frag Type. Geist is designed by Basementstudio with Andrés Briganti, Mateo Zaragoza, and others, published by Basementstudio and Vercel. Inter is designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout system follows a centered, contained approach with generous vertical rhythm. Major sections stack with substantial whitespace between them, creating clear territorial boundaries without heavy separators. The pricing page demonstrates a maximum content width of approximately 1200px, centered with automatic margins, allowing the white canvas to frame the content on wider viewports.

The pricing cards in image 5156 use a four-column grid with equal-width columns and consistent 1.5rem gaps. Each card maintains internal vertical rhythm: plan name, price figure, credit annotation, action button, then feature list with consistent spacing between elements. The "Popular" badge on the Pro 50k tier breaks the top edge of its card by approximately half its height, creating visual priority through overlap rather than scale or color.

The comparison table in image 5157 extends the same grid logic to a feature matrix, with tier headers fixed above scrollable rows. Row dividers use 1px border lines in the border color, creating subtle horizontal rhythm without heavy visual weight. Section labels like "AI" and "BUILDER" use small uppercase or label styling to group related features.

The FAQ accordion in image 5158 stacks full-width items with small gaps between them, each item a self-contained bordered card. This vertical stacking pattern appears consistently across components, suggesting a system-wide preference for card-based, bordered containers over plain text blocks or heavy background panels.

Spacing derives from a 0.25rem base unit. Section padding measures 6rem vertically, creating dramatic breathing room between major content areas. Card internal padding uses 1.5rem, while compact elements like toggle pills and badges use tighter 0.375rem to 0.625rem values. Grid gaps consistently use 1.5rem, unifying the card grid, comparison table, and feature list layouts.

## Visual language

The visual language communicates sophistication through restraint. Every element earns its place; decoration is minimal. Rounded corners appear universally but modestly—cards at 0.75rem, buttons at 0.5rem—softening the geometry without becoming playful. Borders are consistently 1px and light, defining edges without shadow. The absence of drop shadows on cards is notable; depth comes from white space and subtle border contrast rather than elevation effects.

Photography and product mockups provide the primary color and texture in the experience. The device mockup in image 5155 shows a messaging application with purple buttons, green status indicators, and photographic avatars—all contained within a black device frame that contrasts sharply with the white page background. This creates a "window into the product" effect, where the interface itself is neutral and the product content provides vibrancy.

The toggle pill component in images 5155 and 5156 demonstrates a consistent interaction pattern: a rounded rectangular track in surface color containing two pill-shaped options, with the active option in canvas white and the inactive in muted-ink. This pattern appears for Mobile/Web switching and Monthly/Yearly billing cycles, suggesting a reusable segmented control.

Checkmarks indicate feature inclusion with simple stroke icons, avoiding filled shapes or complex iconography. The "MAX" plan name uses italic styling, creating a typographic variant within the pricing hierarchy without introducing additional colors or badges beyond the single "Popular" pill.

## Components

### Pricing Card

Anatomy: Bordered rectangular container with internal vertical stack. Contains plan name, price display, credit annotation, primary action button, and feature checklist. The "Popular" variant adds a small badge pill positioned at the top center, overlapping the card top edge.

Surface and text color: Canvas background with border outline. Ink for plan name and price. Muted-ink for credit annotations and feature descriptions. Action-text on filled button.

Typography: Plan name uses label token. Price uses price-display token. Credits use body-small. Features use body-small with checkmark prefix.

Shape and border: 0.75rem border radius. 1px border in border color. No shadow.

Spacing: 1.5rem internal padding. Features stack with 0.75rem vertical gaps. Button has 1.5rem margin above feature list.

Composition: Full-width within grid column. Equal height across row when placed in grid, with content top-aligned.

Variants: Free tier uses secondary-button styling. Paid tiers use primary-button styling. MAX tier uses italic plan name. Popular variant adds badge pill in action background with action-text label.

### Comparison Table

Anatomy: Column headers with tier name, price, credit badge, and button. Row groups with section labels and feature rows. Checkmarks or dashes indicate availability.

Surface and text color: Transparent background, border row separators. Ink for available features, muted-ink for dashes.

Typography: Tier headers use section-display for titles, label for buttons, body-small for credit badges. Row labels use body. Section headers use label in muted-ink or uppercase treatment.

Shape and border: Full-width table with 1px horizontal row borders. No vertical borders. Header buttons follow primary-button and secondary-button patterns.

Spacing: Generous vertical padding in rows, approximately 1rem. Section labels have additional top margin.

### Accordion Item

Anatomy: Bordered card with question text and chevron icon. Expanded state reveals answer text below.

Surface and text color: Canvas background, border outline. Ink for question. Muted-ink for answer text. Chevron in muted-ink, rotating on expand.

Typography: Question uses body token. Answer uses body-small with slightly reduced opacity or color shift to muted-ink.

Shape and border: 0.75rem border radius. 1px border. No shadow.

Spacing: 1rem to 1.25rem horizontal padding, approximately 1rem vertical padding. Answer text has additional left padding or indent, approximately 1.5rem from left edge.

Composition: Full-width stack with 0.5rem to 0.75rem gap between items.

States: Collapsed shows right-facing chevron. Expanded shows downward chevron and reveals answer block with top border or subtle background shift.

### Toggle Pill

Anatomy: Rounded rectangular track containing two or more pill-shaped options.

Surface and text color: Track uses surface. Active pill uses canvas with ink text. Inactive uses transparent with muted-ink text.

Typography: body-small token.

Shape and border: Track at 0.5rem radius. Individual pills at matching radius. No visible border, or 1px border on track.

Spacing: 0.375rem to 0.5rem internal padding. Pill padding approximately 0.375rem horizontal, 0.25rem vertical.

### Primary Button

Anatomy: Text label centered in filled rounded rectangle.

Surface and text color: Action background, action-text foreground.

Typography: label token, medium weight.

Shape and border: 0.5rem radius. No border.

Spacing: 0.625rem vertical, 1.25rem horizontal padding.

### Secondary Button

Anatomy: Text label centered in outlined rounded rectangle.

Surface and text color: Canvas background, ink text. Border in border color.

Typography: label token, regular weight.

Shape and border: 0.5rem radius. 1px border.

Spacing: Matches primary button.

## Responsive behavior

The pricing card grid shows four columns on desktop. At narrower viewports, this should collapse to two columns and then single column, maintaining card proportions and internal spacing. The comparison table likely requires horizontal scroll or stacked card conversion on small screens, as four-column tables quickly exceed mobile viewport widths.

The FAQ accordion remains full-width across breakpoints, with touch targets maintaining adequate height for finger interaction. Chevron icons should scale slightly or maintain minimum 44px touch area.

The hero device mockup in image 5155 should scale down proportionally, potentially switching to a simpler product screenshot or hiding the device chrome below tablet widths. The Mobile/Web toggle suggests the product already adapts its presentation; the marketing page should mirror this responsiveness.

Typography scales down by approximately 15-20% on mobile: hero-display to approximately 2.5rem, section-display to 2rem, price-display to 1.75rem. Line heights remain consistent to maintain readability.

## Practical implementation guidance

### Preserve
- The stark black-white-gray palette with single purple accent; this restraint is central to the brand identity
- The Instrument Serif italic for hero headlines; this editorial touch distinguishes the brand from generic SaaS aesthetics
- The 1px bordered card pattern with 0.75rem radius; it creates structure without weight
- The consistent vertical rhythm and generous section spacing; the breathing room signals confidence
- The "Popular" badge overlap technique for highlighting preferred options

### Avoid
- Adding drop shadows to cards; the flat, bordered aesthetic is intentional
- Introducing additional accent colors beyond the functional purple; the monochrome discipline is a feature
- Using heavy borders or background fills for section separation; whitespace handles this role
- Making the MAX italic styling a generic pattern; reserve it for that specific tier name
- Reducing card internal padding below 1.5rem; the spaciousness is part of the premium feel

### Recommended build order
1. Establish the color tokens and apply canvas background with ink text globally
2. Implement Geist at body and label sizes with proper weights
3. Build the pricing card component with all variants including Popular badge
4. Create the toggle pill for billing cycle switching
5. Implement the comparison table with responsive considerations
6. Add the accordion component for FAQ sections
7. Integrate Instrument Serif for hero display contexts
8. Polish spacing tokens and section vertical rhythm

### Accessibility
- Ensure the muted-ink gray (#737373) meets WCAG AA contrast against white for body text; if not, darken to approximately #595959 for small text
- Provide visible focus states on all interactive elements; the minimal design risks invisible keyboard navigation without explicit focus rings
- Add aria-expanded to accordion items and ensure chevron icons are decorative with appropriate aria-hidden
- Maintain logical tab order through pricing cards, with buttons receiving focus before feature lists
- For the toggle pill, use role="tablist" and role="tab" with aria-selected states
- Verify that the "Popular" badge is announced to screen readers, either through visually hidden text or aria-label on the card

## Scope note

This guide covers the marketing and pricing surfaces visible in the supplied images, including the homepage hero with device mockup, pricing cards, feature comparison table, and FAQ accordion. Navigation, footer, authentication flows, and the actual application builder interface are not represented. Interactive states including hover, active, focus, loading, and disabled are not documented from the still images. Motion, animation, and mobile-specific layouts are not covered. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
