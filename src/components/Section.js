import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import Gallery from "../components/Gallery";
import ProjectsData from "../constans/data";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects] = useState(ProjectsData);

  // Filter categories matching your multidisciplinary profile
  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Software & Web", value: "software" },
    { label: "Electrical & Systems", value: "electrical" },
    { label: "Mechanical & Automation", value: "mechanical" },
  ];

  // Filter projects based on the active tab
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.filter === activeFilter);

  return (
    <section>
      {/* Header Banner */}
      <div className="page-section bg-dark text-white py-5">
        <div className="container px-4 px-lg-5 text-center">
          <h1 className="mt-0 text-white font-weight-bold" data-testid="h1tag">
            {capitalizeFirstLetter("Projects Gallery")}
          </h1>
          <hr className="divider" />
          <p className="text-white-50 mt-2">
            Exploring the intersection of Mechanical Systems, Electrical Engineering, and Software Development.
          </p>
        </div>
      </div>

      {/* Portfolio Filter UI */}
      <div id="portfolio" className="portfolio section-bg py-5">
        <div className="container" data-aos="fade-up">
          
          {/* Category Filter Buttons */}
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mb-5">
              <ul id="portfolio-flters" className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
                {categories.map((cat) => (
                  <li key={cat.value} className="mx-1">
                    <button
                      onClick={() => setActiveFilter(cat.value)}
                      className={`btn ${
                        activeFilter === cat.value
                          ? "btn-secondary text-white font-weight-bold shadow-sm"
                          : "btn-outline-secondary text-dark"
                      } px-4 py-2`}
                      style={{ borderRadius: "30px", transition: "all 0.3s ease" }}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Grid */}
          <div
            className="row portfolio-container g-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Gallery 
                  project={project} 
                  key={project.id || project.title || index} 
                />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted">Projects for this category are coming soon! Check back as I add more lab simulations and hardware-software tools.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;