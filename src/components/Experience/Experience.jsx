import React from "react";
import "./experience.css";
//import { BsCardChecklist } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="service" class="parallax-section">
      <div class="container">
        <div class="row">
          <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
            <h2>what things i am doing...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
          </div>

          <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-thumb">
              <i class="fa fa-smile-o"></i>
              <h4>Graphic Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing morbi
                venenatis.
              </p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-thumb bg-grey">
              <i class="fa fa-camera"></i>
              <h4 class="white-color">Photography</h4>
              <p>
                Duis sed arcu sed nunc maximus tempor. Maecenas et enim laoreet,
                pharetra risus vel.
              </p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-thumb">
              <i class="fa fa-lightbulb-o"></i>
              <h4>UI/UX design</h4>
              <p>
                Sed tristique, nunc sit amet pellentesque pharetra, sapien urna.
              </p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
            <div class="service-thumb">
              <i class="fa fa-clone"></i>
              <h4>illustration</h4>
              <p>
                Cras ut urna quis nisi luctus molestie tincidunt sed ipsum.
                Donec gravida laoreet erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
