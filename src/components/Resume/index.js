import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume() {
  const [links] = useState([{ link: "resume" }]);

  const googleDrive = [
    {
      label: "drive",
      url: "https://drive.google.com/file/d/1KidT8KitY4FYQP4ugY0rYqijRlHK0tSf/view?usp=sharing",
    },
  ];

  const [currentSection] = useState(links[0]);

  return (
    //  Call resume
    <section class="page-section bg-dark text-white">
      <div class="container px-4 px-lg-5 text-center">
        <h1 className="text-white font-weight-bold">
          {capitalizeFirstLetter(currentSection.link)}
        </h1>
        <hr className="divider" />
        <h2 class="mb-4">Download my Resume</h2>
        {googleDrive.map((drive) => (
          <a
            class="btn btn-light btn-xl"
            href={drive.url}
            key={drive.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download!
          </a>
        ))}
      </div>
    </section>
  );
}

export default Resume;
