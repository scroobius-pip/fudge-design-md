# How geniestudio.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/geniestudio.app-design)

Last updated: 2026-08-10

## Captured pages

[![Feature cards section with pastel blue, lavender, and mint green rounded panels showing collections, collaboration, and prompt enhancement features](https://pin.fontofweb.com/3799?format=jpg)](https://design.withfudge.com/share/pin-3799)

[Feature cards section with pastel blue, lavender, and mint green rounded panels showing collections, collaboration, and prompt enhancement features](https://design.withfudge.com/share/pin-3799)

[![Testimonials grid with light gray quote cards, avatar photos, and company logos in a horizontal scrolling layout](https://pin.fontofweb.com/3798?format=jpg)](https://design.withfudge.com/share/pin-3798)

[Testimonials grid with light gray quote cards, avatar photos, and company logos in a horizontal scrolling layout](https://design.withfudge.com/share/pin-3798)

[![FAQ accordion with decorative circular sticker border containing colorful icons and flowers around the letter G](https://pin.fontofweb.com/3797?format=jpg)](https://design.withfudge.com/share/pin-3797)

[FAQ accordion with decorative circular sticker border containing colorful icons and flowers around the letter G](https://design.withfudge.com/share/pin-3797)

[![Hero footer section with large blue cloud mascot, gradient sky background, and centered waitlist call-to-action](https://pin.fontofweb.com/3796?format=jpg)](https://design.withfudge.com/share/pin-3796)

[Hero footer section with large blue cloud mascot, gradient sky background, and centered waitlist call-to-action](https://design.withfudge.com/share/pin-3796)

## Overview

Genie Studio presents itself as a creative generation tool with a distinctly friendly, approachable personality. The visual system balances professional clarity with playful warmth through soft pastel color fields, generous rounded corners, and whimsical 3D illustrations. The design language speaks to designers and creative teams who want powerful tools without intimidating interfaces.

The page architecture follows a classic landing-page rhythm: a hero section establishing emotional connection, feature blocks demonstrating capability, social proof through testimonials, practical FAQ support, and a final conversion moment. What distinguishes this system is its consistent use of color as content—feature cards carry distinct pastel identities (ice blue, lavender, mint green, peach) that make functional sections feel like curated gallery pieces rather than utilitarian grids.

The cloud mascot serves as the emotional anchor, appearing in the hero/footer area with a cheerful expression against a gradient sky. This character reinforces the "magic" positioning while grounding the brand in approachable, non-corporate territory. The overall density is low, with ample whitespace and large typographic moments that let the illustration work breathe.

## Colors

The palette operates in two modes: a neutral core for readability and a pastel spectrum for emotional expression. The neutral foundation uses pure black for primary text and a warm gray for secondary material, sitting on white canvas. The expressive layer deploys soft, desaturated hues that feel like tinted light rather than painted surfaces.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, body text, button fills |
| muted-ink | #6B7280 | Secondary text, captions, metadata |
| canvas | #FFFFFF | Page background, card surfaces, button text |
| sky | #E0F2FE | Hero/footer gradient background, atmospheric areas |
| cloud | #60A5FA | Mascot primary fill, decorative clouds, accent moments |
| lavender-surface | #EDE9FE | Collaboration feature card background |
| mint-surface | #D1FAE5 | Prompt enhancement card background |
| peach-surface | #FFEDD5 | Warm accent card, illustration tints |
| ice-surface | #DBEAFE | Collections feature card background |
| coral-accent | #FB7185 | Mascot mouth, warm punctuation in illustrations |

The pastel surfaces share a common characteristic: they are light enough to support black text without inversion, yet saturated enough to feel intentional rather than accidental. The blue family dominates—sky and cloud create atmospheric depth in the hero, while ice-surface anchors the largest feature card. Lavender, mint, and peach rotate through supporting cards with roughly equal visual weight. No dark mode is visible in the supplied material; the system appears optimized for light-environment viewing.

## Typography

Two families divide the labor: Aeonik carries display and heading duties with geometric confidence, while Geist handles body and interface text with neutral readability. Both are served as variable or static web fonts from distinct foundries.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik | 3rem | 500 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Aeonik | 2.5rem | 500 | 1.15 | -0.01em | Feature card headlines, secondary headings |
| body | Geist | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, FAQ answers |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0 | Button labels, card metadata, captions |
| label | Geist | 0.75rem | 400 | 1.4 | 0.01em | Tags, small interface annotations |
| navigation | Geist | 0.875rem | 400 | 1 | 0 | Menu items, links |

Aeonik appears exclusively at medium weight (500), giving headlines a crisp, modern presence without the heaviness of bold. The negative tracking on display sizes tightens word spacing for impact at large scales. Geist maintains a single regular weight across all body roles, relying on size hierarchy rather than weight variation to establish importance. Line heights are generous for body text, creating comfortable reading in longer FAQ passages, while display lines sit tight for headline punch.

Verify licensing for these families before production use. Aeonik is available from Co Type Foundry; Geist is from Basement Studio and Vercel.

## Layout

The page uses a centered, contained layout with generous horizontal margins. Content maxes out at approximately 72rem, creating a comfortable reading measure that feels expansive without losing control. Sections stack vertically with substantial breathing room—roughly 6rem between major zones.

The feature cards in the "There's more" section demonstrate the primary grid logic: a two-column arrangement with asymmetric sizing. The left card (collections) spans roughly 60% width with extended vertical space, while the right column stacks two smaller cards (collaboration, prompt enhancement) in a 40% split. This broken symmetry prevents the grid from feeling mechanical and gives visual priority to the collection demonstration with its floating image icons.

Testimonials abandon the contained grid for a horizontal scroll or carousel treatment. Cards extend beyond the viewport edge, suggesting abundance and social momentum. Each card maintains consistent internal padding and avatar placement, but the container breaks the page boundary.

The FAQ section returns to centered containment but introduces a decorative circular element—a large ring of sticker-style icons forming a loose "G" shape—that wraps around the accordion content. This element floats partially outside the content column, creating depth and visual interest without disrupting readability.

Spacing follows a 0.25rem base unit. Major sections separate by 24 units (6rem). Card internal padding uses 8 units (2rem). Gap between cards sits at 6 units (1.5rem). These values create a rhythmic, breathable page that lets illustration and color do the communicative work.

## Visual language

The illustration style is the dominant visual signature: soft, rounded 3D forms with gentle shading that suggests physicality without harsh realism. The cloud mascot exemplifies this—pillowy volumes, simple facial features, and stubby arms that convey enthusiasm through pose rather than detail. The color modeling stays within the pastel range, with slightly deeper blues for shadow areas on the cloud form.

Feature cards extend this language through their background tints and embedded UI mockups. The collections card shows floating image-placeholder squares in lavender, peach, and ice blue, each with soft drop shadows that lift them from the surface. The collaboration card includes avatar stacks and a dark "Share" button, demonstrating interface-in-interface presentation. The prompt enhancement card contains a subtle input field with placeholder text, showing functional context within the decorative frame.

The sticker ring in the FAQ section introduces a secondary illustration vocabulary: flat, graphic icons (flowers, stars, faces, pencils) arranged in a dense, decorative border. These elements are more graphic and less dimensional than the 3D work, functioning as pattern and ornament rather than narrative content.

Photography appears only in testimonial avatars—small, circular headshots that ground the anonymous quotes in human specificity. These are treated neutrally: no borders, no shadows, simple circular masks at 50% radius.

## Components

**Feature Card**

Anatomy: Rounded rectangular container with internal padding, headline text at top-left, illustrative content occupying lower portion. Some variants include embedded UI chrome (buttons, input fields, avatar stacks).

Surface: Background color varies by card role—ice-surface for collections, lavender-surface for collaboration, mint-surface for prompts. No visible border; color field defines the edge.

Typography: Section-display token for headlines, positioned top-left with generous padding. Embedded UI elements use body-small for labels and buttons.

Shape: 1.5rem corner radius on all corners, creating a pillowed, app-icon-like presence.

Spacing: 2rem internal padding. Content sits toward top; illustration fills remaining space with slight overlap at bottom edge.

Composition: Asymmetric grid placement. Primary card extends full height of row; secondary cards stack with equal internal spacing.

Variants: Collections (large, left, with floating image squares), Collaboration (medium, right-top, with avatar row and share button), Prompt Enhancement (medium, right-bottom, with input field mockup).

**Primary Action Button**

Anatomy: Text label centered within rounded capsule container.

Surface: Solid ink fill with canvas text. No border, no visible shadow in static state.

Typography: Body-small token, medium weight impression through contrast rather than heavier font weight.

Shape: Full pill—9999px radius—creating an elongated capsule that feels friendly and clickable.

Spacing: Horizontal padding approximately 1.5rem, vertical approximately 0.75rem, creating a balanced proportion.

**Testimonial Card**

Anatomy: Rounded rectangle containing quote text, author avatar, name, title, and company logo.

Surface: Canvas background with subtle gray border (#F3F4F6) or shadow creating separation from page background.

Typography: Body token for quote text, left-aligned. Name uses body-small with slightly heavier presence; title uses label token in muted-ink.

Shape: 1.5rem corner radius, matching feature cards for family consistency.

Composition: Quote text occupies upper 60%; author block at bottom with avatar left, name/title center, logo right. Horizontal arrangement suggests carousel or scroll container.

**FAQ Accordion Item**

Anatomy: Question text with expand/collapse toggle icon, answer text revealed below.

Surface: Canvas background, minimal or no visible container border. Separated by thin horizontal rules or whitespace.

Typography: Question uses body token in ink; answer uses body-small in muted-ink. Toggle icon is simple minus/plus in muted-ink.

Shape: No distinct card shape; items read as list entries within a column.

Composition: Questions stack vertically with consistent vertical rhythm. Answer text indented or padded to align with question start.

States: Expanded (minus icon, answer visible), Collapsed (plus icon, answer hidden). One item appears expanded by default in the visible state.

**Navigation**

Anatomy: Logo mark, text links, and primary action button distributed horizontally.

Surface: Transparent or canvas background, floating over page content without heavy chrome.

Typography: Navigation token for links, body-small for any secondary actions.

Composition: Logo left, links center or right, action button far right. Minimal vertical height to maximize content visibility.

## Responsive behavior

The two-column feature grid should collapse to single column on narrow viewports, with the large collections card stacking above the two smaller cards. Horizontal scroll on testimonials should either persist with touch-friendly swipe or convert to a stacked vertical list if carousel controls are not implemented.

The FAQ decorative ring may need scaling or repositioning on smaller screens to avoid overlapping readable content. Consider reducing the ring to a partial arc or background watermark below the accordion.

The cloud mascot in the hero/footer scales proportionally but should maintain sufficient surrounding whitespace to prevent the composition from feeling cramped. Text sizes should step down by approximately 25% on mobile, with hero-display moving to 2.25rem and section-display to 1.875rem.

## Practical implementation guidance

**Preserve**
- The pastel color blocking on feature cards—this is the primary brand expression
- Generous corner radii (1.5rem) on all card-like surfaces
- The cloud mascot's cheerful, simple proportions and sky gradient context
- High contrast black text on light surfaces for accessibility
- Asymmetric grid ratios that break visual monotony

**Avoid**
- Adding heavy shadows or borders that compete with the soft illustration style
- Using the pastel colors for text—they are strictly surface treatments
- Tightening line height on body text beyond 1.5
- Introducing additional font weights or families beyond the Aeonik/Geist pairing
- Making the decorative sticker ring too prominent or interactive

**Recommended Build Order**
1. Establish the neutral foundation: ink, canvas, muted-ink with Geist body text
2. Add Aeonik display hierarchy for section headers
3. Implement the feature card component with variable pastel backgrounds
4. Build the asymmetric two-column grid with responsive collapse
5. Add the hero/footer cloud section with gradient sky background
6. Implement testimonial cards and horizontal scroll container
7. Add FAQ accordion with decorative ring positioned behind content
8. Polish with spacing tokens and micro-interactions

**Accessibility**
- Ensure the ink-on-canvas and ink-on-pastel combinations meet WCAG AA contrast ratios; the lightest surface (mint-surface) should be verified against black text
- Provide visible focus indicators on the pill buttons and accordion toggles
- Make the testimonial carousel keyboard-navigable with arrow key support
- Add aria-expanded state to FAQ accordion items
- Consider reducing motion for users who prefer it, particularly for any horizontal scroll or decorative ring animation

## Scope note

This guide covers the landing page surface visible in the supplied images: hero, features, testimonials, FAQ, and footer sections. Navigation behavior, mobile layouts, form validation states, and any dashboard or application interfaces beyond this marketing surface are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
