import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function SiteNavbar({ onNavigate }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>
          Tarea 1 - Cursos
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Inicio</Nav.Link>
            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onNavigate('cursos') }}>Cursos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
