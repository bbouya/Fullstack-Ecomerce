import React from 'react'

import {} from 'react-router-dom'
import {Container, Row, Col,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products'
//props.match.params.id
import { useMatch } from "react-router-dom";

function ProducScreen({match}) {
    const matches = useMatch();
    const product = products.find((p) => p._id == matches.params.id);
    
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go BACK</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
        </Row>
    </div>
  )
}

export default ProducScreen
