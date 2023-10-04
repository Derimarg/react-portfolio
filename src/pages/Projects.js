import React, { useState } from "react";

import { capitalizeFirstLetter } from "../utils/helpers";
import Gallery from "../components/Gallery";
import ProjectsData from "../constans/data";

function Projects() {
  const [links] = useState([{ link: "Projects Gallery" }]);

  const [currentSection] = useState(links[0]);

  const [projects] = useState(ProjectsData);
  return (
    <section>
      <div className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h1
            className="mt-0 text-white font-weight-bold"
            data-testid="h1tag"
          >
            {capitalizeFirstLetter(currentSection.link)}
          </h1>
          <hr className="divider" />
        </div>
      </div>
      <div id="portfolio" className="portfolio section-bg">
        <div className="container mt-4" data-aos="fade-up">
          <div
            className="row portfolio-container "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {projects.map((project, id) => (
              <Gallery project={project} key={"project" + id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
