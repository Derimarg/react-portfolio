import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Gallery from "../../components/Gallery";

function Portfolio() {
  const [links] = useState([
    {
      link: "portfolio",
    },
  ]);

  const [currentSection] = useState(links[0]);

  const [projects] = useState([
    {
      name: "forge-project",
      description: "HTML/CSS/JS/Node/Express/MySQL/Handlebars",
      link: "https://forge-team.herokuapp.com/splash",
      repo: "https://github.com/Derimarg/Forge",
    },
    {
      name: "run-buddy",
      description: "HTML/CSS",
      link: "https://derimarg.github.io/run-buddy/",
      repo: "https://github.com/Derimarg/run-buddy",
    },
    {
      name: "tech-blog",
      description: "Node/MySQL/Sequalize",
      link: "https://dg-tech-blog.herokuapp.com/",
      repo: "https://github.com/Derimarg/tech-blog",
    },
    {
      name: "note-taker",
      description: "Node/Express/Bootstrap",
      link: "my-notes-taker.herokuapp.com/",
      repo: "https://github.com/Derimarg/note-taker",
    },
    {
      name: "taskmaster-pro",
      description: "HTML/CSS/JavaScript",
      link: "https://derimarg.github.io/taskmaster-pro/",
      repo: "https://github.com/Derimarg/taskmaster-pro",
    },

    {
      name: "weather-dashboard",
      description: "JavaScript/API/Bootstrap",
      link: "https://derimarg.github.io/weather-dashboard/",
      repo: "https://github.com/Derimarg/weather-dashboard",
    },
  ]);

  return (
    <section>
      <div className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h1 className="mt-0 text-white font-weight-bold" data-testid="h1tag">
            {capitalizeFirstLetter(currentSection.link)}
          </h1>
          <hr className="divider" />
        </div>
      </div>

      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row g-0">
            {projects.map((project, idx) => (
              <Gallery project={project} key={"project" + idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
