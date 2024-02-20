import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <img
              src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png"
              alt="Web Logo"
              width="30"
              height="60"
              className="d-inline-block align-top"
            />{' '}

          </Col>
          <Col xs={6} md={3}>
            <ul className="list-unstyled">
              <li><a href="#home">Link 1</a></li>
              <li><a href="#about">Link 2</a></li>
              <li><a href="#services">Link 3</a></li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className="list-unstyled">
              <li><a href="#contact">Link 4</a></li>
              <li><a href="#terms">Link 5</a></li>
              <li><a href="#privacy">Link 6</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="https://facebook.com"><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="https://twitter.com"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="https://instagram.com"><FaInstagram /></a></li>
            </ul>
          </Col>
          <img
  src="https://i0.wp.com/1.bp.blogspot.com/-tyDj3FH73V0/UVugtbI_MYI/AAAAAAAAGYE/TzM5UBA57QQ/s1600/Data-fiscal-Web.jpg"
  alt="Data Fiscal"
  style={{ maxWidth: '100px', height: 'auto' }}
  className="d-inline-block align-top"
/>{' '}


        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">© {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
