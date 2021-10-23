import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Gallery({ project }) {
  const { id, name, filter, description, link, repo } = project;

  return (

    <div className={`col-lg-4 col-md-6 portfolio-item filter-${filter}`}>
      <div className="portfolio-wrap shadow-lg p-3 mb-5 bg-white" key={id}>
        <img
          src={require(`../../assets/img/portfolio/${name}.jpg`).default}
          className="img-fluid"
          alt={removeHyphensAndCapitalize(name)}
        />
        <div className="portfolio-info p-info">
          <h4>{removeHyphensAndCapitalize(name)}</h4>
          <p>{description}</p>
          <div className="portfolio-links">
            <a
              href={repo}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title="Repository Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={link}
              className="portfolio-details-lightbox"
              data-glightbox="type: external"
              title="View Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
