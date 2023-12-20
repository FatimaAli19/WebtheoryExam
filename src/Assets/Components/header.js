import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import img1 from '../images/Mask group.png';

function Header() {
  return (
    <Navbar expand="lg" className="bghead custom-navbar">
      <Container>
        <Navbar.Brand>
          <img src={img1} alt='Web3Makr Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white">Web3Makr</Nav.Link>
            <Nav.Link className="text-white">White paper</Nav.Link>
            <Nav.Link className="text-white">Services</Nav.Link>
            <Nav.Link className="text-white">Tool</Nav.Link>
            <Nav.Link className="text-white">Contact us</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="mr-2">Start for free</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
