# How wsj.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wsj.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with two-column layout showing Cancellations, Refunds, and Payment Methods on a white background with blue text links](https://pin.fontofweb.com/1181?format=jpg)](https://design.withfudge.com/share/pin-1181)

[FAQ accordion section with two-column layout showing Cancellations, Refunds, and Payment Methods on a white background with blue text links](https://design.withfudge.com/share/pin-1181)

[![Subscription pricing page with two white cards on light gray background, blue Subscribe Now buttons, and struck-through pricing](https://pin.fontofweb.com/1180?format=jpg)](https://design.withfudge.com/share/pin-1180)

[Subscription pricing page with two white cards on light gray background, blue Subscribe Now buttons, and struck-through pricing](https://design.withfudge.com/share/pin-1180)

[![Article paywall overlay with centered WSJ logo, blue Limited-Time Sale heading, and blue Subscribe Now button on white](https://pin.fontofweb.com/1178?format=jpg)](https://design.withfudge.com/share/pin-1178)

[Article paywall overlay with centered WSJ logo, blue Limited-Time Sale heading, and blue Subscribe Now button on white](https://design.withfudge.com/share/pin-1178)

[![Full article page with large serif headline, hero photograph, byline with Follow button, and article toolbar with Share and Listen options](https://pin.fontofweb.com/1177?format=jpg)](https://design.withfudge.com/share/pin-1177)

[Full article page with large serif headline, hero photograph, byline with Follow button, and article toolbar with Share and Listen options](https://design.withfudge.com/share/pin-1177)

## Overview

The Wall Street Journal's digital presence merges the gravitas of traditional print journalism with the clarity expected of modern subscription platforms. The system is built around authoritative serif typography that commands attention for headlines, paired with clean sans-serif and italic serif faces for supporting text and interactive elements. The visual hierarchy is deliberately stark: black text on white backgrounds creates maximum readability, while a single blue accent color guides users toward subscription actions and critical links. The design avoids decorative excess, relying instead on precise typographic scale, generous whitespace, and subtle structural borders to organize dense editorial and commercial content. Subscription flows and article pages share a unified language, ensuring that the transition from reading to purchasing feels seamless and trustworthy.

## Colors

The color system is intentionally minimal, drawing from the newspaper tradition of black ink on white paper with a single functional accent. This restraint reinforces editorial credibility while keeping visual noise low across both article and commerce surfaces.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, and logo marks |
| canvas | #FFFFFF | Primary backgrounds for articles, cards, and overlays |
| surface | #F5F5F5 | Page backgrounds behind white content cards and panels |
| action | #0A6EBD | Primary buttons, subscription CTAs, and text links |
| action-hover | #085A9C | Darker blue for button hover and active states |
| muted-ink | #555555 | Secondary text, captions, struck-through pricing, and meta information |
| border | #E0E0E0 | Subtle dividers between sections, card edges, and accordion rules |
| link | #0A6EBD | Inline text links within body copy and FAQ content |

The light mode dominates all visible surfaces. White cards float on a light gray surface background, creating shallow depth without shadows. The blue accent appears exclusively in functional contexts: subscription buttons, sign-in links, and promotional pricing callouts. No dark mode is present in the supplied material. Photography retains natural color and serves as the primary source of visual warmth, with the interface remaining neutral and typographic.

## Typography

Three type families establish the Journal's typographic voice. Retina, designed by Tobias Frere-Jones of Frere Jones Type, serves as the primary display and interface face with its crisp, authoritative character. Exchange Book-Italic provides a refined italic serif for body text and editorial accents. Tn (Miller Text Roman) delivers traditional book serif qualities for extended reading and bylines. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Retina | 2.5rem | 400 | 1.1 | -0.01em | Article headlines and major page titles |
| section-display | Retina | 1.5rem | 400 | 1.2 | 0 | Section headers, card titles, and FAQ category headings |
| body | Exchange Book-Italic | 1rem | 400 | 1.6 | 0 | Body copy, descriptions, and editorial text |
| body-serif | Tn | 1rem | 400 | 1.6 | 0 | Article bylines, datelines, and traditional editorial contexts |
| label | Retina | 0.75rem | 400 | 1.4 | 0.05em | Button labels, tags, and small uppercase annotations |
| navigation | Retina | 0.875rem | 400 | 1.2 | 0.02em | Top-level navigation and utility links |

The type scale is built on a 4px relative unit. Display sizes use tight leading to maintain headline density, while body text receives generous line height for comfortable reading. The italic serif face for body copy is a distinctive choice that lends editorial personality without sacrificing clarity. Letter spacing remains tight or neutral throughout, with slight expansion only for small label text.

## Layout

The layout system favors centered single-column compositions for focused tasks and two-column arrangements for information-dense pages. Maximum content widths create readable line lengths while generous margins frame content with authority.

Page backgrounds use the light gray surface color, with white canvas panels containing the actual content. On subscription pages, two equal-width cards sit side by side with consistent internal padding, separated by a narrow gutter. The FAQ page employs a two-column grid where category headings anchor the left side of each column with their associated questions and answers flowing beneath.

Article pages present a centered content column with the headline and deck spanning the full width, followed by a hero image that breaks to the edges of the content area. Below the image, body text resumes in a narrower measure. The article toolbar sits between the headline and image, containing share actions, text sizing, comment count, and audio listening options in a horizontal row with subtle vertical dividers.

Spacing follows a 4px base unit. Section padding of 3rem separates major content areas. Component internal padding of 1.5rem provides comfortable breathing room within cards and panels. Tight spacing of 0.5rem handles related element grouping such as label-value pairs or icon-text combinations.

## Visual language

The visual character is restrained and institutional, communicating trust through precision rather than ornament. Surfaces are flat with no visible shadows, relying on background color contrast and thin border rules to define boundaries. The only rounded corners appear on buttons and small panels, with minimal radius values that suggest efficiency rather than friendliness.

Photography plays a central role in article pages, receiving full-width treatment with natural aspect ratios. Images are uncropped by interface elements, with captions and credits placed directly below in small muted text. The photographic style in the supplied material is documentary and naturalistic, reinforcing the Journal's journalistic mission.

Iconography is minimal and functional: small checkmarks indicate subscription benefits, share icons are simple line drawings, and audio indicators use standard headphone symbols. No decorative illustration or pattern work is present. The WSJ logotype appears in its traditional serif form, centered at the top of subscription pages and paywall overlays as a trust signal.

The overall impression is of a publication that respects its readers' time and intelligence, presenting information with clarity and confidence while reserving visual emphasis for the content itself and the subscription actions that sustain it.

## Components

### Primary action button

The subscription call-to-action is the most visually prominent interactive element. It uses a solid blue background with white text, centered within a rectangular shape with slight rounding. The button spans a significant portion of its container width on subscription cards, creating an unmissable target.

- Anatomy: Text label centered horizontally and vertically within a filled container
- Surface: Background color uses action blue; text uses canvas white
- Typography: Label token with slightly expanded letter spacing for clarity at small sizes
- Shape: Minimal border radius of 0.125rem, suggesting precision rather than playfulness
- Spacing: Generous vertical padding of 0.75rem with extended horizontal padding of 2rem
- Composition: Full-width within card containers on subscription pages; centered and narrower on paywall overlays
- Variants: The same button style appears on both subscription tiers and promotional overlays, maintaining consistency across commerce contexts

### Pricing card

Subscription options are presented in white cards that elevate from the gray page background. Each card contains a tier name, publication logos, pricing information, action button, and benefit list.

- Anatomy: Card header with tier name and logos, pricing block with original and promotional rates, CTA button, and bulleted benefits
- Surface: White background with no visible border or extremely subtle border definition
- Typography: Tier name uses section-display; pricing uses hero-display for promotional rate with muted-ink struck-through original price; benefits use body size
- Shape: Slight rounding of 0.25rem on corners
- Spacing: 1.5rem internal padding with generous vertical rhythm between sections
- Composition: Two cards side by side with equal width, centered on the page
- Variants: The bundle card includes additional publication logos (Barron's, MarketWatch) and extended benefit list

### Article headline block

The article page opens with a dramatic headline treatment that establishes editorial authority.

- Anatomy: Section tag above, main headline, deck paragraph below, followed by the article toolbar
- Surface: Transparent background on canvas white
- Typography: Headline uses hero-display in black ink; deck uses body in muted-ink; section tag uses label in action blue with uppercase treatment and pipe separator
- Shape: No containing shape; text flows to full content width
- Spacing: Tight vertical grouping of tag, headline, and deck with 1.5rem before the toolbar
- Composition: Centered alignment for all elements
- Hierarchy: The headline dominates through size and weight; the deck provides context without competing

### Article toolbar

A functional bar between the headline and hero image contains article utilities.

- Anatomy: Share button with icon, text resize control with icon, comment count with icon, listen button with duration, and overflow menu
- Surface: Light gray background distinct from the white page, with subtle top and bottom borders
- Typography: Navigation size for all labels, with icon-text pairings
- Spacing: Tight horizontal spacing between related actions, with vertical divider before the listen option
- Composition: Left-aligned primary actions, right-aligned secondary actions with flex distribution

### Paywall overlay

When article access requires subscription, a centered overlay presents the value proposition.

- Anatomy: Centered WSJ logo, explanatory text, promotional heading, price, CTA button, and sign-in link
- Surface: White background filling the viewport or modal area
- Typography: Logo at display size; promotional heading uses action blue with section-display sizing; price uses hero-display; body text uses body size in muted-ink
- Composition: Strict vertical centering with generous spacing between elements
- Hierarchy: The blue promotional text draws attention first, followed by the price and button

### FAQ accordion

The frequently asked questions page uses a two-column layout with category groupings.

- Anatomy: Category heading, question text, and answer paragraph; some answers contain inline text links
- Surface: White background with horizontal rules separating the accordion header from content
- Typography: Category headings use section-display in black; questions use body in black with slight weight emphasis; answers use body in muted-ink; inline links use action blue
- Spacing: Generous vertical space between categories, with tighter grouping of question and answer pairs
- Composition: Two columns of equal width, each containing multiple category blocks

## Responsive behavior

The supplied images show desktop-width layouts. Based on the visible structure, several responsive adaptations are recommended. The two-column pricing cards and FAQ layout should stack to single column on narrower viewports, with cards maintaining full width and internal spacing. The article headline and deck should remain centered but may reduce in size to maintain appropriate line lengths. The article toolbar may wrap to two rows on smaller screens, with share and text actions on one row and listen with overflow on another. The paywall overlay should remain centered with adjusted padding to accommodate narrower viewports. Touch targets for buttons should maintain minimum 44px height across all breakpoints.

## Practical implementation guidance

### Preserve
- The stark black-and-white typographic foundation with single blue accent
- The distinctive italic serif for body copy, which differentiates the Journal from generic news sites
- The centered, authoritative headline treatments on article pages
- The flat, shadow-free surfaces that rely on background contrast and thin borders
- The documentary photography treatment with full-width images and direct captions

### Avoid
- Adding decorative shadows or depth effects that contradict the flat editorial aesthetic
- Introducing additional accent colors beyond the functional blue
- Using rounded corners larger than the minimal values shown; the system favors precision over friendliness
- Replacing the serif headline face with a generic sans-serif, which would destroy the publication's authority
- Crowding the article toolbar with additional actions beyond the essential share, resize, comment, and listen functions

### Recommended build order
1. Establish the typographic foundation with Retina for display and interface, Exchange Book-Italic for body, and Tn for traditional editorial contexts
2. Implement the color system with black, white, gray surface, and single blue accent
3. Build the article page template with headline block, toolbar, hero image, and body column
4. Create the pricing card component with logo treatment, struck-through pricing, and benefit list
5. Develop the primary action button with consistent blue fill and white text
6. Add the paywall overlay as a centered modal or full-page treatment
7. Implement the FAQ accordion with two-column layout and category grouping

### Accessibility
- Ensure the blue action color meets contrast requirements against white backgrounds; the dark blue should satisfy WCAG AA for normal text
- Provide visible focus indicators for all interactive elements, particularly the minimal-radius buttons
- Maintain logical heading hierarchy with a single h1 per article page
- Include alt text for all documentary photography with descriptive captions
- Ensure the article toolbar controls have accessible labels beyond iconography alone
- Support text resizing without horizontal scrolling up to 200%

## Scope note

This guide covers the article page, subscription pricing flow, FAQ section, and paywall overlay visible in the supplied images. Mobile layouts, navigation menus, search functionality, comment threads, video players, and account management surfaces are not represented. Measurements are practical adaptation targets derived from the visible desktop compositions. No motion, hover states, or loading behavior is documented from the still images provided.
