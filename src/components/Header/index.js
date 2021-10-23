import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import Nav from "../Nav";


function Header() {
  return (
    <Router>
        <Nav/>
      <Switch>
        <Route exact path={['/react-portfolio/', '/']} component={About}>
        </Route>
        <Route exact path={['/', '/about']} component={About}>
        </Route>
        <Route exact path="/about" component={About}>
        </Route>
        <Route path="/portfolio" component={Portfolio}>
        </Route>
        <Route path="/contact" component={Contact}>
        </Route>
        <Route path="/resume" component={Resume}>
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
