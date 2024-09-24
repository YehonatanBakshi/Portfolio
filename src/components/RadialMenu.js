import React, { useState } from "react";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "react-bootstrap";
import pdf from "../Assets/Yehonatan Bakshi CV Full-Stack Developer.pdf"; // Resume file

function RadialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="radial-menu">
      {/* Central Button */}
      <Button
        className="central-button"
        onClick={toggleMenu}
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
      >
        +
      </Button>

      {/* Menu Buttons */}
      <div
        className={`menu-buttons ${isOpen ? "open" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {/* GitHub Button */}
        <Button
          className="radial-btn github-btn"
          href="https://github.com/YehonatanBakshi"
          target="_blank"
        >
          <AiFillGithub size={24} />
        </Button>

        {/* LinkedIn Button */}
        <Button
          className="radial-btn linkedin-btn"
          href="https://www.linkedin.com/in/yehonatanbakshi/"
          target="_blank"
        >
          <FaLinkedinIn size={24} />
        </Button>

        {/* Download Resume Button */}
        <Button
          className="radial-btn resume-btn"
          href={pdf}
          download
        >
          <AiOutlineDownload size={24} />
        </Button>
      </div>
    </div>
  );
}

export default RadialMenu;
