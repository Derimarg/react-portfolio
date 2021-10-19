import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function About() {
  const [links] = useState([
    {
      link: "about",
    },
  ]);

  const [currentSection] = useState(links[0]);

  return (
    // Masthead
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              {capitalizeFirstLetter(currentSection.link)}
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">About</p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default About;
