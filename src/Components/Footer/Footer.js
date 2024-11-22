import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Card className="mt-5 footer-light bg-primary-subtle">
        <Card.Body>
          <Card.Title>EZPOS</Card.Title>
          <Card.Text className="d-flex justify-content-center">
          Shop the best deals at <b> EZPOS! </b>  Quality products, secure payments, and fast 
          delivery—everything you need, all in one place. Thank you for choosing us!
          </Card.Text>
          <Link
            style={{ textDecoration: "none" }}
            to={"https://www.youtube.com/@ijsecampus"}
          >
            <div className="d-flex p-2 justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-youtube m-2"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
              <h6 className="m-2">subscribe us</h6>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"https://www.youtube.com/@ijsecampus"}
          >
            <div className="d-flex p-2 justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook  m-2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <h6 className="m-2">Follow us</h6>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Footer;
