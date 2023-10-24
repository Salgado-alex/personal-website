import React from "react";
import "../nav/nav.css";
//import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { HiHome } from "react-icons/hi";
//import { BiBookAlt } from "react-icons/bi";
//import { IoMdContact } from "react-icons/io";

import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HiHome />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <CgProfile />
      </a>
    </nav>
  );
};

export default Nav;
