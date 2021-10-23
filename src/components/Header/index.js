import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import Nav from "../Nav";

function Header() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
        <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
