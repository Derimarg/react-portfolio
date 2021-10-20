import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import ProfileImg from "../../assets/img/portfolio/profile.jpeg";

function About() {
  const [links] = useState([
    {
      link: "about me",
    },
  ]);

  const github = [{ label: "github", url: "https://github.com/Derimarg" }];

  const [currentSection] = useState(links[0]);

  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              {capitalizeFirstLetter(currentSection.link)}
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline team-member">
            <img
              className=" rounded-circle mt-5"
              src={ProfileImg}
              alt="Profile avatar"
            />
            <p className="text-white-75 mb-5">
              I'm a Full Stack Web Developer, I Spend most of time coding
              outstanding projects. I love sharing knowledge and learn, my goal
              is to help other developers!
            </p>
            {github.map((github) => (
              <a
                className="btn btn-primary btn-xl"
                href={github.url}
                key={github.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Out More
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
export default About;
