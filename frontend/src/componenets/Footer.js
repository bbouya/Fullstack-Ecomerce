import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <Container className='text-center py-3'>
            <Row>
                <Col>
                    Copyright &copy;  Proshop
                </Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
