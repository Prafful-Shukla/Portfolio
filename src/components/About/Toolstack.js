import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiWindows,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiCodechef,
  SiDiscord,
  SiEclipseide,
  SiGeeksforgeeks,
  SiIntellijidea,
  SiLeetcode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom/>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiCodechef/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGeeksforgeeks/>
      </Col>
    </Row>
  );
}

export default Toolstack;
