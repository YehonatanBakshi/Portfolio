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
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
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
              fullDescription="This project focuses on developing a web application that allows users to explore and discuss NASA's image gallery. Enabling user registration, login, and comments, the platform encourages space enthusiasts to collaboratively engage in conversations about captivating celestial images. With an emphasis on user authentication, responsive design, and error handling, the web application aims to provide an interactive and secure space exploration community experience."
              languages={["JavaScript", "HTML", "CSS"]}
              technologies={["Node.js", "Express", "EJS", "SQLite3", "bcrypt", "Sequelize", "Cookies", "express-session", "NASA API"]}
              ghLink="https://github.com/YoniBakshi/NASA-Social-Site"
            />
          </Col>

          {/* TMDB Movie Store Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmdbMovie}
              isBlog={false}
              title="TMDB Movie Store"
              fullDescription="This project is a digital storefront for browsing, searching, and purchasing movies. It allows users to search for movies by name, filter by genres, sort by name or year, and view details in a searchable interface. It integrates a cart system for selecting movies to purchase, showcasing a seamless blend of front-end and back-end functionalities to enhance the shopping experience."
              languages={["JavaScript", "Java", "CSS", "HTML"]}
              technologies={["React", "Spring Boot", "MySQL", "Maven", "Spring Session Beans", "SQL Server", "TMDB API"]}
              ghLink="https://github.com/YoniBakshi/TMDB-Movie-Store"
            />
          </Col>

          {/* Memory Card Game Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memoryCard}
              isBlog={false}
              title="Memory Card Game"
              fullDescription="This is an engaging memory card game featuring limited edition images, designed for players to match pairs of cards. It includes customizable game settings, a high-score leaderboard, and implements a unique scoring formula based on game performance metrics, providing a fun and competitive experience for users."
              languages={["JavaScript", "HTML"]}
              technologies={[]}
              ghLink="https://github.com/YoniBakshi/Memory-Card-Game"
            />
          </Col>

          {/* Bulls and Cows Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bullsCows}
              isBlog={false}
              title="Bulls and Cows"
              fullDescription="This web application is an interactive guessing game where players attempt to deduce a secret number, receiving hints if their guesses are too high or too low. It features a high score system where players can save their scores and view the top rankings, enhancing competitiveness and engagement. The application is crafted with a clear separation of concerns, employing React for dynamic front-end interactions and Java Servlets for server-side data management, including score tracking."
              languages={["Java", "CSS", "HTML", "JavaScript"]}
              technologies={["React", "Bootstrap", "Java Servlets", "ObjectStreams"]}
              ghLink="https://github.com/YoniBakshi/Bulls-and-Cows"
            />
          </Col>

          {/* Duplicate Scanner Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={duplicateScanner}
              isBlog={false}
              title="Duplicate Scanner"
              fullDescription="This project is a utility tool designed to help users identify and manage duplicate files within their system. It features a graphical user interface for ease of use, allowing for the selection of directories, initiation of scans for duplicates based on file size, and provides options for managing the detected duplicates, including deletion and preview functionalities."
              languages={["Python"]}
              technologies={[]}
              ghLink="https://github.com/YehonatanBakshi/duplicate-scanner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
