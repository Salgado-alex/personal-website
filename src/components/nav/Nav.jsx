import React, { useState, useEffect } from "react";
import "../nav/nav.css";
import { CgProfile } from "react-icons/cg";
import { HiHome } from "react-icons/hi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const topNavbar = document.querySelector(".top-navbar");
    const bottomNavbar = document.querySelector(".bottom-navbar");
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        topNavbar.style.top = "-100px";
        bottomNavbar.style.bottom = "0";
      } else {
        // Scrolling up
        topNavbar.style.top = "0";
        bottomNavbar.style.bottom = "-60px"; // Adjust this value to hide/show the bottom navbar
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="top-navbar">
        <nav className="header">
          <div className="logo">Alex Salgado</div>
          <div>
            <ul className="nav-links">
              <li>
                <a className="about-click" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="about-click" href="#experience">
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Content of your webpage goes here */}

      <footer className="bottom-navbar">
        <nav className="bottom">
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
      </footer>
    </div>
  );
};

export default Nav;
