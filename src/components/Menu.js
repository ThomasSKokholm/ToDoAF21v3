import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// NavDropdown

class Menu extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="m">
        <Container>
          <img src="logo.jpg" alt="logo" width="40" height="40"
               className="d-inline-block align-top"/>
          <Navbar.Brand href="#home">ToDoAF21v3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Hjem</Nav.Link>
              <Nav.Link href="/login">Log ind</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Menu;
