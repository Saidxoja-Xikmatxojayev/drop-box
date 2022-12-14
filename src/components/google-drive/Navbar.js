import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm" className="d-flex justify-content-between">
      <Navbar.Brand as={Link} to="/">
        Dropbox
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" className="">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
