/* ═══════════════════════════════════════════════════════════
   GOLIFY — Design Tokens v1.0
   "Football-tech. Premium. Cinematic."
   
   References: SpaceX · Nike Football · Apple · EA Sports FC
═══════════════════════════════════════════════════════════ */

export const G = {

  // ── Backgrounds ──────────────────────────────────────────
  bg:            '#050505',   // Pure deep black — primary bg
  bgAlt:         '#080A0F',   // Slightly elevated black
  surface:       '#0E1116',   // Graphite — card surfaces
  surfaceHigh:   '#131820',   // Elevated surface (hover states)
  surfaceBorder: '#1E2530',   // Subtle border on dark surfaces
  surfaceLine:   '#111820',   // Hairline dividers

  // ── Green (Premium Football Accent) ──────────────────────
  green:         '#17C964',   // Primary premium green — use sparingly
  greenNeon:     '#00FF88',   // Neon accent — glows only
  greenDim:      '#0F8A43',   // Dimmed green — secondary contexts
  greenMuted:    '#0A4D28',   // Very muted — backgrounds behind green text
  greenGlow:     'rgba(23, 201, 100, 0.10)',   // Glow layer (radial)
  greenGlowStrong: 'rgba(23, 201, 100, 0.18)', // Strong glow — CTA hero
  greenBorder:   'rgba(23, 201, 100, 0.20)',   // Green-tinted border

  // ── Blue (Deep Tech) ─────────────────────────────────────
  blue:          '#0B1F3A',   // Deep tech blue — accent sections
  blueLight:     '#0F2D55',   // Lighter blue surface
  blueLine:      '#112240',   // Blue border

  // ── Typography ───────────────────────────────────────────
  white:         '#F5F7FA',   // Soft white — primary headings
  whiteAlt:      '#E8ECF0',   // Slightly warm white — secondary headings
  gray:          '#7B8794',   // Muted gray — body text
  grayLight:     '#A3ACBA',   // Light gray — captions
  grayDark:      '#3A4454',   // Dark gray — placeholder text, muted UI
  grayLine:      '#252D38',   // Line dividers

  // ── Gradients ────────────────────────────────────────────
  gradHero:      'linear-gradient(180deg, #050505 0%, #0A0E14 100%)',
  gradSurface:   'linear-gradient(135deg, #0E1116 0%, #131820 100%)',
  gradGreenBtn:  'linear-gradient(135deg, #17C964 0%, #12A854 100%)',
  gradGreenFade: 'linear-gradient(180deg, #17C964 0%, transparent 100%)',
  gradDark:      'linear-gradient(180deg, #0E1116 0%, #050505 100%)',
  gradCinematic: 'linear-gradient(180deg, transparent 0%, rgba(5,5,5,0.95) 100%)',
  gradOverlay:   'linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.92) 100%)',
  gradGlowHero:  'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(23,201,100,0.13) 0%, transparent 70%)',
  gradGlowCTA:   'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(23,201,100,0.18) 0%, transparent 70%)',

  // ── Shadows / Glows ──────────────────────────────────────
  shadowGreen:   '0 0 32px rgba(23, 201, 100, 0.25), 0 0 64px rgba(23, 201, 100, 0.10)',
  shadowGreenSm: '0 0 16px rgba(23, 201, 100, 0.20)',
  shadowCard:    '0 4px 24px rgba(0, 0, 0, 0.40)',
  shadowDeep:    '0 8px 48px rgba(0, 0, 0, 0.60)',

  // ── Font ─────────────────────────────────────────────────
  font:          "'Inter', -apple-system, sans-serif",

  // ── Spacing ──────────────────────────────────────────────
  pagePad:       '0 80px',
  sectionPad:    '140px 80px',
  maxWidth:      '1280px',

} as const;

/* ── Semantic tokens ─────────────────────────────────────── */
export const COLOR = {
  // Backgrounds
  pageBg:        G.bg,
  cardBg:        G.surface,
  cardBgHover:   G.surfaceHigh,

  // Text
  textPrimary:   G.white,
  textSecondary: G.gray,
  textMuted:     G.grayDark,
  textAccent:    G.green,

  // Borders
  border:        G.surfaceBorder,
  borderAccent:  G.greenBorder,

  // Interactive
  btnPrimary:    G.green,
  btnPrimaryText:'#050505',
  btnGhost:      'transparent',
  btnGhostText:  G.gray,
} as const;
