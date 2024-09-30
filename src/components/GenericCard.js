import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function GenericCard(props) {
  const [showMore, setShowMore] = useState(false); // State to toggle full description

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title className="project-title">{props.title}</Card.Title>

        {/* Description with Show More functionality */}
        <Card.Text className="project-description" style={{ textAlign: "left", padding: "10px 0" }}>
          {showMore ? props.description : `${props.description.substring(0, 100)}...`}
          <Button variant="link" style={{ textDecoration: "none" }} onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </Card.Text>

        {/* Languages and Technologies */}
        {props.languages && (
          <Card.Text className="project-languages" style={{ marginTop: "10px" }}>
            <strong>Languages: </strong>{props.languages.join(", ")}
          </Card.Text>
        )}
        {props.technologies && (
          <Card.Text className="project-technologies" style={{ marginTop: "10px" }}>
            <strong>Technologies: </strong>{props.technologies.join(", ")}
          </Card.Text>
        )}

        {/* Centered GitHub and Demo Buttons */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" style={{ margin: "5px" }}>
              <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.demoLink && !props.isBlog && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px", margin: "5px" }}
            >
              <CgWebsite /> &nbsp; {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default GenericCard;
