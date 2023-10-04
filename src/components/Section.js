import React from "react";
import SectionContent from "../SectionContent";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Section({ currentSection }) {
  const displaySection = () => {
    switch (currentSection.link) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <SectionContent>{displaySection()}</SectionContent>
    </section>
  );
}

export default Section;
