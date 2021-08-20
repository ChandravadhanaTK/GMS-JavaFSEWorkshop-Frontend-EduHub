import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">EduHub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/demo/all">Demo</Nav.Link>
          <Nav.Link as={Link} to="/mentor/all">Mentor</Nav.Link>
          <Nav.Link as={Link} to="/course/all">Course</Nav.Link>
          <Nav.Link as={Link} to="/learner">Learner</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}