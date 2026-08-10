# How macaron.im is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/macaron.im-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with warm gradient background, blog alphabet navigation, and resource links grid](https://pin.fontofweb.com/6575?format=jpg)](https://design.withfudge.com/share/pin-6575)

[Footer with warm gradient background, blog alphabet navigation, and resource links grid](https://design.withfudge.com/share/pin-6575)

[![Testimonials section with colorful chat bubbles in yellow, orange, green, and pink](https://pin.fontofweb.com/6574?format=jpg)](https://design.withfudge.com/share/pin-6574)

[Testimonials section with colorful chat bubbles in yellow, orange, green, and pink](https://design.withfudge.com/share/pin-6574)

[![Feature showcase grid with nine product cards displaying app screenshots](https://pin.fontofweb.com/6573?format=jpg)](https://design.withfudge.com/share/pin-6573)

[Feature showcase grid with nine product cards displaying app screenshots](https://design.withfudge.com/share/pin-6573)

[![Why Macaron section with three gradient feature cards in purple, coral, and yellow](https://pin.fontofweb.com/6572?format=jpg)](https://design.withfudge.com/share/pin-6572)

[Why Macaron section with three gradient feature cards in purple, coral, and yellow](https://design.withfudge.com/share/pin-6572)

## Overview

Macaron presents itself as a personal AI agent with a visual language that deliberately avoids the cold, clinical aesthetics common to productivity tools. The design leans into warmth, playfulness, and human connection through a carefully orchestrated combination of soft pastel gradients, rounded card containers, and a typographic pairing that contrasts a friendly sans-serif body with elegant serif display headings. The overall impression is of a service that understands life beyond work—one that helps with cooking, shopping, birthdays, and personal style rather than spreadsheets and deadlines.

The page structure follows a narrative flow: a bold hero establishing the product's purpose, a "Why Macaron" section with three distinctive gradient feature cards, a "See it in action" grid showcasing real-world applications, a testimonials section with colorful chat-style bubbles, and a comprehensive footer with blog navigation and resource links. Each section maintains visual cohesion through consistent spacing, rounded corners, and the recurring macaron-inspired color palette while introducing enough variation to sustain interest across a long scroll.

## Colors

The color system balances warm neutrals with vibrant accent colors drawn from macaron confections. The foundation rests on a cream canvas that feels inviting rather than sterile, with dark ink for primary text that provides strong contrast without the harshness of pure black.

| token | value | use |
|---|---|---|
| ink | #161615 | Primary text, headings, navigation |
| muted-ink | #595856 | Secondary body text, descriptions |
| canvas | #F9F7F1 | Page background, warm neutral base |
| surface | #FFFFFF | Card backgrounds, elevated panels |
| action-primary | #FF586A | Primary buttons, warm pink accents |
| action-accent | #FFC400 | Yellow testimonial bubbles, highlights |
| action-warm | #FF5816 | Orange accents, gradient endpoints |
| accent-purple | #42036C | Deep purple feature card backgrounds |
| accent-olive | #8CA72B | Green testimonial bubbles |
| accent-rose | #FF5A70 | Pink testimonial bubbles, soft accents |
| accent-teal | #2A2A29 | Dark teal for select UI text and accents |
| border-subtle | #EADE39 | Subtle warm yellow for borders and dividers |
| gradient-warm-start | #FFE6D1 | Warm gradient beginning, card tints |
| gradient-warm-end | #F9F7F1 | Warm gradient ending, blending to canvas |

The interface employs multiple color modes across its sections. The default mode uses the cream canvas with dark ink text for readable content areas. Feature cards introduce full-bleed gradient backgrounds that shift between purple, coral-pink, and yellow tones, each with appropriately contrasting text colors. The testimonials section uses solid color fills—yellow, orange, olive green, and pink—for individual chat bubbles, creating a playful, conversational atmosphere. A subtle radial gradient from warm peach to cream appears in select sections, adding depth without overwhelming the content. The dark teal accent appears in specific UI contexts where additional neutral depth is needed beyond the primary ink color.

## Typography

The typographic system pairs Noto Sans for all body and interface text with Noto Serif reserved exclusively for section display headings. This creates a clear hierarchy where the serif's classical elegance marks major section boundaries while the sans-serif handles all functional communication with approachable clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Noto Sans | 3rem | 400 | 1.5 | normal | Hero headlines, major announcements |
| section-display | Noto Serif | 3rem | 400 | 1 | normal | Section headings, "Why Macaron", "See it in action" |
| body-large | Noto Sans | 1.5rem | 400 | 1.375 | normal | Featured descriptions, subheadings |
| body | Noto Sans | 1rem | 400 | 1.5 | normal | Standard paragraphs, navigation, labels |
| body-small | Noto Sans | 1.125rem | 400 | 1.6 | normal | Card descriptions, secondary content |
| label | Noto Sans | 1.25rem | 600 | 1.5 | normal | Card titles, feature names, emphasis |
| navigation | Noto Sans | 1rem | 400 | 1.5 | normal | Nav links, buttons, footer links |

Noto Sans is used at weights 400 (Regular), 500 (Medium), and 600 (Semibold). The 600 weight appears for card titles and emphasized labels, while 500 serves button text. Noto Serif appears only at 400 weight in the 48px display size. The design credits Monotype Design Team as the designer for both families, with Monotype Imaging Inc as the vendor for Noto Sans and Google as the vendor for Noto Serif. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained approach with generous horizontal margins that create breathing room around content. Sections stack vertically with consistent vertical rhythm, each separated by substantial whitespace that allows the gradient backgrounds and color shifts to register as distinct moments.

The main content container centers at a maximum width with horizontal padding of 16px to 40px depending on context. Major sections employ full-width backgrounds with internal content constrained to a readable measure. The "Why Macaron" section uses three horizontal feature cards stacked with 64px vertical gaps between them. Each card contains a two-column layout with text content on one side and illustrative UI mockups on the other, the orientation alternating to create visual rhythm.

The "See it in action" grid presents nine product showcase cards in a three-column arrangement, each card containing a title, description, and embedded screenshot. Cards within the grid maintain consistent internal padding of 32px with 16px gaps between them. The testimonials section abandons the grid for a conversational flow, with chat bubbles positioned at varying horizontal offsets to simulate natural dialogue.

The footer expands into a multi-column layout with four distinct areas: company links, blog alphabet navigation, blog date browsing, and a two-column resources grid. Social icons and legal links occupy a bottom bar with the macaron logo mark.

## Visual language

The visual language centers on softness and approachability. Every container uses rounded corners—16px for major cards and panels, 8px for smaller elements, and 9999px for pill-shaped buttons. This consistent rounding extends to the chat bubbles in testimonials, which use the same radius values to maintain family resemblance with the feature cards.

Gradients serve as a primary decorative element, appearing in multiple forms. The radial gradient from #FFE6D1 to #F9F7F1 creates subtle warmth in section backgrounds. Individual feature cards employ more dramatic gradients: purple tints for the personal agent card, coral-to-pink for the uniqueness card, and yellow-to-cream for the solutions card. These gradients often incorporate soft blur effects and floating macaron illustrations that reinforce the brand identity.

Shadow usage remains minimal and subtle, with a light 0px 1px 2px rgba(0,0,0,0.05) shadow for slight elevation on interactive elements. The design avoids heavy shadows that would introduce harshness inconsistent with the warm aesthetic.

Photography and screenshots appear inside rounded containers, often with their own internal rounded corners creating a nested, app-like presentation. The macaron logo—a stylized stack of colorful cookie layers—appears in the footer and as decorative elements within feature cards, reinforcing brand recognition without overwhelming the content.

## Components

### Feature card

The feature card presents a major value proposition with gradient background, text content, and illustrative mockup.

- **Anatomy**: Two-column layout with text block and visual mockup, decorative macaron illustration
- **Surface**: Gradient background varying by card type (purple, coral, yellow); text color adapts for contrast
- **Typography**: Label style for headings, body-small for descriptions
- **Shape**: 16px border radius, full-width within container
- **Spacing**: 32px internal padding, 64px vertical margin between cards
- **Composition**: Text left, mockup right for first card; alternates in subsequent cards

### Product showcase card

The product showcase card displays an application example with embedded screenshot.

- **Anatomy**: Title, description paragraph, and screenshot image in rounded frame
- **Surface**: White or near-white background, subtle border
- **Typography**: Label style for product name, body-small for description
- **Shape**: 16px border radius for card, 8px for internal screenshot frame
- **Spacing**: 32px padding, consistent gaps in grid layout
- **Composition**: Vertical stack with screenshot at bottom

### Testimonial bubble

The testimonial bubble presents user quotes in a chat-message format with distinctive colors.

- **Anatomy**: Rounded rectangle containing quote text, small avatar circle, decorative dot accent
- **Surface**: Solid fill in yellow, orange, green, or pink; dark text for yellow and pink, white text for orange and green
- **Typography**: Body style for quote text
- **Shape**: 16px border radius, positioned with offset to create conversation flow
- **Spacing**: Generous vertical spacing between bubbles, asymmetric horizontal positioning
- **Variants**: Yellow (left-aligned), orange (right-aligned), green (left-aligned), pink (right-aligned)

### Primary button

The primary button uses a gradient fill for high-impact calls to action.

- **Anatomy**: Text label with optional icon, full gradient background
- **Surface**: Linear gradient from #FFC400 through #FF586A to #F63B3B; white text
- **Typography**: Navigation style, 500 weight
- **Shape**: Pill shape with 9999px radius
- **Spacing**: 0px 40px horizontal padding
- **States**: Default shows full gradient; alternate variant uses dark text on light background with border

### Footer navigation

The footer navigation organizes extensive link lists in a multi-column layout.

- **Anatomy**: Section headers, alphabet grid, date grid, resource links, social icons, legal links
- **Surface**: Warm gradient background from peach to cream
- **Typography**: Body style for links, label style for section headers
- **Shape**: No distinct container rounding; links have 8px radius on hover
- **Spacing**: 40px 80px padding for major footer area, 8px 12px for individual nav links
- **Composition**: Four-column top area, full-width bottom bar with logo and social icons

## Responsive behavior

The design appears optimized for desktop viewing with generous margins and multi-column layouts. At narrower viewports, the three-column product grid should collapse to two columns and then single column, maintaining the 32px card padding. The feature cards' two-column layout should stack vertically, placing the mockup below the text content. The footer navigation's four-column layout should reorganize into a stacked accordion or simplified list structure.

The chat-style testimonials should maintain their asymmetric positioning but reduce horizontal offsets to prevent excessive narrowing of bubble widths. Typography scales should reduce proportionally: the 48px section display can decrease to 36px on tablet and 28px on mobile, while body text remains at 16px for readability.

Touch targets for navigation links and buttons should maintain a minimum 44px height. The pill-shaped buttons with their generous horizontal padding adapt naturally to smaller screens by allowing text to wrap or reducing padding to 24px.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the default background; it distinguishes the experience from cooler tech aesthetics
- The Noto Serif and Noto Sans pairing; the contrast between elegant display and friendly body text defines the brand voice
- The 16px card radius consistently applied across all elevated containers
- The macaron illustration accents as brand identifiers within feature sections
- The alternating left-right layout of feature cards to maintain visual interest

### Avoid
- Pure white backgrounds for main content areas; they eliminate the warmth that characterizes the design
- Sharp corners on any interactive or presentational container
- Heavy drop shadows that conflict with the soft, approachable aesthetic
- Replacing the serif headings with sans-serif alternatives; this would collapse the typographic hierarchy
- Cluttering the testimonials section with too many bubbles; the current five-quote sequence feels complete

### Recommended build order
1. Establish the global styles: cream canvas background, Noto Sans at 16px/24px, ink text color
2. Implement the section display heading style with Noto Serif at 48px
3. Build the feature card component with gradient backgrounds and two-column layout
4. Create the product showcase grid with consistent card sizing and screenshot framing
5. Develop the testimonial bubbles with color variants and asymmetric positioning
6. Construct the footer with its multi-column navigation and warm gradient background
7. Add the primary button with its distinctive three-color gradient

### Accessibility
- Ensure gradient backgrounds maintain sufficient contrast ratios; the purple and coral cards may need text color adjustment or overlay layers
- Provide text alternatives for the macaron illustrations and app mockups
- Maintain keyboard navigability through the alphabet and date grids in the footer
- Consider reducing motion for users who prefer it, particularly for any scroll-triggered gradient reveals
- Test the chat bubble colors for colorblind accessibility; the green and yellow variants may be difficult to distinguish for some users

## Scope note

This guide covers the Macaron landing page's visual system as visible in the supplied desktop screenshots, including the hero area, feature cards, product showcase grid, testimonials section, and footer navigation. Mobile layouts, animation behavior, form interactions, and additional interior pages are not represented in the available material. The exact spacing values derive from the retained measurements; implementers should verify visual harmony when adapting to different viewport sizes.
