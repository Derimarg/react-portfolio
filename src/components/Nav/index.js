import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import { Container, Row, Col} from 'reactstrap';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";

function Nav() {
  // const { links = [], setCurrentSection, currentSection } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentSection.link);
  // }, [currentSection]);

  return (
    // <nav
    //   className="navbar navbar-expand-lg navbar-light fixed-top py-3"
    //   id="mainNav"
    // >
    //   <div className="container px-4 px-lg-5">
    //     <a className="navbar-brand" href="#page-top">
    //       Derimar Gray
    //     </a>
    //     <button
    //       className="navbar-toggler navbar-toggler-right"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       <ul className="navbar-nav ms-auto my-2 my-lg-0">
    //         {links.map((Section) => (
    //           <li className="nav-item" key={Section.link}>
    //             <a
    //               className={`nav-link ${
    //                 currentSection.link === Section.link && "active"
    //               }`}
    //               href="#about"
    //               key={Section.link}
    //               onClick={() => setCurrentSection(Section)}
    //             >
    //               {capitalizeFirstLetter(Section.link)}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#page-top">Derimar gray</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarResponsive" />
    //     <Navbar.Collapse id="navbarResponsive">
    //       <Nav className="me-auto">
    //         {links.map((Section) => (
    //           <Nav.Link
    //             href="#about"
    //             key={Section.link}
    //             onClick={() => setCurrentSection(Section)}
    //           >
    //             {capitalizeFirstLetter(Section.link)}
    //           </Nav.Link>
    //         ))}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    //         </Navbar>
    // );
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
