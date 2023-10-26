import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
//try to make them like https://visme.co/blog/website-color-schemes/
const Socials_about = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <ImYoutube2 />
      </a>
    </div>
  );
};

export default Socials_about;
