import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Partenaires from "./Partenaires";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Découvrez les <strong className="purple">fondateurs</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Nos <strong className="purple">Compétences </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Nos <strong className="purple">partenaires </strong>
        </h1>

        <Partenaires />

        <h1 className="project-heading">
          Nos <strong className="purple">mentions légales </strong>
        </h1>
        <p>
        Ce site est édité par la société  <strong className="purple">Coeur-Net</strong>.
        <br />
        <br />
        <strong className="purple">Siège social</strong> : Coeur-Net, 6 rue Maurice Roy, 18 000, Bourges<br />
        <strong className="purple">Capital social</strong> : 25 000 euros<br />
        <strong className="purple">Contact</strong> : contact@coeur-net.fr               <br />   
        <strong className="purple">Responsable de la rédaction</strong> : Benjamin Vignau<br />
        <br />
        <br />
                  
        Aucune information personnelle n'est collectée à votre insu.

        <br />
        <br />
        <strong className="purple">Droit d'auteur / copyright</strong>
        <br />          
        L'ensemble du contenu du présent site Internet, y compris nom de domaine, marques, logo, texte etc. ormis les contenus open-source et les logos des partenaires, est la propriété de la société Coeur-Net, il est protégé par les lois en vigueur de la législation française sur la propriété intellectuelle.
        <br />         
        Aucun élément de ce site ne peut être copié, reproduit, détourné ou dénaturé, et ce, sur quelque support que ce soit, sans constituer un acte de contrefaçon au sens des articles L 335-2 et suivants du code de la propriété intellectuelle. 
        Accès au site
        <br />          
        L'utilisateur de ce site reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. Coeur-Net ne saurait être tenu responsable des éléments en dehors de son contrôle et des dommages qui pourraient éventuellement être subis par l'environnement technique de l'utilisateur et notamment, ses ordinateurs, logiciels, équipements réseaux et tout autre matériel utilisé pour accéder ou utiliser le service et/ou les informations.
        <br />          
        Il est rappelé que le fait d'accéder ou de se maintenir frauduleusement dans un système informatique, d'entraver ou de fausser le fonctionnement d'un tel système, d'introduire ou de modifier frauduleusement des données dans un système informatique constitue des délits passibles de sanctions pénales.
        <br />
        <br />
        
        <strong className="purple">Limitation de responsabilité</strong>
        <br />     
        
                  
        Les liens hypertextes mis en oeuvre au sein du présent site Internet, en direction d'autres sites et/ou de pages personnelles et d'une manière générale vers toutes ressources existantes sur Internet, ne sauraient engager la responsabilité de Coeur-Net.
        De même que la société Coeur-Net  ne pourra en aucune façon être tenue pour responsable des sites ayant un lien hypertexte avec le présent site et décline toute responsabilité quant à leur contenu et à leur utilisation.
        </p>
      </Container>
    </Container>
  );
}

export default About;
