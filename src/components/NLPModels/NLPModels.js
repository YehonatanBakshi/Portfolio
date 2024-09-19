// src/components/NLPModels/NLPModels.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ModelCard from "./ModelCard"; 

// Import placeholder images for the NLP models (replace with actual images)
import emailSearchImage from "../../Assets/Projects/gmail.png";
import newsClassificationImage from "../../Assets/Projects/Reuters News.png";
import sentimentAnalysisImage from "../../Assets/Projects/imdb.jpg";

function NLPModels() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">NLP Models</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few NLP projects I've worked on recently, applying machine learning and natural language processing techniques.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} sm={12} className="project-card">
            <ModelCard
              imgPath={emailSearchImage}
              title="Smart Email Search"
              description="Developed a smart email search system using Python, BERT, and clustering algorithms to efficiently find specific emails within large datasets, enhancing search accuracy and efficiency."
              technologies={["Python", "BERT", "Clustering Algorithms", "NLP"]}
            />
          </Col>

          <Col md={4} sm={12} className="project-card">
            <ModelCard
              imgPath={newsClassificationImage}
              title="Reuters News Classification"
              description="Developed a text classification system using Python, NLTK, Regex, and machine learning algorithms like Naive Bayes and SVM to categorize financial news articles, improving automated news analysis."
              technologies={["Python", "NLTK", "Naive Bayes", "SVM", "NLP"]}
            />
          </Col>

          <Col md={4} sm={12} className="project-card">
            <ModelCard
              imgPath={sentimentAnalysisImage}
              title="IMDB Sentiment Analysis"
              description="Created a sentiment analysis system using Python, NLTK, TensorFlow, and Keras to classify IMDB movie reviews as positive or negative, boosting sentiment detection accuracy."
              technologies={["Python", "TensorFlow", "Keras", "NLP"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default NLPModels;
