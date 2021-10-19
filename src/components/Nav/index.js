import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { links = [], setCurrentSection, currentSection } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSection.link);
  }, [currentSection]);

  return (
    // Navigation
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          Derimar Gray
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            {links.map((Section) => (
              <li
                className={`nav-item ${
                  currentSection.link === Section.link && 'active'
                }`}
                key={Section.link}
              >
                <a
                  className="nav-link"
                  href={`#${Section.link}`}
                  onClick={() => setCurrentSection(Section.link)}
                >
                  {capitalizeFirstLetter(Section.link)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
