import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ padding: "0", border: "none" }}> {/* Remove padding and border */}
      <Card.Body style={{ padding: "0" }}> {/* Remove padding from Card.Body */}
        <blockquote className="blockquote mb-0" style={{ margin: "0", textAlign: "left" }}> {/* Ensure no margins */}
          <p>
            Hi Everyone, I am <span className="purple">Yehonatan Bakshi </span>, a passionate developer.
            <br />
            I recently graduated with a Bachelor's degree in Computer Science.
            <br />
            I completed my B.Sc. in Computer Science, gaining a solid foundation in various technologies.
            <br />
            <br />
            I have a strong background in <span className="purple">full-stack development</span>, specializing in both front-end and back-end technologies. My interests extend to{" "}
            <span className="purple">AI/ML</span> where I build intelligent applications, and{" "}
            <span className="purple">web development</span> where I create seamless user experiences.
            <br />
            <br />
            Apart from coding, here are a few things I love doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying updated with the latest in technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about innovations in the tech field
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always curious, always learning. Code is my way to create and innovate."{" "}
          </p>
          <footer className="blockquote-footer">Yehonatan Bakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
