import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Collapse } from "react-bootstrap"; // Used for show more functionality

function ProjectCards(props) {
  const [showMore, setShowMore] = useState(false); // State to toggle full description

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        
        {/* Project description with justified text */}
        <Card.Text className="project-description" style={{ textAlign: "left", padding: "10px 0" }}>
          {showMore ? props.fullDescription : `${props.fullDescription.substring(0, 100)}...`}
        </Card.Text>

        {/* Show/Hide More Button */}
        <Button
          variant="link"
          style={{ textDecoration: "none" }}
          onClick={toggleShowMore}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>

        {/* Technologies and Languages */}
        <Card.Text className="project-languages" style={{ marginTop: "10px" }}>
          <strong>Languages: </strong>{props.languages.join(", ")}
        </Card.Text>
        <Card.Text className="project-technologies">
          <strong>Technologies: </strong>{props.technologies.join(", ")}
        </Card.Text>

        {/* GitHub and Demo Buttons */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
