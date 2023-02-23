import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                <strong className="main-name"> COEUR-NET</strong>
              </h1>
              <h3>
              Entreprise innovante dans le domaine de :
              </h3>
              <ul>
                <li> Authentifications biométriques continues</li>
                <li>  Contrôle d'accès physique et logiciel</li>
                <li> Gestion des identités (IAM)</li>
              </ul>
              <br></br>
              <br></br>
              <h2 className="main-name"> Exemples d'applications</h2>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

    </section>
  );
}

export default Home;
