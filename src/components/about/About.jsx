import React from "react";
import "./about.css";
import Socials_about from "./Socials_about";
import ME from "../../images/picture-coming-soon-icon-vector-31612572.webp";
/*

import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";

*/

const About = () => {
  return (
    <section id="about">
      <div className="pic-container">
        <img src={ME} alt="My picture" className="pic-image" />
      </div>
      <div className="section-text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Alex Salgado</h1>
        <p className="section_text_p2">Computer Science Student</p>
        <div className="btn-container">
          <button className="btn btn-color-2">Resume</button>
          <Socials_about />
        </div>
      </div>
    </section>
  );
};

export default About;
