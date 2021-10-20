import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Gallery({ project }) {
  const { name, description, repo, link } = project;

  return (
    <div class="col-lg-4 col-sm-6" >
      <a
        class="portfolio-box"
        href={require(`../../assets/img/portfolio/${name}.jpg`)}
        title={removeHyphensAndCapitalize(name)}
        
      >
        <img
          class="img-fluid"
          src={require(`../../assets/img/portfolio/${name}.jpg`)}
          alt={removeHyphensAndCapitalize(name)}
        />
        <div class="portfolio-box-caption">
          <div class="project-name">{removeHyphensAndCapitalize(name)}</div>
          <div class="project-name">
            <a
              href={link}
              className="project-category text-faded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
          <a
            href={repo}
            className="project-category text-faded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <div class="project-category text-white-50">{description}</div>
        </div>
      </a>
    </div>
  );
}
export default Gallery;
