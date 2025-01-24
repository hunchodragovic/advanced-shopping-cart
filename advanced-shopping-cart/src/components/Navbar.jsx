import React from "react";
import { Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button variant="outline-primary" className=" rounded-circle" >
          <FontAwesomeIcon
            style={{
              width: "3rem",
              height: "2rem",
              transform: "translateY(15px)",
            }}
            icon={faCartShopping}
          />
          <div
            style={{ transform: "translateX(40px) translateY(5px)" }}
            className="rounded-circle bg-danger w-50 text-light"
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
