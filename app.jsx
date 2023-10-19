import React from "react";
import Home from "./";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
