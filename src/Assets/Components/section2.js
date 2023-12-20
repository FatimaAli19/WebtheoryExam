import React from 'react';
import ic1 from '../images/Group 149.png';
import ic2 from '../images/Group 155.png';
import ic3 from '../images/Mask group (1).png';
import ic4 from '../images/Mask group (2).png';
import ic5 from '../images/Mask group (4).png';
import ic6 from '../images/Group 150.png';

import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import web3Image from '../images/Group 169 (1).png';

function Web3Section() {
  const sectionStyle = { 
    background: '#f8f9fa', // Adjust the background color as needed
  };

  const textContainerStyle = {
    textAlign: 'left',
  };

  const headingStyle = {
    fontSize: '2.5rem', // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const imageContainerStyle = {
    textAlign: 'right',
  };

  const imageStyle = {
    maxWidth: '100%', // Ensure the image doesn't exceed its container width
    maxHeight: '400px', // Adjust the max height as needed
  };

  const buttonStyle = {
    backgroundColor: '#6F348E', // Button background color
    color: '#ffffff', // Text color
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <Container style={sectionStyle}>
      <Navbar expand="lg" variant="dark">
        <Container>
           
          <Navbar.Collapse id="navbar-nav">
            <Nav >
            <Nav.Link href="#home"><img src={ic6} alt='logo'></img></Nav.Link>
              <Nav.Link href="#home"><img src={ic1} alt='logo'></img></Nav.Link>
              <Nav.Link href="#features"><img src={ic2} alt='logo'></img></Nav.Link>
              <Nav.Link href="#about"><img src={ic3} alt='logo'></img></Nav.Link>
              <Nav.Link href="#contact"><img src={ic4} alt='logo'></img></Nav.Link>
              <Nav.Link href="#contact"><img src={ic5} alt='logo'></img></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row>
        {/* Left Column with Text */}
        <Col md={6} style={textContainerStyle}>
          <h2 style={headingStyle}>Create Your Own Web3 Masterpiece</h2>
          <p>
            Most entrepreneurs want to create their own web3 sites, unfortunately, they don't know much about creating one.
            Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving
            their favorite creation tools and by simple drag and drop functionality.
          </p>
          <Button style={buttonStyle}>Start building</Button>
        </Col>

        {/* Right Column with Image */}
        <Col md={6} style={imageContainerStyle}>
          <img src={web3Image} className='bg-dark' alt="Web3 Masterpiece" style={imageStyle} />
        </Col>
      </Row>
    </Container>
  );
}

export default Web3Section;
