import React, { useState } from "react";
import ResumeInfo from "../ResumeInfo";
import Proficiencies from "../Proficiencies";
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
    <React.Fragment>
      <section>
        <div className="page-section bg-dark text-white">
          <div className="container px-4 px-lg-5 text-center">
            <h1 className="text-white font-weight-bold">
              {capitalizeFirstLetter(currentSection.link)}
            </h1>
            <hr className="divider mb-5" />
            {googleDrive.map((drive) => (
              <a
                className="btn btn-light btn-xl mb-none"
                href={drive.url}
                key={drive.label}
                rel="noopener noreferrer"
              >
                <i className={drive.icon} style={{ fontSize: 20 }}></i>
                <span style={{ fontSize: 18, marginLeft: 15 }}>Download!</span>
              </a>
            ))}
          </div>
        </div>
        <ResumeInfo />
        <Proficiencies />
      </section>
    </React.Fragment>
  );
}

export default Resume;
