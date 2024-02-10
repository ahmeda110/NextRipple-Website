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
        <div className="header-container" style={{ position: 'relative' }}>
  <img src='./img/mental_icon.png' alt='icon' className='icon' />
  <h1 style={{ color: 'white', fontSize: '1em', position: 'absolute', left: '30%', top: '40%', transform: 'translate(-50%, -50%)', zIndex: '1', margin: '0' }}>Mental Resilience</h1>
  <img src='./img/divider.png' alt='divider' className='divider' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '0' }} />
</div>
        <div className="header-container" style={{ position: 'relative' }}>
  <img src='./img/mental_icon.png' alt='icon' className='icon' />
  <h1 style={{ color: 'white', fontSize: '1em', position: 'absolute', left: '30%', top: '40%', transform: 'translate(-50%, -50%)', zIndex: '1', margin: '0' }}>Mental Resilience</h1>
  <img src='./img/divider.png' alt='divider' className='divider' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '0' }} />
</div>
<div className="header-container" style={{ position: 'relative' }}>
  <img src='./img/mental_icon.png' alt='icon' className='icon' />
  <h1 style={{ color: 'white', fontSize: '1em', position: 'absolute', left: '30%', top: '40%', transform: 'translate(-50%, -50%)', zIndex: '1', margin: '0' }}>Mental Resilience</h1>
  <img src='./img/divider.png' alt='divider' className='divider' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '0' }} />
</div>
        </Col>

    </Row>
    </Container>
    </div>
  )
}
