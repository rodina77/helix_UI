import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav_bar.css'
function Nav_bar() {
  return (
    <div className='nav'>
    <Navbar className='nav_bar' expand="lg">
      <Container className='nav_container'>
        <Navbar.Brand className='nav_brand' href="#home">
        <img src={"/assets/images/logo-template-design_1142-425-removebg-preview.png"} width={"85px"} height={"55px"} alt="" />
          Double helix
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='center_nav' className="me-auto">
            <p id='p_nav'>Home</p>
            <p id='p_nav'>About</p>
            <p id='p_nav'>Our Cases</p>
            <p className='p_nav'>Features</p>
            <p >Core value</p>
            <p className='p_nav'>vission</p>
            <p className='p_nav'>our labs</p>
            <p className='p_nav'>contact us</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Nav_bar;