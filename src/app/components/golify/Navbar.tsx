import { useState } from "react";
import { G } from "./tokens";

const links = ["Inicio", "Experiencia", "Comunidad", "Descargar"];

export function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "72px",
        backgroundColor: "rgba(5, 5, 5, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${G.surfaceBorder}`,
        fontFamily: G.font,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Logo mark — stylized G with green accent */}
        <div
          style={{
            width: "34px",
            height: "34px",
            backgroundColor: G.green,
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: G.shadowGreenSm,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: 900,
              color: "#050505",
              letterSpacing: "-0.5px",
            }}
          >
            G
          </span>
        </div>
        <span
          style={{
            fontSize: "17px",
            fontWeight: 800,
            color: G.white,
            letterSpacing: "-0.3px",
          }}
        >
          GOLIFY
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
        {links.map((link) => (
          <a
            key={link}
            href="#"
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: hovered === link ? G.white : G.gray,
              textDecoration: "none",
              letterSpacing: "0.3px",
              transition: "color 0.2s ease",
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a
          href="/brand"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: G.grayDark,
            textDecoration: "none",
            letterSpacing: "1.5px",
            textTransform: "uppercase" as const,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: G.surfaceBorder,
            padding: "6px 12px",
            borderRadius: "3px",
          }}
        >
          Brand ↗
        </a>
        <a
          href="#"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: G.gray,
            textDecoration: "none",
            letterSpacing: "0.3px",
          }}
        >
          Iniciar sesión
        </a>
        <div
          style={{
            padding: "9px 22px",
            backgroundColor: G.green,
            color: "#050505",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.8px",
            borderRadius: "4px",
            cursor: "pointer",
            boxShadow: G.shadowGreenSm,
          }}
        >
          COMENZAR
        </div>
      </div>
    </nav>
  );
}
