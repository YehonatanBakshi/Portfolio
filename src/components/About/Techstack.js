import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiPython, DiJava, DiReact, DiNodejs, DiMongodb, DiGit
} from "react-icons/di";
import { SiTypescript, SiPostgresql, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";
import { FaGithub, FaLinux } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <h3>Programming Languages</h3>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* TypeScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> {/* CSS */}
      </Col>

      {/* Frameworks & Libraries */}
      <h3>Frameworks & Libraries</h3>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js */}
      </Col>

      {/* Databases */}
      <h3>Databases</h3>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* PostgreSQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>

      {/* AI/ML/NLP */}
      <h3>AI/ML/NLP</h3>
      <Col xs={4} md={2} className="tech-icons">
        <div>AI</div> {/* Placeholder for AI */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>ML</div> {/* Placeholder for Machine Learning */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>NLP</div> {/* Placeholder for NLP */}
      </Col>

      {/* Tools */}
      <h3>Tools</h3>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux /> {/* Linux */}
      </Col>
    </Row>
  );
}

export default Techstack;
