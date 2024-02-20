import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  
  return (
    <div>
      <Container fluid className="home">
        <Row>
          <Col>
            <div className="home-intro">
              <h2>Next Ripple</h2>
              <h1>Elevating Lives</h1>
              <p style={{ color: "grey" }}>
                Your gateway to Mental Resilience, Physical Wellness, and Global
                Exploration. The ripple of change starts with you. 
              </p>
              <button className="button1">Our Products</button>
            </div>
          </Col>
          <Col>
            <img
              src="./img/NR_rocket.png"
              alt="rocket image"
              className="rocket"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-2">
        <Row>
          <Col style={{ paddingLeft: "5%" }}>
            <img
              src="./img/home-2.png"
              alt="home-2"
              className="section-2"
            ></img>
          </Col>
          <Col>
          <div className="text-2">
            <h1 style={{ color: "white" }}>
              Find The <span style={{ color: "#FFAE71" }}>Right Path</span> With
              Us
            </h1>
            <div className="header-container" style={{ position: "relative" }}>
              <img src="./img/mental_icon.png" alt="icon" className="icon" />
              <h1
                style={{
                  color: "white",
                  fontSize: "1em",
                  position: "absolute",
                  left: "14%",
                  top: "30%",
        
                  zIndex: "1",
                  margin: "0",
                }}
              >
                Mental Resilience
              </h1>
              <img
                src="./img/divider.png"
                alt="divider"
                className="divider"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "0",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  left: "14%",
                  top: "50%",
                  zIndex: "1",
                  margin: "0",
                }}
              >
                Lorem ipsum jalksd;fjlakdsjfl;kdsjfkl;dsadsfdfsjf;slkjdf ;
              </p>
            </div>
            <div className="header-container" style={{ position: "relative" }}>
              <img src="./img/physical_icon.png" alt="icon" className="icon" />
              <h1
                style={{
                  color: "white",
                  fontSize: "1em",
                  position: "absolute",
                  left: "14%",
                  top: "30%",
                  zIndex: "1",
                  margin: "0",
                }}
              >
                Physical Wellness
              </h1>
              <img
                src="./img/divider.png"
                alt="divider"
                className="divider"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "0",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  left: "14%",
                  top: "50%",
                  zIndex: "1",
                  margin: "0",
                }}
              >
                Lorem ipsum jalksd;fjlakdsjfl;kdsjfkl;dsadsfdfsjf;slkjdf ;
              </p>
            </div>
            <div className="header-container" style={{ position: "relative" }}>
              <img src="./img/global_icon.png" alt="icon" className="icon" />
              <h1
                style={{
                  color: "white",
                  fontSize: "1em",
                  position: "absolute",
                  left: "14%",
                  top: "30%",
                  zIndex: "1",
                  margin: "0",
                }}
              >
                Global Exploration
              </h1>
              <img
                src="./img/divider.png"
                alt="divider"
                className="divider"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "0",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  left: "14%",
                  top: "50%",
                  zIndex: "1",
                  margin: "0",
                }}
              >
                Lorem ipsum jalksd;fjlakdsjfl;kdsjfkl;dsadsfdfsjf;slkjdf ;
              </p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="home">
        <Row>
          <Col className="review-1">
            <h2>The ripple of change starts with <span style={{ color: "#645ED9", fontWeight: 900 }}>YOU</span></h2>
            <img src="./img/check.png" alt="check" style={{paddingTop: '15%', paddingBottom: '15%'}}></img>
            <p style={{ color: "grey" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xxl={7}>
          <div style={{position: 'relative', textAlign: 'left'}}>
          <h1 style={{position: 'absolute', left: '50%', top: '15%', fontSize: '2em'}}>Flex Flow</h1>
          <h2 style={{position: 'absolute', left: '55.4%', top: '28%', fontSize: '0.8em', fontWeight: 500}}>Sarah Low - Age 35</h2>
          <img src="./img/review.png" alt="review" className="review"></img>
          <p style={{ color: "grey", position: 'absolute', left: '50%', top: '40%', width: '35%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="button1" style={{position: 'absolute', left: '50%', top: '60%'}}>Our Products</button>
          </div>
      
          </Col>
        </Row>
      </Container>
    </div>
  );
  
};
