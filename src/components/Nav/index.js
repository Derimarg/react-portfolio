import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { links = [], setCurrentSection, currentSection } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSection.link);
  }, [currentSection]);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
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
          // aria-expanded="false"
          // aria-label="Toggle navigation"
          aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            {links.map((Section) => (
              <li className="nav-item" key={Section.link}>
                <a
                  className={`nav-link ${
                    currentSection.link === Section.link && "active"
                  }`}
                  href="#about"
                  key={Section.link}
                  onClick={() => setCurrentSection(Section)}
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