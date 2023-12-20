import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import '../styles.css';
import { Link } from 'react-router-dom';
import img from '../icons/material-symbols_home-pin.png';
function Header() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand><Link to={'/'}> <img src={img} alt='logo'/> </Link>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link><Link to={'/About'}> About</Link> </Nav.Link> 
            <Nav.Link>ContactUs</Nav.Link>
            <Nav.Link><Link to={'/About'}> Time Table</Link> </Nav.Link> 
            <Nav.Link><Link to={'/About'}> Live Location</Link> </Nav.Link>  
          </Nav>
          <button className='btn btn-red'>Sign in</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;