import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              HELLO, I'M <span className="purple">A FULL-STACK DEVELOPER</span>
            </h1>
            <p className="home-about-body">
              With experience in both front-end and back-end development, I specialize in creating smart, scalable web applications. 
              I’m fluent in <b className="purple">JavaScript, Java, Python, and C++</b> and have a passion for modern web technologies.
              <br />
              <br />
              I build robust applications using <b className="purple">React, Node.js, SQL, and MongoDB</b>. My focus is on clean code and delivering seamless user experiences.
              <br />
              <br />
              My expertise spans from <b className="purple">AI, Machine Learning, and NLP</b> to full-stack development, allowing me to craft intelligent solutions that make an impact.
              <br />
              <br />
              Some of my notable projects include:
              <ul>
                <li><b className="purple">A Smart Email Search</b> using NLP & ML</li>
                <li><b className="purple">NASA Social Site</b></li>
                <li><b className="purple">A budget-friendly Expense Tracker</b></li>
              </ul>
              <br />
              Whether it’s tackling complex data challenges or building innovative products, my goal is to push the boundaries of what's possible with code.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              I'm always open to discussing new projects or opportunities. Feel free to <span className="purple">connect </span>with me:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YehonatanBakshi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yehonatanbakshi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
