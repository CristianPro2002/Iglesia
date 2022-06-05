import Navbar from 'react-bootstrap/Navbar'
import {React, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './Header.css'
const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark" className='Nabv'>
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
