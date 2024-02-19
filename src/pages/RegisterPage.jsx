import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CarouselC from '../components/CarouselC';

const RegisterPage = () => {
  const [estado, setEstado] = useState({ user: '', pass: '', rpass: '' });
  
  const urlImageReg = "https://i.ytimg.com/vi/VvcXOos4d-s/maxresdefault.jpg";

  const changeValue = (ev) => {
    const { name, value } = ev.target;
    setEstado({ ...estado, [name]: value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log(estado);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <CarouselC urlImage={urlImageReg} ancho={'35%'} />
        <Form className="ms-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="user"
              value={estado.user}
              onChange={changeValue}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="pass"
              placeholder="Password"
              value={estado.pass}
              onChange={changeValue}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="rpass"
              placeholder="Password"
              value={estado.rpass}
              onChange={changeValue}
            />
          </Form.Group>

          <Button variant="success" type="submit" onClick={(ev) => handleClick(ev)}>
            Registrarse
          </Button>
        </Form>
      </div>
    </>
  );
};

export default RegisterPage;
