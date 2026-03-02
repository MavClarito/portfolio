# Design Review Results: Portfolio Home (/)

**Review Date**: 2026-03-01
**Route**: /
**Focus Areas**: Visual Design, UX/Usability, Responsive/Mobile, Micro-interactions

## Summary
The portfolio has a solid dark foundation but lacks viewport-filling sections, any navigation, real content in the Projects and Academic sections, and all animations. The result feels sparse and unpolished compared to modern portfolio standards. All 12 issues below are being resolved in the same session.

## Issues

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | Hero section doesn't fill viewport height — wastes prime above-the-fold space | 🔴 Critical | UX/Usability | `components/HeroSection.tsx:8` |
| 2 | No site navigation — users have no way to jump between sections | 🔴 Critical | UX/Usability | Missing component |
| 3 | Projects section shows only a static placeholder SVG — no real project data | 🔴 Critical | Visual Design | `components/ProjectsSection.tsx` |
| 4 | Academic years are a bare unstyled list with no descriptions, highlights, or timeline structure | 🟠 High | UX/Usability | `components/AcademicJourney.tsx:22-35` |
| 5 | No entrance animations or scroll-triggered effects anywhere on the page | 🟠 High | Micro-interactions | All components |
| 6 | "About Me" CTA button is non-functional (no action on click) | 🟠 High | UX/Usability | `components/HeroSection.tsx:36-40` |
| 7 | Tech badges strip uses hardcoded `ml-[434px]` offset — breaks on non-1200px viewports | 🟡 Medium | Responsive | `components/HeroSection.tsx:46` |
| 8 | No visual depth between sections — all sections bleed into each other on solid black | 🟡 Medium | Visual Design | `app/page.tsx`, all sections |
| 9 | No `scroll-behavior: smooth` in global CSS — navigation jumps instead of scrolling | 🟡 Medium | UX/Usability | `app/globals.css` |
| 10 | Hero text and profile image aren't vertically centered in viewport | 🟡 Medium | Visual Design | `components/HeroSection.tsx` |
| 11 | No hover or active states on buttons — missing feedback | 🟡 Medium | Micro-interactions | `components/HeroSection.tsx:36-40` |
| 12 | Section headings use fixed `letter-spacing: -2.16px` which may clip on very small screens | ⚪ Low | Responsive | All section heading elements |

## Criticality Legend
- 🔴 **Critical**: Breaks functionality or violates accessibility standards
- 🟠 **High**: Significantly impacts user experience or design quality
- 🟡 **Medium**: Noticeable issue that should be addressed
- ⚪ **Low**: Nice-to-have improvement

## Next Steps (all implemented in this session)
1. ✅ Right-side fixed dot navigation with IntersectionObserver active tracking
2. ✅ Hero rebuilt as `min-h-screen` with staggered framer-motion entrance animations
3. ✅ Academic Journey rebuilt with sticky left year nav + vertical timeline + rich content per year
4. ✅ Projects replaced with CSS snap horizontal carousel of real project cards
5. ✅ All sections get `whileInView` scroll-triggered animations
6. ✅ Scroll-behavior: smooth + scrollbar utility added globally
