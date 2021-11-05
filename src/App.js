import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]} >
      <>
        <div theme={themes[theme]} setTheme={setTheme}>
          <Header />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
