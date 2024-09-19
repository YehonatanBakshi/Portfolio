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
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {/* If showMore is true, show full description, otherwise show a truncated version */}
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

        <Card.Text style={{ marginTop: "10px" }}>
          <strong>Languages: </strong>{props.languages.join(", ")}
        </Card.Text>
        <Card.Text>
          <strong>Technologies: </strong>{props.technologies.join(", ")}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* If the component contains a Demo link and if it's not a Blog then render the Demo button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
