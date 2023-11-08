import React, { useState, useEffect } from "react";
import "./projects.scss"
import Image1 from "./assets/paytmHP.png"
import Image2 from "./assets/SozentechPdf.png"
import Image3 from './assets/colorConverterApp.png'
import { Image } from "react-bootstrap";

// import Collapse from '@materia-ui/core/Collapse';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";


const Projects = (props) => {
const { title, description, image, link } = props;
const [isOpened, setIsOpened] = useState(false)
const project_1_link= "https:firstgames.in"
const ColorConverter = 'https://gk-learner.github.io/color-converter/'
const SozentechPdf = "https://firebasestorage.googleapis.com/v0/b/app-cost-estimator-2f21f.appspot.com/o/pdfs%2FEvJvSFBSRiepriJ.pdf?alt=media&token=959b81e2-615a-4af6-a0f0-d07afac5bd06"

useEffect(()=>{
  setTimeout(()=>{
    setIsOpened(true)
  },500)
  
},[])
  return (
    <>
    <Container fluid className="py-5" id="projects">
      <Row>
        <Col className="d-flex w-100">
          <h1 className="text-center text-light w-50">My Work</h1>
          <span className="w-50">
            <hr className="text-right" style={{borderTop:"2px solid #ffffff"}}>
            </hr>
          </span>
        </Col>
      
        <Col xl={12}  className="d-xs-none mobPro justify-content-around mx-auto mt-3" >
        
             <Card className="work-card mt-5 text-center w-30">
             <a href={project_1_link} target="blank">

            <Card.Img variant="top" src={Image1} />
            <Card.Body>
           <Card.Title className="text-light"> Learning </Card.Title>
            <Card.Text>
          <div style={{visibility: "visible",
                animationDuration: "1.4s",animationName: "slideInUp",width: "100%",
                display: "flex", fontSize:"10px",
                justifyContent: "space-between",flexDirection: "row", flexWrap:"wrap"}}>
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
                <button>Bootstrap</button>
                <button>Jira</button>
                <button>jQuery</button>
            </div>
          </Card.Text>
          </Card.Body>
          </a>
             </Card>

              <Card  className="work-card mt-5 text-center w-30">
          <a href={SozentechPdf} target="blank">
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title className="text-light"> Learning </Card.Title>
          <Card.Text style={{color: "red"}}>
          <div style={{visibility: "visible",
                animationDuration: "1.4s",animationName: "slideInUp",width: "100%",
                display: "flex", fontSize:"10px",
                justifyContent: "space-between",flexDirection: "row", flexWrap:"wrap"}}>
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
                <button>Bootstrap</button>
                <button>Firebase</button>
                <button>Git</button>
                <button>Jira</button>
                <button>Figma</button>
                <button>jQuery</button>
                <button>EmailJs</button>
                <button>PDFMake</button>
            </div>
          </Card.Text></Card.Body></a>
             </Card>

             <Card  className="work-card mt-5 text-center w-30">
          <a href={ColorConverter} target="blank">
        <Card.Img variant="top" src={Image3} />
        <Card.Body>
          <Card.Title className="text-light"> Learning </Card.Title>
          <Card.Text style={{color: "red"}}>
          <div style={{visibility: "visible",
                animationDuration: "1.4s",animationName: "slideInUp",width: "100%",
                display: "flex", fontSize:"10px",
                justifyContent: "space-between",flexDirection: "row", flexWrap:"wrap"}}>
                <button>HTML</button>
                <button>CSS</button>
                <button>Javascript</button>
            </div>
          </Card.Text></Card.Body></a>
             </Card>


        
        </Col>
        <Col sm={12} className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex" >
       
          <a href={project_1_link} target="blank"> <Card className="work-card mt-5 text-center">
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title className="text-light"> Learning </Card.Title>
          <Card.Text>
          <div style={{visibility: "visible",
                animationDuration: "1.4s",animationName: "slideInUp",width: "98%",fontSize:"10px",
                justifyContent: "space-between",flexDirection: "row", flexWrap:"wrap"}}>
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
                <button>Bootstrap</button>
                <button>Jira</button>
                <button>jQuery</button>
            </div>
          </Card.Text></Card.Body>
        </Card></a>
      </Col>
      <Col sm={12} className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex" >
      <a href={SozentechPdf} target="blank"><Card  className="work-card mt-5 text-center">
              <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title className="text-light"> Learning </Card.Title>
          <Card.Text style={{color: "red"}}>
          <div style={{visibility: "visible",
                animationDuration: "1.4s",animationName: "slideInUp",width: "98%", fontSize:"10px",
                justifyContent: "space-between",flexDirection: "row", flexWrap:"wrap"}}>
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
                <button>Bootstrap</button>
                <button>Firebase</button>
                <button>Git</button>
                <button>Jira</button>
                <button>Figma</button>
                <button>jQuery</button>
                <button>EmailJs</button>
                <button>PDFMake</button>
            </div>
          </Card.Text></Card.Body>
        </Card></a>     
     </Col>
      </Row>
    </Container>
    </>    
  )
}
export default Projects;