import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github-alt",
      url: "https://github.com/Derimarg"
    },
    {
      name: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/derimar-gray/"
    },
    {
      name: "fab fa-google",
      url: "mailto:derimargray@gmail.com"
    }
  ];

  return (
    <footer className="footer shadow-lg">
      <div className="container px-4 px-lg-5">
        <div className=" text-center text-muted">
          {icons.map((icon) => (
            <a
              href={icon.url}
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`icons ${icon.name}`}></i>
            </a>
          ))}
        </div>
        <div className="small text-center text-muted">
          &copy; {new Date().getFullYear()} - Derimar Gray
        </div>
        <div className="small text-center text-muted">derimargray@gmail.com</div>
      </div>
    </footer>
  );
}

export default Footer;
