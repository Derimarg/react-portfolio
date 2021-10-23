import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
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
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <Link
              className="nav-item"
              to="/"
            >
              About me
            </Link>
            <Link
              className="nav-item"
              activeClassName="selected"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="nav-item"
              
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="nav-item"
              activeClassName="navbar__link--active"
              to="/resume"
            >
              Resume
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
