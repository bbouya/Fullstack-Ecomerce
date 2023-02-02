import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import products from '../products.js'

import Product from '../componenets/Product.js';


function HomeScreen() {
  return (
    <div>
      <h1> Latest product </h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product = {product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen
