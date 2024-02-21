import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom"
import logo from'../logo.jpg';
import { PersonFill } from 'react-bootstrap-icons';




function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="bg-body-tertiary" >  
      <Container fluid={true} >
         <Link to="/">
          <Image
            src={logo}
            className="rounded-circle me-5"
            style={{ width: "100px" }}
          />
        </Link>
        
        <Navbar.Brand href="#home"style={{fontSize:"40px",fontFamily: "Helvetica Neue"}} >Amici di Zampa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Login" style={{fontSize:"30px",fontFamily: "Helvetica Neue"}}></Nav.Link>
            
            <Nav.Item className="d-flex align-items-center">
             <div style={{ width: '60px', height: '22px', marginRight: '40px' ,marginBottom:'30px',fontSize:"30px" }}>
                <PersonFill/>
              </div>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container> 
            </Navbar>
            
            
  );
}

export default NavBar;