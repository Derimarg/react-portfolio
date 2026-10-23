import React from "react";
import { removeHyphensAndCapitalize } from "../utils/helpers";

function Gallery({ project }) {
  const {
    id,
    name,
    filter,
    description,
    repo,
    link,
  } = project;

  // Safe image loader helper
  const getImageSource = (imageName) => {
    try {
      return require(`../assets/img/portfolio/${imageName}.jpg`);
    } catch (err) {
      // Fallback placeholder or default image if specific asset is missing
      return require(`../assets/img/portfolio/profile.jpeg`); 
    }
  };

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-${filter}`}>
      <div className="portfolio-wrap shadow-lg mb-5 bg-white rounded overflow-hidden" key={id}>
        <img
          src={getImageSource(name)}
          className="img-fluid w-100"
          style={{ height: "320px", objectFit: "cover" }}
          alt={removeHyphensAndCapitalize(name)}
        />
        <div className="portfolio-info p-4">
          <h4 className="font-weight-bold text-dark mb-2">
            {removeHyphensAndCapitalize(name)}
          </h4>
          <p className="text-muted small mb-3">{description}</p>
          <div className="portfolio-links d-flex justify-content-start gap-3">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-dark mr-3"
                title="Repository Link"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-dark"
                title="View Demo"
              >
                <i className="fas fa-external-link-alt fa-lg"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;