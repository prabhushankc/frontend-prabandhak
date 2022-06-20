import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ backgroundColor: "#523c8d" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Prabhandak</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {user && user.result.role ? (
            <NavDropdown
              title={`${user.result.name.split(" ")[0]}(Admin)`}
              id="adminmenu"
            >
              <LinkContainer to="/list/book/room">
                <NavDropdown.Item>Booked Rooms</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/list/contact/us">
                <NavDropdown.Item>Contact List</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          ) : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>{user.result.name}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
