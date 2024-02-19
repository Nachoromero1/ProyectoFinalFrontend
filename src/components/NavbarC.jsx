import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaQuestionCircle } from 'react-icons/fa';
import RegisterPage from '../pages/RegisterPage';

const NavBar = () => {
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
          <img src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png" alt="Logo" width="25px" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#carrito">
            <FaShoppingCart />  <Badge bg="secondary">5</Badge>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#ayuda">
            <FaQuestionCircle />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#favoritos">
            <FaHeart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
