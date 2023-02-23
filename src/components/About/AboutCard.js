import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nous sommes <span className="purple">Doctorant et enseignant chercheur </span>
            à  <span className="purple"> l'INSA Centre Val de Loire</span>
            <br />Benjamin Vignau effectue sa <span className="purple">thèse</span> sur les authentifications biométriques continues
            <br />
            <br />Patrice Clémente effectue des recherches sur la sécurité des dispositifs médicaux.
            <br />
            <br />
            Nous nous sommes associés pour créer <span className="purple">Coeur-Net</span> afin de :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Accélérer nos travaux de recherches
            </li>
            <li className="about-activity">
              <ImPointRight /> Valoriser nos travaux de recherches
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
