import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../Imagenes/Logo.png'
import Button from 'react-bootstrap/Button';


function NavbarExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="fixed-top navbg small-navbar" variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/' className="brand-logo">
            <img src={Logo} alt="Logo" className="small-logo-img" />
            <span className="bom-music">BomMusic</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">            
            <Nav className='nav-buttons'>  
                          
              <Button as={Link} to='/PlanesPro' className="planespro" style={{ marginTop: '30px', marginLeft: '5px', marginRight: '50px', padding: '5px 20px', borderRadius: '30px', backgroundColor: '#484746', border: 'none', color: 'white', fontWeight: 'bold' }}>
                Hazte premium
              </Button>
              <Button as={Link} to='/Registro' className="registro" style={{ marginTop: '30px', marginRight: '10px', marginLeft: '5px', padding: '5px 20px', borderRadius: '30px', backgroundColor: '#fc5500', border: 'none', color: 'white', fontWeight: 'bold' }}>
                Registrate
              </Button>
              <Button as={Link} to='/login' className="login" style={{ marginTop: '30px', marginLeft: '5px', marginRight: '-85px', padding: '5px 20px', borderRadius: '30px', backgroundColor: '#484746', border: 'none', color: 'white', fontWeight: 'bold' }}>
                Inicio Sesion
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



export default NavbarExample;



