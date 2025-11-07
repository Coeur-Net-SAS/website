import React from "react";
import { createRoot } from "react-dom/client";
import { distinctions } from "../constants/data";

const DistinctionsSection = () => {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 16px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "32px",
  };

  const cardStyle = {
    backgroundColor: "var(--bs-dark)",
    color: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "12px",
    textAlign: "center",
  };

  const descriptionStyle = {
    fontSize: "0.95rem",
    color: "#ddd",
    lineHeight: "1.5",
    textAlign: "center",
    marginTop: "12px",
  };

  const imagesRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    flexWrap: "nowrap",
  };

  const imageStyle = {
    width: "100%",        
    maxWidth: "33%",
    height: "auto",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  };

  return (
    <section style={sectionStyle}>
      <h1 className="fw-bold text-gradient text-center mb-5">Nos Distinctions</h1>
      <div style={gridStyle}>
        {distinctions.map((dist) => (
          <div key={dist.id} style={cardStyle}>
            <div style={titleStyle}>{dist.title}</div>
            <div style={imagesRowStyle}>
              {dist.images.slice(0, 3).map((img, i) => (
                <img key={i} src={img} alt={dist.title} style={imageStyle} />
              ))}
            </div>
            <p style={descriptionStyle}>{dist.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const e = React.createElement;
const root = createRoot(document.getElementById("CarouselDistinction"));
root.render(e(DistinctionsSection));
