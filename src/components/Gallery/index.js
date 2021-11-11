import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Gallery({ project }) {
  const {
    id,
    name,
    filter,
    description,
    technologies,
    demo,
    demoDesc,
    source,
    sourceDesc,
  } = project;

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-${filter}`}>
      <div className="bg-white shadow-lg">
        <div className="portfolio-wrap p-3 mb-0-5 bg-white" key={id}>
          <img
            src={require(`../../assets/img/portfolio/${name}.jpg`).default}
            className="img-fluid"
            alt={removeHyphensAndCapitalize(name)}
          />
          <div className="portfolio-info p-info">
            <div className="portfolio-links">
              <a
                href={source}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Repository Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"><span>{sourceDesc}</span></i>
              </a>
              <a
                href={demo}
                className="portfolio-details-lightbox"
                data-glightbox="type: external"
                title="View Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt">
                  <span>{demoDesc}</span>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="p-1 mb-5 ">
          <div className="portfolio-info p-info">
            <div className="portfolio-links">
              {/* <a
                href={source}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Repository Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github">
                  <span>{sourceDesc}</span>
                </i>
              </a>
              <a
                href={demo}
                className="portfolio-details-lightbox"
                data-glightbox="type: external"
                title="View Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt">
                  <span>{demoDesc}</span>
                </i>
              </a> */}
              <h4>{removeHyphensAndCapitalize(name)}</h4>
              <h6>{technologies}</h6>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
