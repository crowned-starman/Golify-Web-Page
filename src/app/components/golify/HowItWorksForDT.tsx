/* ─────────────────────────────────────────────────────────────────
   HowItWorksForDT — Golify
   Subsección "Cómo funciona" para Directores Técnicos
   Dos flujos: Búsqueda de Jugadores · Búsqueda de Staff Técnico
───────────────────────────────────────────────────────────────── */
import { G } from "./tokens";

// ── Data ──────────────────────────────────────────────────────────

const playerSteps = [
  { number: "01", tag: "BÚSQUEDA",  title: "Busca talento",         desc: "Accede al directorio de jugadores verificados. Filtra por posición, edad, nivel y ubicación en tiempo real." },
  { number: "02", tag: "ANÁLISIS",  title: "Analiza estadísticas",  desc: "Revisa métricas individuales: rendimiento por partido, físico, técnica, goles, asistencias y más." },
  { number: "03", tag: "SELECCIÓN", title: "Selecciona jugadores",  desc: "Agrega jugadores a tu lista de seguimiento. Contacta directamente desde la plataforma." },
  { number: "04", tag: "EQUIPO",    title: "Construye tu equipo",   desc: "Arma tu alineación ideal con el constructor visual. Define formación, roles y estructura táctica." },
];

const staffSteps = [
  { number: "01", tag: "BÚSQUEDA",   title: "Encuentra especialistas",        desc: "Explora perfiles de entrenadores auxiliares, preparadores físicos, fisioterapeutas y analistas." },
  { number: "02", tag: "EVALUACIÓN", title: "Evalúa experiencia",             desc: "Revisa historial profesional, certificaciones, especialidades y referencias de equipos anteriores." },
  { number: "03", tag: "CONTACTO",   title: "Contacta staff",                 desc: "Comunícate directamente. Agenda entrevistas o propuestas de colaboración desde la app." },
  { number: "04", tag: "ESTRUCTURA", title: "Construye tu cuerpo técnico",    desc: "Consolida tu estructura profesional completa. Gestiona roles, disponibilidad y agenda del staff." },
];

const mockPlayers = [
  { pos: "DEL", rating: "87", metrics: [88, 72, 91, 65] },
  { pos: "MC",  rating: "84", metrics: [70, 90, 75, 88] },
  { pos: "LAT", rating: "81", metrics: [85, 68, 82, 79] },
  { pos: "DFC", rating: "83", metrics: [60, 74, 95, 80] },
  { pos: "MO",  rating: "86", metrics: [92, 80, 70, 85] },
];

const metricLabels = ["VEL", "TÉC", "FÍS", "TAC"];

const staffRoles = [
  { role: "PREPARADOR FÍSICO",   exp: "8 años",  tags: ["Alto rendimiento", "Prevención"],     avail: "DISPONIBLE" },
  { role: "ANALISTA TÁCTICO",    exp: "5 años",  tags: ["Video análisis", "Data"],              avail: "DISPONIBLE" },
  { role: "FISIOTERAPEUTA",      exp: "10 años", tags: ["Recuperación", "Biomecánica"],         avail: "PARCIAL"    },
  { role: "ENTRENADOR AUXILIAR", exp: "6 años",  tags: ["Porteros", "Defensas"],                avail: "DISPONIBLE" },
  { role: "FOTÓGRAFO DEPORTIVO", exp: "4 años",  tags: ["Prensa", "Redes sociales"],            avail: "DISPONIBLE" },
  { role: "ÁRBITRO",             exp: "7 años",  tags: ["Torneos regionales", "Certificado"],   avail: "PARCIAL"    },
];

// ── Sub-components ────────────────────────────────────────────────

