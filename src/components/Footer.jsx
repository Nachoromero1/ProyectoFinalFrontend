import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-1">
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} className="mb-3 mb-md-0 text-md-left">
            
            <div className='text-left col-lg-3 col-md-3 col-sm-12'>
            <img
              src="https://i.pinimg.com/originals/18/41/15/1841153bcf0a942c568d29d3a78e454d.png"
              alt="Web Logo"
              width="30"
              height="60"
              className="d-inline-block text-left"
            />
            </div>
          </Col> 
          <Col xs={6} md={2} className="text-center">
          </Col> 
          <Col xs={6} md={3} className="text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item align-items-right flex-column text-right"><a href="https://www.facebook.com/RollingCodeSchool/"><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/rollingcodeschool/"><FaInstagram /></a></li>
            </ul>
          </Col>  
        </Row>
        
        <div className='d-flex mt-2 mx-auto flex-column text-center text-md-start col-lg-3 col-md-3 col-sm-12'> 
  <a href="/Eror" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Tienda oficial de ropa GymShark, Tucuman, Argentina</a>
</div>

        <Row className="mt-2 justify-content-center"> 
        <div className=' col-md-7 col-sm-12'>          
          <Col xs={6} md={3} className="text-center text-md-start">
            <a href="https://www.linkedin.com/company/rollingcodeschool/?originalSubdomain=ar" target="_blank" rel="noopener noreferrer">
  
              <img
                src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                alt="Descripción de la imagen"
                width="100"
                height="100"
                style={{ marginTop: '50px' }} /* Reducir el margen superior */
                className="align-items-center flex-column text-center"
              />
            </a>
          </Col>
        </div>

          <Col xs={6} md={3} className="text-center text-md-end mt-2 mt-md-0"/>
          <img
  src="https://www.ocu.org/-/media/ta/images/_%20orphaned/qr-code.png?rev=2e1cc496-40d9-4e21-a7fb-9e2c76d6a288&hash=38DA21F2DF33F4BB3CE83BE5D2A723F5&mw=960"
  alt="Data Fiscal"
  style={{ maxWidth: '200px', height: 'auto' }}
  className="text-left"
  width={200}
/>
        </Row>
        <Row className="mt-2">
          <Col>
            <p className="text-center" style={{ fontSize: '15px' }}>© {new Date().getFullYear()} GymShark Todos Los Derechos Reservados</p> 
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
