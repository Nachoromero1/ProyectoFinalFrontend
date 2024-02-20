import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaQuestionCircle } from 'react-icons/fa';
import RegisterPage from '../pages/RegisterPage';

const NavBar = () => {
  // Simulación de la cantidad de favoritos
  const favoritosCount = 10;

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="">Iniciar sesión</Nav.Link>
          <Nav.Link href="/register">Registrarse</Nav.Link>
        </Nav>
        <Navbar.Brand href="/" className="mx-auto">
        <img className="navbar-logo" src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png" alt="Logo" width="25px" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#carrito">
            <FaShoppingCart />  <Badge bg="secondary">5</Badge>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#favoritos">
            <FaHeart /> {favoritosCount > 0 && <Badge bg="secondary">{favoritosCount}</Badge>}
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#ayuda">
            <FaQuestionCircle />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
