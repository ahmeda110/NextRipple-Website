import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  
  return (
    <Container>
        <Row>
            <Col>
            <div className='home-intro'>
            <h2>
            Next Ripple
            </h2>
            <h1>
                Elevating Lives
            </h1>
            <p style={{color:'grey'}}>
                Your gateway to Mental Resilience, Physical Wellness, and Global Exploration. The ripple of change starts with you.
            </p>
            </div>
            
                </Col>
            <Col>HOme</Col>
        </Row>
    </Container>
  )
}