function StepRow({ step, index, total }: { step: typeof playerSteps[0]; index: number; total: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr 1.2fr",
        gap: "60px",
        alignItems: "center",
        padding: "52px 0",
        borderTop: `1px solid ${G.surfaceBorder}`,
        borderBottom: index === total - 1 ? `1px solid ${G.surfaceBorder}` : "none",
      }}
    >
      <div
        style={{
          fontSize: "60px",
          fontWeight: 900,
          color: G.surfaceHigh,
          letterSpacing: "-3px",
          lineHeight: 1,
          WebkitTextStroke: `1px ${G.surfaceBorder}`,
        }}
      >
        {step.number}
      </div>
      <div>
        <div
          style={{
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            color: G.green,
            marginBottom: "14px",
            textTransform: "uppercase" as const,
          }}
        >
          {step.tag}
        </div>
        <h3
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: G.white,
            letterSpacing: "-0.5px",
            margin: 0,
            lineHeight: "1.2",
          }}
        >
          {step.title}
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <p style={{ fontSize: "15px", fontWeight: 300, color: G.gray, lineHeight: "1.7", margin: 0 }}>
          {step.desc}
        </p>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: G.surfaceBorder,
            borderRadius: "2px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${25 * (index + 1)}%`,
              background: G.gradGreenBtn,
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function PlayerCard({ p, i: _i }: { p: typeof mockPlayers[0]; i: number }) {
  return (
    <div
      style={{
        background: G.gradSurface,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: G.surfaceBorder,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Avatar + rating */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: G.surfaceHigh,
            borderWidth: "1px",
            borderStyle: "dashed",
            borderColor: G.surfaceBorder,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "8px", color: G.grayDark, letterSpacing: "1px", fontWeight: 600 }}>FOTO</span>
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 900,
            color: G.white,
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          {p.rating}
        </div>
      </div>

      {/* Name placeholder */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <div style={{ width: "80%", height: "8px", backgroundColor: G.surfaceHigh, borderRadius: "3px" }} />
        <div style={{ width: "55%", height: "6px", backgroundColor: G.surfaceBorder, borderRadius: "3px" }} />
      </div>

      {/* Position tag */}
      <div
        style={{
          display: "inline-flex",
          padding: "4px 10px",
          backgroundColor: G.surfaceHigh,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: G.greenBorder,
          borderRadius: "3px",
          alignSelf: "flex-start",
        }}
      >
        <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: G.green }}>
          {p.pos}
        </span>
      </div>

      {/* Metrics */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {metricLabels.map((label, j) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "8px", fontWeight: 700, color: G.grayDark, letterSpacing: "1px", width: "24px", flexShrink: 0 }}>
              {label}
            </span>
            <div style={{ flex: 1, height: "2px", backgroundColor: G.surfaceBorder, borderRadius: "2px", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${p.metrics[j]}%`,
                  background: `linear-gradient(90deg, ${G.greenDim}, ${G.green})`,
                  borderRadius: "2px",
                }}
              />
            </div>
            <span style={{ fontSize: "8px", color: G.gray, fontWeight: 600, width: "20px", textAlign: "right" as const }}>
              {p.metrics[j]}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "4px",
          padding: "8px 0",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: G.greenBorder,
          borderRadius: "3px",
          textAlign: "center" as const,
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", color: G.green }}>
          VER PERFIL →
        </span>
      </div>
    </div>
  );
}

function StaffCard({ s }: { s: typeof staffRoles[0] }) {
  const isAvail = s.avail === "DISPONIBLE";
  return (
    <div
      style={{
        background: G.gradSurface,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: G.surfaceBorder,
        padding: "36px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Avatar + availability */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            backgroundColor: G.surfaceHigh,
            borderWidth: "1px",
            borderStyle: "dashed",
            borderColor: G.surfaceBorder,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "8px", color: G.grayDark, letterSpacing: "1px", fontWeight: 600 }}>FOTO</span>
        </div>
        <div
          style={{
            padding: "4px 10px",
            backgroundColor: isAvail ? G.greenMuted : G.surfaceHigh,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: isAvail ? G.greenBorder : G.surfaceBorder,
            borderRadius: "3px",
          }}
        >
          <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "1.5px", color: isAvail ? G.green : G.grayDark }}>
            {s.avail}
          </span>
        </div>
      </div>

      {/* Role */}
      <div>
        <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: G.green, marginBottom: "8px" }}>
          {s.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div style={{ width: "75%", height: "8px", backgroundColor: G.surfaceHigh, borderRadius: "3px" }} />
          <div style={{ width: "50%", height: "6px", backgroundColor: G.surfaceBorder, borderRadius: "3px" }} />
        </div>
      </div>

      {/* Experience */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "16px", height: "1px", backgroundColor: G.green, opacity: 0.4 }} />
        <span style={{ fontSize: "11px", fontWeight: 400, color: G.gray, letterSpacing: "0.5px" }}>
          {s.exp} de experiencia
        </span>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {s.tags.map((tag) => (
          <div
            key={tag}
            style={{
              padding: "4px 10px",
              backgroundColor: G.surfaceHigh,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
              borderRadius: "3px",
            }}
          >
            <span style={{ fontSize: "9px", fontWeight: 600, color: G.grayDark, letterSpacing: "1px" }}>
              {tag}
            </span>
          </div>
        ))}
      </div>

      <div style={{ width: "100%", height: "1px", backgroundColor: G.surfaceBorder }} />

      {/* Contact CTA */}
      <div
        style={{
          padding: "10px 0",
          backgroundColor: G.greenMuted,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: G.greenBorder,
          borderRadius: "3px",
          textAlign: "center" as const,
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", color: G.green }}>
          CONTACTAR →
        </span>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────

export function HowItWorksForDT() {
  return (
    <>
      {/* ══ BLOCK A — DT intro ══ */}
      <section
        style={{
          width: "100%",
          backgroundColor: G.bg,
          padding: "120px 80px 0",
          fontFamily: G.font,
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

          {/* Role toggle — segment control */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "80px" }}>
            <div
              style={{
                padding: "11px 28px",
                backgroundColor: G.surface,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: G.surfaceBorder,
                borderRightWidth: "0px",
                borderRadius: "4px 0 0 4px",
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: G.grayDark, textTransform: "uppercase" as const }}>
                Para Jugadores ✓
              </span>
            </div>
            <div
              style={{
                padding: "11px 28px",
                backgroundColor: G.green,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: G.green,
                borderRadius: "0 4px 4px 0",
                boxShadow: G.shadowGreenSm,
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#050505", textTransform: "uppercase" as const }}>
                Para DTs / Organizadores →
              </span>
            </div>
          </div>

          {/* Hero headline */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
              alignItems: "end",
              paddingBottom: "100px",
              borderBottom: `1px solid ${G.surfaceBorder}`,
            }}
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <div style={{ width: "20px", height: "1px", backgroundColor: G.green }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", color: G.green, textTransform: "uppercase" as const }}>
                  03 — EXPERIENCIA PARA DIRECTORES TÉCNICOS
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(36px, 4vw, 60px)",
                  fontWeight: 900,
                  color: G.white,
                  letterSpacing: "-2px",
                  margin: 0,
                  lineHeight: "1.0",
                }}
              >
                Gestiona.
                <br />
                Analiza.
                <br />
                <span style={{ color: G.grayDark }}>Construye.</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <p style={{ fontSize: "15px", fontWeight: 300, color: G.gray, lineHeight: "1.7", margin: 0 }}>
                Golify te da el poder de un sistema de scouting profesional al alcance de cualquier DT.
                Encuentra talento, forma tu staff y gestiona tu estructura con herramientas diseñadas para el fútbol moderno.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Scouting de jugadores", "Staff técnico", "Alineaciones", "Estadísticas", "Contacto directo", "Formaciones"].map((pill) => (
                  <div
                    key={pill}
                    style={{
                      padding: "6px 14px",
                      backgroundColor: G.surface,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: G.surfaceBorder,
                      borderRadius: "3px",
                    }}
                  >
                    <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.5px", color: G.gray }}>
                      {pill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLOCK B — Búsqueda de Jugadores ══ */}
      <section
        style={{
          width: "100%",
          backgroundColor: G.bg,
          padding: "120px 80px",
          fontFamily: G.font,
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

          {/* Sub-section header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginBottom: "80px", alignItems: "end" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "20px", height: "1px", backgroundColor: G.green }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", color: G.green, textTransform: "uppercase" as const }}>
                  FLUJO 01 — BÚSQUEDA DE JUGADORES
                </span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(30px, 3.5vw, 50px)",
                  fontWeight: 900,
                  color: G.white,
                  letterSpacing: "-2px",
                  margin: 0,
                  lineHeight: "1.05",
                }}
              >
                Encuentra
                <br />
                el talento
                <br />
                <span style={{ color: G.grayDark }}>que necesitas.</span>
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <p style={{ fontSize: "15px", fontWeight: 300, color: G.gray, lineHeight: "1.7", margin: 0 }}>
                Accede a un directorio verificado de jugadores con métricas reales.
                Filtra, analiza y contacta directamente desde la plataforma.
              </p>
              {/* Search bar placeholder */}
              <div
                style={{
                  display: "flex",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: G.surfaceBorder,
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "14px 20px",
                    backgroundColor: G.surface,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ width: "14px", height: "14px", borderWidth: "1px", borderStyle: "solid", borderColor: G.grayDark, borderRadius: "50%" }} />
                  <span style={{ fontSize: "12px", color: G.grayDark, letterSpacing: "0.5px" }}>Buscar jugadores…</span>
                </div>
                <div
                  style={{
                    padding: "14px 24px",
                    backgroundColor: G.green,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#050505", letterSpacing: "1.5px" }}>FILTRAR</span>
                </div>
              </div>
              {/* Filter chips */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {["Posición", "Edad", "Nivel", "Ciudad", "Disponibilidad"].map((f) => (
                  <div
                    key={f}
                    style={{
                      padding: "5px 12px",
                      backgroundColor: G.surface,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: G.surfaceBorder,
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: G.green }} />
                    <span style={{ fontSize: "9px", color: G.gray, fontWeight: 600, letterSpacing: "1px" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Player cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1px", backgroundColor: G.surfaceBorder, marginBottom: "80px" }}>
            {mockPlayers.map((p, i) => <PlayerCard key={i} p={p} i={i} />)}
          </div>

          {/* Formation dashboard */}
          <div
            style={{
              width: "100%",
              background: G.gradSurface,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
              borderRadius: "6px",
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: "40px",
              marginBottom: "100px",
            }}
          >
            {/* Watchlist sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: G.green, marginBottom: "8px" }}>
                LISTA DE SEGUIMIENTO
              </div>
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 14px",
                    backgroundColor: n === 1 ? G.surfaceHigh : "transparent",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: n === 1 ? G.greenBorder : G.surfaceBorder,
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: G.surfaceHigh,
                      borderWidth: "1px",
                      borderStyle: "dashed",
                      borderColor: G.surfaceBorder,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ width: "80%", height: "7px", backgroundColor: G.surfaceBorder, borderRadius: "3px", marginBottom: "4px" }} />
                    <div style={{ width: "50%", height: "5px", backgroundColor: G.surfaceHigh, borderRadius: "3px" }} />
                  </div>
                  <span style={{ fontSize: "10px", color: G.green, fontWeight: 700 }}>→</span>
                </div>
              ))}
            </div>

            {/* Formation builder */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: G.green }}>
                  CONSTRUCTOR DE ALINEACIÓN
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["4-3-3", "4-4-2", "3-5-2"].map((f, i) => (
                    <div
                      key={f}
                      style={{
                        padding: "4px 12px",
                        backgroundColor: i === 0 ? G.greenMuted : "transparent",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: i === 0 ? G.greenBorder : G.surfaceBorder,
                        borderRadius: "3px",
                      }}
                    >
                      <span style={{ fontSize: "9px", color: i === 0 ? G.green : G.grayDark, fontWeight: 600 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Football pitch */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/7",
                  backgroundColor: G.bgAlt,
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  borderColor: G.surfaceBorder,
                  borderRadius: "4px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Pitch lines */}
                <div style={{ position: "absolute", inset: "16px", borderWidth: "1px", borderStyle: "solid", borderColor: G.surfaceBorder, borderRadius: "2px" }} />
                <div style={{ position: "absolute", top: "16px", bottom: "16px", left: "50%", width: "1px", backgroundColor: G.surfaceBorder }} />
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: G.surfaceBorder,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                {/* Player dots — 4-3-3 */}
                {[
                  { x: "6%",  y: "50%" },
                  { x: "24%", y: "18%" }, { x: "24%", y: "38%" }, { x: "24%", y: "62%" }, { x: "24%", y: "82%" },
                  { x: "52%", y: "25%" }, { x: "52%", y: "50%" }, { x: "52%", y: "75%" },
                  { x: "78%", y: "20%" }, { x: "78%", y: "50%" }, { x: "78%", y: "80%" },
                ].map((dot, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: dot.x,
                      top: dot.y,
                      transform: "translate(-50%, -50%)",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: G.surfaceHigh,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: G.greenBorder,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: G.green, opacity: 0.7 }} />
                  </div>
                ))}
                <span style={{ position: "absolute", bottom: "8px", right: "12px", fontSize: "8px", color: G.grayDark, letterSpacing: "1px", fontWeight: 600 }}>
                  FORMACIÓN VISUAL
                </span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div>
            {playerSteps.map((step, i) => (
              <StepRow key={step.number} step={step} index={i} total={playerSteps.length} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BLOCK C — Transition banner ══ */}
      <div
        style={{
          width: "100%",
          backgroundColor: G.surface,
          padding: "60px 80px",
          fontFamily: G.font,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          borderTop: `1px solid ${G.surfaceBorder}`,
          borderBottom: `1px solid ${G.surfaceBorder}`,
        }}
      >
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, transparent, ${G.green})`, opacity: 0.3 }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "3px", color: G.green }}>TAMBIÉN PARA EL DT</span>
          <span style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 900, color: G.white, letterSpacing: "-1px" }}>
            Más allá del campo.
          </span>
          <span style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "3px", color: G.grayDark }}>
            CONSTRUYE TU CUERPO TÉCNICO ↓
          </span>
        </div>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(270deg, transparent, ${G.green})`, opacity: 0.3 }} />
      </div>

      {/* ══ BLOCK D — Búsqueda de Staff Técnico ══ */}
      <section
        style={{
          width: "100%",
          backgroundColor: G.bg,
          padding: "120px 80px",
          fontFamily: G.font,
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

          {/* Sub-section header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginBottom: "80px", alignItems: "end" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "20px", height: "1px", backgroundColor: G.green }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", color: G.green, textTransform: "uppercase" as const }}>
                  FLUJO 02 — BÚSQUEDA DE STAFF TÉCNICO
                </span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(30px, 3.5vw, 50px)",
                  fontWeight: 900,
                  color: G.white,
                  letterSpacing: "-2px",
                  margin: 0,
                  lineHeight: "1.05",
                }}
              >
                Tu estructura
                <br />
                técnica,
                <br />
                <span style={{ color: "transparent", WebkitTextStroke: `1px ${G.green}` }}>completa.</span>
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <p style={{ fontSize: "15px", fontWeight: 300, color: G.gray, lineHeight: "1.7", margin: 0 }}>
                Encuentra los profesionales que elevan tu proyecto: preparadores físicos, analistas, fisioterapeutas y más.
                Todos verificados, todos listos para sumar.
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {["Todos", "Entrenadores", "Preparadores", "Fisioterapeutas", "Analistas", "Árbitros", "Fotógrafos"].map((f, i) => (
                  <div
                    key={f}
                    style={{
                      padding: "6px 14px",
                      backgroundColor: i === 0 ? G.green : G.surface,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: i === 0 ? G.green : G.surfaceBorder,
                      borderRadius: "3px",
                    }}
                  >
                    <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1px", color: i === 0 ? "#050505" : G.grayDark }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Staff cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: G.surfaceBorder, marginBottom: "80px" }}>
            {staffRoles.map((s, i) => <StaffCard key={i} s={s} />)}
          </div>

          {/* Stats bar */}
          <div
            style={{
              background: G.gradSurface,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
          >
            {[
              { value: "+200", label: "Especialistas registrados" },
              { value: "6",    label: "Categorías de staff" },
              { value: "100%", label: "Perfiles verificados" },
              { value: "<48h", label: "Tiempo de respuesta promedio" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "0 40px",
                  borderLeft: i === 0 ? "none" : `1px solid ${G.surfaceBorder}`,
                }}
              >
                <div style={{ fontSize: "32px", fontWeight: 900, color: G.white, letterSpacing: "-1.5px", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ width: "24px", height: "2px", backgroundColor: G.green }} />
                <div style={{ fontSize: "11px", fontWeight: 400, color: G.gray, letterSpacing: "0.3px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div style={{ marginTop: "80px" }}>
            {staffSteps.map((step, i) => (
              <StepRow key={step.number} step={step} index={i} total={staffSteps.length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
