import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importing components
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main"; // Import the Main component that controls all pages
import RadialMenu from "./components/RadialMenu";

// Importing styles
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // State to control the preloader visibility
  const [load, setLoad] = useState(true);

  // UseEffect to remove the preloader after 1.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer); // Cleanup timeout when component unmounts
  }, []);

  // Function to handle scrolling to specific sections
  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      {/* Show preloader based on the loading state */}
      <Preloader load={load} />

      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        {/* Navigation bar with scroll to section function */}
        <Navbar scrollToSection={scrollToSection} />

        {/* Main section controlling Home, Projects, About, etc. */}
        <Main />

        {/* Radial menu with floating buttons */}
        <RadialMenu />
      </div>
    </Router>
  );
}

export default App;
