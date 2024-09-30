import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Techstack from "./Techstack";

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
              textAlign: "left",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "left" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard /> {/* This will now have zero padding */}
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "30px", // Align with the title padding
              paddingBottom: "50px",
              textAlign: "left", 
            }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
