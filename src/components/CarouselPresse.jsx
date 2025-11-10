import React from 'react';
import { createRoot } from 'react-dom/client';
import {presseArticles} from '../constants/index'


const BandeauVideo = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto 40px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
      }}
    >
      <iframe
        width="100%"
        height="560"
        src="https://www.youtube.com/embed/QrcHOPqeLds?autoplay=1&mute=1&rel=0&modestbranding=1"
        title="Passage de Coeur-Net sur BFM TV"
        style={{ border: 0 }} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const CarouselPresse = () => {
  const containerStyle = {
    backgroundColor: "var(--bs-dark)",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px",
    height: "300px",
    justifyContent: "space-between"
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px"
  };

  const titleStyle = {
    marginTop: "8px",
    fontWeight: 600,
    textAlign: "center",
    fontSize: "14px",
    color: "#fff",
    lineHeight: "1.3",
    height: "52px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    padding: "0 4px"
  };

  const linkStyle = {
    marginTop: "4px",
    textDecoration: "none",
    color: "#0d6efd",
    fontSize: "12px"
  };

  return (
    <div className="ss-carousel__wrapper">
      <BandeauVideo />

      <div className="ss-carousel__header">
        <h1 className="fw-bold text-gradient">Ils parlent de nous</h1>
        <div className="ss-carousel__controls">
          <button className="ss-carousel__arrow disabled arrow-prev"></button>
          <button className="ss-carousel__arrow arrow-next"></button>
        </div>
      </div>

      <ul className="ss-carousel__content">
        {presseArticles.map((article) => (
          <li key={article.id} className="ss-carousel__item flex-1">
            <div style={containerStyle}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img src={article.logo} alt={article.title} style={imageStyle} />
              </a>
              <div style={titleStyle}>{article.title}</div>
              <a href={article.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Lire l'article
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



const e = React.createElement;
const root = createRoot(document.getElementById("CarouselPresse"));
root.render(e(CarouselPresse));