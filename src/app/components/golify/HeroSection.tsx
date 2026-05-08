import { G } from "./tokens";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        backgroundColor: G.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: G.font,
        overflow: "hidden",
      }}
    >
      {/* Video / image placeholder */}
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
            letterSpacing: "2.5px",
            fontWeight: 600,
            position: "relative",
            zIndex: 1,
          }}
        >
          [ VIDEO / IMAGEN DEPORTIVA HERO ]
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
          1440 × 900 px — Fullscreen Hero
        </span>
      </div>

      {/* Bottom cinematic gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "65%",
          background: G.gradOverlay,
          pointerEvents: "none",
        }}
      />

      {/* Green glow atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: G.gradGlowHero,
          pointerEvents: "none",
        }}
      />

      {/* Top edge gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(180deg, rgba(5,5,5,0.6) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 40px",
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          {/* Green pulse dot */}
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: G.green,
              boxShadow: G.shadowGreenSm,
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: G.green,
              textTransform: "uppercase" as const,
            }}
          >
            EVOLUCIONA TU FÚTBOL · GOLIFY 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(56px, 7vw, 100px)",
            fontWeight: 900,
            color: G.white,
            lineHeight: "1.0",
            letterSpacing: "-3px",
            margin: "0 0 28px 0",
          }}
        >
          El fútbol
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${G.green}`,
            }}
          >
            evoluciona.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            fontWeight: 300,
            color: G.gray,
            lineHeight: "1.7",
            margin: "0 0 52px 0",
            maxWidth: "460px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Encuentra equipos, arma tu dream team y conecta con la comunidad futbolera más grande de México.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <div
            style={{
              padding: "16px 44px",
              background: G.gradGreenBtn,
              color: "#050505",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              borderRadius: "4px",
              cursor: "pointer",
              boxShadow: G.shadowGreen,
            }}
          >
            COMENZAR AHORA
          </div>
          <div
            style={{
              padding: "16px 44px",
              backgroundColor: "transparent",
              color: G.white,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1px",
              borderRadius: "4px",
              cursor: "pointer",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: G.surfaceBorder,
            }}
          >
            VER MÁS
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            color: G.grayDark,
            letterSpacing: "3px",
            fontWeight: 600,
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: `linear-gradient(180deg, ${G.green} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Corner — version tag */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "80px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ width: "24px", height: "1px", backgroundColor: G.grayDark }} />
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
