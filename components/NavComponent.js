import { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Filter from "./Filter";

export default function NavComponent() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Navbar.Brand href="#home">COVID-19 Barter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">
              <i class="fa fa-sign-in" aria-hidden="true"></i> <span>Sign In</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <i class="fa fa-user-plus" aria-hidden="true"></i> <span>Sign Up</span>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes">
              <i class="fa fa-user-plus" aria-hidden="true"></i> <span>About</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Filter />
    </Fragment>
  );
}
