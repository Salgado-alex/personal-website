import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" class="parallax-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            {/*section title*/}
            <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.
              </p>
            </div>
          </div>

          <div class="col-md-7 col-sm-10">
            {/*contact form*/}
            <div class="wow fadeInUp" data-wow-delay="0.4s">
              <form id="contact-form" action="#" method="get">
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div class="col-md-12 col-sm-12">
                  <textarea
                    class="form-control"
                    rows="5"
                    name="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <div class="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                  <button
                    id="submit"
                    type="submit"
                    class="form-control"
                    name="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-5 col-sm-8">
            {/*contact info*/}
            <div class="wow fadeInUp contact-info" data-wow-delay="0.4s">
              <div class="section-title">
                <h2>Contact Info</h2>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing morbi venenatis
                  et tortor consectetur adipisicing lacinia tortor morbi
                  ultricies.
                </p>
              </div>

              <p>
                <i class="fa fa-map-marker"></i> 1566 Genevieve st, San
                Bernardino, CA
              </p>
              <p>
                <i class="fa fa-comment"></i>{" "}
                <a href="mailto:info@company.com">salgado.alex4168@gmail.com</a>
              </p>
              <p>
                <i class="fa fa-phone"></i> 909-462-2858
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
