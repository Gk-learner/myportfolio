import React, { useState, useEffect } from "react";
import image from "./assets/lkdnImage.jpg"
import "./home.scss"
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Col, Container, Navbar, Row } from "react-bootstrap";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
    const [letterClass, setLetterClass ] =  useState('text-animate')
    const nameArray = "agandeep".split("")
    const jobArray = "Frontend Developer".split("")
    const resumeURL = 'https://github.com/Gk-learner';
  const handleDownload = () => {
    
    window.open(resumeURL);
  };
    const timer = ()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
         }, 4000);
    }
    
    useEffect(() => {
     return timer
    },[])
 
  return (
    
     <Container className="container pt-5" fluid id="home">
     <div id="stars"></div>
     <div id="stars2"></div>
     <div id="stars3"></div>              
        <Row md={12} sm={12} className=" d-flex mt-5">
            <Col sm={4} md={4} xl={4} lg={4} className="mobImgDiv mt-5">
                <Image className="img-responsive position-relative" src={image} alt="Hero-img" rounded-3xl 
             style={{ height: "auto",
             }} />
             
            </Col>
            <Col sm={8} md={6} xl={4} className="p-0">
            <Card className="card1" style = {{ color:"yellow" }}>
                <Card.Body className="mt-5">
                
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I'</span>
                        <span className={`${letterClass} _14`}>m &nbsp;</span>
                            <span className= {`${letterClass} _15`}
                            style={{textShadow: "rgb(181 208 201) 2px 2px 4px", fontSize: "50",margin:" 0"}}>
                                G
                            </span>
                        {/* </a> */}
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/><br></br>
                     <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={18}/>
                    </h1>
                </Card.Body>
            </Card>
            <Button timeout={1200} className="subscribe-button mt-5 text-center" 
                onClick={handleDownload}>View My Github Profile</Button>
            </Col>
            <Col xl={4} md={2} sm={2} className="d-none d-sm-none d-lg-block d-md-block d-xl-block" style={{borderRight: "1px solid #fff",borderBottom: "1px solid #fff"}}></Col>
        </Row>
        
    </Container>
       
  )
}
export default Home;