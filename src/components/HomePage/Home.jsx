import React, { useState, useEffect } from "react";
import image from "./assets/my-image2.jpg"
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
    const resumeURL = 'https://jade-addie-31.tiiny.site';
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
    <>
     <Container className="container pt-5" fluid id="home">
     <div id="stars"></div>
     <div id="stars2"></div>
     <div id="stars3"></div>              
        <Row md={12} sm={12} className=" d-flex mt-5">
            <Col sm={4} md={4} xl={4} lg={4} className="mobImgDiv mt-5">
                <Image className="img-responsive position-relative" src={image} alt="Hero-img" rounded 
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
                onClick={handleDownload}>View My Resume</Button>
            </Col>
            <Col xl={4} md={2} sm={2} className="d-none d-sm-none d-lg-block d-md-block d-xl-block" style={{borderRight: "1px solid #fff",borderBottom: "1px solid #fff"}}></Col>
        </Row>
        
    </Container>
       
    
    {/* <About/>  */}
    </>
   
//     <div className="container" >
//   <div className="row  mb-5"> 
//     <nav className="col-sm-5">
//       <img src={image} 
//          width="400px" height="400px" className="img-responsive"
//           alt="my-image" />
//     </nav>
//     <div id="section" style={{fontSize:"24px"}} className="col-sm-7 col-5 text-left font-weight-bold mt-5">
//         <h1 className="m-5">Gagandeep Kour</h1>  I am a Frontend developer specialises in developing complex web apps. Things I am excited about lately is learning new technologies.
//         I am a recent graduate from Making Changes Association.
//     {/* <button className="connect-button text-info">Let's  Connect </button> */}
//     {/* <button className="download-button">Download Resume </button> */}
//     <div className="button-wrapper d-flex" style={{marginTop:"100px"}}>
//   <button className="subscribe-button" type="submit" onClick={handleDownload}>Download Resume</button>
//   {/* <button className="connect-button text-info">Let's  Connect </button> */}
// </div>

      
//       <div id="section2"> 
       
      
//     </div>
//   </div>
   
// </div>
// <About/> 
//     {/* //  <div class="p-5 container-fluid bg-light">
//     //         <div class="row d-flex bg-info">
//     //             <div class="col-3 img-fluid">
//     //                 <img src={image}  */}
//     {/* //                 width="500px" height="500px" alt="my-image" /> */}
//                          </div>
    //             <div class="intro col-3 p-4">
    //               <h1>About Me</h1>
    //                 Hello, My name is <h2>Gagandeep Kour</h2>
    //                 <p>I am a full stack developer specialises in developing complex web apps. I have 4 years of experience working in developing 
    //                     website and landing pages for a payment based company. Things I am excited about lately is learning new technologies.
    //                 </p>
    //             </div>
    //         </div>
            /* <div class="skills row text-center d-flex justify-content-center p-2">
                <h2>Skills Overview</h2>
                <p>I have more than 4 years of experience in Software Development.<br />My technical skills includes but not limited to                 
                    <div class="col-4 px-0">
                        <ul>
                            <li>
                                <h4>Frontend</h4>
                                <ul>
                                    <li>Html5/CSS3/SASS/LESS</li>
                                    <li>Javascript</li>
                                    <li>jQuery/Bootstrap</li>
                                    <li>React/Redux/Vue</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="col-4 px-0">
                        <ul>
                            <h4>Backend</h4> 
                            <ul>
                                <li>Python</li>
                                <li>MySql</li>
                                <li>c#/.Net</li>
                            </ul>
                       </ul>
                    </div>
                </p>
            </div>
            <div class="row">
                <div class="col text-center">
                    <a href="https://twitter.com/">
                        <img src=".\twitter-logo.png"
                         height="20px" width="30px" alt="twitter" />
                    </a>
                    <a href="https://linkedin.com/in/gagandeep-kour" >
                        <img src=".\linkedin.jpeg" 
                        height="20px" width="40px" alt="linkedin" />
                    </a>
                    <a href="https://facebook.com" >
                        <img src=".\facebook.jpeg" 
                        height="20px" width="30px" alt="facebook" />
                    </a>
                </div>
            </div> */
    //     </div>
//   );
  )
}
export default Home;