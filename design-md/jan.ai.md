# How jan.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jan.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with green background, cartoon illustration of girl building a robot, and community stat cards for GitHub, Discord, and HuggingFace](https://pin.fontofweb.com/8282?format=jpg)](https://design.withfudge.com/share/pin-8282)

[Hero section with green background, cartoon illustration of girl building a robot, and community stat cards for GitHub, Discord, and HuggingFace](https://design.withfudge.com/share/pin-8282)

[![Features grid showing numbered Models and Connectors sections with partner logos like ChatGPT, Claude, Gemini, Gmail, and Notion](https://pin.fontofweb.com/8281?format=jpg)](https://design.withfudge.com/share/pin-8281)

[Features grid showing numbered Models and Connectors sections with partner logos like ChatGPT, Claude, Gemini, Gmail, and Notion](https://design.withfudge.com/share/pin-8281)

[![Memory feature card with yellow sticky-note UI showing user profile and preference bullets with Coming Soon badge](https://pin.fontofweb.com/8280?format=jpg)](https://design.withfudge.com/share/pin-8280)

[Memory feature card with yellow sticky-note UI showing user profile and preference bullets with Coming Soon badge](https://design.withfudge.com/share/pin-8280)

[![Footer area with blue sky robot illustration, Download for Mac button, newsletter signup, and multi-column link grid](https://pin.fontofweb.com/8279?format=jpg)](https://design.withfudge.com/share/pin-8279)

[Footer area with blue sky robot illustration, Download for Mac button, newsletter signup, and multi-column link grid](https://design.withfudge.com/share/pin-8279)

## Overview

Jan presents itself as an open-source alternative to mainstream AI chat products, and its visual system communicates that positioning through deliberate contrasts. The interface pairs rigorous Swiss-style typography with whimsical, hand-drawn cartoon illustrations, creating a personality that feels technically credible yet approachable and human. The design language relies on extreme contrast: pure black against pure white for the core interface, with vibrant accent colors reserved for illustration backgrounds, feature cards, and community statistics. This restraint in the UI chrome allows the expressive artwork to carry emotional weight while maintaining the clarity expected of a developer-focused tool.

The site structure follows a classic landing-page rhythm: navigation, hero with social proof, feature enumeration with partner logos, and a closing call-to-action with footer. Each section is generously spaced, with content constrained to a central column that prevents line lengths from becoming unwieldy. The overall impression is of a product that takes its open-source mission seriously but refuses corporate blandness.

## Colors

The color system operates in two distinct modes: the monochrome UI layer and the chromatic illustration layer. Interface colors are strictly functional; illustration and card backgrounds provide the emotional temperature.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, primary button fills, shadows |
| ink-secondary | #1F2937 | Body text on light backgrounds, secondary headings |
| ink-tertiary | #374151 | Muted text, captions, footer links |
| muted | #4B5563 | Footer heading text, de-emphasized labels |
| canvas | #FFFFFF | Page background, inverted text on dark surfaces |
| surface | #2C2C2C | Dark stat card backgrounds, GitHub card fill |
| surface-secondary | #404040 | Additional dark UI elements |
| accent-blue | #458EDF | Discord brand integration, blue illustration fields |
| accent-indigo | #5765F2 | Secondary blue accents |
| accent-yellow | #FFD21E | HuggingFace card, feature highlight backgrounds |
| accent-green | #BBF7D0 | Success states, light green accents |
| accent-purple | #E9D5FF | Feature card layering, pastel accents |
| accent-cream | #FEF08A | Memory card background, warm yellow surfaces |

The black-and-white foundation ensures maximum legibility and gives the interface a crisp, editorial quality. Color enters through controlled channels: hero illustrations sit on flat color fields (green, blue), community stat cards adopt brand colors of their respective platforms (dark gray for GitHub, blue for Discord, yellow for HuggingFace), and feature cards use pastel yellows and greens with thick black outlines. This discipline prevents the playful palette from overwhelming the functional UI.

## Typography

The typographic system is built entirely on Studio Feixen Sans, a Swiss grotesque with distinctive character, supplemented by Inter for specific technical contexts. The hierarchy is established through weight and size rather than color variation, maintaining the monochrome discipline.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Studio Feixen Sans | 5rem | 600 | 1.5 | -0.04em | Hero headlines, major section titles |
| section-display | Studio Feixen Sans | 2.25rem | 700 | 1.11 | -0.033em | Section headings like "All the tools you need" |
| feature-heading | Studio Feixen Sans | 1.75rem | 700 | 1.5 | -0.025em | Feature titles: Models, Connectors, Memory |
| body | Studio Feixen Sans | 1rem | 400 | 1.5 | normal | Navigation, default body text |
| body-large | Studio Feixen Sans | 1.25rem | 400 | 1.4 | -0.03em | Hero subheadings, descriptive paragraphs |
| label | Studio Feixen Sans | 0.875rem | 400 | 1.43 | normal | Captions, partner attributions, metadata |
| navigation | Studio Feixen Sans | 1rem | 400 | 1.5 | normal | Top nav links |
| button-primary | Studio Feixen Sans | 1.25rem | 500 | 1.4 | -0.01em | Primary CTA buttons |
| button-secondary | Studio Feixen Sans | 1rem | 500 | 1.5 | normal | Compact buttons, footer actions |
| stat-number | Studio Feixen Sans | 1.125rem | 700 | 1.56 | -0.011em | GitHub stars, Discord online count |
| footer-heading | Studio Feixen Sans | 3.25rem | 700 | 1.5 | normal | Large footer display text |

Studio Feixen Sans is designed by Studio Feixen. Verify licensing for these families before production use. The type scale is tightly tracked at display sizes, with negative letter spacing increasing proportionally with size. Body sizes use neutral tracking. The result is a system that feels contemporary and confident without tipping into austerity.

## Layout

The layout follows a centered, single-column model with generous horizontal margins. Content is constrained to a maximum width that creates comfortable reading measure while allowing illustrations to break out visually.

The page grid uses a consistent horizontal padding of 1.5rem on mobile and expands to substantial margins on desktop. Section spacing is pronounced: 5rem between major sections creates clear rhythmic separation. Within sections, content stacks vertically with 2rem to 2.5rem gaps between related elements.

The hero section occupies full viewport width with its illustration extending edge-to-edge, while text content remains centered within the content maximum. Feature sections use an asymmetric two-column layout at desktop: numbered headings and descriptions occupy the left portion, while logo grids and cards sit right-aligned. This creates a editorial, magazine-like pacing where the eye travels deliberately from label to content.

The footer expands into a multi-column grid: brand identity and newsletter capture on the left, link columns for Company and Resources on the right. This is the most information-dense area of the page, yet maintains the generous spacing established upstream.

## Visual language

The defining visual tension of Jan is between the precise, almost severe typography and the loose, expressive illustration style. Cartoon characters with rounded proportions and thick black outlines populate the marketing pages: a girl building electronics, a robot with a television head flying through clouds. These illustrations use flat color fills with minimal shading, giving them a sticker-like quality that pops against solid color backgrounds.

UI elements echo this illustration language through consistent use of thick black borders. Buttons carry 2px solid black borders with rounded corners. Feature cards like the Memory sticky-note use 2px black outlines with rounded corners and layered pastel backgrounds. The shadow system is deliberately flat and graphic: hard black shadows offset 4px down, creating a cut-paper depth effect rather than atmospheric blur.

Iconography throughout is simple and functional. Partner logos in the feature grids are presented at consistent sizes with clean attribution text beneath. The overall effect is of a design system that treats the interface itself as part of the illustration world—everything sits on the same flat plane, outlined in black, with color used as emotional punctuation.

## Components

### Navigation bar

The top navigation is minimal and functional. The Jan wordmark with waving-hand icon sits left-aligned. Centered links include Docs, Changelog, Blog, and Handbook. A primary "Download Jan" button with dark fill sits right, followed by social icons for Discord, X, LinkedIn, and GitHub. The bar uses canvas background with ink text, separated from content by a subtle horizontal rule or shadow.

### Hero section

The hero alternates between illustration-dominated and text-focused presentations. One variant shows a green field with the headline "Jan is built in public" centered above three community stat cards. The cards display platform icons, names, and live statistics—41.2K stars for GitHub, 1.9K online for Discord, 123 models for HuggingFace. Each card uses its platform's characteristic color with rounded corners and compact padding. The illustration below shows a cartoon girl assembling a robot amid cardboard boxes and mountain scenery.

Another hero variant presents a blue sky background with a flying robot illustration and the headline "Ask Jan anything" in white. A download button with platform selector floats over the illustration. These heroes demonstrate the system's flexibility: same typographic treatment, different color fields and illustration subjects.

### Feature enumeration

Features are introduced with large circled numbers (1, 2, 3) using outlined circles with bold numerals. Each feature receives a display heading and body description left-aligned, with supporting content to the right. The Models section shows a grid of nine partner logos in three rows: ChatGPT, Claude, Gemini, Llama, Mistral, Qwen, DeepSeek, Gemma, and Kimi. Each logo sits above its name and parent company in small label text. Horizontal rules separate rows. The Connectors section follows the same pattern with Gmail, Amazon, Google, Notion, Figma, and YouTube.

### Feature cards

The Memory feature uses a distinctive sticky-note card design. A yellow rounded rectangle with thick black border contains a user profile header with avatar, name, and location. Below, a bold subheading introduces bulleted preferences. The card sits atop layered pastel rectangles in green and purple, creating a physical stack effect with visible offsets. A "Coming Soon" badge in muted text appears beside the feature heading.

### Buttons

Primary buttons use ink background with canvas text, 2px ink border, and generous horizontal padding. Secondary buttons invert this: canvas background, ink text, same border treatment. Both use the rounded button radius and medium weight typography. A compact variant reduces padding and font size for footer and inline use.

### Footer

The footer uses a light canvas background with muted text color. A large display heading anchors the left column above a newsletter subscription field with email input and submit button. The right side organizes links into titled columns: Company (Careers, Discord, GitHub, LinkedIn, X) and Resources (Blog, Docs, Changelog, API Reference). Link text uses the muted color at body size with comfortable vertical spacing.

## Responsive behavior

The design is authored for desktop viewport widths. At narrower widths, the asymmetric two-column feature layout should stack to single column, with numbered headings above their associated content. The partner logo grids should reflow from three columns to two, then to a single scrolling row on the narrowest devices.

Hero illustrations should maintain aspect ratio while scaling down; text should remain legible with adjusted sizes. The navigation should collapse to a hamburger menu or simplify to essential links and the download button. Footer columns should stack vertically, with the newsletter form preceding link lists.

Touch targets should maintain minimum 44px height. The thick button borders and rounded shapes translate naturally to touch interfaces. Illustration detail may become less critical at small sizes; consider simplified crop or reduced complexity versions.

## Practical implementation guidance

### Preserve
- The strict black-and-white UI foundation with color reserved for illustrations and accent cards
- Studio Feixen Sans throughout; its distinctive character is central to the brand
- Thick 2px black borders on interactive elements and feature cards
- The flat, hard-shadow treatment (4px offset, no blur)
- Generous section spacing and centered content maximum width
- Circled numerals for feature enumeration
- Layered card stacks with visible pastel offsets

### Avoid
- Adding gradients or atmospheric shadows to the UI
- Using more than one accent color per section
- Reducing border thickness below 2px on outlined elements
- Setting body text lighter than ink-secondary; contrast is part of the brand
- Crowding the partner logo grids; maintain the horizontal rule separation

### Recommended build order
1. Establish the typography scale with Studio Feixen Sans loaded at all weights
2. Implement the color tokens, starting with ink and canvas
3. Build the navigation and button components with their thick borders
4. Create the hero section with centered text and full-bleed illustration capability
5. Develop the feature enumeration pattern with circled numbers and asymmetric layout
6. Add the partner logo grid with consistent sizing and attribution labels
7. Implement the layered card component for feature highlights
8. Build the footer with multi-column link grid and newsletter form

### Accessibility
- Ensure the waving-hand icon in the wordmark has appropriate aria labeling
- Provide alt text for all cartoon illustrations that conveys narrative content
- Maintain 4.5:1 contrast for all body text; the black-on-white default exceeds this
- The blue hero background with white text should be verified for contrast compliance
- Interactive elements should have visible focus states; consider offset outlines that respect the 2px border language
- The hard shadow effect should not be the only indicator of interactive state

## Scope note

This guide covers the marketing landing page for Jan, including hero presentations, feature enumeration, partner integrations, and footer. Application UI states, chat interface design, mobile navigation behavior, and motion or animation specifications are not represented in the supplied material. Measurements are exact values from the retained interface data.
