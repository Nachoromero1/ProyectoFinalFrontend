import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/NavbarC.css'

const NavbarC = () => {
    return (    
<Navbar expand="lg " className="bg-personalizado">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <a className="navbar-brand" href="/">
      <img src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png" alt="Logo" width="25px" />
    </a>
          <Nav className="ms-auto">
            <Nav.Link href="#link">Iniciar Sesion</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  };
  
  export default NavbarC;