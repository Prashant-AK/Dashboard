import React from 'react'
import {Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import Styles from './Navigation.module.css'
import { useNavigate } from 'react-router-dom';
const Navigation = (props) => {

  const navigate = useNavigate();
  return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={Styles.customNav}>
  <Container>
  <Navbar.Brand href="#home">Insane Dashboard </Navbar.Brand>
  {props.dashboard 
  ?
  <>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link eventKey={2} href="#profile">Profile</Nav.Link>
      <Nav.Link eventKey={3} href="#" onClick={() => navigate('events')}>Events</Nav.Link>
    </Nav>
  </Navbar.Collapse> 
  </>
  :
  <></>} 
  </Container>
</Navbar>
<hr/>
</>
  )
}

export default Navigation