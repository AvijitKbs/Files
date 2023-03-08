import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Products = () => {
    const [products, setProducts] = useState([])
  axios.get("https://fakestoreapi.com/products")
  .then((response)=>setProducts(response.data))
  return (
    <div>
    <Container>
      <Row>
        {
            products.map((ele)=>
                <Col xs={3} style={{margin:"10px"}}>
                <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ele.image}/>
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>
                  {ele.description}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
                </Col>
            )
        }


      </Row>

    </Container>

    </div>
  )
}

export default Products