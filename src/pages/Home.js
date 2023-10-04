import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import ProfileImg from "../assets/img/portfolio/profile.jpeg";
// import Skills from "../containers/skills/Skills";

const googleDrive = {
  icon: "fas fa-file-download",
  label: "drive",
  url: "https://drive.google.com/uc?id=1xCnXczYrhN7538txiKxo0TFEhg9o-ntU&export=download",
};

function Home() {
  const [links] = useState([
    {
      link: "about me",
    },
  ]);


  const [currentSection] = useState(links[0]);


  return (
    <>
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
                I'm a dedicated Full Stack Developer who invests most of my time coding on a diverse range of projects. My enthusiasm lies in not only sharing knowledge but also in the perpetual growth of my own skill set. As a volunteer Full Stack developer with Harvard in Tech, I actively contribute to the community, extending my support and dedicating my time to create a positive impact in the developer community. In addition to my volunteer work, I also offer Tech Solutions freelance services, providing tailored solutions to meet various technological needs.
              </p>
              <p className="text-white-75 mb-5">Get in touch via email: derimargray@gmail.com</p>
              <a
                className="btn btn-secondary btn-xl"
                href={googleDrive.url}
                key={googleDrive.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={googleDrive.icon} style={{ fontSize: 20 }}></i>
                <span style={{ fontSize: 18, marginLeft: 15 }}>Download resume</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Home;
