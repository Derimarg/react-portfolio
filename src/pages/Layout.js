import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Derimar Gray
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
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
              <li className="nav-item">
                <Link
                  activeClassName="active"
                  // className={`${aboutActive ? "nav-link" : ""} active`}
                  className="nav-link"
                  to="/"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClassName="active"
                  className="nav-link"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;