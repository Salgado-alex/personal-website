import React from "react";
import "./experience.css";
import { Container, Row, Col } from "react-bootstrap";
//import { BsCardChecklist } from "react-icons/bs";
//import { FiAward } from "react-icons/fi";
//import { FiUsers } from "react-icons/fi";
//import { BsFillFolderFill } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../../images/meter1.svg";
import pic2 from "../../images/meter2.svg";
import pic3 from "../../images/meter3.svg";

const Experience = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="experience">
      {/* 
      <h5>Get to know </h5>*/}
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            {/* 
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>Number of years of Exp.</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Eduaction</h5>
              <small>#of clients worked with</small>
            </article>

            <article className="about_card">
              <BsFillFolderFill className="about_icon" />
              <h5>Projects</h5>
              <small># of completed projects</small>
            </article> 
            */}
          </div>

          <div class="section-block timeline-block">
            <div class="container-fluid">
              <div class="section-header">
                <h2>
                  My <strong class="color">Education</strong>
                </h2>
              </div>

              <ul class="timeline">
                <li>
                  <div class="timeline-content">
                    <h4>UNIVERSITY OF CALIFORNIA DAVIS </h4>

                    <em>
                      <span>
                        Bachelor of Science in Computer Science <br /> EXPECTED
                        JUNE 2025
                      </span>
                    </em>
                  </div>
                </li>

                <li>
                  <div class="timeline-content">
                    <h4>SAN BERNARDINO VALLEY COLLEGE</h4>

                    <em>
                      <span>
                        AS-T IN COMPUTER SCIENCE <br /> MAY 2023 / GPA 3.81
                      </span>
                    </em>

                    <p>
                      Coursework: Fundamentals of Computer Science, Discrete
                      Structures, Programming in C++, Assembly Language, Data
                      Structures and Algorithms, Programming with Java
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            possimus voluptatum deleniti porro quibusdam pariatur nam esse
            earum, maxime fugiat. Itaque rem sit dolor exercitationem repellat
            perspiciatis soluta tenetur numquam.
          </p>
        </div>
      </div>

      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skills-bx">
                <h2> Skills</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem molestiae dolore, consequatur voluptates ex
                  cupiditate, cum voluptatibus reprehenderit eos similique illum
                  dolores nostrum omnis non qui minima perspiciatis consectetur!
                  Voluptatum.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skills-slider"
                >
                  <div className="item">
                    <img src={pic1} alt="1" />
                    <h5>Web Dev</h5>
                  </div>
                  <div className="item">
                    <img src={pic2} alt="2" />
                    <h5>Front-End</h5>
                  </div>
                  <div className="item">
                    <img src={pic3} alt="3" />
                    <h5>Back-End</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 
      <h2>My skills</h2>*/}

      <div className="container experience_container">
        <div className="experience_frontend">
          {/* 
          <h3>Frontend Development</h3>*/}
          <div className="experience_content">
            {/*
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            */}
          </div>
        </div>
        <div className="experience_backend">
          {/* <h3>Backend Developement</h3>*/}
          <div className="experience_content">
            {/*
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCardChecklist className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
