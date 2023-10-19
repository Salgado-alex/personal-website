import React from "react";
import "../nav/nav.css";
//import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
//import { BiBookAlt } from "react-icons/bi";
//import { IoMdContact } from "react-icons/io";

import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CgProfile />
      </a>
    </nav>
  );
};

export default Nav;
