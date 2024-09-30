import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ModelCard(props) {
  const [showMore, setShowMore] = useState(false); // State to toggle full description

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="model-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        {/* Show a shortened description and a toggle button for 'read more' */}
        <Card.Text style={{ textAlign: "left" }}>
          {showMore ? props.description : `${props.description.substring(0, 100)}...`}
        </Card.Text>
        <Button variant="link" style={{ textDecoration: "none" }} onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
        
        {/* Languages */}
        {props.languages && (
          <Card.Text style={{ marginTop: "10px" }}>
            <strong>Languages: </strong>{props.languages.join(", ")}
          </Card.Text>
        )}

        {/* Technologies */}
        <Card.Text style={{ marginTop: "10px" }}>
          <strong>Technologies Used: </strong>{props.technologies.join(", ")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ModelCard;
