import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import ProfileImg from "../assets/img/portfolio/profile.jpeg";
// import Skills from "../containers/skills/Skills";

const googleDrive = {
  icon: "fas fa-file-download",
  label: "drive",
  url: "https://drive.google.com/file/d/1huIagVGZsjnd2MZfS6By_fo7CNxyPCEN/view?usp=sharing", // Updated to match your latest resume link
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
                className="rounded-circle mt-5"
                src={ProfileImg}
                alt="Profile avatar"
              />
              <p className="text-white-75 mb-5">
                I'm a Multidisciplinary Engineer and Full Stack Developer holding a B.S. in Mechanical Engineering and currently pursuing dual B.S. degrees in Electrical & Computer Engineering and Computer Science at UMKC. I combine hardware logic, process automation, and software development to build solutions that positively impact people's lives. As a volunteer Full Stack developer with Harvard in Tech, I actively contribute to the developer community, alongside offering tailored technical freelance solutions.
              </p>

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