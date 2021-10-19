import React from "react";
import SectionContent from "../SectionContent";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";

function Section({ currentSection }) {
  const displaySection = () => {
    switch (currentSection.link) {
      case "about me":
        return <About />;
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
