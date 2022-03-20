import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar bg="brown" variant="dark">
        <Link to={""} className="navbar-brand">
          Home
        </Link>
        <Nav className="mr-auto">
          <Link to={"auth"} className="nav-link">
            Add new Book
          </Link>
          <Link to={"search"} className="nav-link">
            Search for books
          </Link>
          <Link to={"list"} className="nav-link">
            View All books
          </Link>
          <Link to={"users"} className="nav-link">
            My Cart
          </Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}
export default NavigationBar;
