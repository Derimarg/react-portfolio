import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  const [links] = useState([{ link: "about me" }]);

  const [currentSection, setCurrentSection] = useState(links[0]);
  return (
    <div id="page-top">
      <Header>
        <Nav
          links={links}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        ></Nav>
      </Header>

      <main>
        <Section currentSection={currentSection}></Section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
