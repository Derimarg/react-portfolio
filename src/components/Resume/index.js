import React, { useState } from "react";
import ResumeInfo from "../ResumeInfo";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume() {
  const [links] = useState([{ link: "resume" }]);

  const googleDrive = [
    {
      icon: "fas fa-file-download",
      label: "drive",
      url: "https://drive.google.com/uc?id=1KidT8KitY4FYQP4ugY0rYqijRlHK0tSf&export=download",
    },
  ];

  const [currentSection] = useState(links[0]);

  return (
    //  Call resume
    <section>
      <div className="page-section bg-dark text-white">
        <div class="container px-4 px-lg-5 text-center">
          <h1 className="text-white font-weight-bold">
            {capitalizeFirstLetter(currentSection.link)}
          </h1>
          <hr className="divider" />
          <h2 class="mb-4">Download my Resume</h2>
          {googleDrive.map((drive) => (
            <a
              className="btn btn-light btn-xl"
              href={drive.url}
              key={drive.label}
              rel="noopener noreferrer"
            >
              <i className={drive.icon} style={{ fontSize: 20 }}></i>{" "}
              <span style={{ fontSize: 18, marginLeft: 15 }}>Download!</span>
            </a>
          ))}
        </div>
      </div>
      {/* Resume Info */}
      <ResumeInfo></ResumeInfo>
    </section>
  );
}

export default Resume;
