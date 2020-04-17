import { Fragment } from "react";
import { Navbar, Nav, OverlayTrigger } from "react-bootstrap";
import Filter from "./Filter";
import About from "./About";
import CreatePost from "./CreatePost";

export default function NavComponent() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Navbar.Brand href="#home">COVID-19 Barter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <CreatePost />
            <Filter />
            <Nav.Link href="#deets">
              <i className="fa fa-sign-in" aria-hidden="true"></i>{" "}
              <span>Sign In</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
              <span>Sign Up</span>
            </Nav.Link>

            <About />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}