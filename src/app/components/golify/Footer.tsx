import { G } from "./tokens";

const footerLinks = {
  Producto:  ["Convocatorias", "Torneos", "Reservas", "Estadísticas"],
  Comunidad: ["Jugadores", "Equipos", "Blog"],
  Empresa:   ["Acerca de", "Prensa", "Carreras", "Contacto"],
  Legal:     ["Privacidad", "Términos", "Cookies"],
};

const socials = ["IG", "TW", "TK", "YT"];

export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: G.bg,
        borderTop: `1px solid ${G.surfaceBorder}`,
        padding: "80px 80px 60px",
        fontFamily: G.font,
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: G.maxWidth, margin: "0 auto" }}>

        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "60px",
            paddingBottom: "80px",
            borderBottom: `1px solid ${G.surfaceBorder}`,
          }}
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: G.green,
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: G.shadowGreenSm,
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 900, color: "#050505" }}>G</span>
              </div>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: G.white,
                  letterSpacing: "-0.3px",
                }}
              >
                GOLIFY
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                color: G.grayDark,
                lineHeight: "1.8",
                margin: 0,
                maxWidth: "240px",
              }}
            >
              La plataforma que redefine cómo vives el fútbol. Vive el fútbol en comunidad.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <div
                  key={s}
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: G.surface,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: G.surfaceBorder,
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: G.grayDark,
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div
              key={category}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: G.green,
                  textTransform: "uppercase" as const,
                  marginBottom: "4px",
                }}
              >
                {category}
              </span>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: G.grayDark,
                    textDecoration: "none",
                    letterSpacing: "0.2px",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
          }}
        >
          <p style={{ fontSize: "11px", color: G.grayDark, margin: 0, letterSpacing: "0.5px" }}>
            © 2026 Golify. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: G.green }} />
            <p style={{ fontSize: "11px", color: G.grayDark, margin: 0, letterSpacing: "0.5px" }}>
              Hecho con ♥ para la comunidad futbolera
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
