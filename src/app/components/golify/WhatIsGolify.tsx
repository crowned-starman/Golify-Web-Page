import { G } from "./tokens";

const features = [
  {
    id: 1,
    icon: "⬡",
    label: "CONVOCATORIAS DEPORTIVAS",
    desc: "Encuentra el mejor talento deportivo para clubes y academias.",
  },
  {
    id: 2,
    icon: "◈",
    label: "STAFF TÉCNICO",
    desc: "Reúne el equipo profesional fuera de cancha.",
  },
  {
    id: 3,
    icon: "▲",
    label: "ESTADÍSTICAS",
    desc: "Rastrea tu rendimiento y evolución como jugador.",
  },
  {
    id: 4,
    icon: "◉",
    label: "EVENTOS Y FORMACIÓN",
    desc: "Organiza eventos, torneos y experiencias deportivas.",
  },
];

export function WhatIsGolify() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: G.bg,
        padding: "140px 80px",
        fontFamily: G.font,
        boxSizing: "border-box",
        borderTop: `1px solid ${G.surfaceLine}`,
      }}
    >
      <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            marginBottom: "80px",
            alignItems: "end",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div style={{ width: "20px", height: "1px", backgroundColor: G.green }} />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: G.green,
                  textTransform: "uppercase" as const,
                }}
              >
                01 — QUÉ ES GOLIFY
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 800,
                color: G.white,
                letterSpacing: "-2px",
                margin: 0,
                lineHeight: "1.05",
              }}
            >
              Todo el fútbol,
              <br />
              en un solo lugar.
            </h2>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              color: G.gray,
              lineHeight: "1.8",
              margin: 0,
              maxWidth: "440px",
            }}
          >
            Una plataforma construida para la nueva generación de jugadores, directores técnicos y organizadores. El ecosistema que el fútbol moderno necesitaba.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: G.surfaceBorder,
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.id}
              style={{
                background: G.gradSurface,
                padding: "52px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Green top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: i === 0 ? G.green : "transparent",
                }}
              />

              {/* Icon placeholder */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: G.surfaceHigh,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: G.surfaceBorder,
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: G.green,
                }}
              >
                {f.icon}
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: G.grayDark,
                  textTransform: "uppercase" as const,
                }}
              >
                {f.label}
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: G.green,
                  opacity: 0.4,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: G.gray,
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {f.desc}
              </p>

              {/* Arrow */}
              <div
                style={{
                  fontSize: "14px",
                  color: G.green,
                  marginTop: "auto",
                  letterSpacing: "1px",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tag line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "60px",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: G.surfaceLine }} />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "2px",
              color: G.grayDark,
              textTransform: "uppercase" as const,
              whiteSpace: "nowrap",
            }}
          >
            GOLIFY · PLATAFORMA DEPORTIVA · MÉXICO 2026
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: G.surfaceLine }} />
        </div>
      </div>
    </section>
  );
}
