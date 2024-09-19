// src/components/NLPModels/ModelCard.js

import React from "react";
import Card from "react-bootstrap/Card";

function ModelCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="model-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <p><strong>Technologies Used:</strong> {props.technologies.join(", ")}</p>
      </Card.Body>
    </Card>
  );
}

export default ModelCard;
