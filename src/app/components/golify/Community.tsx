import { G } from "./tokens";

const stats = [
  { value: "+10K", label: "Jugadores activos", sub: "y creciendo cada semana" },
  { value: "+500", label: "Partidos jugados",  sub: "en el último mes" },
  { value: "+50",  label: "Canchas disponibles", sub: "en tu ciudad" },
];

export function Community() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: G.bg,
        padding: "160px 80px",
        fontFamily: G.font,
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            marginBottom: "100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
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
                05 — COMUNIDAD
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 60px)",
                fontWeight: 900,
                color: G.white,
                letterSpacing: "-2px",
                margin: 0,
                lineHeight: "1.05",
              }}
            >
              La comunidad
              <br />
              habla por sí sola.
            </h2>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              color: G.gray,
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Cada partido, cada gol, cada reserva suma a una comunidad que crece día a día.
          </p>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: G.surfaceBorder,
            marginBottom: "1px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: G.gradSurface,
                padding: "72px 56px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle green glow top-left */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "200px",
                  height: "200px",
                  background: "radial-gradient(circle, rgba(23,201,100,0.05) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Big number */}
              <div
                style={{
                  fontSize: "clamp(64px, 7vw, 96px)",
                  fontWeight: 900,
                  color: G.white,
                  letterSpacing: "-4px",
                  lineHeight: "1.0",
                }}
              >
                {s.value}
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: G.whiteAlt,
                  letterSpacing: "-0.3px",
                }}
              >
                {s.label}
              </div>

              {/* Green divider */}
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  backgroundColor: G.green,
                }}
              />

              {/* Sub */}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: G.grayDark,
                  letterSpacing: "0.3px",
                  margin: 0,
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial placeholder grid */}
        <div
          style={{
            backgroundColor: G.surface,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: G.surfaceBorder,
            padding: "64px 56px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Avatar placeholder */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: G.surfaceHigh,
                    borderWidth: "1px",
                    borderStyle: "dashed",
                    borderColor: G.surfaceBorder,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      width: "100px",
                      height: "9px",
                      backgroundColor: G.surfaceHigh,
                      borderRadius: "3px",
                      marginBottom: "6px",
                    }}
                  />
                  <div
                    style={{
                      width: "64px",
                      height: "7px",
                      backgroundColor: G.surfaceBorder,
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>

              {/* Quote placeholder lines */}
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {[90, 100, 72].map((w, j) => (
                  <div
                    key={j}
                    style={{
                      width: `${w}%`,
                      height: "7px",
                      backgroundColor: G.surfaceHigh,
                      borderRadius: "3px",
                    }}
                  />
                ))}
              </div>

              {/* Star placeholders */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(5)].map((_, k) => (
                  <div
                    key={k}
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: k < 4 ? G.green : G.surfaceBorder,
                      borderRadius: "2px",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
