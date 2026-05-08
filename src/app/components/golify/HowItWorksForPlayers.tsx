import { G } from "./tokens";

const steps = [
  {
    number: "01",
    title: "Encuentra tu partido",
    desc: "Busca partidos disponibles cerca de tu ubicación en tiempo real. Filtra por categoría, posición y horario.",
    tag: "BÚSQUEDA",
    progress: 30,
  },
  {
    number: "02",
    title: "Juega",
    desc: "Preséntate, juega tu partido y disfruta la experiencia deportiva con tu equipo.",
    tag: "JUEGO",
    progress: 60,
  },
  {
    number: "03",
    title: "Compite y evoluciona",
    desc: "Acumula estadísticas, sube de nivel y participa en torneos para demostrar tu nivel.",
    tag: "COMPETENCIA",
    progress: 90,
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: G.surface,
        padding: "160px 80px",
        fontFamily: G.font,
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            marginBottom: "120px",
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
                02 — CÓMO FUNCIONA PARA LOS JUGADORES
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 64px)",
                fontWeight: 900,
                color: G.white,
                letterSpacing: "-2px",
                margin: 0,
                lineHeight: "1.0",
              }}
            >
              Tres simples pasos.
              <br />
              <span style={{ color: G.grayDark }}>Un partido.</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              color: G.gray,
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Diseñado para que el proceso de encontrar y jugar fútbol sea tan rápido como un sprint hacia el arco.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 1fr",
                gap: "60px",
                alignItems: "center",
                padding: "60px 0",
                borderTop: `1px solid ${G.surfaceBorder}`,
                borderBottom: index === steps.length - 1 ? `1px solid ${G.surfaceBorder}` : "none",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontSize: "64px",
                  fontWeight: 900,
                  color: G.surfaceHigh,
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  WebkitTextStroke: `1px ${G.surfaceBorder}`,
                }}
              >
                {step.number}
              </div>

              {/* Title + tag */}
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
                    fontSize: "28px",
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

              {/* Description + progress bar */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    color: G.gray,
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
                {/* Green progress bar */}
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
                      width: `${step.progress}%`,
                      background: G.gradGreenBtn,
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
