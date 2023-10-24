import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" class="section contact-section border-d">
      <div class="section-block contact-block">
        <div class="container-fluid">
          <div class="section-header">
            <h2>
              Contact <strong class="color">Me</strong>
            </h2>
          </div>

          <div class="row">
            <div class="col-md-8">
              <div class="contact-form">
                <form
                  id="contact-form"
                  data-toggle="validator"
                  method="post"
                  action="mail.php"
                >
                  <div id="contact-form-result"></div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          name="name"
                          required
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          name="email"
                          required
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      placeholder="Message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group text-center">
                    <button type="submit" class="btn-custom btn-color">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-info-icons">
                <div class="contact-info">
                  <p>
                    1566 Genevieve st
                    <br />
                    San Bernardino, CA 92405
                  </p>
                </div>

                <div class="contact-info">
                  <p>(909)462-2858</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
