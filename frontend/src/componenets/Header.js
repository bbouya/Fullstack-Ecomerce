import React from 'react'
import {Container,Nav, Row, Col, Navbar} from 'react-bootstrap'

export default function  Header() {
  return (

      <header>
        
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Prpaganda</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                <Nav.Link href="/features"><i className='fas fa-user'></i>Login</Nav.Link>
                
            </Nav>
            </Container>
        </Navbar>
        
      </header>

  )
}
