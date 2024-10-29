/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Home.css'
import { Col, Container, Image } from 'react-bootstrap'
import img from '../../assests/login.jpg'
import { Card,Button ,Row} from 'react-bootstrap'
import img2 from '../../assests/img2.jpg'
const Home = () => {
  return (
   <>
   <Container fluid>
    <Row>
      <Col xs={12} md={7} className='mt-5'>
      <Image src={img} className='home-demo img-fluid'/>
      </Col>
      <Col xs={12} md={5}>
           
          <div className='text-center mt-5 text-start text-md-center text-lg-start'>
              <p></p> 
          </div>
       
        <Card >
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>EZPOS</Card.Title>
              <Card.Text>
              Our POS system simplifies sales, inventory management, and customer transactions in one platform. Featuring seamless integration, real-time analytics, and an easy-to-use interface, it's designed to boost efficiency for retail, restaurants, and service businesses. Experience the future of point-of-sale and support your business growth today!
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
    </Row>
   </Container>
 
   </>
  )
}

export default Home