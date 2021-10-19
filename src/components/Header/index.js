import React from "react";

function Header() {
  return (
    // Masthead
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              About me
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
            I'm a Full Stack Web Developer, I Spend most of time coding outstanding projects. I love sharing knowledge and learn, my goal is to help other developers!
            </p>
            <a className="btn btn-primary btn-xl" href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
