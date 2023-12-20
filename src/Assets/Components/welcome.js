import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import firstImage from '../images/Group 84.png';
import secondImage from '../images/Mockup.png';

function TwoImagesComponent() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6} className="mb-3">
          <img src={firstImage} alt="First  " className="img-fluid w-100" style={{ height: 'auto' }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mb-3">
          <img src={secondImage} alt="Second  " className="img-fluid w-100" style={{ height: 'auto' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default TwoImagesComponent;
