import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ExperienceTimeline from "../Experience/ExperienceTimeline";  // Updated import for ExperienceTimeline
import NLPModels from "../NLPModels/NLPModels";

function Home() {
  const projectSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);  // Ref for experience section
  const nlpSectionRef = useRef(null);  // Ref for NLP Models

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yehonatan Bakshi</strong>
              </h1>

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

      {/* Projects Section */}
      <div ref={projectSectionRef} id="projects-section">
        <Projects />
      </div>

      {/* NLP Models Section */}
      <div ref={nlpSectionRef} id="nlp-section">
        <NLPModels />
      </div>
      
      {/* About Section */}
      <div ref={aboutSectionRef} id="about-section">
        <About />
      </div>

      {/* Experience Section */}
      <div ref={experienceSectionRef} id="experience-section">
        <ExperienceTimeline />
      </div>

    </section>
  );
}

export default Home;
