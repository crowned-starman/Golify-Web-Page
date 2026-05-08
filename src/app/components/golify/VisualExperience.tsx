import { G } from "./tokens";

export function VisualExperience() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "640px",
        backgroundColor: G.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: G.font,
        overflow: "hidden",
      }}
    >
      {/* Full-screen placeholder — video/image area */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: G.bgAlt,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "40px",
            borderWidth: "1px",
            borderStyle: "dashed",
            borderColor: G.surfaceBorder,
            borderRadius: "4px",
          }}
        />
        <span
          style={{
            fontSize: "11px",
            color: G.grayDark,
            letterSpacing: "2px",
            fontWeight: 600,
            position: "relative",
            zIndex: 1,
          }}
        >
          [ IMAGEN / VIDEO CAMPAÑA DEPORTIVA ]
        </span>
        <span
          style={{
            fontSize: "10px",
            color: G.surfaceBorder,
            letterSpacing: "1px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Fullscreen visual — 1440 × 900 px
        </span>
      </div>

      {/* Cinematic dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(5,5,5,0.30) 0%, rgba(5,5,5,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Green atmospheric glow — bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(23,201,100,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Section label — top left */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "80px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "10px",
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
          04 — EXPERIENCIA VISUAL
        </span>
      </div>

      {/* Main Campaign Text */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 80px",
          maxWidth: "1100px",
        }}
      >
        <p
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 900,
            color: G.white,
            letterSpacing: "-3px",
            lineHeight: "1.0",
            margin: "0 0 32px 0",
          }}
        >
          No solo juegas.
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${G.green}`,
            }}
          >
            Perteneces.
          </span>
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            justifyContent: "center",
            marginTop: "52px",
          }}
        >
          <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, transparent, ${G.green})` }} />
          <p
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: G.gray,
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            La comunidad más grande del fútbol amateur en México
          </p>
          <div style={{ width: "60px", height: "1px", background: `linear-gradient(270deg, transparent, ${G.green})` }} />
        </div>
      </div>

      {/* Bottom right — copyright */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "80px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "8px",
        }}
      >
        <div style={{ width: "40px", height: "1px", backgroundColor: G.grayDark }} />
        <span
          style={{
            fontSize: "9px",
            color: G.grayDark,
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          GOLIFY © 2026
        </span>
      </div>
    </section>
  );
}
