import React from 'react'
import {Container,Nav, Row, Col, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
export default function  Header() {
  return (

      <header>
        
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                     <Navbar.Brand>Prpaganda</Navbar.Brand>
                </LinkContainer>
            <Nav className="mr-auto">
            <LinkContainer to="/cart">
                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Link href="/features"><i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>
                
            </Nav>
            </Container>
        </Navbar>
        
      </header>

  )
}
