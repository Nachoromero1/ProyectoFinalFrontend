import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaQuestionCircle } from 'react-icons/fa';
import RegisterPage from '../pages/RegisterPage';

const NavBar = () => {

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div style={{ marginLeft: '20px' }}> {/* Agregar margen a la izquierda */}
          <Navbar.Brand href="/" className="color-nav navbar navbar-expand-lg navbar-light ">
            <img className="navbar-logo" src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png" alt="Logo" width="25px" />
          </Navbar.Brand>
        </div>
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{ fontSize: '18px' }}>Inicio</Nav.Link>
          <Nav.Link href="/about" style={{ fontSize: '18px' }}>Sobre mí</Nav.Link>
          <Nav.Link href="/contact" style={{ fontSize: '18px' }}>Contacto</Nav.Link>
        </Nav>
        <div style={{ marginLeft: 'auto' }}>
          <Nav>
            <Nav.Link href="/" style={{ fontSize: '18px' }}>Iniciar sesión</Nav.Link>
            <Nav.Link href="/register" style={{ fontSize: '18px' }}>Registrarse</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
