/* ═══════════════════════════════════════════════════════════════
   GOLIFY — Brand & Design System Style Guide
   "Football-tech. Premium. Cinematic."
═══════════════════════════════════════════════════════════════ */
import { G } from "./tokens";

// ── Helpers ───────────────────────────────────────────────────────

function SectionTitle({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: "60px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <div style={{ width: "20px", height: "1px", backgroundColor: G.green }} />
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", color: G.green, textTransform: "uppercase" as const }}>
          {label}
        </span>
      </div>
      <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 900, color: G.white, letterSpacing: "-1.5px", margin: 0, lineHeight: "1.05" }}>
        {title}
      </h2>
      {sub && (
        <p style={{ fontSize: "15px", fontWeight: 300, color: G.gray, margin: "16px 0 0 0", lineHeight: "1.7" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: G.surfaceBorder,
        margin: "100px 0",
      }}
    />
  );
}

function ColorSwatch({ hex, name, desc, accent }: { hex: string; name: string; desc: string; accent?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <div
        style={{
          width: "100%",
          height: "120px",
          backgroundColor: hex,
          borderRadius: "4px 4px 0 0",
          borderWidth: accent ? "1px" : "0px",
          borderStyle: "solid",
          borderColor: G.surfaceBorder,
          boxShadow: accent ? G.shadowGreenSm : undefined,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {accent && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            }}
          />
        )}
      </div>
      <div
        style={{
          padding: "16px",
          backgroundColor: G.surface,
          borderRadius: "0 0 4px 4px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: G.surfaceBorder,
          borderTopWidth: "0px",
        }}
      >
        <div style={{ fontSize: "11px", fontWeight: 700, color: G.white, marginBottom: "4px", letterSpacing: "0.3px" }}>{name}</div>
        <div style={{ fontSize: "10px", fontWeight: 600, color: G.green, marginBottom: "4px", letterSpacing: "0.5px" }}>{hex}</div>
        <div style={{ fontSize: "10px", color: G.grayDark, letterSpacing: "0.3px" }}>{desc}</div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────

export function StyleGuide() {
  return (
    <div
      style={{
        minWidth: "1280px",
        backgroundColor: G.bg,
        fontFamily: G.font,
        overflowX: "auto",
      }}
    >

      {/* ── HERO HEADER ─────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          backgroundColor: G.bg,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          padding: "0 80px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(${G.surfaceLine} 1px, transparent 1px),
              linear-gradient(90deg, ${G.surfaceLine} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            opacity: 0.5,
          }}
        />

        {/* Green glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 30% 80%, rgba(23,201,100,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Version badge — top right */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              padding: "6px 14px",
              backgroundColor: G.greenMuted,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.greenBorder,
              borderRadius: "3px",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: 700, color: G.green, letterSpacing: "1px" }}>v1.0</span>
          </div>
          <span style={{ fontSize: "10px", color: G.grayDark, letterSpacing: "1px" }}>Mayo 2026</span>
        </div>

        {/* Main heading */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: G.maxWidth, margin: "0 auto", width: "100%" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", color: G.green, display: "block", marginBottom: "20px" }}>
            GOLIFY · DESIGN SYSTEM
          </span>
          <h1
            style={{
              fontSize: "clamp(60px, 8vw, 112px)",
              fontWeight: 900,
              color: G.white,
              letterSpacing: "-4px",
              margin: 0,
              lineHeight: "0.95",
            }}
          >
            Brand
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: `2px ${G.green}` }}>System.</span>
          </h1>
          <p style={{ fontSize: "15px", fontWeight: 300, color: G.gray, margin: "24px 0 0 0", maxWidth: "480px", lineHeight: "1.7" }}>
            Sistema de diseño para Golify — La plataforma football-tech premium para la próxima generación de jugadores, equipos y comunidades deportivas.
          </p>
        </div>
      </div>

      {/* ── PAGE CONTENT ────────────────────────────────────────── */}
      <div style={{ padding: "0 80px", maxWidth: `calc(${G.maxWidth} + 160px)`, margin: "0 auto", boxSizing: "border-box" }}>

        <Divider />

        {/* ── 01 COLOR PALETTE ─────────────────────────────────── */}
        <SectionTitle
          label="01 — Paleta de Color"
          title="Brand Color Palette"
          sub="Escala de grises profunda con verde premium como único acento. Verde reservado para CTAs, métricas activas y momentos de énfasis."
        />

        {/* Primary colors */}
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark, display: "block", marginBottom: "16px" }}>
            COLORES PRINCIPALES
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px" }}>
            <ColorSwatch hex="#050505" name="Deep Black"     desc="Background principal" />
            <ColorSwatch hex="#080A0F" name="Black Alt"      desc="Background alt" />
            <ColorSwatch hex="#0E1116" name="Graphite"       desc="Cards y superficies" />
            <ColorSwatch hex="#131820" name="Surface High"   desc="Superficies elevadas" />
            <ColorSwatch hex="#1E2530" name="Surface Border" desc="Bordes y dividers" />
            <ColorSwatch hex={G.green}     name="Green Primary"  desc="Acento premium" accent />
            <ColorSwatch hex={G.greenNeon} name="Neon Green"     desc="Glow effects only" accent />
          </div>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark, display: "block", marginBottom: "16px" }}>
            TIPOGRAFÍA Y SOPORTE
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px" }}>
            <ColorSwatch hex={G.white}     name="Soft White"    desc="Headings primarias" />
            <ColorSwatch hex={G.whiteAlt}  name="White Alt"     desc="Headings secundarias" />
            <ColorSwatch hex={G.gray}      name="Gray"          desc="Body text" />
            <ColorSwatch hex={G.grayLight} name="Gray Light"    desc="Captions" />
            <ColorSwatch hex={G.grayDark}  name="Gray Dark"     desc="Muted / placeholders" />
            <ColorSwatch hex={G.blue}      name="Deep Blue"     desc="Secciones de acento" />
          </div>
        </div>

        <Divider />

        {/* ── 02 TYPOGRAPHY ────────────────────────────────────── */}
        <SectionTitle
          label="02 — Tipografía"
          title="Type Hierarchy"
          sub="Inter — Variable. Editorial, minimalista, técnico. Pesos del 300 al 900."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { size: "clamp(64px, 8vw, 100px)", weight: 900, text: "El fútbol evoluciona.", tracking: "-4px", label: "Display / Hero · 900 · −4px" },
            { size: "clamp(36px, 5vw, 64px)",  weight: 900, text: "Encuentra tu talento.",  tracking: "-2px", label: "H1 · 900 · −2px" },
            { size: "clamp(24px, 3vw, 40px)",  weight: 700, text: "Gestiona. Analiza.",     tracking: "-1px", label: "H2 · 700 · −1px" },
            { size: "22px",                    weight: 600, text: "Construye tu equipo.",  tracking: "-0.5px", label: "H3 · 600" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "36px 0",
                borderBottom: `1px solid ${G.surfaceBorder}`,
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "10px", color: G.grayDark, fontWeight: 600, letterSpacing: "0.5px" }}>{item.label}</span>
              <div style={{ fontSize: item.size, fontWeight: item.weight, color: G.white, letterSpacing: item.tracking, lineHeight: 1.05 }}>
                {item.text}
              </div>
            </div>
          ))}

          {/* Body text sizes */}
          {[
            { size: "18px", weight: 300, text: "La comunidad más grande del fútbol amateur en México. Cada partido suma.",          label: "Body Large · 300" },
            { size: "15px", weight: 400, text: "Accede a un directorio verificado de jugadores con métricas reales.",               label: "Body Base · 400" },
            { size: "13px", weight: 400, text: "Disponible en iOS y Android · Gratis · Versión 1.0",                                label: "Caption · 400" },
            { size: "10px", weight: 700, text: "EYEBROW LABEL · UPPERCASE · 700 · 3PX SPACING",                                    label: "Eyebrow · 700" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "28px 0",
                borderBottom: `1px solid ${G.surfaceBorder}`,
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "10px", color: G.grayDark, fontWeight: 600, letterSpacing: "0.5px" }}>{item.label}</span>
              <div style={{ fontSize: item.size, fontWeight: item.weight, color: i === 3 ? G.green : G.gray, letterSpacing: i === 3 ? "3px" : "0px" }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── 03 GRADIENTS ─────────────────────────────────────── */}
        <SectionTitle
          label="03 — Gradientes"
          title="Gradient System"
          sub="Gradientes cinematográficos — siempre oscuros, siempre dirigidos hacia el negro. El verde solo aparece como glow sutil."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "40px" }}>
          {[
            { bg: G.gradHero,       label: "Hero Gradient",      sub: "Fondo principal" },
            { bg: G.gradSurface,    label: "Surface Gradient",   sub: "Cards y paneles" },
            { bg: G.gradOverlay,    label: "Cinematic Overlay",  sub: "Sobre imágenes" },
          ].map((g, i) => (
            <div key={i} style={{ borderRadius: "6px", overflow: "hidden", borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder }}>
              <div style={{ height: "160px", background: g.bg }} />
              <div style={{ padding: "20px", backgroundColor: G.surface }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: G.white, marginBottom: "4px" }}>{g.label}</div>
                <div style={{ fontSize: "11px", color: G.gray }}>{g.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {[
            { bg: G.gradGlowHero, label: "Green Glow — Hero",      sub: "Atmósfera hero section" },
            { bg: G.gradGlowCTA,  label: "Green Glow — CTA",       sub: "Final CTA section" },
            { bg: G.gradGreenBtn, label: "Green Button Gradient",   sub: "CTAs primarios" },
          ].map((g, i) => (
            <div key={i} style={{ borderRadius: "6px", overflow: "hidden", borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder }}>
              <div
                style={{
                  height: "160px",
                  background: i < 2 ? G.bg : "transparent",
                  backgroundColor: i < 2 ? undefined : G.surface,
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: g.bg }} />
              </div>
              <div style={{ padding: "20px", backgroundColor: G.surface }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: G.white, marginBottom: "4px" }}>{g.label}</div>
                <div style={{ fontSize: "11px", color: G.gray }}>{g.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── 04 BUTTONS ───────────────────────────────────────── */}
        <SectionTitle
          label="04 — Botones"
          title="Button Styles"
          sub="Tres variantes. El verde se reserva exclusivamente para acciones primarias de alta importancia."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* Primary */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: G.white, marginBottom: "6px" }}>Primary</div>
              <div style={{ fontSize: "11px", color: G.gray }}>CTA principal · Green gradient · Glow shadow</div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <button
                style={{
                  padding: "16px 48px",
                  background: G.gradGreenBtn,
                  color: "#050505",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  boxShadow: G.shadowGreen,
                  fontFamily: G.font,
                }}
              >
                COMENZAR AHORA
              </button>
              <button
                style={{
                  padding: "12px 32px",
                  background: G.gradGreenBtn,
                  color: "#050505",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  boxShadow: G.shadowGreenSm,
                  fontFamily: G.font,
                }}
              >
                COMENZAR
              </button>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: G.surfaceBorder }} />

          {/* Secondary */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: G.white, marginBottom: "6px" }}>Secondary</div>
              <div style={{ fontSize: "11px", color: G.gray }}>Acción secundaria · Ghost · Green border</div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <button
                style={{
                  padding: "16px 48px",
                  backgroundColor: "transparent",
                  color: G.green,
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: G.greenBorder,
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: G.font,
                }}
              >
                VER MÁS
              </button>
              <button
                style={{
                  padding: "16px 48px",
                  backgroundColor: "transparent",
                  color: G.gray,
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: G.surfaceBorder,
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: G.font,
                }}
              >
                VER DEMO
              </button>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: G.surfaceBorder }} />

          {/* Nav / Small */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: G.white, marginBottom: "6px" }}>Nav / Tag</div>
              <div style={{ fontSize: "11px", color: G.gray }}>Navbar · Tags · Filtros · Chips</div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <button style={{ padding: "9px 22px", background: G.gradGreenBtn, color: "#050505", fontSize: "12px", fontWeight: 700, border: "none", borderRadius: "4px", cursor: "pointer", letterSpacing: "0.8px", fontFamily: G.font }}>
                COMENZAR
              </button>
              {["Posición", "Edad", "Nivel"].map((chip) => (
                <div
                  key={chip}
                  style={{ padding: "6px 14px", backgroundColor: G.surface, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "3px", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
                >
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: G.green }} />
                  <span style={{ fontSize: "10px", color: G.gray, fontWeight: 600, letterSpacing: "0.5px" }}>{chip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 05 CARDS ─────────────────────────────────────────── */}
        <SectionTitle
          label="05 — Cards"
          title="Card Styles"
          sub="Tres tipos de card. Superficie graphite con bordes finos. El verde aparece solo en momentos de énfasis."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: G.surfaceBorder }}>
          {/* Feature card */}
          <div style={{ background: G.gradSurface, padding: "48px 36px", display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: G.green }} />
            <div style={{ width: "44px", height: "44px", backgroundColor: G.surfaceHigh, borderWidth: "1px", borderStyle: "solid", borderColor: G.greenBorder, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: G.green }}>
              ⬡
            </div>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark, textTransform: "uppercase" as const }}>FEATURE CARD</div>
            <div style={{ width: "24px", height: "1px", backgroundColor: G.green, opacity: 0.4 }} />
            <p style={{ fontSize: "14px", fontWeight: 300, color: G.gray, lineHeight: "1.7", margin: 0 }}>
              Convocatorias deportivas para clubes y academias. Encuentra el mejor talento.
            </p>
            <div style={{ fontSize: "14px", color: G.green, marginTop: "auto" }}>→</div>
          </div>

          {/* Stat card */}
          <div style={{ background: G.gradSurface, padding: "60px 48px", display: "flex", flexDirection: "column", gap: "16px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "160px", height: "160px", background: "radial-gradient(circle, rgba(23,201,100,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ fontSize: "72px", fontWeight: 900, color: G.white, letterSpacing: "-4px", lineHeight: 1 }}>+10K</div>
            <div style={{ fontSize: "16px", fontWeight: 600, color: G.whiteAlt }}>Jugadores activos</div>
            <div style={{ width: "32px", height: "2px", backgroundColor: G.green }} />
            <p style={{ fontSize: "13px", color: G.grayDark, margin: 0 }}>y creciendo cada semana</p>
          </div>

          {/* Player card */}
          <div style={{ background: G.gradSurface, padding: "28px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: G.surfaceHigh, borderWidth: "1px", borderStyle: "dashed", borderColor: G.surfaceBorder, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "8px", color: G.grayDark, fontWeight: 600, letterSpacing: "0.5px" }}>FOTO</span>
              </div>
              <div style={{ fontSize: "24px", fontWeight: 900, color: G.white, letterSpacing: "-1px" }}>87</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <div style={{ width: "80%", height: "8px", backgroundColor: G.surfaceHigh, borderRadius: "3px" }} />
              <div style={{ width: "55%", height: "6px", backgroundColor: G.surfaceBorder, borderRadius: "3px" }} />
            </div>
            <div style={{ display: "inline-flex", padding: "4px 10px", backgroundColor: G.surfaceHigh, borderWidth: "1px", borderStyle: "solid", borderColor: G.greenBorder, borderRadius: "3px", alignSelf: "flex-start" as const }}>
              <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: G.green }}>DEL</span>
            </div>
            {[["VEL", 88], ["TÉC", 72], ["FÍS", 91]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "8px", fontWeight: 700, color: G.grayDark, letterSpacing: "1px", width: "24px" }}>{l}</span>
                <div style={{ flex: 1, height: "2px", backgroundColor: G.surfaceBorder, borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${v}%`, background: `linear-gradient(90deg, ${G.greenDim}, ${G.green})`, borderRadius: "2px" }} />
                </div>
                <span style={{ fontSize: "8px", color: G.gray, fontWeight: 600, width: "20px", textAlign: "right" as const }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 06 NAVBAR ────────────────────────────────────────── */}
        <SectionTitle
          label="06 — Navbar"
          title="Navigation Bar"
          sub="Glassmorphism oscuro con blur de 20px. Logo con acento verde. Botón CTA primario verde."
        />

        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: G.surfaceBorder,
          }}
        >
          {/* Mock navbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 48px",
              height: "72px",
              backgroundColor: "rgba(5, 5, 5, 0.88)",
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${G.surfaceBorder}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "34px", height: "34px", backgroundColor: G.green, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: G.shadowGreenSm }}>
                <span style={{ fontSize: "15px", fontWeight: 900, color: "#050505" }}>G</span>
              </div>
              <span style={{ fontSize: "17px", fontWeight: 800, color: G.white, letterSpacing: "-0.3px" }}>GOLIFY</span>
            </div>
            <div style={{ display: "flex", gap: "48px" }}>
              {["Inicio", "Experiencia", "Comunidad", "Descargar"].map((link, i) => (
                <span key={link} style={{ fontSize: "13px", fontWeight: 500, color: i === 0 ? G.white : G.gray, letterSpacing: "0.3px" }}>
                  {link}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: G.gray }}>Iniciar sesión</span>
              <div style={{ padding: "9px 22px", background: G.gradGreenBtn, borderRadius: "4px", boxShadow: G.shadowGreenSm }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#050505", letterSpacing: "0.8px" }}>COMENZAR</span>
              </div>
            </div>
          </div>
          {/* Under navbar — note */}
          <div style={{ padding: "16px 48px", backgroundColor: G.surface }}>
            <span style={{ fontSize: "10px", color: G.grayDark, letterSpacing: "1px", fontWeight: 600 }}>
              NAVBAR · Dark glass · backdrop-filter: blur(20px) · rgba(5,5,5,0.88) · border: 1px solid {G.surfaceBorder}
            </span>
          </div>
        </div>

        <Divider />

        {/* ── 07 GLOW EFFECTS ──────────────────────────────────── */}
        <SectionTitle
          label="07 — Efectos de Glow"
          title="Glow & Accent Effects"
          sub="El verde como energía latente — visible solo donde importa. Nunca decorativo, siempre funcional."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {/* Button glow */}
          <div style={{ background: G.gradSurface, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "6px", padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark }}>BUTTON GLOW</div>
            <button style={{ padding: "16px 48px", background: G.gradGreenBtn, color: "#050505", fontSize: "13px", fontWeight: 700, border: "none", borderRadius: "4px", cursor: "pointer", boxShadow: G.shadowGreen, fontFamily: G.font, letterSpacing: "1px" }}>
              COMENZAR AHORA
            </button>
            <div style={{ fontSize: "10px", color: G.grayDark, textAlign: "center" as const, letterSpacing: "0.5px" }}>
              box-shadow: 0 0 32px rgba(23, 201, 100, 0.25)
            </div>
          </div>

          {/* Atmospheric glow */}
          <div
            style={{
              background: G.bg,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
              borderRadius: "6px",
              padding: "60px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: G.gradGlowHero }} />
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark, position: "relative", zIndex: 1 }}>ATMOSPHERIC GLOW</div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const }}>
              <div style={{ fontSize: "48px", fontWeight: 900, color: G.white, letterSpacing: "-3px", lineHeight: 1 }}>El fútbol</div>
              <div style={{ fontSize: "48px", fontWeight: 900, color: "transparent", WebkitTextStroke: `2px ${G.green}`, letterSpacing: "-3px", lineHeight: 1 }}>evoluciona.</div>
            </div>
            <div style={{ fontSize: "10px", color: G.grayDark, textAlign: "center" as const, letterSpacing: "0.5px", position: "relative", zIndex: 1 }}>
              radial-gradient green glow background
            </div>
          </div>

          {/* Outline text effect */}
          <div style={{ background: G.bg, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "6px", padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark }}>TEXT STROKE</div>
            <div style={{ textAlign: "center" as const }}>
              <div style={{ fontSize: "52px", fontWeight: 900, color: G.white, letterSpacing: "-3px", lineHeight: 1 }}>No solo</div>
              <div style={{ fontSize: "52px", fontWeight: 900, color: "transparent", WebkitTextStroke: `2px ${G.green}`, letterSpacing: "-3px", lineHeight: 1 }}>juegas.</div>
            </div>
            <div style={{ fontSize: "10px", color: G.grayDark, textAlign: "center" as const, letterSpacing: "0.5px" }}>
              color: transparent · WebkitTextStroke: 2px #17C964
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 08 BACKGROUNDS ───────────────────────────────────── */}
        <SectionTitle
          label="08 — Fondos"
          title="Background Examples"
          sub="Tres contextos de fondo. Oscuro siempre dominante. Verde solo como atmósfera, nunca como relleno."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" }}>
          {/* Hero bg */}
          <div
            style={{
              height: "320px",
              backgroundColor: G.bg,
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
            }}
          >
            <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${G.surfaceLine} 1px, transparent 1px), linear-gradient(90deg, ${G.surfaceLine} 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.4 }} />
            <div style={{ position: "absolute", inset: 0, background: G.gradGlowHero }} />
            <div style={{ position: "absolute", bottom: "40px", left: "40px" }}>
              <div style={{ fontSize: "10px", color: G.green, fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>HERO BG</div>
              <div style={{ fontSize: "40px", fontWeight: 900, color: G.white, letterSpacing: "-2px", lineHeight: 1 }}>El fútbol</div>
              <div style={{ fontSize: "40px", fontWeight: 900, color: "transparent", WebkitTextStroke: `2px ${G.green}`, letterSpacing: "-2px", lineHeight: 1 }}>evoluciona.</div>
            </div>
          </div>

          {/* Section bg */}
          <div
            style={{
              height: "320px",
              background: G.gradSurface,
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
            }}
          >
            <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px" }}>
              <div style={{ fontSize: "10px", color: G.green, fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>SURFACE / CARD BG</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {[1, 2].map((n) => (
                  <div key={n} style={{ backgroundColor: G.surfaceHigh, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "4px", padding: "16px" }}>
                    <div style={{ width: "100%", height: "8px", backgroundColor: G.surfaceBorder, borderRadius: "3px", marginBottom: "8px" }} />
                    <div style={{ width: "60%", height: "6px", backgroundColor: G.surfaceLine, borderRadius: "3px" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA bg full width */}
        <div
          style={{
            height: "240px",
            backgroundColor: G.bg,
            borderRadius: "6px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: G.surfaceBorder,
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${G.surfaceLine} 1px, transparent 1px), linear-gradient(90deg, ${G.surfaceLine} 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, background: G.gradGlowCTA }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const }}>
            <div style={{ fontSize: "10px", color: G.green, fontWeight: 700, letterSpacing: "3px", marginBottom: "20px" }}>CTA SECTION BG · Green glow + grid overlay</div>
            <div style={{ fontSize: "48px", fontWeight: 900, color: G.white, letterSpacing: "-2.5px", lineHeight: 1, marginBottom: "24px" }}>Tu partido <span style={{ color: G.green }}>te espera.</span></div>
            <button style={{ padding: "16px 48px", background: G.gradGreenBtn, color: "#050505", fontSize: "13px", fontWeight: 700, border: "none", borderRadius: "4px", cursor: "pointer", boxShadow: G.shadowGreen, fontFamily: G.font, letterSpacing: "1px" }}>
              DESCARGAR GOLIFY
            </button>
          </div>
        </div>

        <Divider />

        {/* ── 09 UI EXAMPLES ───────────────────────────────────── */}
        <SectionTitle
          label="09 — UI Components"
          title="Minimal UI Examples"
          sub="Inputs, tags, badges y form elements. Líneas finas, máximo contraste, minimal ruido visual."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {/* Inputs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark }}>INPUTS</span>
            {/* Search input */}
            <div style={{ display: "flex", borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ flex: 1, padding: "14px 20px", backgroundColor: G.surface, display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "14px", height: "14px", borderWidth: "1px", borderStyle: "solid", borderColor: G.grayDark, borderRadius: "50%" }} />
                <span style={{ fontSize: "13px", color: G.grayDark }}>Buscar jugadores…</span>
              </div>
              <div style={{ padding: "14px 24px", backgroundColor: G.green, display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#050505", letterSpacing: "1.5px" }}>FILTRAR</span>
              </div>
            </div>
            {/* Text input */}
            <div style={{ padding: "14px 20px", backgroundColor: G.surface, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "4px" }}>
              <span style={{ fontSize: "13px", color: G.grayDark }}>Nombre del jugador</span>
            </div>
            {/* Input with label */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "10px", fontWeight: 700, color: G.green, letterSpacing: "2px" }}>POSICIÓN</label>
              <div style={{ padding: "14px 20px", backgroundColor: G.surface, borderWidth: "1px", borderStyle: "solid", borderColor: G.greenBorder, borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: G.white }}>Delantero</span>
                <span style={{ fontSize: "10px", color: G.green }}>▾</span>
              </div>
            </div>
          </div>

          {/* Tags & Badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: G.grayDark }}>TAGS & BADGES</span>

            {/* Filter chips */}
            <div>
              <div style={{ fontSize: "10px", color: G.grayDark, marginBottom: "10px", letterSpacing: "1px" }}>Filter chips</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Todos", "Posición", "Edad", "Nivel", "Ciudad"].map((chip, i) => (
                  <div
                    key={chip}
                    style={{
                      padding: "6px 14px",
                      backgroundColor: i === 0 ? G.green : G.surface,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: i === 0 ? G.green : G.surfaceBorder,
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {i !== 0 && <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: G.green }} />}
                    <span style={{ fontSize: "10px", color: i === 0 ? "#050505" : G.gray, fontWeight: 700, letterSpacing: "0.5px" }}>{chip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status badges */}
            <div>
              <div style={{ fontSize: "10px", color: G.grayDark, marginBottom: "10px", letterSpacing: "1px" }}>Status badges</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <div style={{ padding: "5px 12px", backgroundColor: G.greenMuted, borderWidth: "1px", borderStyle: "solid", borderColor: G.greenBorder, borderRadius: "3px" }}>
                  <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: G.green }}>DISPONIBLE</span>
                </div>
                <div style={{ padding: "5px 12px", backgroundColor: G.surfaceHigh, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "3px" }}>
                  <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: G.grayDark }}>PARCIAL</span>
                </div>
                <div style={{ padding: "5px 12px", backgroundColor: G.surface, borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "3px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: G.green, boxShadow: G.shadowGreenSm }} />
                  <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1px", color: G.gray }}>EN VIVO</span>
                </div>
              </div>
            </div>

            {/* Position tags */}
            <div>
              <div style={{ fontSize: "10px", color: G.grayDark, marginBottom: "10px", letterSpacing: "1px" }}>Position tags</div>
              <div style={{ display: "flex", gap: "6px" }}>
                {["DEL", "MC", "LAT", "DFC", "POR"].map((pos) => (
                  <div key={pos} style={{ padding: "5px 10px", backgroundColor: G.surfaceHigh, borderWidth: "1px", borderStyle: "solid", borderColor: G.greenBorder, borderRadius: "3px" }}>
                    <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: G.green }}>{pos}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 10 QUICK REFERENCE ───────────────────────────────── */}
        <SectionTitle
          label="10 — Referencia Rápida"
          title="Design Principles"
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", backgroundColor: G.surfaceBorder, marginBottom: "120px" }}>
          {[
            { icon: "◼", title: "Dark First", desc: "Backgrounds siempre en #050505 o #0E1116. Nunca blancos, nunca claros." },
            { icon: "◉", title: "Green Sparingly", desc: "Verde solo en CTAs, métricas activas y momentos de alto impacto narrativo." },
            { icon: "▲", title: "Large Space", desc: "Padding generoso. 140-160px por sección. El vacío comunica premium." },
            { icon: "⬡", title: "Editorial Type", desc: "Tipografía masiva en hero. Letras grandes, tracking negativo. Pesos extremos." },
          ].map((p, i) => (
            <div key={i} style={{ background: G.gradSurface, padding: "48px 36px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "24px", color: G.green }}>{p.icon}</div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: G.white, letterSpacing: "-0.3px" }}>{p.title}</div>
              <p style={{ fontSize: "13px", fontWeight: 300, color: G.gray, lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
