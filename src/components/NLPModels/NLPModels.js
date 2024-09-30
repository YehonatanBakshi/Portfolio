import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenericCard from "../GenericCard"; // Use GenericCard instead of ModelCard
import Particle from "../Particle";

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
          
          {/* Smart Email Search */}
          <Col md={4} className="project-card">
            <GenericCard
              imgPath={emailSearchImage}
              title="Smart Email Search"
              description="Developed a smart email search system using Python, BERT, and clustering algorithms to efficiently find specific emails within large datasets, enhancing search accuracy and efficiency."
              languages={["Python"]}
              technologies={["BERT", "Clustering Algorithms", "NLP"]}
            />
          </Col>

          {/* Reuters News Classification */}
          <Col md={4} className="project-card">
            <GenericCard
              imgPath={newsClassificationImage}
              title="Reuters News Classification"
              description="Developed a text classification system using Python, NLTK, Regex, and machine learning algorithms like Naive Bayes and SVM to categorize financial news articles, improving automated news analysis."
              languages={["Python"]}
              technologies={["NLTK", "Naive Bayes", "SVM", "NLP"]}
            />
          </Col>

          {/* IMDB Sentiment Analysis */}
          <Col md={4} className="project-card">
            <GenericCard
              imgPath={sentimentAnalysisImage}
              title="IMDB Sentiment Analysis"
              description="Created a sentiment analysis system using Python, NLTK, TensorFlow, and Keras to classify IMDB movie reviews as positive or negative, boosting sentiment detection accuracy."
              languages={["Python"]}
              technologies={["TensorFlow", "Keras", "NLP"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default NLPModels;
