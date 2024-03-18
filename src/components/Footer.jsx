import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./FooterC.css"

const Footer = () => {
  return (
    <footer className="footer-custom py-4" style={{ marginTop: '30px' }}>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} className="mb-3 mb-md-0 text-md-center">
            <div className='text-center col-lg-3 col-md-3 col-sm-10'>
              <img
                src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png"
                alt="Web Logo"
                width="30"
                height="60"
                className="d-inline-block"
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-2 justify-content-center">
          <Col xs={12} md={6} className="text-center text-md-center">
            <div className='d-flex flex-column align-items-center align-items-md-start'>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="https://www.facebook.com/RollingCodeSchool/"><FaFacebook /></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/rollingcodeschool/"><FaInstagram /></a></li>
              </ul>
              <p>Tienda oficial de ropa GymShark, Tucuman, Argentina</p>
              
              <img
                src="https://www.ocu.org/-/media/ta/images/_%20orphaned/qr-code.png?rev=2e1cc496-40d9-4e21-a7fb-9e2c76d6a288&hash=38DA21F2DF33F4BB3CE83BE5D2A723F5&mw=960"
                alt="Data Fiscal"
                style={{ maxWidth: '200px', height: 'auto' }}
                width={200}
              />
        
            </div>
          </Col>
        </Row>

        <Row className="mt-2 justify-content-center">
          <Col>
            <p className="text-center" style={{ fontSize: '15px' }}>© {new Date().getFullYear()} GymShark Todos Los Derechos Reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
