import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import circleTheCat from "../../Assets/Projects/circle-the-cat.jpg";
import cutTheRope from "../../Assets/Projects/cut the rope.jpg";
import finTrack from "../../Assets/Projects/fintrack.jpg";
import nasaSocial from "../../Assets/Projects/nasa-social.jpg";
import duplicateScanner from "../../Assets/Projects/duplicate-scanner.png";
import bullsCows from "../../Assets/Projects/bulls and cows.jpeg";
import memoryCard from "../../Assets/Projects/memory-card-game.jpg";
import tmdbMovie from "../../Assets/Projects/tmdb-movie-store.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          
          {/* Cut the Rope Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cutTheRope}
              isBlog={false}
              title="Cut the Rope"
              fullDescription="This game involves strategic puzzle-solving where the player aims to deliver candy to Iggy, the character trying to save the galaxy, by cutting ropes and utilizing various elements. It features a physics-based gameplay with multiple levels, each presenting unique challenges and equipment to manipulate the candy's movement under gravity, offering an engaging and thoughtful experience."
              languages={["C++", "CMake"]}
              technologies={["SFML", "Box2D"]}
              ghLink="https://github.com/YehonatanBakshi/Cut-the-rope"
            />
          </Col>

          {/* Circle The Cat Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={circleTheCat}
              isBlog={false}
              title="Circle The Cat"
              fullDescription="This interactive game challenges players to encircle a cat on a grid by flipping tiles, utilizing strategic thinking, and planning. It features levels with increasing difficulty, randomized tile setups for unique gameplay experiences, and implements a breadth-first search algorithm to determine the cat's movement, making each session engaging and unpredictable."
              languages={["C++", "CMake", "C"]}
              technologies={["SFML", "BFS"]}
              ghLink="https://github.com/YoniBakshi/Circle-The-Cat"
            />
          </Col>

          {/* Expense and Budget Web Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finTrack}
              isBlog={false}
              title="Expense & Budget"
              fullDescription="FinTrack is a web application designed to help users manage their personal finances efficiently. It offers features for adding and categorizing expenses, setting, and tracking budgets, and visualizing financial data through graphs. The application also includes an admin page for managing categories and user accounts, streamlining the administration of financial tracking activities."
              languages={["Java", "HTML (Thymeleaf)", "JavaScript", "CSS"]}
              technologies={["Spring Boot", "Spring Security", "MySQL"]}
              ghLink="https://github.com/YoniBakshi/FinTrack"
            />
          </Col>

          {/* NASA Social Site */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasaSocial}
              isBlog={false}
              title="NASA Social Site"
              fullDescription="This project focuses on developing a web application that allows users to explore and discuss NASA's image gallery. Enabling user registration, login, and comments, the platform encourages space enthusiasts to collaboratively engage in conversations about captivating celestial images."
              languages={["JavaScript", "HTML", "CSS"]}
              technologies={["Node.js", "Express", "EJS", "SQLite3", "bcrypt"]}
              ghLink="https://github.com/YoniBakshi/NASA-Social-Site"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
