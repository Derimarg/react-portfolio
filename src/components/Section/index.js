import React from "react";
import SectionContent from "../SectionContent";
import About from "../About";

function Section({ currentSection }) {
  
  const displaySection = () => {
    switch (currentSection.link) {
      case "about me":
        return <About />;
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
