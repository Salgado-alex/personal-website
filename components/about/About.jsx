import React from "react";
import "./about.css";
import ME from "../../assets/aot.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" class="parallax-section">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-5 col-md-7 col-sm-12">
            <div class="home-thumb">
              <h1 class="wow fadeInUp" data-wow-delay="0.4s">
                Hello, I'm Alex
              </h1>
              <p class="wow fadeInUp white-color" data-wow-delay="0.6s">
                Praesent eleifend tristique nisl, nec finibus urna posuere nec.
                Quisque vel nunc eget arcu maximus facilisis non eu nisi.
                Aliquam ullamcorper est a nisl imperdiet luctus.
              </p>
              <a
                href="#service"
                class="wow fadeInUp smoothScroll btn btn-default section-btn"
                data-wow-delay="1s"
              >
                discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
