import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Contact() {
  const [links] = useState([
    {
      link: "contact",
    },
  ]);

  const [currentSection] = useState(links[0]);

  return (
    //  Contact
    <section className="page-section bg-dark" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h1
              className="mt-0 text-white font-weight-bold"
              data-testid="h1tag"
            >
              {capitalizeFirstLetter(currentSection.link)}
              <hr className="divider" />
            </h1>
            <h2
              className="mt-0 text-white font-weight-bold"
              data-testid="h2tag"
            >
              Let's Get In Touch!
            </h2>
            <hr />
            <p className="text-muted mb-5">
              Ready to start your next project with us? Send us a messages and
              we will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form id="contactForm">
              {/* Name input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label htmlFor="name">Full name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              {/* Email address input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label htmlFor="email">Email address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              {/* Message input */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  name="message"
                  rows="5"
                  placeholder="Enter your message here..."
                  // style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label htmlFor="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
              {/* Submit success message */}
              {/*  */}
              {/* This is what your users will see when the form */}
              {/* has successfully submitted */}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* Submit error message */}
              {/*  */}
              {/* This is what your users will see when there is */}
              {/* an error submitting the form */}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              {/* Submit Button */}
              <div className="d-grid">
                <button
                  data-testid="button"
                  className="btn btn-primary btn-xl disabled"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
