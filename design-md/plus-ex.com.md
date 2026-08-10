# How plus-ex.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/plus-ex.com-design)

Last updated: 2026-08-10

## Captured pages

[![Samsung Fire annual report portfolio spread showing gradient bookmark and clean white layout with SHARE THIS button](https://pin.fontofweb.com/10243?format=jpg)](https://design.withfudge.com/share/pin-10243)

[Samsung Fire annual report portfolio spread showing gradient bookmark and clean white layout with SHARE THIS button](https://design.withfudge.com/share/pin-10243)

[![Close-up of embossed white book covers with Like the Air title and minimal spine typography](https://pin.fontofweb.com/10242?format=jpg)](https://design.withfudge.com/share/pin-10242)

[Close-up of embossed white book covers with Like the Air title and minimal spine typography](https://design.withfudge.com/share/pin-10242)

[![Financial data tables with light blue row highlights and extensive white space padding](https://pin.fontofweb.com/10241?format=jpg)](https://design.withfudge.com/share/pin-10241)

[Financial data tables with light blue row highlights and extensive white space padding](https://design.withfudge.com/share/pin-10241)

[![China and USA map infographics with coral and teal architectural illustrations and large display numerals](https://pin.fontofweb.com/10240?format=jpg)](https://design.withfudge.com/share/pin-10240)

[China and USA map infographics with coral and teal architectural illustrations and large display numerals](https://design.withfudge.com/share/pin-10240)

## Overview

Plus X presents itself as a creative partner through a portfolio system that balances editorial restraint with vivid project-specific expression. The interface alternates between expansive white canvases that let print and digital work breathe, and dense information surfaces where financial data and geographic narratives require structured clarity. The design language speaks to an agency comfortable with both minimalist book design and complex information visualization.

The system operates across multiple contexts: portfolio case studies for clients like Samsung Fire & Marine Insurance, experience pages with interactive elements, and detailed project microsites. Each context maintains consistent underlying structure while allowing project content to establish its own color story. Typography shifts weight and scale to create hierarchy without relying on decorative elements, while spacing follows an expansive rhythm that reinforces the premium positioning of the work.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, strong emphasis, and structural lines |
| muted-ink | #323232 | Secondary headings, display numerals, and softened emphasis |
| secondary-text | #636363 | Tertiary information, captions, and supporting content |
| subtle-border | #9B9FB4 | Delicate dividers and inactive states |
| canvas | #FAFAFA | Alternate section backgrounds, table rows, and subtle differentiation |
| surface | #FFFFFF | Primary page background, cards, and content containers |
| action | #0000EE | Standard link color for external references |

The color system is intentionally restrained, with nearly all interface energy deriving from project photography and illustration rather than applied color. Black ink against white surface creates maximum contrast for readability, while muted-ink softens large display elements like the 146 and 118 numerals in geographic spreads without losing presence. The canvas tone appears in financial table presentations and alternating section backgrounds, providing just enough warmth to distinguish structural areas from pure white space.

Project-specific color enters through photography and illustration rather than interface tokens. The Samsung annual report spreads introduce coral, teal, and gradient accents through infographic maps and bookmark designs, but these remain content expressions rather than system colors. This separation allows each portfolio piece to maintain its own identity while the containing interface stays neutral and consistent.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display-large | Neuehaasgrotesk | 1.625rem | 400 | 1.54 | -0.005em | Geographic section headings, large numerals |
| body | Nanum Barun Gothic | 0.75rem | 400 | 1.6 | normal | Primary body text in Korean contexts |
| body-bold | Nanum Barun Gothic | 0.75rem | 700 | 1.6 | normal | Emphasized body text and labels |
| body-medium | Nanum Barun Gothic | 1.375rem | 400 | 1.45 | normal | Lead paragraphs and expanded reading |
| label | 나눔고딕 | 0.75rem | 400 | 1.6 | normal | UI labels, navigation, metadata |
| label-bold | 나눔고딕 | 0.75rem | 700 | 1.6 | normal | Section headings and emphasized labels |
| caption | 나눔고딕 | 0.875rem | 400 | 1.43 | normal | Captions and secondary descriptions |
| system | Applesystem | 0.875rem | 400 | 1.5 | normal | System-level UI elements |
| root | Apple Sd Gothic Neo | 1rem | 400 | 1.5 | normal | HTML root fallback sizing |
| experience-body | Roboto | 1rem | 400 | 1.5 | normal | Experience page primary text |
| experience-small | Roboto | 0.875rem | 400 | 1.5 | normal | Experience page secondary text |
| micro | Pretendard Std | 0.419rem | 400 | 1.5 | normal | Dense information labels |
| micro-medium | Pretendard Std | 0.628rem | 500 | 1.53 | normal | Emphasized micro labels |
| micro-tight | Pretendard Std | 0.628rem | 400 | 1.67 | -0.02em | Space-constrained micro text |

The type system serves Korean and Latin scripts through distinct but complementary families. Nanum Barun Gothic and 나눔고딕 handle Korean body and label needs with Regular and Bold weights, while Neuehaasgrotesk provides the refined geometric display voice for large headings and numerals. Roboto anchors the experience pages with neutral readability, and Pretendard Std manages extremely small sizes in information-dense contexts.

Neuehaasgrotesk's tight tracking on display-large creates a contemporary editorial feel appropriate for an agency presenting book design work. The 26px size with 40px line height and negative letter spacing produces confident, airy headings that occupy space without heaviness. Nanum Barun Gothic at 12px with normal line spacing handles dense Korean text in annual report spreads, while the 22px medium size with 32px line height serves lead paragraphs that need more presence.

Verify licensing for these families before production use. Nanum Barun Gothic is provided by Nhn Corporation with designers Jaehyun Yoon, Yongrak Park, and Donggwan Kim. Noto Sans Kr is provided by Adobe Systems Incorporated with an extensive design credit list including Ryoko Nishizuka and Paul D Hunt. Pretendard Std is provided by Kil Hyungjin with base glyphs from Inter by Rasmus Andersson and hangul glyphs from Noto Sans CJK. Roboto is attributed to Google.

## Layout

The layout system is built on an 8.5px base margin unit that creates consistent horizontal rhythm across portfolio presentations. Content blocks typically receive 8.5px left and right margins, establishing a narrow gutter that keeps focus on project imagery while providing minimal protective space.

Vertical spacing follows a generous editorial scale. Major section breaks use 200px top margins and 298px bottom margins for portfolio image containers, creating dramatic pauses between project presentations. Internal section spacing uses 120px top margins for content transitions, while 72px and 100px values separate related but distinct content groups. The 140px top padding on experience page containers establishes clear entry points below navigation.

Portfolio image containers use asymmetric vertical margins—100px top, 80px right, 80px bottom, 80px left—creating subtle directional emphasis that draws the eye downward through the page. Content sections with dense information employ 67px vertical padding with substantial horizontal margins of 348.219px, centering narrow content columns for optimal reading measure.

Grid relationships appear in the 9.38px gap values for flex and grid containers, producing tight but visible separations between related items. Strong and span elements with top borders use 19px and 16px top padding respectively, creating consistent spacing above divider lines that separate content groups.

## Visual language

The visual language communicates editorial sophistication through restraint and precision. White space is not merely background but an active compositional element, with 200px and 298px margins creating deliberate pacing that mimics book page turns. Content surfaces are flat without shadows or dimensional effects; depth comes solely from photography and illustration.

Typography creates hierarchy through scale contrast rather than color variation. The jump from 12px body to 26px display headings is dramatic and intentional, with few intermediate sizes. This binary approach—small functional text versus large expressive text—mirrors the agency's print design sensibility where every size choice carries meaning.

Line elements appear as 1px solid black top borders on strong and span elements, serving as subtle section dividers without decorative weight. These hairlines anchor content groups while maintaining the overall lightness. The 2px solid black border on experience page buttons provides the heaviest interface line, and even this remains minimal.

Project imagery dominates the visual field. Annual report spreads show embossed white covers, gradient bookmarks, financial tables with light blue row highlights, and illustrated geographic maps. The interface recedes to let this work speak. Even the SHARE THIS button—a simple bordered rectangle with black text on white—defers to content.

Color in project work follows its own logic: coral and teal in geographic illustrations, soft gradients in bookmarks, pale blue in data tables. The interface never competes with these expressions, maintaining its neutral black-white-gray position throughout.

## Components

**Share Button**
- Anatomy: Text label within a bordered rectangle
- Surface: White background with 1px solid black border
- Typography: 나눔고딕 Regular at 12px
- Shape: Zero border radius, sharp corners
- Spacing: Compact internal padding
- Composition: Fixed position or inline placement at content section ends

**Portfolio Image Container**
- Anatomy: Full-width or near-full-width image wrapper
- Surface: Transparent, allowing image to sit against page background
- Spacing: 100px top, 80px right, 80px bottom, 80px left margins
- Composition: Centered within viewport, generous surrounding white space

**Section Divider**
- Anatomy: Horizontal line above content group
- Surface: 1px solid black top border
- Spacing: 19px top padding above line for strong elements, 16px for span elements
- Composition: Full-width within content column

**Data Table**
- Anatomy: Structured rows with alternating or highlighted states
- Surface: White base with light blue (#FAFAFA adjacent tones) row highlights
- Typography: Nanum Barun Gothic at 12px for all content
- Composition: Wide format with numerical alignment, extensive white space between data groups

**Geographic Infographic**
- Anatomy: Map silhouette with architectural illustrations and large numerals
- Surface: White background with muted-ink map base
- Typography: Neuehaasgrotesk display-large for country names and numerals; Nanum Barun Gothic body for descriptions
- Composition: Two-column spread with balanced visual weight, illustrations positioned within map boundaries

**Experience Page Button**
- Anatomy: Text label with bordered background
- Surface: White background with 2px solid black border
- Typography: Roboto Regular at 16px
- Shape: Zero border radius
- Composition: Inline or positioned within interactive sections

**Project Caption**
- Anatomy: Label and description text pair
- Typography: 나눔고딕 label-bold for headings, 나눔고딕 caption for descriptions
- Spacing: 16px top padding above caption text when following divider
- Composition: Left-aligned or centered beneath portfolio imagery

## Responsive behavior

The system appears optimized for desktop presentation given the substantial fixed margins and large image containers. Portfolio spreads with 348.219px horizontal margins suggest a centered narrow-column approach that would require significant adaptation for smaller viewports.

For implementation, consider these approaches: reduce 200px/298px vertical margins proportionally on tablet, collapsing to 100px/150px or similar. The 8.5px horizontal margins can expand to standard viewport padding on mobile. Display-large headings at 26px should scale down to maintain relationship with body text, perhaps to 20px or 1.25rem.

The dense information layouts with 67px padding and 9.38px gaps will need vertical stacking on narrow viewports. Geographic infographic spreads should reflow from side-by-side to stacked, preserving the map-illustration-numeral relationship while allowing each country section full width.

Experience page containers with 140px top padding should reduce to 80px or 60px on mobile to maintain entry rhythm without excessive scroll. Button borders and typography can remain consistent across breakpoints since the 2px border and 16px text already function at small sizes.

## Practical implementation guidance

### Preserve
- The generous white space ratios; they define the premium editorial character
- Sharp zero-radius corners on all interface elements; this geometric precision is signature
- The binary type hierarchy with dramatic scale jumps between functional and display sizes
- Black ink on white surface as the default reading experience
- Project-specific color contained within imagery and illustration, never bleeding into interface chrome

### Avoid
- Adding background colors, shadows, or dimensional effects to content containers
- Introducing rounded corners or soft edges that contradict the geometric precision
- Creating intermediate type sizes that dilute the dramatic scale contrast
- Using the action blue (#0000EE) for anything beyond standard link behavior
- Competing with project imagery through decorative interface elements

### Recommended build order
1. Establish the spacing scale with the 8.5px base unit and major section values
2. Implement the neutral color palette with ink, surface, and canvas tokens
3. Set up typography with Nanum Barun Gothic for Korean body and Neuehaasgrotesk for display
4. Build the portfolio image container with its asymmetric margin pattern
5. Create the section divider component with 1px top border and consistent padding
6. Implement the share button as the primary action pattern
7. Add project-specific components (data tables, infographics) with content-appropriate styling

### Accessibility
- Maintain the high contrast between ink (#000000) and surface (#FFFFFF) for all body text
- Ensure muted-ink (#323232) headings still meet WCAG AA against white backgrounds
- Provide text alternatives for all infographic maps and data visualizations
- Consider focus indicators that respect the sharp-cornered aesthetic while remaining visible
- Test the 12px body size at standard viewing distances; implement minimum size adjustments if needed for readability

## Scope note

This guide covers the portfolio presentation system and experience page structure visible in the supplied materials. Navigation patterns, mobile breakpoints, hover states, loading sequences, and form interactions beyond the single experience button are not represented. The 6.7px and 10.05px Pretendard Std sizes appear in dense information contexts but may require verification for production legibility. Measurements are practical adaptation targets based on the extracted interface values.
