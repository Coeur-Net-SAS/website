import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as BPI_logo } from '../../Assets/BPI_svg.svg';
import { ReactComponent as LIFO_logo } from '../../Assets/logo_lifo.svg';
import { ReactComponent as PEPITE_logo } from '../../Assets/logo_pepite.svg';
import { ReactComponent as INSA_logo } from '../../Assets/INSA.svg';




function Partenaires() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BPI_logo />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <LIFO_logo />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <INSA_logo />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <PEPITE_logo />
      </Col>
    </Row>
  );
}

export default Partenaires;
