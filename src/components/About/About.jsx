import React, { useState, useEffect } from "react";
import "./about.scss"
import Collapse from '@material-ui/core/Collapse';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";
import { Element } from 'react-scroll';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useInView } from 'react-intersection-observer';


const About = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true, // This triggers the animation only once
  });


  useEffect(()=>{
    setTimeout(()=>{
      setIsOpened(true)
    },500)
    
  },[])
  return (
    <>
     <Collapse in={isOpened} timeout={1200}>
    <div  ref={ref} className={`animContainer ${inView ? 'visible' : ''}`}>
    <Container ref={ref}  fluid className={`animContainer ${inView ? 'visible' : ''}`} id="about">
      <Row>
      <h1 className="text-center text-light">A little bit about me</h1>

        <Col sm={6} xl={6} className="mobColLeft mx-auto col-6 mt-3" >
       
        <Card className="mt-5 text-center p-1 aboutCard">
                <Card.Body>
                <Card.Text>
                I am a Frontend developer specialises in developing complex web apps. Things I am excited about lately is learning new technologies.
                    I am a recent graduate from Making Changes Association.A learner, doer embracing new technologies and finding inspiration in the tech wold. My skills set includes
               <mark>Javascript,HTML5,CSS3,Git, libraries like React, bootstrap and frameworks like Vue</mark> . With a background in web development spanning over 4 years, I've had the privilege
                of working on a diverse range of projects, from e-commerce websites to interactive and eye catching web applications.
               
                </Card.Text>
                </Card.Body>
            </Card>
     
          
        </Col>
        <Col sm={6} xl={6} className="mobColRight col-6">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faVuejs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
      </div>
        </Col>
      </Row>
    
    </Container>
    
    </div>
    </Collapse>

   
    {/* <Skills/> */}
    </>    
  )
}
export default  About