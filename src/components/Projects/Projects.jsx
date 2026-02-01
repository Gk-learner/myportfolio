import React from "react";
import "./projects.scss";
import Image1 from "./assets/paytmHP.png";
import Image2 from "./assets/SozentechPdf.png";
import Image3 from "./assets/colorConverterApp.png";
import Image4 from "./assets/vue.png";
import Image5 from "./assets/Stepper.png";
import Image6 from "./assets/Pagination.png";
import Image7 from "./assets/speech.png";
import Card from "react-bootstrap/Card";
import { projectsData } from "./data";
import {Col, Container, Row} from "react-bootstrap";

const Projects = () => {
    const ColorConverter = "https://gk-learner.github.io/color-converter/";
    const SozentechPdf =
        "https://firebasestorage.googleapis.com/v0/b/app-cost-estimator-2f21f.appspot.com/o/pdfs%2FEvJvSFBSRiepriJ.pdf?alt=media&token=959b81e2-615a-4af6-a0f0-d07afac5bd06";
    const Ravenous = "https://gk-learner.github.io/Vue3Ravenous/";
    const Stepper = "https://gk-learner.github.io/react-stepper/";
    const Pagination = "https://gk-learner.github.io/react-pagination/";
    const SpeechRecognition = "https://gk-learner.github.io/speech-recognition-app/";

    return (
        <>
            <Container fluid className="py-5" id="projects">
                <Row>
                    <Col className="d-flex w-100">
                        <h1 className="text-center text-light w-50">My Work</h1>
                        <span className="w-50">
                            <hr className="text-right" style={{borderTop: "2px solid #ffffff"}}></hr>
                        </span>
                    </Col>
                     <Col xl={12} className="d-xs-none justify-content-around mx-auto mt-3">
                      
                       <Row className="justify-content-center">
  {projectsData.map((project) => (
    <Col
      key={project.title}
      xl={4}
      lg={4}
      md={6}
      sm={12}
      className="d-flex justify-content-center mt-4"
    >
      <Card className="work-card text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <Card.Img
            variant="top"
            src={project.image}
            alt={project.title}
          />

          <Card.Body>
            <Card.Title className="text-light">
              {project.title}
            </Card.Title>

            <Card.Text className="project-description">
              <ul>
                {project.description.map((desc, index) => (
                  <li key={index}>{desc.point}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </Col>
  ))}
</Row>

                        
                    </Col>

                   
                </Row>
            </Container>
        </>
    );
};
export default Projects;
