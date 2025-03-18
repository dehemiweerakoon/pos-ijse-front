/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.css';
import { Col, Container, Image } from 'react-bootstrap';
import img from '../../assests/login.jpg';
import { Card, Button, Row } from 'react-bootstrap';
import salesanalysis from '../..//assests/salesanalysis.png'
import inventory from '../../assests/inventory.png';
import insights from '../../assests/analystics.png'
const Home = () => {
  return (
    <>
      <Container className='bg-light rounded'> 
        <Row>
          <Col xs={12} md={7} className="mt-5 mb-5">
            <Image src={img} className="home-demo img-fluid" />
          </Col>
          <Col xs={12} md={5} className="d-flex align-items-center justify-content-center">
            <div>
              <h2>SuperMarket Daily</h2>
              <h2>Fresh Grocery</h2>
              <p style={{ textAlign: "justify" }} className="mt-3">
                Our system simplifies sales, inventory management, and customer transactions in one platform.
              </p>
              <Button variant="secondary" className="mt-4 p-2 px-5">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
      
          <Row className="mt-5 mx-5 d-flex justify-content-center">
          <Col xs={12} md={3} className="mb-4">
            <Card>
              <Image src={inventory} className="card-img-top"  />
              <Card.Body>
                <Card.Title>Track Your Inventory</Card.Title>
                <Card.Text>
                  Manage and keep track of your inventory seamlessly with real-time updates.
                </Card.Text>
                <Button variant="info">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <Card>
              <Image src={insights} className="card-img-top" />
              <Card.Body>
                <Card.Title>Customer Insights</Card.Title>
                <Card.Text>
                  Get valuable insights about customer transactions and buying patterns and Get summary.
                </Card.Text>
                <Button variant="info">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <Card>
              <Image src={salesanalysis} className="card-img-top" />
              <Card.Body>
                <Card.Title>Sales Analytics</Card.Title>
                <Card.Text>
                  Sales Analytics is a comprehensive tool that helps you track your sales performance.
                </Card.Text>
                <Button variant="info">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
