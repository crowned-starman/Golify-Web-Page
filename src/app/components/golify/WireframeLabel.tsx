interface WireframeLabelProps {
  section: string;
  bg?: string;
}

export function WireframeLabel({ section, bg = "#f0f0f0" }: WireframeLabelProps) {
  return (
    <div
      style={{
        position: "sticky",
        top: "72px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "8px 24px",
        backgroundColor: bg,
        borderBottom: "1px dashed #ccc",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#bbb" }} />
      <span
        style={{
          fontSize: "10px",
          fontWeight: 700,
          color: "#aaa",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        WIREFRAME · {section}
      </span>
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#bbb" }} />
    </div>
  );
}
