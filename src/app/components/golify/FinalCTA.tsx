import { G } from "./tokens";

export function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: G.bg,
        padding: "200px 80px",
        fontFamily: G.font,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Green atmospheric glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: G.gradGlowCTA,
          pointerEvents: "none",
        }}
      />

      {/* Grid texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${G.surfaceLine} 1px, transparent 1px),
            linear-gradient(90deg, ${G.surfaceLine} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "860px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
        }}
      >
        {/* Section label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "52px",
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
            ÚNETE A GOLIFY
          </span>
          <div style={{ width: "20px", height: "1px", backgroundColor: G.green }} />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(52px, 7vw, 100px)",
            fontWeight: 900,
            color: G.white,
            letterSpacing: "-4px",
            lineHeight: "1.0",
            margin: "0 0 40px 0",
          }}
        >
          Tu partido
          <br />
          <span style={{ color: G.green }}>te espera.</span>
        </h2>

        {/* Subline */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: 300,
            color: G.gray,
            lineHeight: "1.7",
            margin: "0 0 72px 0",
            maxWidth: "420px",
          }}
        >
          Únete a miles de jugadores que ya viven el fútbol de otra forma.
        </p>

        {/* Main CTA */}
        <div
          style={{
            padding: "20px 80px",
            background: G.gradGreenBtn,
            color: "#050505",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "2px",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "20px",
            boxShadow: G.shadowGreen,
          }}
        >
          DESCARGAR GOLIFY
        </div>

        {/* Secondary CTA */}
        <div
          style={{
            padding: "16px 60px",
            backgroundColor: "transparent",
            color: G.gray,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1.5px",
            borderRadius: "4px",
            cursor: "pointer",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: G.surfaceBorder,
            marginBottom: "28px",
          }}
        >
          VER DEMO
        </div>

        {/* Secondary text */}
        <p
          style={{
            fontSize: "11px",
            color: G.grayDark,
            letterSpacing: "1px",
            margin: 0,
          }}
        >
          Disponible en iOS y Android · Gratis
        </p>

        {/* Decorative green line drop */}
        <div
          style={{
            width: "1px",
            height: "80px",
            background: `linear-gradient(180deg, ${G.green} 0%, transparent 100%)`,
            marginTop: "100px",
            opacity: 0.4,
          }}
        />
      </div>
    </section>
  );
}
