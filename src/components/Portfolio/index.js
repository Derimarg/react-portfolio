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
      filter: "web",
      description: "HTML/CSS/JS/Node/Express/MySQL/Handlebars",
      link: "https://forge-team.herokuapp.com/splash",
      repo: "https://github.com/Derimarg/Forge",
    },
    {
      name: "git-it-done",
      filter: "card",
      description: "HTML/Bootstrap/JavaScript",
      link: "https://derimarg.github.io/git-it-done/",
      repo: "https://github.com/Derimarg/git-it-done",
    },
    {
      name: "work-day-scheduler",
      filter: "app",
      description: "HTML/CSS/JavaScript",
      link: "https://derimarg.github.io/work-day-scheduler/",
      repo: "https://github.com/Derimarg/work-day-scheduler",
    },
    {
      name: "run-buddy",
      filter: "web",
      description: "HTML/CSS",
      link: "https://derimarg.github.io/run-buddy/",
      repo: "https://github.com/Derimarg/run-buddy",
    },
    // {
    //   name: "just-tech-news",
    //   filter: "card",
    //   description: "Node/MySQL/Sequalize",
    //   link: "https://just-tech-news-dapp.herokuapp.com/",
    //   repo: "https://github.com/Derimarg/just-tech-news",
    // },
    {
      name: "note-taker",
      filter: "app",
      description: "Node/Express/Bootstrap",
      link: "my-notes-taker.herokuapp.com/",
      repo: "https://github.com/Derimarg/note-taker",
    },
    {
      name: "taskmaster-pro",
      filter: "web",
      description: "HTML/CSS/JavaScript",
      link: "https://derimarg.github.io/taskmaster-pro/",
      repo: "https://github.com/Derimarg/taskmaster-pro",
    },

    {
      name: "weather-dashboard",
      filter: "app",
      description: "JavaScript/API/Bootstrap",
      link: "https://derimarg.github.io/weather-dashboard/",
      repo: "https://github.com/Derimarg/weather-dashboard",
    },
    {
      name: "tech-blog",
      filter: "card",
      description: "Node/MySQL/Sequalize",
      link: "https://dg-tech-blog.herokuapp.com/",
      repo: "https://github.com/Derimarg/tech-blog",
    },
    {
      name: "password-generator",
      filter: "app",
      description: "HTML/CSS/JavaScript",
      link: "https://derimarg.github.io/password-generator/",
      repo: "https://github.com/Derimarg/password-generator",
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

export default Portfolio;
