import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [links] = useState([
    {
      link: "contact",
    },
  ]);

  const [currentSection] = useState(links[0]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

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
            <h3
              className="mt-0 text-muted font-weight-bold"
              data-testid="h3tag"
            >
              Let's Get In Touch!
            </h3>
            <hr />
          </div>
          <hr />
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form id="contactForm" onSubmit={handleSubmit}>
              {/* Name input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
                <label htmlFor="name">Full name</label>
              </div>
              {/* Email address input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
              {/* Message input */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  name="message"
                  defaultValue={message}
                  onBlur={handleChange}
                  rows="5"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              {/* Submit error message */}
              {errorMessage && (
                <div id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    {errorMessage}
                  </div>
                </div>
              )}
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
