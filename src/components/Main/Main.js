import React, { useRef } from "react";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ExperienceTimeline from "../Experience/ExperienceTimeline"; // Updated import for ExperienceTimeline
import NLPModels from "../NLPModels/NLPModels";
import Home from "../Home/Home";  // Import Home component to include at the top

function Main() {
  const projectSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null); // Ref for experience section
  const nlpSectionRef = useRef(null); // Ref for NLP Models

  return (
    <section>
      {/* Home Page Section */}
      <Home />

      {/* Projects Section */}
      <div ref={projectSectionRef} id="projects-section">
        <Projects />
      </div>

      {/* NLP Models Section */}
      <div ref={nlpSectionRef} id="nlp-section">
        <NLPModels />
      </div>

      {/* About Section */}
      <div ref={aboutSectionRef} id="about-section">
        <About />
      </div>

      {/* Experience Section */}
      <div ref={experienceSectionRef} id="experience-section">
        <ExperienceTimeline />
      </div>
    </section>
  );
}

export default Main;
