import React, { useState } from "react";
import ProjectsData from "../ProjectsData";
import Carousel from "react-bootstrap/Carousel";

function CarouselRender() {
  const [projects] = useState(ProjectsData);

  return (
    <div style={{ display: "block", width: 700, padding: 0 }} className="shadow-lg">
      <Carousel variant="dark">
        {projects.map((project) => (
          <Carousel.Item interval={3500} key={project.id}>
            <img
              className="d-block w-100"
              src={require(`../../assets/img/portfolio/${project.name}.jpg`).default}
              alt="One"
            />
            <Carousel.Caption>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselRender;
