import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBarComp() {
  return (
    <Navbar expand="md" className="bg-body-tertiary ">
      <Container >
        <Navbar.Brand as={Link} to='/' >Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='categoria/notebook' >Notebook</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='categoria/insumos' >Insumos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='categoria/pc' >Pc</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <CartWidget />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;