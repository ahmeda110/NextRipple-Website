import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export const Home = () => {
  return (
    <div>
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
            <Col>
            <img src='./img/NR_rocket.png' alt='rocket image' className='rocket'></img>
            </Col>
        </Row>
    </Container>
    <Container fluid className='home-2'>
    <Row>
        <Col style={{paddingLeft: '5%'}}>
        <img src='./img/home-2.png' alt='home-2' className='section-2'></img>
        </Col>
        <Col className='text-2'>
        <h1 style={{color: 'white'}}>Find The <span style={{color: '#FFAE71'}}>Right Path</span> With Us</h1>
        </Col>
    </Row>
    </Container>
    </div>
  )
}
