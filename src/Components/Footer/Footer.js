import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Card className="mt-5 bg-body-secondary text-black">
      <Card.Body>
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-3">
              <h5 className="fw-bold">EZPOS</h5>
              <p className="text-muted">
                Shop the best deals at <b>EZPOS!</b> Quality products, secure payments, and fast delivery—all in one place.
              </p>
            </Col>

            <Col md={4} className="mb-3">
              <h5 className="fw-bold">Follow Us</h5>
              <div className="d-flex justify-content-center gap-3">
                <Link to="https://www.youtube.com/@ijsecampus" className="text-white fs-4">
                  <FaYoutube className="text-danger" />
                </Link>
                <Link to="https://www.facebook.com" className="text-white fs-4">
                  <FaFacebook className="text-primary" />
                </Link>
                <Link to="https://www.instagram.com" className="text-white fs-4">
                  <FaInstagram className="text-warning" />
                </Link>
                <Link to="https://www.twitter.com" className="text-white fs-4">
                  <FaTwitter className="text-info" />
                </Link>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="text-muted">support@ezpos.com</p>
              <p className="text-muted">+94 123 456 789</p>
            </Col>
          </Row>
        </Container>

        <hr className="border-secondary" />
        <p className="text-center text-muted mb-0">&copy; {new Date().getFullYear()} EZPOS. All rights reserved.</p>
      </Card.Body>
    </Card>
  );
};

export default Footer;
