import React from "react";
import Nav from "./components/nav/Nav";
import DarkMode from "./components/DarkMode/DarkMode";
import Experience from "./components/Experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer /Footer";
const App = () => {
  return (
    <>
      <Nav />
      <DarkMode />
      <About />

      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
